/**
 * 漫游模式下，根据相机位置实时计算，打开或关闭吊顶光源和灯带光源
 * 为了解决如果当前场景中如果光源太多，则页面会卡死的问题，提高性能
 */
import { MutableRefObject } from "react";
import { PerspectiveCamera, RectAreaLight, PointLight } from "three";
import type { ViewMode } from "../function/modeToggle";
import {
  WALL_THICKNESS,
  WALL_11_POSITION_X,
  WALL_19_POSITION_X,
  WALL_28_POSITION_X,
  WALL_55_POSITION_X,
  WALL_65_POSITION_X,
  WALL_72_POSITION_X,
  WALL_10_POSITION_Z,
  WALL_20_POSITION_Z,
  WALL_55_POSITION_Z,
  WALL_58_POSITION_Z,
  WALL_73_POSITION_Z,
} from "../hardDecoration/addHouseStructure";
import { SHOE_CABINET_DEPTH } from "../hardDecoration/addShoeCabinet";

let currentZoneIndex = -1;

export const LIGHT_GROUP_FIELD = {
  TV_BACKGROUND: "tvBackground", // 电视背景
  SIDEBOARD: "sideboard", // 餐边柜
  SHOE_CABINET: "shoeCabinet", // 鞋柜
  DECORATE_BACKGROUND_PANEL: "decorateBackgroundPanel", // 装饰背景板
  LIVING_ROOM_CABINET: "livingRoomCabinet", // 客厅柜
  MASTER_BEDROOM: "masterBedroom", // 主卧
  KIDS_BEDROOM: "kidsBedroom", // 儿童房
  SECONDARY_BEDROOM: "secondaryBedroom", // 次卧
  KITCHEN: "kitchen", // 厨房
};

export const dynamicOptimizationLightingStripRender = (
  camera: PerspectiveCamera,
  animatingRef: MutableRefObject<boolean>,
  viewModeRef: MutableRefObject<ViewMode>,
  lightStripLightingMap: Record<
    keyof typeof LIGHT_GROUP_FIELD,
    RectAreaLight[]
  >,
  lampLightingList: PointLight[],
) => {
  if (
    lightStripLightingMap &&
    viewModeRef.current === "roaming" &&
    !animatingRef.current
  ) {
    const cameraPos = camera.position;
    const { x, y, z } = cameraPos;

    // 主卧和主卧厕所范围
    if (
      (x < WALL_11_POSITION_X && z < WALL_10_POSITION_Z) ||
      (x < WALL_19_POSITION_X && z < WALL_20_POSITION_Z)
    ) {
      if (currentZoneIndex === 0) return;
      currentZoneIndex = 0;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.MASTER_BEDROOM,
      ]);
      return;
    }
    // 儿童房范围
    if (x > WALL_28_POSITION_X && z < WALL_10_POSITION_Z) {
      if (currentZoneIndex === 1) return;
      currentZoneIndex = 1;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.KIDS_BEDROOM,
      ]);
      return;
    }
    // 次卧范围
    if (x < WALL_65_POSITION_X && z > WALL_55_POSITION_Z) {
      if (currentZoneIndex === 2) return;
      currentZoneIndex = 2;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.SECONDARY_BEDROOM,
      ]);
      return;
    }
    // 厨房范围
    if (x > WALL_72_POSITION_X && z > WALL_73_POSITION_Z) {
      if (currentZoneIndex === 3) return;
      currentZoneIndex = 3;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.KITCHEN,
        LIGHT_GROUP_FIELD.SIDEBOARD,
      ]);
      return;
    }
    // 电视背景右边柜范围
    if (x < WALL_55_POSITION_X) {
      if (currentZoneIndex === 4) return;
      currentZoneIndex = 4;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.TV_BACKGROUND,
      ]);
      return;
    }
    // 电视背景正面范围
    if (x < WALL_11_POSITION_X) {
      if (currentZoneIndex === 5) return;
      currentZoneIndex = 5;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.LIVING_ROOM_CABINET,
        LIGHT_GROUP_FIELD.SHOE_CABINET,
      ]);
      return;
    }
    // 餐厅范围
    if (x > WALL_72_POSITION_X - WALL_THICKNESS / 2 - SHOE_CABINET_DEPTH) {
      if (currentZoneIndex === 6) return;
      currentZoneIndex = 6;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.SIDEBOARD,
      ]);
      return;
    }
    // 装饰背景板范围
    if (cameraPos.z < WALL_58_POSITION_Z) {
      if (currentZoneIndex === 7) return;
      currentZoneIndex = 7;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL,
        LIGHT_GROUP_FIELD.LIVING_ROOM_CABINET,
      ]);
      return;
    } else {
      // 鞋柜范围
      if (currentZoneIndex === 8) return;
      currentZoneIndex = 8;
      openLighting(lightStripLightingMap, lampLightingList, [
        LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL,
        LIGHT_GROUP_FIELD.SHOE_CABINET,
      ]);
    }
  }
};

// 将要打开的光源打开，其余的关闭
const openLighting = (
  lightStripLightingMap: Record<string, RectAreaLight[]>,
  lampLightingList: PointLight[],
  openLightFieldList: string[],
) => {
  // 先找出所有要打开的吊灯光源
  const openLampLightingNameList: string[] = [];
  openLightFieldList.forEach((field: string) => {
    switch (field) {
      case LIGHT_GROUP_FIELD.TV_BACKGROUND:
        if (!openLampLightingNameList.includes("客厅吊灯光源")) {
          openLampLightingNameList.push("客厅吊灯光源");
        }
        if (!openLampLightingNameList.includes("餐厅吊灯光源")) {
          openLampLightingNameList.push("餐厅吊灯光源");
        }
        break;
      case LIGHT_GROUP_FIELD.SHOE_CABINET:
      case LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL:
      case LIGHT_GROUP_FIELD.LIVING_ROOM_CABINET:
        if (!openLampLightingNameList.includes("客厅吊灯光源")) {
          openLampLightingNameList.push("客厅吊灯光源");
        }
        if (!openLampLightingNameList.includes("餐厅吊灯光源")) {
          openLampLightingNameList.push("餐厅吊灯光源");
        }
        if (!openLampLightingNameList.includes("外厕所吊灯光源")) {
          openLampLightingNameList.push("外厕所吊灯光源");
        }
        break;
      case LIGHT_GROUP_FIELD.SIDEBOARD:
        if (!openLampLightingNameList.includes("餐厅吊灯光源")) {
          openLampLightingNameList.push("餐厅吊灯光源");
        }
        if (!openLampLightingNameList.includes("厨房吊灯光源")) {
          openLampLightingNameList.push("厨房吊灯光源");
        }
        if (!openLampLightingNameList.includes("客厅吊灯光源")) {
          openLampLightingNameList.push("客厅吊灯光源");
        }
        break;
      case LIGHT_GROUP_FIELD.MASTER_BEDROOM:
        if (!openLampLightingNameList.includes("主卧吊灯光源")) {
          openLampLightingNameList.push("主卧吊灯光源");
        }
        if (!openLampLightingNameList.includes("主卧厕所吊灯光源")) {
          openLampLightingNameList.push("主卧厕所吊灯光源");
        }
        break;
      case LIGHT_GROUP_FIELD.KIDS_BEDROOM:
        if (!openLampLightingNameList.includes("儿童房吊灯光源")) {
          openLampLightingNameList.push("儿童房吊灯光源");
        }
        break;
      case LIGHT_GROUP_FIELD.SECONDARY_BEDROOM:
        if (!openLampLightingNameList.includes("次卧吊灯光源")) {
          openLampLightingNameList.push("次卧吊灯光源");
        }
        break;
      case LIGHT_GROUP_FIELD.KITCHEN:
        if (!openLampLightingNameList.includes("厨房吊灯光源")) {
          openLampLightingNameList.push("厨房吊灯光源");
        }
        if (!openLampLightingNameList.includes("餐厅吊灯光源")) {
          openLampLightingNameList.push("餐厅吊灯光源");
        }
        break;
    }
  });

  // 先将要隐藏的光源隐藏
  // 隐藏吊灯光源
  lampLightingList.forEach((lampLighting: PointLight) => {
    if (
      !openLampLightingNameList.includes(lampLighting.name) &&
      lampLighting.visible
    ) {
      lampLighting.visible = false;
    }
  });
  // 隐藏灯带光源
  Object.keys(lightStripLightingMap).forEach((key: string) => {
    if (openLightFieldList.length === 0 || !openLightFieldList.includes(key)) {
      lightStripLightingMap[key]?.forEach((light: RectAreaLight) => {
        if (light.visible) {
          light.visible = false;
        }
      });
    }
  });

  // 再将要打开的光源打开
  // 打开吊灯光源
  lampLightingList.forEach((lampLighting: PointLight) => {
    if (
      openLampLightingNameList.includes(lampLighting.name) &&
      lampLighting.parent &&
      // @ts-ignore
      lampLighting.parent.switchStatus === "ON" &&
      !lampLighting.visible
    ) {
      lampLighting.visible = true;
    }
  });
  // 打开灯带光源
  if (openLightFieldList?.length > 0) {
    Object.keys(lightStripLightingMap).forEach((key: string) => {
      if (openLightFieldList.includes(key)) {
        lightStripLightingMap[key]?.forEach((light: RectAreaLight) => {
          if (!light.visible) {
            light.visible = true;
          }
        });
      }
    });
  }
};

// 将所有灯带的光源关闭(装饰背景板的除外)
export const hideAllLightStripLighting = (
  lightStripLightingMap: Record<string, RectAreaLight[]>,
) => {
  currentZoneIndex = -1;
  const keys = Object.keys(lightStripLightingMap);
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    if (key !== LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL) {
      const lightList = lightStripLightingMap[key];
      lightList?.forEach((light: RectAreaLight) => {
        if (light.visible) {
          light.visible = false;
        }
      });
    }
  }
  lightStripLightingMap.decorateBackgroundPanel?.forEach(
    (light: RectAreaLight) => {
      if (!light.visible) {
        light.visible = true;
      }
    },
  );
};
