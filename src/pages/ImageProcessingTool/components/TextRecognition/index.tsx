/**
 * 图片处理工具-文字识别Tab页
 */
import React, { useRef, useEffect, useMemo, useState } from "react";
import { Button, Select, Input, Spin, message } from "antd";
import { useIntl } from "react-intl";
import { useGlobalContext } from "hooks/useGlobalContext";
import { useTesseract, languages } from './tesseract';
import FileBox from "../FileBox";
import { TabPageProps } from "../../index";
import styles from "../../index.module.scss";

const { TextArea } = Input;

const TextRecognition = (props: TabPageProps) => {
  const { imgInfo, imgDragOver, onDragOver, onDragLeave, onDrop, onClear } =
    props;
  const intl = useIntl();
  const { locale } = useGlobalContext();
  const doing = useRef<boolean>(false);
  const { recognize, isRecognizing } = useTesseract();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [text, setText] = useState<string>('')

  // 点击确定
  const onOk = async () => {
    if (doing.current) {
      message.warning(intl.formatMessage({ id: "common.workHard" }));
      return;
    }
    if (selectedLanguages.length <= 0) {
      message.warning(intl.formatMessage({ id: "page.imageProcessingTool.pleaseSelectPossibleLanguages" }));
      return;
    }
    const { imgUrl } = imgInfo;
    doing.current = true;
    const ret = await recognize(imgUrl, {
      language: selectedLanguages,  // Use English and Arabic
      errorHandler: (err: any) => console.error(err),  // Custom error handler
      tessedit_ocr_engine_mode: 1,  // Use neural net LSTM engine only
      tessedit_pageseg_mode: 1,  // Assume a single uniform block of text
    });
    if (ret?.text) {
      setText(ret.text);
    } else {
      message.warning(intl.formatMessage({ id: "page.imageProcessingTool.noTextWasRecognized" }));
      setText('')
    }
    doing.current = false;
  };

  useEffect(() => {
    setSelectedLanguages([])
    setText('');
  }, [imgInfo]);

  const onSelectChange = (value: string[]) => {
    setSelectedLanguages(value)
  }

  const languagesOptions = useMemo(
    () =>
      Object.keys(languages).map((key) => ({
        label: intl.formatMessage({ id: `languages.${key}` }),
        value: (languages as Record<string, string>)[key],
      })),
    [locale]
  );

  const stylesFn = () => {
    return {
      indicator: {
        color: '#ffffff',
      },
    };
  };

  return (
    <div>
      <FileBox
        imgInfo={imgInfo}
        imgDragOver={imgDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />
      <div className={styles.operationBtns} style={{ alignItems: 'center' }}>
        <div className={styles.left}>
          <span style={{ color: '#333', marginTop: '6px' }}>{intl.formatMessage({ id: "page.imageProcessingTool.possibleLanguages" })}：</span>
          <Select
            mode="multiple"
            allowClear
            showSearch={{ optionFilterProp: 'label' }}
            maxTagTextLength={8}
            maxTagCount={2}
            style={{ width: '400px' }}
            value={selectedLanguages}
            onChange={onSelectChange}
            options={languagesOptions}
          />
          <Button type="primary" className={styles.operationBtn} disabled={isRecognizing} onClick={onOk}>
            {isRecognizing && <Spin style={{ marginRight: '4px' }} styles={stylesFn} size="small" />}
            {intl.formatMessage({
              id: "common.confirm",
            })}
          </Button>
        </div>
        <Button className={styles.right} ghost type="primary" onClick={onClear}>
          {intl.formatMessage({
            id: "common.clear",
          })}
        </Button>
      </div>
      <TextArea rows={12} value={text} style={{ marginTop: '8px' }} />
    </div>
  );
};

export default TextRecognition;
