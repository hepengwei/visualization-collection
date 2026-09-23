/**
 * 漫游模式下，根据相机位置实时计算，打开或关闭吊顶光源和灯带光源
 * 为了解决如果当前场景中如果光源太多，则页面会卡死的问题，提高性能
 */
import { MutableRefObject } from "react";
import { PerspectiveCamera, RectAreaLight, Group, PointLight } from "three";
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

export const LIGHT_GROUP_FIELD = {
  TV_BACKGROUND: "tvBackground", // 电视背景
  SIDEBOARD: "sideboard", // 餐边柜
  SHOE_CABINET: "shoeCabinet", // 鞋柜
  DECORATE_BACKGROUND_PANEL: "decorateBackgroundPanel", // 装饰背景板
  LIVING_ROOM_CABINET: "livingRoomCabinet", // 客厅柜
  MASTER_BEDROOM: "masterBedroom", // 主卧
  KIDS_BEDROOM: "kidsBedroom", // 儿童卧室
  SECONDARY_BEDROOM: "secondaryBedroom", // 次卧
  KITCHEN: "kitchen", // 厨房
};

export const dynamicOptimizationLightingStripRender = (
  camera: PerspectiveCamera,
  animatingRef: MutableRefObject<boolean>,
  viewModeRef: MutableRefObject<ViewMode>,
  lightingStripLightMap: Record<
    keyof typeof LIGHT_GROUP_FIELD,
    RectAreaLight[]
  >,
  lampList: Group[],
) => {
  if (
    lightingStripLightMap &&
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
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.MASTER_BEDROOM,
      ]);
      return;
    }
    // 儿童卧室范围
    if (x > WALL_28_POSITION_X && z < WALL_10_POSITION_Z) {
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.KIDS_BEDROOM,
      ]);
      return;
    }
    // 次卧范围
    if (x < WALL_65_POSITION_X && z > WALL_55_POSITION_Z) {
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.SECONDARY_BEDROOM,
      ]);
      return;
    }
    // 厨房范围
    if (x > WALL_72_POSITION_X && z > WALL_73_POSITION_Z) {
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.KITCHEN,
        LIGHT_GROUP_FIELD.SIDEBOARD,
      ]);
      return;
    }
    // 电视背景右边柜范围
    if (x < WALL_55_POSITION_X) {
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.TV_BACKGROUND,
      ]);
      return;
    }
    // 电视背景正面范围
    if (x < WALL_11_POSITION_X) {
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.LIVING_ROOM_CABINET,
        LIGHT_GROUP_FIELD.SHOE_CABINET,
      ]);
      return;
    }
    // 餐厅范围
    if (x > WALL_72_POSITION_X - WALL_THICKNESS / 2 - SHOE_CABINET_DEPTH) {
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.SIDEBOARD,
      ]);
      return;
    }
    // 装饰背景板范围
    if (cameraPos.z < WALL_58_POSITION_Z) {
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL,
        LIGHT_GROUP_FIELD.LIVING_ROOM_CABINET,
      ]);
      return;
    } else {
      // 鞋柜范围
      openLighting(lightingStripLightMap, lampList, [
        LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL,
        LIGHT_GROUP_FIELD.SHOE_CABINET,
      ]);
    }
  }
};

// 将要打开的光源打开，其余的关闭
const openLighting = (
  lightingStripLightMap: Record<string, RectAreaLight[]>,
  lampList: Group[],
  openLightFieldList: string[],
) => {
  // 先找出所有要打开的吊灯光源
  const openLampNameList: string[] = [];
  openLightFieldList.forEach((field: string) => {
    switch (field) {
      case LIGHT_GROUP_FIELD.TV_BACKGROUND:
        if (!openLampNameList.includes("客厅吊灯")) {
          openLampNameList.push("客厅吊灯");
        }
        if (!openLampNameList.includes("餐厅吊灯")) {
          openLampNameList.push("餐厅吊灯");
        }
        break;
      case LIGHT_GROUP_FIELD.SHOE_CABINET:
      case LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL:
      case LIGHT_GROUP_FIELD.LIVING_ROOM_CABINET:
        if (!openLampNameList.includes("客厅吊灯")) {
          openLampNameList.push("客厅吊灯");
        }
        if (!openLampNameList.includes("餐厅吊灯")) {
          openLampNameList.push("餐厅吊灯");
        }
        if (!openLampNameList.includes("外厕所吊灯")) {
          openLampNameList.push("外厕所吊灯");
        }
        break;
      case LIGHT_GROUP_FIELD.SIDEBOARD:
        if (!openLampNameList.includes("餐厅吊灯")) {
          openLampNameList.push("餐厅吊灯");
        }
        if (!openLampNameList.includes("厨房吊灯")) {
          openLampNameList.push("厨房吊灯");
        }
        if (!openLampNameList.includes("客厅吊灯")) {
          openLampNameList.push("客厅吊灯");
        }
        break;
      case LIGHT_GROUP_FIELD.MASTER_BEDROOM:
        if (!openLampNameList.includes("主卧吊灯")) {
          openLampNameList.push("主卧吊灯");
        }
        if (!openLampNameList.includes("主卧厕所吊灯")) {
          openLampNameList.push("主卧厕所吊灯");
        }
        break;
      case LIGHT_GROUP_FIELD.KIDS_BEDROOM:
        if (!openLampNameList.includes("儿童房吊灯")) {
          openLampNameList.push("儿童房吊灯");
        }
        break;
      case LIGHT_GROUP_FIELD.SECONDARY_BEDROOM:
        if (!openLampNameList.includes("次卧吊灯")) {
          openLampNameList.push("次卧吊灯");
        }
        break;
      case LIGHT_GROUP_FIELD.KITCHEN:
        if (!openLampNameList.includes("厨房吊灯")) {
          openLampNameList.push("厨房吊灯");
        }
        if (!openLampNameList.includes("餐厅吊灯")) {
          openLampNameList.push("餐厅吊灯");
        }
        break;
    }
  });

  // 先将要隐藏的光源隐藏
  // 隐藏吊灯光源
  lampList.forEach((lamp: Group) => {
    if (!openLampNameList.includes(lamp.name))
      lamp.traverse((child) => {
        if (child instanceof PointLight) {
          if (child.visible) {
            child.visible = false;
          }
        }
      });
  });
  // 隐藏灯带光源
  Object.keys(lightingStripLightMap).forEach((key: string) => {
    if (openLightFieldList.length === 0 || !openLightFieldList.includes(key)) {
      lightingStripLightMap[key]?.forEach((light: RectAreaLight) => {
        if (light.visible) {
          light.visible = false;
        }
      });
    }
  });

  // 再将要打开的光源打开
  // 打开吊灯光源
  lampList.forEach((lamp: Group) => {
    // @ts-ignore
    if (openLampNameList.includes(lamp.name) && lamp.switchStatus === "ON") {
      lamp.traverse((child) => {
        if (child instanceof PointLight) {
          if (!child.visible) {
            child.visible = true;
          }
        }
      });
    }
  });
  // 打开灯带光源
  if (openLightFieldList?.length > 0) {
    Object.keys(lightingStripLightMap).forEach((key: string) => {
      if (openLightFieldList.includes(key)) {
        lightingStripLightMap[key]?.forEach((light: RectAreaLight) => {
          if (!light.visible) {
            light.visible = true;
          }
        });
      }
    });
  }
};

// 将所有灯带的光源关闭(装饰背景板的除外)
export const hideAllLightingStripLight = (
  lightingStripLightMap: Record<string, RectAreaLight[]>,
) => {
  const keys = Object.keys(lightingStripLightMap);
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    if (key !== LIGHT_GROUP_FIELD.DECORATE_BACKGROUND_PANEL) {
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
