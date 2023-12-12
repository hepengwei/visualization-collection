/**
 * 实时监听浏览器窗口位置的改变
 */
import { useRef, useEffect } from "react";

interface ScreenPosition {
  screenLeft: number;
  screenTop: number;
}

const useScreenPosition = (
  onScreenPosChange: (screenPosition: ScreenPosition) => void
) => {
  const screenPosition = useRef<ScreenPosition>({
    screenLeft: window.screenLeft,
    screenTop: window.screenTop,
  });
  const frameId = useRef<number>(0);

  const getPos = () => {
    if (screenPosition.current) {
      const { screenLeft: sl, screenTop: st } = screenPosition.current;
      if (sl !== window.screenLeft || st !== window.screenTop) {
        const newPosition = {
          screenLeft: window.screenLeft,
          screenTop: window.screenTop,
        };
        screenPosition.current = newPosition;
        onScreenPosChange(newPosition);
      }
    }
    frameId.current = window.requestAnimationFrame(getPos);
  };

  useEffect(() => {
    frameId.current = window.requestAnimationFrame(getPos);
    return () => {
      frameId.current && window.cancelAnimationFrame(frameId.current);
    };
  }, []);

  return screenPosition.current;
};

export default useScreenPosition;
