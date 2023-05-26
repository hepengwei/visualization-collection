/**
 * 动效按钮
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import GridContent from "components/GridContent";
import TiltButton from "./components/TiltButton";
import RotateBgButton from "./components/RotateBgButton";
import IconMoveButton from "./components/IconMoveButton";
import NeonButton from "./components/NeonButton";
import BorderAnimationButton from "./components/BorderAnimationButton";
import BorderAnimationButton2 from "./components/BorderAnimationButton2";
import TranslateBgButton from "./components/TranslateBgButton";
import RoundedGradientButton from "./components/RoundedGradientButton";
import MirrorSideButton from "./components/MirrorSideButton";
import ShakeButton from "./components/ShakeButton";
import Skew3DButton from "./components/Skew3DButton";
import HoverCircleButton from "./components/HoverCircleButton";
import PunkEffectButton from "./components/PunkEffectButton";
import PunkEffectButton2 from "./components/PunkEffectButton2";
import BirdButton from "./components/BirdButton";
import ObliqueLineButton from "./components/ObliqueLineButton";
import LightningBorderButton from "./components/LightningBorderButton";

import styles from "./index.module.scss";

const { GridBox } = GridContent;
const gridboxList = [
  {
    element: (
      <TiltButton className={styles.btn} color="#4E90FE">
        <span className={styles.btnText}>Button</span>
      </TiltButton>
    ),
    className: styles.box1,
  },
  { element: <RotateBgButton /> },
  { element: <IconMoveButton /> },
  { element: <NeonButton /> },
  { element: <BorderAnimationButton /> },
  { element: <BorderAnimationButton2 /> },
  { element: <TranslateBgButton /> },
  { element: <RoundedGradientButton /> },
  { element: <MirrorSideButton /> },
  { element: <ShakeButton /> },
  { element: <Skew3DButton /> },
  { element: <HoverCircleButton /> },
  { element: <PunkEffectButton /> },
  { element: <PunkEffectButton2 /> },
  { element: <BirdButton /> },
  { element: <ObliqueLineButton /> },
  { element: <LightningBorderButton /> },
];

const DynamicButtons = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[8, 7, 6, 5, 4]}
        rowSpace={4}
        colSpace={4}
      >
        {gridboxList.map(
          (
            item: { element: React.ReactNode; className?: string },
            index: number
          ) => (
            <GridBox key={index}>
              <div
                className={
                  item.className
                    ? `${styles.box} ${item.className}`
                    : styles.box
                }
              >
                {item.element}
              </div>
            </GridBox>
          )
        )}
      </GridContent>
    </div>
  );
};

export default DynamicButtons;
