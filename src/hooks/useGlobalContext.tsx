import React, {
  PropsWithChildren,
  useContext,
  useState,
  RefObject,
  useCallback,
} from "react";

export interface GlobalContextProps {
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
  const [headHeight, setHeadHeight] = useState<number>(0);
  const [menuWidth, setMenuWidth] = useState<number>(0);
  const [scrollTop, setSTop] = useState<number>(0);

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
        headHeight,
        menuWidth,
        scrollTop,
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
