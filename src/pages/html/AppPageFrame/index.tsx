/**
 * 应用页面框架
 */
import React, { useState, useRef, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import Swiper from "swiper";
import { useDebounceFn } from "ahooks";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import styles from "./index.module.scss";

const innerHeadHeight = 100; // 内顶部区域高度
const bgHeight = 30; // 顶部中间文字高度
const pageNum = 4; // 总页面
const moveSpeed = 32; // 首页与第二页的切换速度

enum SwitchPageType {
  "next",
  "prev",
}

const AppPageFrame = () => {
  const { menuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [allPageHeight, setAllPageHeight] = useState<number>(0);
  const swiper = useRef<Swiper | null>(null);
  const isOwnScroll = useRef<boolean>(false);
  const page1 = useRef<HTMLDivElement>(null);
  const page2 = useRef<HTMLDivElement>(null);
  const page3 = useRef<HTMLDivElement>(null);
  const page4 = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const frameId = useRef<number>(0);
  const currentMoveDirection = useRef<string>("");
  const [showPageIndex, setShowPageIndex] = useState<number>(0);

  const loop = () => {
    if (containerRef.current) {
      const containerNode = ReactDOM.findDOMNode(
        containerRef.current
      ) as HTMLDivElement;
      const currentScrollTop = containerNode.scrollTop;
      if (currentMoveDirection.current === "toTop") {
        if (containerNode.scrollTop < containerHeight - innerHeadHeight) {
          const newScrollTop = Math.min(
            currentScrollTop + moveSpeed,
            containerHeight - innerHeadHeight
          );
          isOwnScroll.current = true;
          containerNode.scrollTop = newScrollTop;
          setScrollTop(newScrollTop);
          frameId.current = window.requestAnimationFrame(loop);
        } else {
          currentMoveDirection.current = "";
          isOwnScroll.current = false;
        }
      } else if (currentMoveDirection.current === "toBottom") {
        if (containerNode.scrollTop > 0) {
          const newScrollTop = Math.max(currentScrollTop - moveSpeed, 0);
          isOwnScroll.current = true;
          containerNode.scrollTop = newScrollTop;
          setScrollTop(newScrollTop);
          frameId.current = window.requestAnimationFrame(loop);
        } else {
          currentMoveDirection.current = "";
          isOwnScroll.current = false;
        }
      }
    }
  };

  // 首页切换到第二页
  const moveTop = () => {
    if (!currentMoveDirection.current) {
      currentMoveDirection.current = "toTop";
      setShowPageIndex(1);
      frameId.current = window.requestAnimationFrame(loop);
    }
  };

  // 第二页切换到首页
  const moveBottom = () => {
    if (!currentMoveDirection.current) {
      currentMoveDirection.current = "toBottom";
      setShowPageIndex(0);
      frameId.current = window.requestAnimationFrame(loop);
    }
  };

  // 切换页面(除了首页)
  const switchPage = useDebounceFn(
    (type: SwitchPageType) => {
      if (swiper.current) {
        switch (type) {
          case SwitchPageType.next:
            swiper.current.slideNext();
            break;
          case SwitchPageType.prev:
            swiper.current.slidePrev();
            break;
          default:
            break;
        }
        const containerNode = ReactDOM.findDOMNode(
          containerRef.current
        ) as HTMLDivElement;
        const currentPageIndex = swiper.current.realIndex;
        if (currentPageIndex <= 0) {
          if (containerNode.scrollTop !== containerHeight - innerHeadHeight) {
            isOwnScroll.current = true;
            containerNode.scrollTop = containerHeight - innerHeadHeight;
            setScrollTop(containerHeight - innerHeadHeight);
          }
        } else {
          const newScrollTop =
            (containerHeight - innerHeadHeight) * (currentPageIndex + 1);
          if (containerNode.scrollTop !== newScrollTop) {
            isOwnScroll.current = true;
            containerNode.scrollTop = newScrollTop;
            setScrollTop(newScrollTop);
          }
        }
      }
    },
    {
      wait: 100,
    }
  );

  const onScrollCapture = (e: any) => {
    if (isOwnScroll.current) {
      isOwnScroll.current = false;
      return;
    }
    if (e.target.className === styles.container) {
      if (swiper.current) {
        if (e.target.scrollTop > containerHeight - innerHeadHeight) {
          if (e.target.scrollTop > scrollTop) {
            switchPage.run(SwitchPageType.next);
          } else if (e.target.scrollTop < scrollTop) {
            switchPage.run(SwitchPageType.prev);
          }
        } else {
          if (
            e.target.scrollTop > scrollTop &&
            scrollTop < containerHeight - innerHeadHeight
          ) {
            moveTop();
          } else if (e.target.scrollTop < scrollTop) {
            moveBottom();
          }
        }
      } else {
        setScrollTop(e.target.scrollTop);
      }
    }
  };

  const bgBottom = useMemo(() => {
    if (containerHeight) {
      if (scrollTop >= containerHeight - innerHeadHeight) {
        return 0;
      } else if (scrollTop > containerHeight - innerHeadHeight - bgHeight) {
        return (
          (scrollTop - (containerHeight - innerHeadHeight - bgHeight)) / 2 -
          bgHeight
        );
      }
    }
    return -bgHeight;
  }, [containerHeight, scrollTop]);

  useEffect(() => {
    if (containerRef.current) {
      const containerNode = ReactDOM.findDOMNode(
        containerRef.current
      ) as HTMLDivElement;
      setContainerHeight(containerNode.clientHeight);
      const allPageHeightNum =
        (containerNode.clientHeight - innerHeadHeight) * pageNum;
      setAllPageHeight(allPageHeightNum);
    }
  }, []);

  useEffect(() => {
    const mySwiper = new Swiper(`.${styles.swiper}`, {
      direction: "vertical", // 垂直切换选项
      speed: 1000,
      loop: false, // 循环模式选项
      simulateTouch: false, // 是否接受鼠标拖拽
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      on: {
        slideChange: function () {
          // @ts-ignore
          setShowPageIndex(this.activeIndex + 1);
        },
      },
    });
    swiper.current = mySwiper;
  }, []);

  const scrollTo = (anchor: string) => {
    const containerNode = ReactDOM.findDOMNode(
      containerRef.current
    ) as HTMLDivElement;
    switch (anchor) {
      case "SecondPage":
        const anchorPageTop1 = (containerHeight - innerHeadHeight) * 1;
        if (swiper.current && swiper.current.activeIndex > 0) {
          isOwnScroll.current = true;
          containerNode.scrollTop = anchorPageTop1;
          setScrollTop(anchorPageTop1);
          swiper.current.slideTo(0);
        } else if (scrollTop !== anchorPageTop1) {
          moveTop();
        }
        break;
      case "ThirdPage":
        const anchorPageTop2 = (containerHeight - innerHeadHeight) * 2;
        if (scrollTop !== anchorPageTop2) {
          isOwnScroll.current = true;
          containerNode.scrollTop = anchorPageTop2;
          setScrollTop(anchorPageTop2);
          swiper.current?.slideTo(1);
        }
        break;
      case "LastPage":
        const anchorPageTop3 = (containerHeight - innerHeadHeight) * 3;
        if (scrollTop !== anchorPageTop3) {
          isOwnScroll.current = true;
          containerNode.scrollTop = anchorPageTop3;
          setScrollTop(anchorPageTop3);
          swiper.current?.slideTo(2);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={styles.container}
      onScrollCapture={onScrollCapture}
      ref={containerRef}
    >
      <div
        className={styles.content}
        style={
          allPageHeight
            ? {
                height: `${allPageHeight}px`,
              }
            : {}
        }
        ref={contentRef}
      >
        <div
          className={styles.firstPage}
          style={containerHeight ? { height: `${containerHeight}px` } : {}}
        >
          <Page1 showPageIndex={showPageIndex} />
        </div>
        <div
          className={styles.swiper}
          style={
            containerHeight
              ? { height: `${containerHeight - innerHeadHeight}px` }
              : {}
          }
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide" ref={page2}>
              <Page2 showPageIndex={showPageIndex} />
            </div>
            <div className="swiper-slide" ref={page3}>
              <Page3 showPageIndex={showPageIndex} />
            </div>
            <div className="swiper-slide" ref={page4}>
              <Page4 showPageIndex={showPageIndex} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.head}
        style={
          scrollTop >= containerHeight - innerHeadHeight
            ? {
                borderBottom: "1px solid #999",
                left: `${menuWidth}px`,
                width: `calc(100% - ${menuWidth}px)`,
              }
            : { left: `${menuWidth}px`, width: `calc(100% - ${menuWidth}px)` }
        }
      >
        <div className={styles.bgBox}>
          <div className={styles.bg} style={{ bottom: bgBottom }}>
            <p>Hello World</p>
          </div>
        </div>

        <div className={styles.left}>
          <div className={styles.logo}>L</div>
          <span className={styles.appName}>App Name</span>
        </div>

        <div className={styles.right}>
          <div className={styles.btn} onClick={() => scrollTo("SecondPage")}>
            SecondPage
          </div>
          <div className={styles.btn} onClick={() => scrollTo("ThirdPage")}>
            ThirdPage
          </div>
          <div className={styles.btn} onClick={() => scrollTo("LastPage")}>
            LastPage
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPageFrame;
