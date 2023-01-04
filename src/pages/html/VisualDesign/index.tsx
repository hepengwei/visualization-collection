/**
 * 视觉设计
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import GridContent from "components/GridContent";
import GlassMimicry1 from "./components/GlassMimicry1";
import GlassMimicry2 from "./components/GlassMimicry2";
import MixBlendMode from "./components/MixBlendMode";
import SwitchingText from "./components/SwitchingText";
import Typed1 from "./components/Typed1";
import Typed2 from "./components/Typed2";
import AutoEllipsisText from "./components/AutoEllipsisText";
import FilterCSS from "./components/FilterCSS";
import BgFusion from "./components/BgFusion";
import MyLogo from "./components/MyLogo";
import ShearAngle from "./components/ShearAngle";
import AnnulusLoading from "./components/AnnulusLoading";
import Honeycomb from "./components/Honeycomb";
import PizzaPie from "./components/PizzaPie";
// import ImageFadeOut from "./components/ImageFadeOut";
import styles from "./index.module.scss";

const { GridBox } = GridContent;
const gridboxList = [
  { element: <GlassMimicry1 /> },
  { element: <GlassMimicry2 /> },
  { element: <MixBlendMode /> },
  { element: <SwitchingText /> },
  { element: <Typed1 /> },
  { element: <Typed2 /> },
  { element: <AutoEllipsisText /> },
  { element: <FilterCSS /> },
  { element: <BgFusion /> },
  { element: <MyLogo /> },
  { element: <ShearAngle /> },
  { element: <AnnulusLoading /> },
  { element: <Honeycomb /> },
  { element: <PizzaPie /> },
  // { element: <ImageFadeOut /> },
];

const VisualDesign = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      <GridContent
        differentScreenCols={[2, 2, 2, 1, 1]}
        rowSpace={4}
        colSpace={4}
      >
        {gridboxList.map(
          (item: { element: React.ReactNode }, index: number) => (
            <GridBox key={index}>
              <div className={styles.box}>{item.element}</div>
            </GridBox>
          )
        )}
      </GridContent>
    </div>
  );
};

export default VisualDesign;
