/**
 * 同域/跨域页面实现量子纠缠实时通信(跨域仅在本地运行时可行)
 */
import { useState, useRef, useEffect, useCallback, RefObject } from "react";
import useScreenPosition from "hooks/useScreenPosition";

interface InteractPageInfo {
  pageId: string;
  x: number;
  y: number;
}

const isDev =
  window.location.host.includes("localhost") ||
  window.location.host.includes("127.0.0.1");

const useQuantumEntanglement = (
  iframeId: string,
  thatPageUrl: string,
  receiveSelfKey: string,
  receiveThatKey: string,
  elementRef?: RefObject<HTMLDivElement | null>
) => {
  const pageId = useRef<string>(Math.random().toString(36).substring(2));
  const [interactPageInfo, setInteractPageInfo] =
    useState<InteractPageInfo | null>(null); // 当前与之进行交互的另一页面信息
  const interactPageId = useRef<string>(""); // 当前与之进行交互的另一页面ID
  const isThatPageReady = useRef<boolean>(false);
  const sendTimer = useRef<number>(0);
  const receiveTimer = useRef<number>(0);

  // 获取将要发送的信息数据
  const getPostData = () => {
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
    return data;
  };

  // 将当前页面位置信息保存到localStorage中
  const saveInfo = useCallback(() => {
    const data = getPostData();
    const selfPageInfoStr = window.localStorage.getItem(receiveSelfKey);
    if (selfPageInfoStr) {
      const selfPageInfoList: InteractPageInfo[] = JSON.parse(selfPageInfoStr);
      if (selfPageInfoList && selfPageInfoList.length > 0) {
        const selfPageInfoList: InteractPageInfo[] =
          JSON.parse(selfPageInfoStr);
        const newSelfPageInfoList = selfPageInfoList.filter(
          (item) => item.pageId !== pageId.current
        );
        newSelfPageInfoList.unshift(data);
        window.localStorage.setItem(
          receiveSelfKey,
          JSON.stringify(newSelfPageInfoList)
        );
      } else {
        window.localStorage.setItem(receiveSelfKey, JSON.stringify([data]));
      }
    } else {
      window.localStorage.setItem(receiveSelfKey, JSON.stringify([data]));
    }
  }, []);

  // 将当前页面位置信息从localStorage中清除
  const removeInfo = useCallback(() => {
    const selfPageInfoStr = window.localStorage.getItem(receiveSelfKey);
    if (selfPageInfoStr) {
      const selfPageInfoList: InteractPageInfo[] = JSON.parse(selfPageInfoStr);
      if (selfPageInfoList && selfPageInfoList.length > 0) {
        const selfPageInfoList: InteractPageInfo[] =
          JSON.parse(selfPageInfoStr);
        const newSelfPageInfoList = selfPageInfoList.filter(
          (item) => item.pageId === interactPageId.current
        );
        window.localStorage.setItem(
          receiveSelfKey,
          JSON.stringify(newSelfPageInfoList)
        );
      }
    }
  }, []);

  // 发送消息给跨域页面
  const postInfo = useCallback(() => {
    if (iframeId && isThatPageReady.current) {
      const aIframe = document.getElementById(iframeId);
      if (aIframe) {
        const data = getPostData();
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
            window.localStorage.removeItem(receiveThatKey);
            interactPageId.current = "";
            setInteractPageInfo(null);
          }, 1500);
        }
      }
    }
  }, []);

  // 根据传入的同域页面的信息setInteractPageInfo
  const setSelfPageInfo = (selfPageInfoStr: string | null) => {
    if (selfPageInfoStr) {
      const selfPageInfoList = JSON.parse(selfPageInfoStr);
      if (selfPageInfoList && selfPageInfoList.length > 0) {
        let exist = false;
        for (let i = 0, l = selfPageInfoList.length; i < l; i++) {
          const item = selfPageInfoList[i];
          if (item.pageId !== pageId.current) {
            interactPageId.current = item.pageId;
            setInteractPageInfo(item);
            exist = true;
            break;
          }
        }
        if (!exist) {
          interactPageId.current = "";
          setInteractPageInfo(null);
        }
      } else {
        interactPageId.current = "";
        setInteractPageInfo(null);
      }
    } else {
      interactPageId.current = "";
      setInteractPageInfo(null);
    }
  };

  // 根据传入的跨域页面的信息setInteractPageInfo
  const setThatPageInfo = (thatPageInfoStr: string | null) => {
    if (thatPageInfoStr) {
      const thatPageInfo = JSON.parse(thatPageInfoStr);
      if (thatPageInfo) {
        interactPageId.current = thatPageInfo.pageId;
        setInteractPageInfo(thatPageInfo);
      } else {
        interactPageId.current = "";
        setInteractPageInfo(null);
      }
    } else {
      interactPageId.current = "";
      setInteractPageInfo(null);
    }
  };

  // 监听跨域页面post过来的消息
  const onMessage = useCallback((e: any) => {
    if (e.origin !== thatPageUrl) return;
    if (e.data) {
      if (e.data.includes("keepAlive")) {
        window.localStorage.setItem("keepAliveInfo", e.data);
      } else {
        window.localStorage.setItem(receiveThatKey, e.data);
      }
    } else {
      window.localStorage.setItem("keepAliveInfo", "");
      window.localStorage.setItem(receiveThatKey, "");
    }
  }, []);

  // localStorage改变的回调
  const onStorage = useCallback((e: any) => {
    if (e.key === receiveSelfKey) {
      setSelfPageInfo(e.newValue);
    } else if (e.key === "keepAliveInfo") {
      if (e.newValue) {
        const keepAliveInfo = JSON.parse(e.newValue);
        if (interactPageId.current) {
          if (
            keepAliveInfo &&
            keepAliveInfo.pageId === interactPageId.current
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
          const newInteractPageInfo = {
            pageId: keepAliveInfo.pageId,
            x: 0,
            y: 0,
          };
          interactPageId.current = keepAliveInfo.pageId;
          setInteractPageInfo(newInteractPageInfo);
        }
      }
    } else if (e.key === receiveThatKey) {
      setThatPageInfo(e.newValue);
    }
  }, []);

  const resendMessage = useCallback(() => {
    if (window.self === window.top) {
      if (isDev) {
        // 与跨域页面进行交互的逻辑
        postInfo();
        const thatPageInfoStr = window.localStorage.getItem(receiveThatKey);
        setThatPageInfo(thatPageInfoStr);
      } else {
        // 与同域页面进行交互的逻辑
        saveInfo();
        const selfPageInfoStr = window.localStorage.getItem(receiveSelfKey);
        setSelfPageInfo(selfPageInfoStr);
      }
    }
  }, []);

  useScreenPosition(resendMessage);

  useEffect(() => {
    if (window.self === window.top) {
      if (isDev) {
        // 本地环境下，支持跨域页面进行交互，通过嵌入跨域页面的iframe，向iframe通过postMessage发送信息，然后iframe将信息保存到localStorage，另一页面通过监听storage变化来获取信息(storage回调函数仅在本地运行时才会被触发)
        if (iframeId && elementRef?.current) {
          const aIframe: HTMLIFrameElement = document.createElement("iframe");
          aIframe.id = iframeId;
          aIframe.style.visibility = "hidden";
          aIframe.onload = () => {
            isThatPageReady.current = true;
            resendMessage();
            window.addEventListener("storage", onStorage);
            window.addEventListener("resize", resendMessage);
            sendTimer.current = window.setInterval(() => {
              postKeepAliveInfo();
            }, 600);
          };
          aIframe.src = thatPageUrl;
          elementRef.current.appendChild(aIframe);
        }
      } else {
        // 线上环境下，支持同域页面进行交互，一个页面将信息保存到localStorage，另一个同域页面进行监听即可获取
        resendMessage();
        window.addEventListener("storage", onStorage);
        window.addEventListener("resize", resendMessage);
        window.addEventListener("beforeunload", removeInfo);
      }
    } else {
      if (isDev) {
        window.addEventListener("message", onMessage, false);
      }
    }

    return () => {
      if (window.self === window.top) {
        window.removeEventListener("storage", onStorage);
        window.removeEventListener("resize", resendMessage);
        sendTimer.current && window.clearInterval(sendTimer.current);
        receiveTimer.current && window.clearTimeout(receiveTimer.current);
        if (!isDev) {
          removeInfo();
        }
      } else {
        if (isDev) {
          window.removeEventListener("message", onMessage);
        }
      }
    };
  }, []);

  return { interactPageInfo, resendMessage };
};

export default useQuantumEntanglement;
