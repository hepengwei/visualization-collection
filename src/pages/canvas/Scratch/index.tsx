import { useGlobalContext } from "@/hooks/useGlobalContext";
import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import styles from "./index.module.scss";

const Scratch = () => {
  const intl = useIntl();
  const { headHeight, menuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const startPoint = useRef<{ x: number; y: number } | null>(null);
  const isDraw = useRef<boolean>(false);

  const onMouseDown = (e: React.MouseEvent) => {
    isDraw.current = true;
    const x = e.pageX - menuWidth;
    const y = e.pageY - headHeight;
    startPoint.current = { x, y };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDraw.current && ctxRef.current && startPoint.current) {
      const x = e.pageX - menuWidth;
      const y = e.pageY - headHeight;
      ctxRef.current.beginPath();
      ctxRef.current.globalCompositeOperation = "destination-out";
      ctxRef.current.lineCap = "round";
      ctxRef.current.moveTo(startPoint.current.x, startPoint.current.y);
      ctxRef.current.lineTo(x, y);
      ctxRef.current.lineWidth = 60;
      ctxRef.current.stroke();
      ctxRef.current.closePath();
      startPoint.current = { x, y };
    }
  };

  const onMouseUp = () => {
    isDraw.current = false;
    startPoint.current = null;
  };

  useEffect(() => {
    if (containerRef.current && canvasRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      canvasRef.current.width = clientWidth;
      canvasRef.current.height = clientHeight;
      ctxRef.current = canvasRef.current.getContext("2d");
      if (ctxRef.current) {
        ctxRef.current.fillStyle = "darkgray";
        ctxRef.current.fillRect(0, 0, clientWidth, clientHeight);
      }
    }
  }, [menuWidth]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.bottomText}>Visualization Collection</div>
      <canvas
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        ref={canvasRef}
      >
        {intl.formatMessage({ id: "common.browserTooLow" })}
      </canvas>
    </div>
  );
};

export default Scratch;
