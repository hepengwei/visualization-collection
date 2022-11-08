import React, { useRef } from "react";
import { Button } from "antd";
import QuickSwitchingText from "components/QuickSwitchingText";
import type { QuickSwitchingTextRef } from "components/QuickSwitchingText";
import styles from "./index.module.less";

const MixBlendMode = () => {
  const quickSwitchingTextRef = useRef<QuickSwitchingTextRef>(null);

  const onceAgain = () => {
    quickSwitchingTextRef.current?.restart();
  };

  return (
    <div className={styles.container}>
      <QuickSwitchingText
        className={styles.content}
        finalText="Hello World"
        textList={[
          "Tikiw Plati",
          "Wkslc Wbxsw",
          "Xsodu Qwoev",
          "Dewcz Gewoe",
          "Rsero Bokrs",
          "Ckoex Jwclb",
          "Tikiw Plati",
          "Wkslc Wbxsw",
          "Xsodu Qwoeb",
          "Dewcz Gewoe",
          "Rsero Bokrs",
          "Ckoex Jwclb",
          "Haiiw Pavis",
          "Hwlle Ykels",
          "Helic Wexiw",
          "Heiik Mkdie",
          "Helju Qvold",
          "Helim Xkvlc",
          "Hellw Gewie",
          "Hellv Rkels",
          "Hello Bokis",
          "Hello Ceoix",
          "Hello Wwclb",
          "Hello Wzrlm",
          "Hello Woaic",
          "Hello Woxlm",
          "Hello Woriw",
          "Hello Woriv",
          "Hello Worlc",
          "Hello Worle",
        ]}
        duration={1900}
        ref={quickSwitchingTextRef}
      />
      <Button type="primary" className={styles.btn} onClick={onceAgain}>
        Once Again
      </Button>
    </div>
  );
};

export default MixBlendMode;
