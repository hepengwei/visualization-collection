/**
 * 炫酷3D应用页面
 */
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { useDebounceFn } from "ahooks";
import { useGlobalContext } from "hooks/useGlobalContext";
import useInitialize from "hooks/threejs/useInitialize";
import { loadGlb } from "utils/threejsUtil";
import moonImg from "images/threejs/moon.jpg";
import moonDisplacemenImg from "images/threejs/normal.jpg";
import styles from "./index.module.scss";

const initRotateY = [0, -1.5, 0];

const AppPageFrame = () => {
  const { menuWidth } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const gltfList = useRef<GLTF[]>([]);
  const pageIndex = useRef<number>(0);
  const scrollCameraTimeline = useRef<any>(gsap.timeline());
  const contentTween = useRef<gsap.core.Tween | null>(null);

  const initializeHandle = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => {
    if (containerRef.current) {
      const { clientHeight } = containerRef.current;
      setContainerHeight(clientHeight);

      // 创建并添加3个平行光
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 0, 1);
      scene.add(light);
      const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
      light2.position.set(0, 0, -1);
      scene.add(light2);
      const light3 = new THREE.DirectionalLight(0xffffff, 0.5);
      light3.position.set(-1, 1, 1);
      scene.add(light3);

      // 创建并添加3个飞行器模型
      loadGlb("./public/model/spaceStation.glb").then((gltf: GLTF) => {
        gltf.scene.scale.set(0.15, 0.15, 0.15);
        gltf.scene.position.set(5, 0, 0);
        scene.add(gltf.scene);
        gltfList.current.push(gltf);
      });
      loadGlb("./public/model/spaceStation2.glb").then((gltf: GLTF) => {
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(5, -20, 0);
        gltf.scene.rotation.set(0, initRotateY[1], 0);
        scene.add(gltf.scene);
        gltfList.current.push(gltf);
      });
      loadGlb("./public/model/spaceStation3.glb").then((gltf: GLTF) => {
        gltf.scene.scale.set(0.18, 0.18, 0.18);
        gltf.scene.position.set(5, -40, 0);
        scene.add(gltf.scene);
        gltfList.current.push(gltf);
      });

      // 创建并添加行星，创建10组moonInstance
      for (let i = 0; i < 10; i++) {
        // 每组创建100个小行星
        const moonGeometry = new THREE.SphereGeometry(1.5, 10, 10);
        // const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const moonTexture = new THREE.TextureLoader().load(moonImg);
        const moonDisplacemenTexture = new THREE.TextureLoader().load(
          moonDisplacemenImg
        );
        const moonMaterial = new THREE.MeshStandardMaterial({
          map: moonTexture,
          displacementMap: moonDisplacemenTexture, // 位移贴图，制造凹凸
          displacementScale: 0.5, // 凹凸比例
        });

        const moonInstance = new THREE.InstancedMesh(
          moonGeometry,
          moonMaterial,
          100
        );

        for (let i = 0; i < 1000; i++) {
          const x = Math.random() * 1000 - 500;
          const y = Math.random() * 1000 - 500;
          const z = Math.random() * 1000 - 500;

          const matrix = new THREE.Matrix4();
          matrix.makeTranslation(x, y, z);
          moonInstance.setMatrixAt(i, matrix);
          const size = Math.random() * 20 - 8;
          matrix.makeScale(size, size, size);
        }

        gsap.to(moonInstance.position, {
          duration: Math.random() * 10 + 5,
          ease: "linear",
          z: -1000,
          repeat: -1,
        });
        scene.add(moonInstance);
      }
    }
  };

  const resizeHandle = () => {
    if (containerRef.current) {
      const { clientHeight } = containerRef.current;
      setContainerHeight(clientHeight);
      // 更新content元素的top值
      if (contentRef.current) {
        contentRef.current.style.top = `-${pageIndex.current * clientHeight}px`;
      }
    }
  };

  const { camera, resize } = useInitialize(
    containerRef,
    initializeHandle,
    resizeHandle
  );

  const onMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      const x = (e.clientX / clientWidth) * 2 - 1;
      const y = (e.clientY / clientHeight) * 2 - 1;

      const timeline = gsap.timeline();
      const gltf = gltfList.current[pageIndex.current];
      if (gltf) {
        timeline.to(gltf.scene.rotation, {
          duration: 0.8,
          x: y * 0.5,
          y: x * 0.5 + initRotateY[pageIndex.current],
        });
      }
    }
  };

  const onMouseWheel = useDebounceFn(
    (e: any) => {
      if (camera) {
        if (
          scrollCameraTimeline.current &&
          scrollCameraTimeline.current.isActive()
        )
          return;
        if (
          e.wheelDelta < 0 &&
          pageIndex.current < gltfList.current.length - 1
        ) {
          pageIndex.current = pageIndex.current + 1;
          scrollCameraTimeline.current.to(camera.position, {
            duration: 0.8,
            y: pageIndex.current * -20,
          });
        } else if (e.wheelDelta > 0 && pageIndex.current > 0) {
          pageIndex.current = pageIndex.current - 1;
          scrollCameraTimeline.current.to(camera.position, {
            duration: 0.8,
            y: pageIndex.current * -20,
          });
        } else {
          return;
        }
      }
      if (containerRef.current && contentRef.current) {
        const { clientHeight } = containerRef.current;
        contentTween.current = gsap.to(contentRef.current, {
          duration: 0.8,
          top: `-${pageIndex.current * clientHeight}px`,
          onComplete: () => {
            contentTween.current?.kill();
            contentTween.current = null;
          },
        });
      }
    },
    { wait: 100 }
  );

  useLayoutEffect(() => {
    resize();
  }, [menuWidth]);

  useEffect(() => {
    window.addEventListener("mousewheel", onMouseWheel.run);

    return () => {
      window.removeEventListener("mousewheel", onMouseWheel.run);
    };
  }, []);

  return (
    <div
      className={styles.container}
      onMouseMove={onMouseMove}
      ref={containerRef}
    >
      <div className={styles.content} ref={contentRef}>
        <div
          className={styles.page}
          style={{
            height: containerHeight > 0 ? `${containerHeight}px` : "100vh",
          }}
        >
          <p>Page One</p>
        </div>
        <div
          className={styles.page}
          style={{
            height: containerHeight > 0 ? `${containerHeight}px` : "100vh",
          }}
        >
          <p>Page Two</p>
        </div>
        <div
          className={styles.page}
          style={{
            height: containerHeight > 0 ? `${containerHeight}px` : "100vh",
          }}
        >
          <p>Page Three</p>
        </div>
      </div>
    </div>
  );
};

export default AppPageFrame;
