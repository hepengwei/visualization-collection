import React from "react";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";
interface ModuleTitleProps {
  intlTitle: string;
  style?: Record<string, any>;
}

const ModuleTitle = (props: ModuleTitleProps) => {
  const intl = useIntl();
  const { intlTitle, style = {} } = props;
  return (
    <div className={styles.container} style={style}>
      {intl.formatMessage({
        id: intlTitle,
      })}
    </div>
  );
};

export default ModuleTitle;
