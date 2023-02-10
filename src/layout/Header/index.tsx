import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { Tooltip } from "antd";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import English from "images/English.svg";
import Chinese from "images/Chinese.svg";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  const intl = useIntl();
  const { locale, setLocale, setHeadHeight } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);

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
          title={intl.formatMessage({ id: "common.LanguageSwitch" })}
        >
          <div className={styles.btn} onClick={onchangeLanguage}>
            {locale === "zh-cn" ? <Chinese /> : <English />}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
