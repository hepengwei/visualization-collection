import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import discuss from "images/html/discuss.jpg";
import styles from "./index.module.scss";

interface Article {
  name: string;
  href: string;
}
interface MousePos {
  mouseX: number | null;
  mouseY: number | null;
}
type CursorSize = "default" | "big";

const articles = [
  {
    name: "两个跨域页面进行跳转传参的终极方案",
    href: "https://juejin.cn/post/7134967869326458916",
  },
  {
    name: "面试秘籍之手写系列",
    href: "https://juejin.cn/post/7134975263707758606",
  },
  {
    name: "一款将打包后的Chrome插件自动化加载到浏览器的webpack插件",
    href: "https://juejin.cn/post/7134991167095062565",
  },
  {
    name: "全网最全AutoIt3基础教程及实战案例",
    href: "https://juejin.cn/post/7134952028870017060",
  },
];
const cursorDefaultRadius = 10;
const cursorBigRadius = 40;
const cursorMoveVCoefficient = 0.12;

const MouseHover = () => {
  const { scrollTop } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState<boolean>(false);
  const [cursorSize, setCursorSize] = useState<CursorSize>("default");
  const mousePos = useRef<MousePos>({
    mouseX: null,
    mouseY: null,
  });
  const cursorFrameId = useRef<number>(0);

  const onMouseEnter = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setShowCursor(true);
    const containerNode = ReactDOM.findDOMNode(
      containerRef.current
    ) as HTMLDivElement;
    const { offsetLeft = 0, offsetTop = 0 } = containerNode;
    mousePos.current = {
      mouseX: clientX - offsetLeft,
      // @ts-ignore
      mouseY: clientY - (offsetTop - scrollTop),
    };
    const cursorNode = ReactDOM.findDOMNode(
      cursorRef.current
    ) as HTMLDivElement;
    cursorNode.style.left = `${
      (mousePos.current.mouseX || 0) - cursorDefaultRadius
    }px`;
    cursorNode.style.top = `${
      (mousePos.current.mouseY || 0) - cursorDefaultRadius
    }px`;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const containerNode = ReactDOM.findDOMNode(
      containerRef.current
    ) as HTMLDivElement;
    const { offsetLeft = 0, offsetTop = 0 } = containerNode;
    mousePos.current = {
      mouseX: clientX - offsetLeft,
      // @ts-ignore
      mouseY: clientY - (offsetTop - scrollTop),
    };
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setShowCursor(false);
    const containerNode = ReactDOM.findDOMNode(
      containerRef.current
    ) as HTMLDivElement;
    const { offsetLeft = 0, offsetTop = 0 } = containerNode;
    mousePos.current = {
      mouseX: clientX - offsetLeft,
      // @ts-ignore
      mouseY: clientY - (offsetTop - scrollTop),
    };
  };

  const onMouseEnterItem = () => {
    setCursorSize("big");
  };

  const onMouseLeaveItem = () => {
    setCursorSize("default");
  };

  useEffect(() => {
    const loop = () => {
      const { mouseX, mouseY } = mousePos.current;
      if (mouseX !== null && mouseY !== null) {
        let cursorRadius = cursorDefaultRadius;
        if (cursorSize === "big") {
          cursorRadius = cursorBigRadius;
        }
        const cursorNode = ReactDOM.findDOMNode(
          cursorRef.current
        ) as HTMLDivElement;

        const left = cursorNode.style.left
          ? parseFloat(cursorNode.style.left)
          : null;
        const top = cursorNode.style.top
          ? parseFloat(cursorNode.style.top)
          : null;
        if (left !== null && top !== null) {
          const distX = mouseX - (left + cursorRadius);
          const distY = mouseY - (top + cursorRadius);
          const dist = Math.hypot(distX, distY);
          if (dist > 0) {
            if (dist <= 0.1) {
              cursorNode.style.left = `${left}px`;
              cursorNode.style.top = `${top}px`;
            } else {
              const cursorMoveVX = distX * cursorMoveVCoefficient;
              const cursorMoveVY = distY * cursorMoveVCoefficient;
              cursorNode.style.left = `${left + cursorMoveVX}px`;
              cursorNode.style.top = `${top + cursorMoveVY}px`;
            }
          }
        }
      }
      cursorFrameId.current = window.requestAnimationFrame(loop);
    };
    cursorFrameId.current = window.requestAnimationFrame(loop);

    return () => {
      cursorFrameId.current &&
        window.cancelAnimationFrame(cursorFrameId.current);
    };
  }, [cursorSize]);

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
          个人文章
        </p>
        <div className={styles.bottom}>
          <img
            src={discuss}
            alt=""
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
          <div className={styles.right}>
            {articles.map((article: Article, index: number) => (
              <a
                key={index}
                href={article.href}
                target="_blank"
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

export default MouseHover;
