import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "pages/Home";
import { supportLazyElement } from "utils/util";
// import VisualDesign from "pages/html/VisualDesign";
// import InteractiveDesign from "pages/html/InteractiveDesign";
// import BackgroundEffect from "pages/html/BackgroundEffect";
// import ComplexLayout from "pages/html/ComplexLayout";
// import AppPageFrame from "pages/html/AppPageFrame";
// import UtilitarianFunction from "pages/html/UtilitarianFunction";
// import DynamicButtons from "pages/css/DynamicButtons";
// import RichDynamicEffect from "pages/css/RichDynamicEffect";
// import GenerateRegularPolygon from "pages/css/GenerateRegularPolygon";
// import GenerateShadow from "pages/css/GenerateShadow";
// import GenerateScrollBar from "pages/css/GenerateScrollBar";
// import MusicVisualization from "pages/css/MusicVisualization";
// import SphereCollisionExample from "pages/canvas/SphereCollisionExample";
// import DynamicClock from "pages/canvas/DynamicClock";
// import Searchlight from "pages/canvas/Searchlight";
// import GlobuleInteraction from "pages/canvas/GlobuleInteraction";
// import KillPlanetGame from "pages/canvas/KillPlanetGame";
// import FreeFallingBody from "pages/canvas/FreeFallingBody";
// import CountDown from "pages/canvas/CountDown";
// import ParticlesBg from "pages/canvas/ParticlesBg";
// import RippleFloatOnTheWater from "pages/canvas/RippleFloatOnTheWater";
// import FlowerBloom from "pages/canvas/FlowerBloom";
// import CodeBgWall from "pages/canvas/CodeBgWall";
// import WordDance from "pages/canvas/WordDance";
// import Scratch from "pages/canvas/Scratch";
// import MatchLine from "pages/canvas/MatchLine";
// import Bar from "pages/echarts/Bar";
// import Pie from "pages/echarts/Pie";
// import Tree from "pages/echarts/Tree";
// import AppPage3DFrame from "pages/threejs/AppPageFrame";
// import CarShow from "pages/threejs/CarShow";
// import RubiksCube from "pages/threejs/RubiksCube";
// import ThrowDice from "pages/threejs/ThrowDice";
// import MapDisplay from "pages/threejs/MapDisplay";
// import EarthDisplay from "pages/threejs/EarthDisplay";
// import HumanPostureDetection from "pages/AIApplication/HumanPostureDetection";
// import NotBlockPeopleBarrage from "pages/AIApplication/NotBlockPeopleBarrage";
// import ImageProcessingTool from "pages/ImageProcessingTool";
// import PDFProcessingTool from "pages/PDFProcessingTool";
// import VideoProcessingTool from "pages/VideoProcessingTool";

const VisualDesign = () => import("pages/html/VisualDesign");
const InteractiveDesign = () => import("pages/html/InteractiveDesign");
const BackgroundEffect = () => import("pages/html/BackgroundEffect");
const ComplexLayout = () => import("pages/html/ComplexLayout");
const AppPageFrame = () => import("pages/html/AppPageFrame");
const UtilitarianFunction = () => import("pages/html/UtilitarianFunction");
const DynamicButtons = () => import("pages/css/DynamicButtons");
const RichDynamicEffect = () => import("pages/css/RichDynamicEffect");
const GenerateRegularPolygon = () => import("pages/css/GenerateRegularPolygon");
const GenerateShadow = () => import("pages/css/GenerateShadow");
const GenerateScrollBar = () => import("pages/css/GenerateScrollBar");
const SphereCollisionExample = () =>
  import("pages/canvas/SphereCollisionExample");
const DynamicClock = () => import("pages/canvas/DynamicClock");
const Searchlight = () => import("pages/canvas/Searchlight");
const GlobuleInteraction = () => import("pages/canvas/GlobuleInteraction");
const KillPlanetGame = () => import("pages/canvas/KillPlanetGame");
const FreeFallingBody = () => import("pages/canvas/FreeFallingBody");
const CountDown = () => import("pages/canvas/CountDown");
const ParticlesBg = () => import("pages/canvas/ParticlesBg");
const RippleFloatOnTheWater = () =>
  import("pages/canvas/RippleFloatOnTheWater");
const FlowerBloom = () => import("pages/canvas/FlowerBloom");
const CodeBgWall = () => import("pages/canvas/CodeBgWall");
const WordDance = () => import("pages/canvas/WordDance");
const Scratch = () => import("pages/canvas/Scratch");
const MatchLine = () => import("pages/canvas/MatchLine");
const Bar = () => import("pages/echarts/Bar");
const Pie = () => import("pages/echarts/Pie");
const Tree = () => import("pages/echarts/Tree");
const AppPage3DFrame = () => import("pages/threejs/AppPageFrame");
const CarShow = () => import("pages/threejs/CarShow");
const RubiksCube = () => import("pages/threejs/RubiksCube");
const ThrowDice = () => import("pages/threejs/ThrowDice");
const MapDisplay = () => import("pages/threejs/MapDisplay");
const EarthDisplay = () => import("pages/threejs/EarthDisplay");
const HumanPostureDetection = () =>
  import("pages/AIApplication/HumanPostureDetection");
const NotBlockPeopleBarrage = () =>
  import("pages/AIApplication/NotBlockPeopleBarrage");
const ImageProcessingTool = () => import("pages/ImageProcessingTool");
const PDFProcessingTool = () => import("pages/PDFProcessingTool");

const contentRoutes: Record<string, any>[] = [
  {
    path: "/html",
    children: [
      {
        path: "/html/visualDesign",
        element: VisualDesign,
      },
      {
        path: "/html/interactiveDesign",
        element: InteractiveDesign,
      },
      {
        path: "/html/backgroundEffect",
        element: BackgroundEffect,
      },
      {
        path: "/html/complexLayout",
        element: ComplexLayout,
      },
      {
        path: "/html/appPageFrame",
        element: AppPageFrame,
      },
      {
        path: "/html/utilitarianFunction",
        element: UtilitarianFunction,
      },
    ],
  },
  {
    path: "/css",
    children: [
      {
        path: "/css/dynamicButtons",
        element: DynamicButtons,
      },
      {
        path: "/css/richDynamicEffect",
        element: RichDynamicEffect,
      },
      {
        path: "/css/generateRegularPolygon",
        element: GenerateRegularPolygon,
      },
      {
        path: "/css/generateShadow",
        element: GenerateShadow,
      },
      {
        path: "/css/generateScrollBar",
        element: GenerateScrollBar,
      },
      // {
      //   path: "/css/musicVisualization",
      //   element: MusicVisualization,
      // },
    ],
  },
  {
    path: "/canvas",
    children: [
      {
        path: "/canvas/sphereCollisionExample",
        element: SphereCollisionExample,
      },
      {
        path: "/canvas/dynamicClock",
        element: DynamicClock,
      },
      {
        path: "/canvas/searchlight",
        element: Searchlight,
      },
      {
        path: "/canvas/globuleInteraction",
        element: GlobuleInteraction,
      },
      {
        path: "/canvas/killPlanetGame",
        element: KillPlanetGame,
      },
      {
        path: "/canvas/freeFallingBody",
        element: FreeFallingBody,
      },
      {
        path: "/canvas/countDown",
        element: CountDown,
      },
      {
        path: "/canvas/particlesBg",
        element: ParticlesBg,
      },
      {
        path: "/canvas/rippleFloatOnTheWater",
        element: RippleFloatOnTheWater,
      },
      {
        path: "/canvas/flowerBloom",
        element: FlowerBloom,
      },
      {
        path: "/canvas/codeBgWall",
        element: CodeBgWall,
      },
      {
        path: "/canvas/wordDance",
        element: WordDance,
      },
      {
        path: "/canvas/scratch",
        element: Scratch,
      },
      {
        path: "/canvas/matchLine",
        element: MatchLine,
      },
    ],
  },
  {
    path: "/echarts",
    children: [
      {
        path: "/echarts/bar",
        element: Bar,
      },
      {
        path: "/echarts/pie",
        element: Pie,
      },
      {
        path: "/echarts/tree",
        element: Tree,
      },
    ],
  },
  {
    path: "/threejs",
    children: [
      {
        path: "/threejs/threejsAppPageFrame",
        element: AppPage3DFrame,
      },
      {
        path: "/threejs/carShow",
        element: CarShow,
      },
      {
        path: "/threejs/rubiksCube",
        element: RubiksCube,
      },
      {
        path: "/threejs/throwDice",
        element: ThrowDice,
      },
      {
        path: "/threejs/mapDisplay",
        element: MapDisplay,
      },
      {
        path: "/threejs/earthDisplay",
        element: EarthDisplay,
      },
    ],
  },
  {
    path: "/AIApplication",
    children: [
      {
        path: "/AIApplication/humanPostureDetection",
        element: HumanPostureDetection,
      },
      {
        path: "/AIApplication/notBlockPeopleBarrage",
        element: NotBlockPeopleBarrage,
      },
    ],
  },
  {
    path: "/imageProcessingTool",
    element: ImageProcessingTool,
  },
  {
    path: "/pdfProcessingTool",
    element: PDFProcessingTool,
  },
  // {
  //   path: "/videoProcessingTool",
  //   element: VideoProcessingTool,
  // },
];

supportLazyElement(contentRoutes);
export { contentRoutes };

const routes: RouteObject[] = [
  {
    path: "/*",
    element: <Home />,
  },
];

export default routes;
