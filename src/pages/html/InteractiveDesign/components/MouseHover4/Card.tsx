import React, { useRef, useEffect, useCallback } from "react";
import styles from "./card.module.scss";

interface CardProps {
  url: string;
}

const SPEED = 36;

const Card = (props: CardProps) => {
  const { url } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>(0);
  const xRef = useRef<number>(0);
  const yRef = useRef<number>(0);

  const rotateLoop = () => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      let nextX = xRef.current;
      let nextY = yRef.current;
      if (yRef.current <= 0) {
        if (xRef.current >= clientWidth) {
          nextX = clientWidth;
          nextY = SPEED;
        } else if (nextX + SPEED > clientWidth) {
          nextY = nextX + SPEED - clientWidth;
          nextX = clientWidth;
        } else {
          nextX += SPEED;
          nextY = 0;
        }
      } else if (xRef.current >= clientWidth) {
        if (yRef.current >= clientHeight) {
          nextX = clientWidth - SPEED;
          nextY = clientHeight;
        } else if (nextY + SPEED > clientHeight) {
          nextX = clientWidth - (nextY + SPEED - clientHeight);
          nextY = clientHeight;
        } else {
          nextX = clientWidth;
          nextY += SPEED;
        }
      } else if (yRef.current >= clientHeight) {
        if (xRef.current <= 0) {
          nextX = 0;
          nextY = clientHeight - SPEED;
        } else if (nextX - SPEED < 0) {
          nextY = clientHeight - (SPEED - nextX);
          nextX = 0;
        } else {
          nextX -= SPEED;
          nextY = clientHeight;
        }
      } else {
        if (yRef.current <= 0) {
          nextX = SPEED;
          nextY = 0;
        } else if (nextY - SPEED < 0) {
          nextX = SPEED - nextY;
          nextY = 0;
        } else {
          nextX = 0;
          nextY = Math.max(nextY - SPEED, 0);
        }
      }
      xRef.current = nextX;
      yRef.current = nextY;
      containerRef.current.setAttribute(
        "style",
        `--url: url("${url}"); --x: ${nextX}px; --y: ${nextY}px`
      );
      frameId.current = window.requestAnimationFrame(rotateLoop);
    }
  };

  const onMouseEnter = useCallback(() => {
    if (containerRef.current) {
      frameId.current = window.requestAnimationFrame(rotateLoop);
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (containerRef.current) {
      frameId.current && window.cancelAnimationFrame(frameId.current);
      containerRef.current.setAttribute(
        "style",
        `--url: url("${url}"); --x: 0px; --y: 0px`
      );
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && url) {
      containerRef.current.setAttribute("style", `--url: url("${url}")`);
    }

    return () => {
      frameId.current && window.cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
    >
      <div className={styles.content} />
    </div>
  );
};

export default Card;
