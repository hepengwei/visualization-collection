import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
} from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BuildOutlined,
  FormatPainterOutlined,
  PlayCircleOutlined,
  LineChartOutlined,
  RocketOutlined,
  FireOutlined,
  FileImageOutlined,
  // VideoCameraAddOutlined,
} from '@ant-design/icons';
import { useDebounceFn } from 'ahooks';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useIntl } from 'react-intl';
import { useGlobalContext } from '@/hooks/useGlobalContext';
import styles from './index.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <p className={styles.menuLabel}>{label}</p>,
    type,
  } as MenuItem;
}

const Menus: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { setMenuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const items: MenuItem[] = [
    getItem(
      intl.formatMessage({ id: 'menu.htmlVision' }),
      'html',
      <BuildOutlined />,
      [
        getItem(
          intl.formatMessage({ id: 'menu.htmlVision.visualDesign' }),
          'visualDesign'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.htmlVision.interactiveDesign' }),
          'interactiveDesign'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.htmlVision.backgroundPattern' }),
          'backgroundEffect'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.htmlVision.complexLayout' }),
          'complexLayout'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.htmlVision.applicationPageFrame' }),
          'appPageFrame'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.htmlVision.utilitarianFunction' }),
          'utilitarianFunction'
        ),
      ]
    ),
    getItem(
      intl.formatMessage({ id: 'menu.cssDynamicEffect' }),
      'css',
      <FormatPainterOutlined />,
      [
        getItem(
          intl.formatMessage({
            id: 'menu.cssDynamicEffect.dynamicEffectButton',
          }),
          'dynamicButtons'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.cssDynamicEffect.richDynamicEffect' }),
          'richDynamicEffect'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.cssDynamicEffect.generateRegularPolygon',
          }),
          'generateRegularPolygon'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.cssDynamicEffect.generateShadow',
          }),
          'generateShadow'
        ),
        // getItem(
        //   intl.formatMessage({
        //     id: "menu.cssDynamicEffect.musicVisualization",
        //   }),
        //   "musicVisualization"
        // ),
      ]
    ),
    getItem(
      intl.formatMessage({ id: 'menu.canvasDynamicEffect' }),
      'canvas',
      <PlayCircleOutlined />,
      [
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.sphereCollisionExample',
          }),
          'sphereCollisionExample'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.canvasDynamicEffect.dynamicClock' }),
          'dynamicClock'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.searchlightEffect',
          }),
          'searchlight'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.sphereCollisionInteraction',
          }),
          'globuleInteraction'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.destroyThePlanetGame',
          }),
          'killPlanetGame'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.sphereFreeFallInteraction',
          }),
          'freeFallingBody'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.coolCountdownAnimation',
          }),
          'countDown'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.dynamicParticleBackground',
          }),
          'particlesBg'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.canvasDynamicEffect.rippleEffect' }),
          'rippleFloatOnTheWater'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.flowerBloomingAnimation',
          }),
          'flowerBloom'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.canvasDynamicEffect.codeBackgroundWall',
          }),
          'codeBgWall'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.canvasDynamicEffect.wordDance' }),
          'wordDance'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.canvasDynamicEffect.scratch' }),
          'scratch'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.canvasDynamicEffect.matchLine' }),
          'matchLine'
        ),
      ]
    ),
    getItem(
      intl.formatMessage({ id: 'menu.echartsInteraction' }),
      'echarts',
      <LineChartOutlined />,
      [
        getItem(
          intl.formatMessage({ id: 'menu.echartsInteraction.barCharts' }),
          'bar'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.echartsInteraction.pieCharts' }),
          'pie'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.echartsInteraction.treeCharts' }),
          'tree'
        ),
      ]
    ),
    getItem(
      intl.formatMessage({ id: 'menu.threeJs3D' }),
      'threejs',
      <RocketOutlined />,
      [
        getItem(
          intl.formatMessage({ id: 'menu.threeJs3D.appPageFrame' }),
          'threejsAppPageFrame'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.threeJs3D.carShow' }),
          'carShow'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.threeJs3D.rubiksCube' }),
          'rubiksCube'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.threeJs3D.throwDice' }),
          'throwDice'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.threeJs3D.mapDisplay' }),
          'mapDisplay'
        ),
        getItem(
          intl.formatMessage({ id: 'menu.threeJs3D.earthDisplay' }),
          'earthDisplay'
        ),
      ]
    ),
    getItem(
      intl.formatMessage({ id: 'menu.AIApplication' }),
      'AIApplication',
      <FireOutlined />,
      [
        getItem(
          intl.formatMessage({
            id: 'menu.AIApplication.humanPostureDetection',
          }),
          'humanPostureDetection'
        ),
        getItem(
          intl.formatMessage({
            id: 'menu.AIApplication.notBlockPeopleBarrage',
          }),
          'notBlockPeopleBarrage'
        ),
      ]
    ),
    getItem(
      intl.formatMessage({ id: 'menu.imageProcessingTool' }),
      'imageProcessingTool',
      <FileImageOutlined />
    ),
    // getItem(
    //   intl.formatMessage({ id: 'menu.pdfProcessingTool' }),
    //   'pdfProcessingTool',
    //   <FileImageOutlined />
    // ),
    // getItem(
    //   intl.formatMessage({ id: "menu.videoProcessingTool" }),
    //   "videoProcessingTool",
    //   <VideoCameraAddOutlined />
    // ),
  ];

  const updateMenuWidth = useCallback(
    useDebounceFn(
      () => {
        const containerNode = ReactDOM.findDOMNode(
          containerRef.current
        ) as HTMLDivElement;
        if (containerNode) {
          setMenuWidth(containerNode.clientWidth);
        }
      },
      { wait: 360 }
    ).run,
    []
  );

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onMenu = (options: { keyPath: string[] }) => {
    const { keyPath } = options;
    const routePath = keyPath.reduce((result, item) => {
      result = `/${item}${result}`;
      return result;
    }, '');
    navigate(routePath);
  };

  const selectedKeys = useMemo(() => {
    const { pathname } = location;
    const result = [];
    if (pathname) {
      const arr = pathname.split('/');
      const key = arr[arr.length - 1];
      if (key) {
        result.push(key);
      }
    }
    return result;
  }, [location]);

  const defaultOpenKeys = useMemo(() => {
    const { pathname } = location;
    if (pathname) {
      const arr = pathname.split('/');
      if (arr.length >= 2 && arr[1]) {
        return [arr[1]];
      }
    }
    return ['html'];
  }, [location]);

  useEffect(() => {
    updateMenuWidth();
  }, [collapsed]);

  useEffect(() => {
    window.addEventListener('resize', updateMenuWidth);

    return () => {
      window.removeEventListener('resize', updateMenuWidth);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.topBox}>
        <div className={styles.top}>
          <Button
            type='primary'
            onClick={toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>

        <Menu
          defaultOpenKeys={defaultOpenKeys}
          selectedKeys={selectedKeys}
          mode='inline'
          theme='dark'
          inlineCollapsed={collapsed}
          items={items}
          onClick={onMenu}
        />
      </div>

      <div className={styles.bottom}>
        {!collapsed && (
          <span>{intl.formatMessage({ id: 'common.keepUpdating' })}</span>
        )}
      </div>
    </div>
  );
};

export default Menus;
