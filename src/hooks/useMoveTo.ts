/**
 * 缓动动画
 */
import { useRef, useEffect, RefObject } from "react";
import gsap from "gsap";

type Direction = "toBottom" | "toTop" | "toLeft" | "toRight";

const useMoveTo = function (
  eleRef: RefObject<HTMLDivElement>,
  direction: Direction,
  duration: number = 1,
  delay: number = 0,
  fixedTransform: string = ""
) {
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const restart = () => {
    if (tweenRef.current) {
      tweenRef.current.invalidate();
      tweenRef.current.restart(true);
    }
  };

  const reverse = () => {
    tweenRef.current?.reverse();
  };

  useEffect(() => {
    if (eleRef && eleRef.current) {
      const { clientWidth, clientHeight } = eleRef.current;
      let transformFrom = "";
      switch (direction) {
        case "toTop":
          transformFrom = `translate(0px, ${clientHeight}px)`;
          break;
        case "toBottom":
          transformFrom = `translate(0px, ${-clientHeight}px)`;
          break;
        case "toLeft":
          transformFrom = `translate(${clientWidth}px), 0px`;
          break;
        case "toRight":
          transformFrom = `translate(${-clientWidth}px), 0px`;
          break;
      }
      tweenRef.current = gsap.fromTo(
        eleRef.current,
        {
          opacity: 0,
          transform: `${transformFrom} ${fixedTransform}`,
        },
        {
          opacity: 1,
          transform: `translate(0px, 0px) ${fixedTransform}`,
          duration,
          delay,
        }
      );
    }

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return { tweenRef, restart, reverse };
};

export default useMoveTo;
