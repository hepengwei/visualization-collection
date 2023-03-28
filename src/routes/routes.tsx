import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "pages/Home";
import EchartsComingSoon from "pages/echarts/EchartsComingSoon";
import ThreejsComingSoon from "pages/threejs/ThreejsComingSoon";
import VisualDesign from "pages/html/VisualDesign";
import InteractiveDesign from "pages/html/InteractiveDesign";
import BackgroundEffect from "pages/html/BackgroundEffect";
import ComplexLayout from "pages/html/ComplexLayout";
import AppPageFrame from "pages/html/AppPageFrame";
import UtilitarianFunction from "pages/html/UtilitarianFunction";
import DynamicButtons from "pages/css/DynamicButtons";
import RichDynamicEffect from "pages/css/RichDynamicEffect";
import MusicVisualization from "pages/css/MusicVisualization";
import DynamicClock from "pages/canvas/DynamicClock";
import Searchlight from "pages/canvas/Searchlight";
import GlobuleInteraction from "pages/canvas/GlobuleInteraction";
import KillPlanetGame from "pages/canvas/KillPlanetGame";
import FreeFallingBody from "pages/canvas/FreeFallingBody";
import CountDown from "pages/canvas/CountDown";
import ParticlesBg from "pages/canvas/ParticlesBg";
import RippleFloatOnTheWater from "pages/canvas/RippleFloatOnTheWater";
import FlowerBloom from "pages/canvas/FlowerBloom";
import CodeBgWall from "pages/canvas/CodeBgWall";
import WordDance from "pages/canvas/WordDance";
import HumanPostureDetection from "pages/AIApplication/HumanPostureDetection";
import NotBlockPeopleBarrage from "pages/AIApplication/NotBlockPeopleBarrage";
import GameImage from "pages/GameImage";
import Bar from "pages/echarts/Bar";
import Pie from "pages/echarts/Pie";

export const contentRoutes: RouteObject[] = [
  {
    path: "/html",
    children: [
      {
        path: "/html/visualDesign",
        element: <VisualDesign />,
      },
      {
        path: "/html/interactiveDesign",
        element: <InteractiveDesign />,
      },
      {
        path: "/html/backgroundEffect",
        element: <BackgroundEffect />,
      },
      {
        path: "/html/complexLayout",
        element: <ComplexLayout />,
      },
      {
        path: "/html/appPageFrame",
        element: <AppPageFrame />,
      },
      {
        path: "/html/utilitarianFunction",
        element: <UtilitarianFunction />,
      },
    ],
  },
  {
    path: "/css",
    children: [
      {
        path: "/css/dynamicButtons",
        element: <DynamicButtons />,
      },
      {
        path: "/css/richDynamicEffect",
        element: <RichDynamicEffect />,
      },
      // {
      //   path: "/css/musicVisualization",
      //   element: <MusicVisualization />,
      // },
    ],
  },
  {
    path: "/canvas",
    children: [
      {
        path: "/canvas/dynamicClock",
        element: <DynamicClock />,
      },
      {
        path: "/canvas/searchlight",
        element: <Searchlight />,
      },
      {
        path: "/canvas/globuleInteraction",
        element: <GlobuleInteraction />,
      },
      {
        path: "/canvas/killPlanetGame",
        element: <KillPlanetGame />,
      },
      {
        path: "/canvas/freeFallingBody",
        element: <FreeFallingBody />,
      },
      {
        path: "/canvas/countDown",
        element: <CountDown />,
      },
      {
        path: "/canvas/particlesBg",
        element: <ParticlesBg />,
      },
      {
        path: "/canvas/rippleFloatOnTheWater",
        element: <RippleFloatOnTheWater />,
      },
      {
        path: "/canvas/flowerBloom",
        element: <FlowerBloom />,
      },
      {
        path: "/canvas/codeBgWall",
        element: <CodeBgWall />,
      },
      {
        path: "/canvas/wordDance",
        element: <WordDance />,
      },
    ],
  },
  {
    path: "/echarts",
    children: [
      {
        path: "/echarts/bar",
        element: <Bar />,
      },
      {
        path: "/echarts/pie",
        element: <Pie />,
      },
    ],
  },
  // {
  //   path: "/threejs",
  //   children: [
  //     {
  //       path: "/threejs/threejsComingSoon",
  //       element: <ThreejsComingSoon />,
  //     },
  //   ],
  // },
  {
    path: "/AIApplication",
    children: [
      {
        path: "/AIApplication/humanPostureDetection",
        element: <HumanPostureDetection />,
      },
      {
        path: "/AIApplication/notBlockPeopleBarrage",
        element: <NotBlockPeopleBarrage />,
      },
    ],
  },
  {
    path: "/gameImage",
    element: <GameImage />,
  },
];

const routes: RouteObject[] = [
  {
    path: "/*",
    element: <Home />,
  },
];

export default routes;
