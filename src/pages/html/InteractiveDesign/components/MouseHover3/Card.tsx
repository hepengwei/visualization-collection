import React, { useRef, useEffect, useCallback } from "react";
import styles from "./card.module.scss";

interface CardProps {
  url: string;
}

const Card = (props: CardProps) => {
  const { url } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const { clientX, clientY } = e;
      const { x, y } = containerRef.current.getBoundingClientRect();
      containerRef.current.setAttribute(
        "style",
        `--url: url("${url}"); --x: ${clientX - x}px; --y: ${clientY - y}px`
      );
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && url) {
      containerRef.current.setAttribute("style", `--url: url("${url}")`);
    }
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content} />
    </div>
  );
};

export default Card;
