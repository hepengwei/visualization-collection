/**
 * 电梯导航
 */
import React, { useEffect, useRef, useState } from "react";
import { useDebounceFn } from "ahooks";
import { useGlobalContext } from "hooks/useGlobalContext";
import styles from "./index.module.scss";

const moduleList = new Array(9).fill("");
const itemList = new Array(7).fill("");

const ElevatorNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { headHeight } = useGlobalContext();
  const [activedIndex, setActivedIndex] = useState<number>(0);

  const onClickMenu = (index: number) => {
    if (containerRef.current && contentRef.current) {
      const moduleElement: any = contentRef.current.children?.[index];
      if (moduleElement) {
        setActivedIndex(index);
        const ract = moduleElement.getBoundingClientRect();
        containerRef.current.scrollTop =
          containerRef.current.scrollTop + ract.top - headHeight;
      }
    }
  };

  const onMouseWheel = useDebounceFn(
    (e: any) => {
      if (contentRef.current) {
        const { children } = contentRef.current;

        if (children.length > 0) {
          let hasSet = false;
          for (let i = children.length - 1; i >= 0; i--) {
            const moduleElement = children[i];
            const ract = moduleElement.getBoundingClientRect();
            if (ract.top - headHeight < 0) {
              hasSet = true;
              setActivedIndex(i + 1);
              break;
            }
          }
          if (!hasSet) {
            setActivedIndex(0);
          }
        }
      }
    },
    { wait: 50 }
  );

  useEffect(() => {
    containerRef.current &&
      containerRef.current.addEventListener("mousewheel", onMouseWheel.run);

    return () => {
      containerRef.current &&
        containerRef.current.removeEventListener(
          "mousewheel",
          onMouseWheel.run
        );
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content} ref={contentRef}>
        {moduleList.map((_: string, index: number) => (
          <div className={styles.module} key={index}>
            <h1
              className={styles.title}
              style={{
                color: activedIndex === index ? "#47a992" : "#bbbbbb",
              }}
            >
              标题{index + 1}
            </h1>
            <div className={styles.box}>
              {itemList.map((_: string, index2: number) => (
                <div className={styles.item} key={index2}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.menu}>
        {moduleList.map((_: string, index: number) => (
          <div
            className={styles.menuItem}
            style={{
              backgroundColor: activedIndex === index ? "#5c8984" : "#ffffff",
            }}
            key={index}
            onClick={() => onClickMenu(index)}
          >
            标题{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElevatorNavigation;
