/**
 * 图片处理工具-文字识别Tab页
 */
import React, { useRef, useEffect, useMemo, useState } from "react";
import { Button, Select, Input, message } from "antd";
import { useIntl } from "react-intl";
import { useTesseract, languages } from './tesseract';
import FileBox from "../FileBox";
import { TabPageProps } from "../../index";
import styles from "../../index.module.scss";

const { TextArea } = Input;

const TextRecognition = (props: TabPageProps) => {
  const { imgInfo, imgDragOver, onDragOver, onDragLeave, onDrop, onClear } =
    props;
  const intl = useIntl();

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
    setText(ret.text);
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
        label: key,
        value: (languages as Record<string, string>)[key],
      })),
    []
  );

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
            maxTagTextLength={8}
            maxTagCount={2}
            style={{ width: '300px' }}
            value={selectedLanguages}
            onChange={onSelectChange}
            options={languagesOptions}
          />
          <Button type="primary" className={styles.operationBtn} onClick={onOk}>
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
