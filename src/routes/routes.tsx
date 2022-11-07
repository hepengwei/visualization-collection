import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "pages/Home";
import HtmlComingSoon from "pages/html/HtmlComingSoon";
import CssComingSoon from "pages/css/CssComingSoon";
import CanvasComingSoon from "pages/canvas/CanvasComingSoon";
import EchartsComingSoon from "pages/echarts/EchartsComingSoon";
import ThreejsComingSoon from "pages/threejs/ThreejsComingSoon";
import VisualDesign from "pages/html/VisualDesign";
import InteractiveDesign from "pages/html/InteractiveDesign";
import ComplexLayout from "pages/html/ComplexLayout";
import DynamicButtons from "pages/css/DynamicButtons";
import RichDynamicEffect from "pages/css/RichDynamicEffect";
import DynamicClock from "pages/canvas/DynamicClock";
import Searchlight from "pages/canvas/Searchlight";
import GlobuleInteraction from "pages/canvas/GlobuleInteraction";
import KillPlanetGame from "pages/canvas/KillPlanetGame";
import FreeFallingBody from 'pages/canvas/FreeFallingBody';
import CountDown from 'pages/canvas/CountDown';
import ParticlesBg from "pages/canvas/ParticlesBg";

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
        path: "/html/complexLayout",
        element: <ComplexLayout />,
      },
      {
        path: "/html/htmlComingSoon",
        element: <HtmlComingSoon />,
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
      {
        path: "/css/cssComingSoon",
        element: <CssComingSoon />,
      },
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
        path: "/canvas/canvasComingSoon",
        element: <CanvasComingSoon />,
      },
    ],
  },
  {
    path: "/echarts",
    children: [
      {
        path: "/echarts/echartsComingSoon",
        element: <EchartsComingSoon />,
      },
    ],
  },
  {
    path: "/threejs",
    children: [
      {
        path: "/threejs/threejsComingSoon",
        element: <ThreejsComingSoon />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: "/*",
    element: <Home />,
  },
];

export default routes;
