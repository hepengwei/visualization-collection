import React from "react";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";
interface ModuleTitleProps {
  intlTitle: string;
}

const ModuleTitle = (props: ModuleTitleProps) => {
  const intl = useIntl();
  const { intlTitle } = props;
  return (
    <div className={styles.container}>
      {intl.formatMessage({
        id: intlTitle,
      })}
    </div>
  );
};

export default ModuleTitle;
