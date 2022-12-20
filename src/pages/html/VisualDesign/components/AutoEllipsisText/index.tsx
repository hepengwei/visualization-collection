import React from "react";
import EllipsisText from "components/EllipsisText";
import styles from "./index.module.scss";

const EllipsisText1 = () => {
  const text =
    "该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。该组件为可显示自定义行数，超出时显示省略号的文本组件，还支持在最后面出现省略号时显示自定义的文字按钮。";
  return (
    <div className={styles.container}>
      <EllipsisText text={text} style={{ fontSize: "24px" }} />
      <EllipsisText
        text={text}
        lineNum={2}
        style={{ fontSize: "16px", marginTop: "40px" }}
        buttonText="More"
        buttonTextSize={16}
      />
    </div>
  );
};

export default EllipsisText1;
