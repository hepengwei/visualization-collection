import React, {
  PropsWithChildren,
  useContext,
  useState,
  RefObject,
  useCallback,
} from "react";

export interface GlobalContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  headHeight: number;
  setHeadHeight: (headHeight: number) => void;
  menuWidth: number;
  setMenuWidth: (menuWidth: number) => void;
  scrollTop: number;
  setScrollTop: (y?: number) => void;
  scrollContentRef: RefObject<HTMLDivElement | null>;
  setScrollContentRef: (scrollRef: RefObject<HTMLDivElement>) => void;
}

const GlobalContext = React.createContext<GlobalContextProps>({
  locale: "en-us",
  setLocale: () => {},
  headHeight: 0,
  setHeadHeight: () => {},
  menuWidth: 0,
  setMenuWidth: () => {},
  scrollTop: 0,
  setScrollTop: () => {},
  scrollContentRef: React.createRef(),
  setScrollContentRef: () => {},
});

let scrollContentRef = React.createRef<HTMLDivElement | null>();

export const GlobalProvider = (props: PropsWithChildren<{}>) => {
  const defaultLocale = localStorage.getItem("language") || "en-us";
  const [locale, setLocaleValue] = useState<string>(defaultLocale);
  const [headHeight, setHeadHeight] = useState<number>(0);
  const [menuWidth, setMenuWidth] = useState<number>(0);
  const [scrollTop, setSTop] = useState<number>(0);

  const setLocale = (locale: string) => {
    const _locale = /^zh\b/.test(locale.toLocaleLowerCase())
      ? "zh-cn"
      : "en-us";
    setLocaleValue(_locale);
    localStorage.setItem("language", _locale);
  };

  const setScrollTop = useCallback((y: number = 0) => {
    setSTop(y);
    if (scrollContentRef.current) {
      if ((scrollContentRef.current as HTMLDivElement).scrollTop !== y) {
        (scrollContentRef.current as HTMLDivElement).scrollTop = y;
      }
    }
  }, []);

  const setScrollContentRef = (scrollRef: RefObject<HTMLDivElement>) => {
    if (scrollRef) {
      scrollContentRef = scrollRef;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        locale,
        headHeight,
        menuWidth,
        scrollTop,
        setLocale,
        setHeadHeight,
        setMenuWidth,
        setScrollTop,
        scrollContentRef,
        setScrollContentRef,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
