import React, { useRef, useEffect, useCallback } from "react";
import { ARTICLE_LIST } from "constants/common";
import type { Article } from "constants/common";
import styles from "./index.module.scss";

const MouseHover2 = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (contentRef.current) {
      const { clientX, clientY } = e;
      const { children } = contentRef.current;
      Array.prototype.forEach.call(children, (item) => {
        const { x, y } = item.getBoundingClientRect();
        item.setAttribute(
          "style",
          `--x: ${clientX - x}px; --y: ${clientY - y}px`
        );
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content} ref={contentRef}>
        {ARTICLE_LIST.map((article: Article, index: number) => (
          <div className={styles.item} key={index}>
            <div className={styles.box}>
              <div>{article.name}</div>
              <a href={article.href} target='_blank'>
                {article.href}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MouseHover2;
