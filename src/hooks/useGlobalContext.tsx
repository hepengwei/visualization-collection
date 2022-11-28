import React, { PropsWithChildren, useContext, useMemo, useState } from "react";

export interface GlobalContextProps {
  headHeight: number;
  setHeadHeight?: (headHeight: number) => void;
  menuWidth: number;
  setMenuWidth: (menuWidth: number) => void;
  scrollTop: number;
  setScrollTop: (y: number) => void;
}

const GlobalContext = React.createContext<GlobalContextProps>({
  headHeight: 0,
  setHeadHeight: () => {},
  menuWidth: 0,
  setMenuWidth: () => {},
  scrollTop: 0,
  setScrollTop: () => {},
});

export const GlobalProvider = (props: PropsWithChildren<{}>) => {
  const [headHeight, setHeadHeight] = useState<number>(60);
  const [menuWidth, setMenuWidth] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);

  return (
    <GlobalContext.Provider
      value={{
        headHeight,
        menuWidth,
        scrollTop,
        setHeadHeight,
        setMenuWidth,
        setScrollTop,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
