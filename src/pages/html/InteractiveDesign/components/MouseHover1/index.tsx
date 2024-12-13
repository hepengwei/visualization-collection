import React, { useRef } from "react";
import { useIntl } from "react-intl";
import useCursorMove from "@/hooks/useCursorMove";
import { ARTICLE_LIST } from "constants/common";
import type { Article } from "constants/common";
import discuss from "images/html/discuss.jpg";
import styles from "./index.module.scss";

const MouseHover1 = () => {
  const intl = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const {
    showCursor,
    cursorSize,
    cursorDefaultRadius,
    cursorBigRadius,
    setCursorSize,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  } = useCursorMove(containerRef, cursorRef);

  const onMouseEnterItem = () => {
    setCursorSize("big");
  };

  const onMouseLeaveItem = () => {
    setCursorSize("default");
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
    >
      <div className={styles.content}>
        <p
          className={styles.title}
          onMouseEnter={onMouseEnterItem}
          onMouseLeave={onMouseLeaveItem}
        >
          {intl.formatMessage({
            id: "page.htmlVision.interactiveDesign.personalArticle",
          })}
        </p>
        <div className={styles.bottom}>
          <img
            src={discuss}
            alt=''
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
          <div className={styles.right}>
            {ARTICLE_LIST.map((article: Article, index: number) => (
              <a
                key={index}
                href={article.href}
                target='_blank'
                onMouseEnter={onMouseEnterItem}
                onMouseLeave={onMouseLeaveItem}
              >
                {article.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className={styles.cursor}
        style={{
          visibility: showCursor ? "visible" : "hidden",
          width: `${
            cursorSize === "big" ? cursorBigRadius * 2 : cursorDefaultRadius * 2
          }px`,
          height: `${
            cursorSize === "big" ? cursorBigRadius * 2 : cursorDefaultRadius * 2
          }px`,
        }}
        ref={cursorRef}
      />
    </div>
  );
};

export default MouseHover1;
