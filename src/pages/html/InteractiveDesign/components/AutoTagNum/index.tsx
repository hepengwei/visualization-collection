/**
 * 该组件因使用了animation-timeline: scroll(self x)和 animation-timeline: view(inline)两个实验性CSS已被隐藏，本地可以正常运行
 */
import React, { useState } from 'react';
import { Slider } from 'antd';
import ModuleTitle from '@/components/ModuleTitle';
import styles from './index.module.scss';

const minWidth = 200;
const maxWidth = 1000;

const AutoTagNum = () => {
  const [boxWidth, setBoxWidth] = useState<number>(500);

  const onSideChange = (value: number) => {
    setBoxWidth(value);
  };

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle='page.htmlVision.interactiveDesign.autoTagNum' />
      <div className={styles.content}>
        <div className={styles.box} style={{ width: `${boxWidth}px` }}>
          <div className={styles.tags}>
            <span className={styles.tag}>HTML</span>
            <span className={styles.tag}>CSS</span>
            <span className={styles.tag}>JAVASCRIPT</span>
            <span className={styles.tag}>REACT</span>
            <span className={styles.tag}>VUE</span>
            <span className={styles.tag}>CANVAS</span>
            <span className={styles.tag}>THREEJS</span>
            <span className={styles.tag}>NODE</span>
            <span className={styles.tag}>NESTJS</span>
          </div>
        </div>
        <Slider
          className={styles.slider}
          min={minWidth}
          max={maxWidth}
          step={10}
          value={boxWidth}
          onChange={onSideChange}
        />
      </div>
    </div>
  );
};

export default AutoTagNum;
