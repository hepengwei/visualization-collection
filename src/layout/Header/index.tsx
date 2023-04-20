import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { Tooltip, Modal } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import collectionCode from "images/collectionCode.jpeg";
import English from "images/English.svg";
import Chinese from "images/Chinese.svg";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  const intl = useIntl();
  const { locale, setLocale, setHeadHeight } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const onchangeLanguage = () => {
    if (locale === "zh-cn") {
      setLocale("en-us");
    } else {
      setLocale("zh-cn");
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      setHeadHeight(height);
    }
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "common.logoName" })}
      </div>
      <div className={styles.right}>
        <Tooltip
          placement="bottomRight"
          title={intl.formatMessage({ id: "common.reward" })}
        >
          <div
            className={styles.btn}
            onClick={() => {
              setOpen(true);
            }}
          >
            <CoffeeOutlined />
          </div>
        </Tooltip>
        <Tooltip
          placement="bottomRight"
          title={intl.formatMessage({ id: "common.LanguageSwitch" })}
        >
          <div className={styles.btn} onClick={onchangeLanguage}>
            {locale === "zh-cn" ? <Chinese /> : <English />}
          </div>
        </Tooltip>
      </div>
      <Modal
        wrapClassName={styles.rewardModal}
        title={intl.formatMessage({ id: "common.reward" })}
        open={open}
        footer={null}
        maskClosable={false}
        width={320}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <img src={collectionCode} alt="" />
        <p>{intl.formatMessage({ id: "common.reward.tip" })}</p>
      </Modal>
    </div>
  );
};

export default Header;
