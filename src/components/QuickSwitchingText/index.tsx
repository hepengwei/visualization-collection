/**
 * 快速切换文字效果组件
 */
import React, {
  useEffect,
  useState,
  useRef,
  Ref,
  useCallback,
  useImperativeHandle,
} from "react";

interface QuickSwitchingTextProps {
  finalText: string;
  textList: string[];
  switchingInterval?: number;
  duration?: number;
  className?: string;
}

export interface QuickSwitchingTextRef {
  restart: () => void;
}

const QuickSwitchingText = (
  props: QuickSwitchingTextProps,
  ref: Ref<QuickSwitchingTextRef>
) => {
  const {
    finalText = "",
    textList = [],
    switchingInterval = 60,
    duration = 1500,
    className = "",
  } = props;
  const showIndex = useRef<number>(textList.length > 0 ? 0 : -1);
  const [showText, setShowText] = useState<string>(
    showIndex.current === -1 ? finalText : textList[showIndex.current] || ""
  );
  const frameId = useRef<number>(0);
  const startSwitchingTime = useRef<number>(0);
  const prevShowTime = useRef<number>(0);

  useImperativeHandle(ref, () => ({
    restart,
  }));

  const loop = useCallback(() => {
    const now = new Date().getTime();
    if (now - startSwitchingTime.current >= duration) {
      setShowText(finalText);
      showIndex.current = -1;
      prevShowTime.current = now;
    } else if (now - prevShowTime.current >= switchingInterval) {
      let nextIndex = showIndex.current === -1 ? 0 : showIndex.current + 1;
      if (nextIndex >= textList.length) {
        nextIndex = 0;
      }
      setShowText(textList[nextIndex]);
      showIndex.current = nextIndex;
      prevShowTime.current = now;
    }
    frameId.current = requestAnimationFrame(loop);
  }, [duration]);

  const start = useCallback(() => {
    const now = new Date().getTime();
    startSwitchingTime.current = now;
    prevShowTime.current = now;
    frameId.current = requestAnimationFrame(loop);
  }, []);

  const restart = () => {
    if (showIndex.current !== -1) return;
    start();
  };

  useEffect(() => {
    start();

    return () => {
      frameId.current && cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <span className={className}>
      {showText &&
        showText
          .split("")
          .map((item: string, index: number) => (
            <span key={index}>{item}</span>
          ))}
    </span>
  );
};

export default React.forwardRef(QuickSwitchingText);
