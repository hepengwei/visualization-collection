import React, { PropsWithChildren, useContext, useState } from "react";

export interface GlobalContextProps {
  headHeight: number;
  setHeadHeight: (headHeight: number) => void;
  menuWidth: number;
  setMenuWidth: (menuWidth: number) => void;
}

const GlobalContext = React.createContext<GlobalContextProps>({
  headHeight: 0,
  setHeadHeight: () => {},
  menuWidth: 0,
  setMenuWidth: () => {},
});

export const GlobalProvider = (props: PropsWithChildren<{}>) => {
  const [headHeight, setHeadHeight] = useState<number>(60);
  const [menuWidth, setMenuWidth] = useState<number>(0);

  return (
    <GlobalContext.Provider
      value={{ headHeight, menuWidth, setHeadHeight, setMenuWidth }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
