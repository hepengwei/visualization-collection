import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface TabItem {
  id: string | number;
  label: ReactNode;
}

interface TabsProps {
  data: TabItem[];
  selectedTabId: any;
  onChange: (tabId: any) => void;
}

const Tabs = (props: TabsProps) => {
  const { data = [], selectedTabId, onChange } = props;
  return (
    <div className={styles.container}>
      {data.map((tab: TabItem) => {
        return (
          <div
            key={tab.id}
            className={`${styles.tabItem} ${
              selectedTabId === tab.id ? styles.actived : ""
            }`}
            onClick={() => {
              onChange && onChange(tab.id);
            }}
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
