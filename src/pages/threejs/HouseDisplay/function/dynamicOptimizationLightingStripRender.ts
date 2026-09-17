/**
 * 漫游模式下，根据相机位置实时计算，打开或关闭灯带光源
 * 为了解决如果当前场景中如果光源太多，则页面会卡死的问题，提高性能
 */
import { MutableRefObject } from "react";
import { PerspectiveCamera, RectAreaLight } from "three";
import type { ViewMode } from "../function/modeToggle";
import {
  WALL_THICKNESS,
  WALL_55_POSITION_X,
  WALL_72_POSITION_X,
} from "../hardDecoration/addHouseStructure";
import { SHOE_CABINET_DEPTH } from "../hardDecoration/addShoeCabinet";

export const dynamicOptimizationLightingStripRender = (
  lightingStripLightMap: Record<string, RectAreaLight[]>,
  camera: PerspectiveCamera,
  animatingRef: MutableRefObject<boolean>,
  viewModeRef: MutableRefObject<ViewMode>,
) => {
  if (
    lightingStripLightMap &&
    viewModeRef.current === "roaming" &&
    !animatingRef.current
  ) {
    const cameraPos = camera.position;
    let openLightFieldList = [];
    if (cameraPos.x < WALL_55_POSITION_X) {
      openLightFieldList = ["tvBackground"];
    } else if (
      cameraPos.x >
      WALL_72_POSITION_X - WALL_THICKNESS / 2 - SHOE_CABINET_DEPTH
    ) {
      openLightFieldList = ["sideboard"];
    } else {
      openLightFieldList = ["decorateBackgroundPanel", "shoeCabinet"];
    }
    // 先将要隐藏的光源隐藏
    Object.keys(lightingStripLightMap).forEach((key: string) => {
      if (
        openLightFieldList.length === 0 ||
        !openLightFieldList.includes(key)
      ) {
        lightingStripLightMap[key]?.forEach((light: RectAreaLight) => {
          if (light.visible) {
            light.visible = false;
          }
        });
      }
    });
    // 再将要打开的光源打开
    Object.keys(lightingStripLightMap).forEach((key: string) => {
      if (openLightFieldList.length > 0 && openLightFieldList.includes(key)) {
        lightingStripLightMap[key]?.forEach((light: RectAreaLight) => {
          if (!light.visible) {
            light.visible = true;
          }
        });
      }
    });
  }
};

// 将所有灯带的光源隐藏(装饰背景板的除外)
export const hideAllLightingStripLight = (
  lightingStripLightMap: Record<string, RectAreaLight[]>,
) => {
  const keys = Object.keys(lightingStripLightMap);
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    if (key !== "decorateBackgroundPanel") {
      const lightList = lightingStripLightMap[key];
      lightList?.forEach((light: RectAreaLight) => {
        if (light.visible) {
          light.visible = false;
        }
      });
    }
  }
  lightingStripLightMap.decorateBackgroundPanel?.forEach(
    (light: RectAreaLight) => {
      if (!light.visible) {
        light.visible = true;
      }
    },
  );
};
