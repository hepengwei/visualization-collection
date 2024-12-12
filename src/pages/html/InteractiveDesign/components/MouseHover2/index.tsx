import React, { useRef, useEffect, useCallback } from "react";
import styles from "./index.module.scss";

interface Article {
  name: string;
  href: string;
}

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
  {
    name: "两个跨域页面实现量子纠缠的终极方案",
    href: "https://juejin.cn/post/7312031033302614051",
  },
];

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
        {articles.map((article: Article, index: number) => (
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
