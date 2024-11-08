/**
 * 实现圆点延迟跟随鼠标移动效果
 */
import { useState, useRef, useEffect, RefObject } from 'react';
import ReactDOM from 'react-dom';
import { useGlobalContext } from '@/hooks/useGlobalContext';

interface MousePos {
  mouseX: number | null;
  mouseY: number | null;
}
type CursorSize = 'default' | 'big';

const useCursorMove = (
  containerRef: RefObject<HTMLDivElement>,
  cursorRef: RefObject<HTMLDivElement>,
  cursorDefaultRadius = 10,
  cursorBigRadius = 40,
  cursorMoveVCoefficient = 0.12
) => {
  const { scrollTop } = useGlobalContext();
  const [showCursor, setShowCursor] = useState<boolean>(false);
  const [cursorSize, setCursorSize] = useState<CursorSize>('default');
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

  useEffect(() => {
    const loop = () => {
      const { mouseX, mouseY } = mousePos.current;
      if (mouseX !== null && mouseY !== null) {
        let cursorRadius = cursorDefaultRadius;
        if (cursorSize === 'big') {
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

  return {
    showCursor,
    cursorSize,
    cursorDefaultRadius,
    cursorBigRadius,
    setCursorSize,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  };
};

export default useCursorMove;
