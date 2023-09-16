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
  className?: string;
}

const Tabs = (props: TabsProps) => {
  const { data = [], selectedTabId, onChange, className } = props;
  return (
    <div className={`${styles.container}${className ? ` ${className}` : ""}`}>
      {data.map((tab: TabItem) => {
        return (
          <div
            key={tab.id}
            className={`tabs-tabItem ${
              selectedTabId === tab.id ? "active" : ""
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
