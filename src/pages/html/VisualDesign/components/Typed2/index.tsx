import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { Button } from "antd";
import styles from "./index.module.less";

const Typed2 = () => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const typed = useRef<any>(null);

  const onceAgain = () => {
    typed.current?.reset();
    typed.current?.start();
  };

  useEffect(() => {
    const options = {
      strings: ["Legan", "Legends naver", "Legends never die"],
      typeSpeed: 60,
      showCursor: false,
      backSpeed: 60,
      backDelay: 0,
    };

    if (pRef.current) {
      typed.current = new Typed(pRef.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <p ref={pRef} />
      <Button type="primary" className={styles.btn} onClick={onceAgain}>
        Once Again
      </Button>
    </div>
  );
};

export default Typed2;
