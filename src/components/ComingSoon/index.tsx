import React from "react";
import { useIntl } from "react-intl";

const ComingSoon = () => {
  const intl = useIntl();

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        color: "#ffffff",
        fontSize: "24px",
        fontFamily: "SourceHanSansCN-Medium",
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg, #224141, #162a2a)",
      }}
    >
      {intl.formatMessage({ id: "common.comingSoon.text" })}
    </div>
  );
};

export default ComingSoon;
