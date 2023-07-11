import React, { useEffect, useRef } from "react";
import { format } from "date-fns";
import ModuleTitle from "components/ModuleTitle";
import styles from "./index.module.scss";

const FlopTime = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const flipObjs = useRef<Flipper[]>([]);

  useEffect(() => {
    if (contentRef.current) {
      let flips: any = contentRef.current.children;
      flips = Array.prototype.filter.call(flips, (itemNode) => {
        if (itemNode.className.includes(styles.flip)) {
          return true;
        } else {
          return false;
        }
      });
      // 获取当前时间
      const now = new Date();
      // 格式化当前时间，例如现在是20:30:10，则输出"203010"字符串
      const nowTimeStr = format(now, "hhmmss");
      // 格式化下一秒的时间
      const nextTimeStr = format(new Date(now.getTime() + 1000), "hhmmss");
      // 定义牌板数组，用来存储6个Flipper翻板对象
      for (let i = 0; i < flips.length; i++) {
        // 创建6个Flipper实例，初始化并存入flipObjs
        flipObjs.current.push(
          new Flipper({
            // 每个Flipper实例按数组顺序与翻板DOM的顺序一一对应
            node: flips[i],
            // 按数组顺序取时间字符串对应位置的数字
            frontText: styles[`number${nowTimeStr[i]}`],
            backText: styles[`number${nextTimeStr[i]}`],
          })
        );
      }
    }

    const timer = window.setInterval(() => {
      // 获取当前时间
      let now = new Date();
      // 格式化当前时间，例如现在是20:30:10，则输出"203010"字符串
      const nowTimeStr = format(now, "hhmmss");
      // 格式化下一秒的时间
      const nextTimeStr = format(new Date(now.getTime() + 1000), "hhmmss");
      for (let i = 0; i < flipObjs.current.length; i++) {
        // 如果前后数字没有变化，则直接跳过，不翻牌
        if (nowTimeStr[i] === nextTimeStr[i]) {
          continue;
        }
        // 传递前后牌的数字，进行向下翻牌动画
        flipObjs.current[i].flipDown(
          Number(nowTimeStr[i]),
          styles[`number${nowTimeStr[i]}`],
          Number(nextTimeStr[i]),
          styles[`number${nextTimeStr[i]}`]
        );
      }
    }, 1000);

    return () => {
      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.cssDynamicEffect.richDynamicEffect.upAndDownCard" />
      <div className={styles.content} ref={contentRef}>
        <div className={`${styles.flip} ${styles.down}`}>
          <div className={`${styles.digital} ${styles.front}`}></div>
          <div className={`${styles.digital} ${styles.back}`}></div>
        </div>
        <div className={`${styles.flip} ${styles.down}`}>
          <div className={`${styles.digital} ${styles.front}`}></div>
          <div className={`${styles.digital} ${styles.back}`}></div>
        </div>
        <div className={styles.dot}>:</div>
        <div className={`${styles.flip} ${styles.down}`}>
          <div className={`${styles.digital} ${styles.front}`}></div>
          <div className={`${styles.digital} ${styles.back}`}></div>
        </div>
        <div className={`${styles.flip} ${styles.down}`}>
          <div className={`${styles.digital} ${styles.front}`}></div>
          <div className={`${styles.digital} ${styles.back}`}></div>
        </div>
        <div className={styles.dot}>:</div>
        <div className={`${styles.flip} ${styles.down}`}>
          <div className={`${styles.digital} ${styles.front}`}></div>
          <div className={`${styles.digital} ${styles.back}`}></div>
        </div>
        <div className={`${styles.flip} ${styles.down}`}>
          <div className={`${styles.digital} ${styles.front}`}></div>
          <div className={`${styles.digital} ${styles.back}`}></div>
        </div>
      </div>
    </div>
  );
};

interface FlipperConfig {
  node: any;
  frontNum: number;
  backNum: number;
  frontText: string;
  backText: string;
  duration: number;
}

class Flipper {
  config: FlipperConfig;
  nodeClass: {
    flip: string;
    front: string;
    back: string;
  };
  frontNode: any;
  backNode: any;
  isFlipping: boolean;
  allNumberClass: string[];
  constructor(config: Partial<FlipperConfig>) {
    this.config = {
      // 时钟模块的节点
      node: null,
      frontNum: 0,
      backNum: 1,
      // 初始前牌文字
      frontText: styles.number0,
      // 初始后牌文字
      backText: styles.number1,
      // 翻转动画时间（毫秒，与翻转动画CSS 设置的animation-duration时间要一致）
      duration: 600,
    };
    Object.assign(this.config, config);
    this.nodeClass = {
      flip: styles.flip,
      front: `${styles.digital} ${styles.front}`,
      back: `${styles.digital} ${styles.back}`,
    };
    this.frontNode = this.config.node.children[0];
    this.backNode = this.config.node.children[1];
    this.isFlipping = false;
    this.allNumberClass = [];
    this._init();
  }

  // 设置初始牌面字符
  _init() {
    for (let i = 0; i < 10; i++) {
      this.allNumberClass.push(styles[`number${i}`]);
    }
    const { frontNum, frontText, backNum, backText } = this.config;
    this._setFront(frontNum, frontText);
    this._setBack(backNum, backText);
  }

  // 设置前牌文字
  _setFront(num: number, className: string) {
    this.allNumberClass.forEach((numberClass: string) => {
      if (
        Array.prototype.includes.call(this.frontNode.classList, numberClass)
      ) {
        this.frontNode.classList.remove(numberClass);
      }
    });
    this.config.frontNum = num;
    this.config.frontText = styles[`number${num}`];
    this.frontNode.classList.add(className);
  }

  // 设置后牌文字
  _setBack(num: number, className: string) {
    this.allNumberClass.forEach((numberClass: string) => {
      if (Array.prototype.includes.call(this.backNode.classList, numberClass)) {
        this.backNode.classList.remove(numberClass);
      }
    });
    this.config.backNum = num;
    this.config.backText = styles[`number${num}`];
    this.backNode.classList.add(className);
  }

  _flip(
    type: "down" | "up",
    frontNum: number,
    front: string,
    backNum: number,
    back: string
  ) {
    // 如果处于翻转中，则不执行
    if (this.isFlipping) {
      return false;
    }
    // 设置翻转状态为true
    this.isFlipping = true;
    // 设置前牌文字
    this._setFront(frontNum, front);
    // 设置后牌文字
    this._setBack(backNum, back);
    // 根据传递过来的type设置翻转方向
    let flipClass = styles.down;
    if (type === "up") {
      flipClass = styles.up;
    }
    // 添加翻转方向和执行动画的class，执行翻转动画
    this.config.node.classList.add(flipClass, styles.go);
    // 根据设置的动画时间，在动画结束后，还原class并更新前牌文字
    setTimeout(() => {
      // 还原class
      this.config.node.classList.remove(styles.go);
      // 设置翻转状态为false
      this.isFlipping = false;
      // 将前牌文字设置为当前新的数字，后牌因为被前牌挡住了，就不用设置了。
      this._setFront(backNum, back);
      const newBackNum = backNum >= 9 ? 0 : backNum + 1;
      this._setBack(newBackNum, styles[`number${newBackNum}`]);
    }, this.config.duration);
  }

  // 下翻牌
  flipDown(frontNum: number, front: string, backNum: number, back: string) {
    this._flip("down", frontNum, front, backNum, back);
  }

  // 上翻牌
  //   flipUp(front: string, back: string) {
  //     this._flip("up", front, back);
  //   }
}

export default FlopTime;
