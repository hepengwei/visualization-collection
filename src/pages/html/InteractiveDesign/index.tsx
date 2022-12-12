/**
 * 交互设计
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import MagnifyingGlass from "./components/MagnifyingGlass";
import CropImage from "./components/CropImage";
import DragShopping from "./components/DragShopping";
import MouseHover from "./components/MouseHover";
import SlideButtonTab from "./components/SlideButtonTab";
import FlipBook from "./components/FlipBook";
import Switchs from "./components/Switchs";
import PeopleAnimation from "./components/PeopleAnimation";
import styles from "./index.module.less";

const boxList = [
  { element: <MagnifyingGlass /> },
  { element: <CropImage /> },
  { element: <DragShopping /> },
  { element: <MouseHover /> },
  { element: <SlideButtonTab /> },
  { element: <FlipBook /> },
  { element: <Switchs /> },
  { element: <PeopleAnimation /> },
];

const InteractiveDesign = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      {boxList.map((item: { element: React.ReactNode }, index: number) => (
        <div className={styles.box} key={index}>
          {item.element}
        </div>
      ))}
    </div>
  );
};

export default InteractiveDesign;
