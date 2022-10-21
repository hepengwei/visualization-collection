// import { Suspense, lazy } from "react";
import React from "react";
import { RouteObject } from "react-router-dom";
import HtmlComingSoon from "@/pages/html/HtmlComingSoon";
import CssComingSoon from "pages/css/CssComingSoon";
import CanvasComingSoon from "pages/canvas/CanvasComingSoon";
import EchartsComingSoon from "pages/echarts/EchartsComingSoon";
import ThreejsComingSoon from "pages/threejs/ThreejsComingSoon";
import Home from "pages/Home";
import ComplexLayout from "@/pages/html/ComplexLayout";
import DynamicButtons from "pages/css/DynamicButtons";
import Searchlight from "pages/canvas/Searchlight";
import GlobuleInteraction from "pages/canvas/GlobuleInteraction";
import KillPlanetGame from "@/pages/canvas/KillPlanetGame";
import ParticlesBg from "pages/canvas/ParticlesBg";

export const contentRoutes: RouteObject[] = [
  {
    path: "/html",
    children: [
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
        path: "/css/cssComingSoon",
        element: <CssComingSoon />,
      },
    ],
  },
  {
    path: "/canvas",
    children: [
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
