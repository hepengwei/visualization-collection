/**
 * 跨域页面实现量子纠缠实时通信
 */
import {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  RefObject,
} from "react";
import useScreenPosition from "hooks/useScreenPosition";

interface ThatPageInfo {
  pageId: string;
  x: number;
  y: number;
}

const useQuantumEntanglement = (
  iframeId: string,
  thatPageUrl: string,
  receiveKey: string,
  serviceWorkerFile: string,
  elementRef?: RefObject<HTMLDivElement | null>
) => {
  const pageId = useRef<string>(Math.random().toString(36).substring(2));
  const [thatPageInfo, setThatPageInfo] = useState<ThatPageInfo | null>(null);
  const thatPageInfoRef = useRef<ThatPageInfo | null>(null);
  const isThatPageReady = useRef<boolean>(false);
  const sendTimer = useRef<number>(0);
  const receiveTimer = useRef<number>(0);

  const postInfo = useCallback(() => {
    if (iframeId && isThatPageReady.current) {
      const aIframe = document.getElementById(iframeId);
      if (aIframe) {
        let x = 0;
        let y = 0;
        if (elementRef?.current) {
          const { top, left, width, height } =
            elementRef.current.getBoundingClientRect();
          x = left + window.screenLeft + width / 2;
          y = top + window.screenTop + height / 2;
        } else {
          x = window.innerWidth / 2 + window.screenLeft;
          y = window.innerHeight / 2 + window.screenTop;
        }
        const data = { pageId: pageId.current, x, y };
        console.log(333);
        (aIframe as HTMLIFrameElement).contentWindow?.postMessage(
          JSON.stringify(data),
          thatPageUrl
        );
      }
    }
  }, []);

  // 发送保活信息，维持通信状态
  const postKeepAliveInfo = useCallback(() => {
    if (iframeId && isThatPageReady.current) {
      const aIframe = document.getElementById(iframeId);
      if (aIframe) {
        sendTimer.current = 0;
        const data = {
          pageId: pageId.current,
          keepAlive: true,
          timestamp: new Date().getTime(),
        };
        (aIframe as HTMLIFrameElement).contentWindow?.postMessage(
          JSON.stringify(data),
          thatPageUrl
        );
        if (!receiveTimer.current) {
          receiveTimer.current = window.setTimeout(() => {
            receiveTimer.current = 0;
            window.localStorage.removeItem(receiveKey);
            thatPageInfoRef.current = null;
            setThatPageInfo(null);
          }, 1500);
        }
      }
    }
  }, []);

  const onMessage = useCallback((e: any) => {
    console.log(777, e);
    if (e.origin !== thatPageUrl) return;
    if ("serviceWorker" in navigator) {
      if (e.data) {
        if (e.data.includes("keepAlive")) {
          navigator.serviceWorker?.controller?.postMessage({
            type: "keepAliveInfo",
            value: e.data,
          });
        } else {
          navigator.serviceWorker?.controller?.postMessage({
            type: receiveKey,
            value: e.data,
          });
        }
      } else {
        navigator.serviceWorker?.controller?.postMessage({
          type: receiveKey,
          value: "",
        });
      }
    }
  }, []);

  const resendMessage = useCallback(() => {
    if (window.self === window.top) {
      postInfo();
      // 自己页面移动后需要重新setThatPageInfo，使页面重新刷新
      if (thatPageInfoRef.current) {
        const newThatPageInfo = { ...thatPageInfoRef.current };
        thatPageInfoRef.current = newThatPageInfo;
        setThatPageInfo(newThatPageInfo);
      }
      // getLocalThatPageInfo();
    }
  }, []);

  useScreenPosition(resendMessage);

  // 从Service Worker发过来message时的回调
  const onReceiveSWMessage = useCallback((event: any) => {
    const message = event.data;
    console.log("接收到SW的消息：", message);
    if (message.type === "keepAliveInfo") {
      if (message.value) {
        const keepAliveInfo = JSON.parse(message.value);
        if (thatPageInfoRef.current) {
          if (
            keepAliveInfo &&
            keepAliveInfo.pageId === thatPageInfoRef.current?.pageId
          ) {
            // 如果收到了保活信息,则清除receiveTimer
            if (receiveTimer.current) {
              window.clearTimeout(receiveTimer.current);
              receiveTimer.current = 0;
            }
          }
        } else {
          // 如果收到了保活信息,则清除receiveTimer
          if (receiveTimer.current) {
            window.clearTimeout(receiveTimer.current);
            receiveTimer.current = 0;
          }
          const newThatPageInfo = { pageId: keepAliveInfo.pageId, x: 0, y: 0 };
          thatPageInfoRef.current = newThatPageInfo;
          setThatPageInfo(newThatPageInfo);
        }
      }
    } else if (message.type === receiveKey) {
      if (message.value) {
        const thatPageInfo = JSON.parse(message.value);
        if (thatPageInfo) {
          thatPageInfoRef.current = thatPageInfo;
          setThatPageInfo(thatPageInfo);
        } else {
          thatPageInfoRef.current = null;
          setThatPageInfo(null);
        }
      } else {
        thatPageInfoRef.current = null;
        setThatPageInfo(null);
      }
    }
  }, []);

  useLayoutEffect(() => {
    if ("serviceWorker" in navigator) {
      if (window.self === window.top) {
        if (iframeId && elementRef?.current) {
          const aIframe: HTMLIFrameElement = document.createElement("iframe");
          aIframe.id = iframeId;
          aIframe.style.visibility = "hidden";
          console.log(222);
          aIframe.onload = () => {
            console.log("iframe ready");
            isThatPageReady.current = true;
            resendMessage();

            window.addEventListener("resize", resendMessage);
            sendTimer.current = window.setInterval(() => {
              postKeepAliveInfo();
            }, 600);
          };
          aIframe.src = thatPageUrl;
          elementRef.current.appendChild(aIframe);

          // 监听从serviceWorker发过来的message
          navigator.serviceWorker.addEventListener(
            "message",
            onReceiveSWMessage
          );
        }
      } else {
        // 注册Service Worker
        navigator.serviceWorker
          .register(serviceWorkerFile)
          .then(() => {
            console.log("注册Service Worker成功");
          })
          .catch(() => {
            console.log("注册Service Worker失败");
          });

        window.addEventListener("message", onMessage, false);
      }
    }

    return () => {
      if ("serviceWorker" in navigator) {
        if (window.self === window.top) {
          window.removeEventListener("resize", resendMessage);
          sendTimer.current && window.clearInterval(sendTimer.current);
          receiveTimer.current && window.clearTimeout(receiveTimer.current);
        } else {
          window.removeEventListener("message", onMessage, false);
        }
      }
    };
  }, []);

  return { thatPageInfo, resendMessage };
};

export default useQuantumEntanglement;
