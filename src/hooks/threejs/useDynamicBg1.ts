import { useRef, useEffect } from "react";
import {
  Object3D,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  CanvasTexture,
  TextureLoader,
  Matrix4,
} from "three";
import { gsap } from "gsap";
import glow from "images/threejs/glow.png";

const useDynamicBg = () => {
  const dynamicBg = useRef<Object3D>(new Object3D());
  const tween1 = useRef<gsap.core.Tween | null>(null);
  const tween2 = useRef<gsap.core.Tween | null>(null);

  const createPlane1 = (radius: number, lineWidth: number, color: string) => {
    const marginAngle = Math.PI / 90;
    const lineAngleSum = Math.PI * 2 - marginAngle * 16;
    const longLineAngle = (lineAngleSum * 11) / 12 / 8;
    const shortLineAngle = lineAngleSum / 12 / 8;
    const canvas = document.createElement("canvas");
    canvas.width = radius * 2;
    canvas.height = radius * 2;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    let startAngle = 0;
    let endAngle = longLineAngle;
    // 将圆均分为8份
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.arc(radius, radius, radius - lineWidth, startAngle, endAngle);
      ctx.stroke();
      startAngle = endAngle + marginAngle;
      endAngle = startAngle + shortLineAngle;
      ctx.beginPath();
      ctx.arc(radius, radius, radius - lineWidth, startAngle, endAngle);
      ctx.stroke();
      startAngle = endAngle + marginAngle;
      endAngle = startAngle + longLineAngle;
    }

    const geometry = new PlaneGeometry(canvas.width, canvas.height);
    const material = new MeshBasicMaterial({
      map: new CanvasTexture(canvas),
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const plane = new Mesh(geometry, material);

    // 添加旋转动画
    const options = { angle: 0 };
    tween1.current = gsap.to(options, {
      angle: Math.PI * 2,
      duration: 5,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        const toAngle = options.angle;
        if (plane) {
          const newMatrix = new Matrix4().makeRotationZ(toAngle);
          const { x, y, z } = plane.position;
          newMatrix.multiply(new Matrix4().makeTranslation(x, y, z));
          plane.matrix = newMatrix;
          // 使用矩阵更新模型的信息
          plane.matrix.decompose(plane.position, plane.quaternion, plane.scale);
        }
      },
      onComplete: () => {},
    });
    return plane;
  };

  const createPlane2 = (radius: number, lineWidth: number, color: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = radius * 2;
    canvas.height = radius * 2;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    // 将圆均分为2份
    for (let i = 0; i < 2; i++) {
      const addAngle = i * Math.PI;
      ctx.beginPath();
      ctx.arc(
        radius,
        radius,
        radius - lineWidth,
        addAngle,
        Math.PI / 6 + addAngle
      );
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(
        radius,
        radius,
        radius - lineWidth,
        Math.PI / 4 + addAngle,
        Math.PI / 2 + addAngle
      );
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(
        radius,
        radius,
        radius - lineWidth,
        (Math.PI * 2) / 3 + addAngle,
        (Math.PI * 3) / 4 + addAngle
      );
      ctx.stroke();
    }

    const geometry = new PlaneGeometry(canvas.width, canvas.height);
    const material = new MeshBasicMaterial({
      map: new CanvasTexture(canvas),
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const plane = new Mesh(geometry, material);
    return plane;
  };

  const createPlane3 = (radius: number, lineWidth: number, color: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = radius * 2;
    canvas.height = radius * 2;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    // 将圆均分为3份
    for (let i = 0; i < 3; i++) {
      const addAngle = i * ((Math.PI * 2) / 3);
      ctx.beginPath();
      ctx.arc(
        radius,
        radius,
        radius - lineWidth,
        addAngle,
        Math.PI / 10 + addAngle
      );
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(
        radius,
        radius,
        radius - lineWidth,
        Math.PI / 8 + addAngle,
        Math.PI / 6 + addAngle
      );
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(
        radius,
        radius,
        radius - lineWidth,
        Math.PI / 2 + addAngle,
        (Math.PI * 5) / 8 + addAngle
      );
      ctx.stroke();
    }

    const geometry = new PlaneGeometry(canvas.width, canvas.height);
    const material = new MeshBasicMaterial({
      map: new CanvasTexture(canvas),
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const plane = new Mesh(geometry, material);

    // 添加辉光
    const glowGeometry = new PlaneGeometry(
      canvas.width + 90,
      canvas.height + 90
    );
    const glowMaterial = new MeshBasicMaterial({
      map: new TextureLoader().load(glow),
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const glowPlane = new Mesh(glowGeometry, glowMaterial);
    plane.add(glowPlane);
    return plane;
  };

  const createPlane4 = (radius: number, lineWidth: number, color: string) => {
    const itemLineWidth = 16;
    const canvas = document.createElement("canvas");
    canvas.width = radius * 2 + itemLineWidth;
    canvas.height = radius * 2 + itemLineWidth;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(
      radius + itemLineWidth * 0.3 + lineWidth,
      radius + itemLineWidth * 0.3 + lineWidth,
      radius,
      0,
      Math.PI * 2
    );
    ctx.stroke();
    // 将圆均分为120份
    ctx.lineWidth = lineWidth;
    for (let i = 0; i < 120; i++) {
      const rad = ((2 * Math.PI) / 120) * i;
      const smallRadius = radius - itemLineWidth * 0.7;
      const largeRadius = smallRadius + itemLineWidth;
      const startX =
        Math.cos(rad) * largeRadius + largeRadius + itemLineWidth * 0.3;
      const startY =
        Math.sin(rad) * largeRadius + largeRadius + itemLineWidth * 0.3;
      const endX =
        Math.cos(rad) * smallRadius + largeRadius + itemLineWidth * 0.3;
      const endY =
        Math.sin(rad) * smallRadius + largeRadius + itemLineWidth * 0.3;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }

    const geometry = new PlaneGeometry(canvas.width, canvas.height);
    const material = new MeshBasicMaterial({
      map: new CanvasTexture(canvas),
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const plane = new Mesh(geometry, material);

    // 添加旋转动画
    const options = { angle: 0 };
    tween2.current = gsap.to(options, {
      angle: -Math.PI * 2,
      duration: 12,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        const toAngle = options.angle;
        if (plane) {
          const newMatrix = new Matrix4().makeRotationZ(toAngle);
          const { x, y, z } = plane.position;
          newMatrix.multiply(new Matrix4().makeTranslation(x, y, z));
          plane.matrix = newMatrix;
          // 使用矩阵更新模型的信息
          plane.matrix.decompose(plane.position, plane.quaternion, plane.scale);
        }
      },
      onComplete: () => {},
    });
    return plane;
  };

  const createPlane5 = (radius: number, lineWidth: number, color: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = radius * 2;
    canvas.height = radius * 2;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(radius, radius, radius - lineWidth, 0, Math.PI * 2);
    ctx.stroke();

    const geometry = new PlaneGeometry(canvas.width, canvas.height);
    const material = new MeshBasicMaterial({
      map: new CanvasTexture(canvas),
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const plane = new Mesh(geometry, material);
    return plane;
  };

  const createPlane6 = (radius: number, lineWidth: number, color: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = radius * 2;
    canvas.height = radius * 2;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(radius, radius, radius - lineWidth, 0, Math.PI * 2);
    ctx.stroke();

    const geometry = new PlaneGeometry(canvas.width, canvas.height);
    const material = new MeshBasicMaterial({
      map: new CanvasTexture(canvas),
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1,
      depthWrite: false, // 禁止写入深度缓冲区数据
    });
    const plane = new Mesh(geometry, material);
    return plane;
  };

  useEffect(() => {
    const plane1 = createPlane1(180, 6, "#ffffff");
    dynamicBg.current.add(plane1);
    const plane2 = createPlane2(170, 8, "#005A5A");
    plane2.position.set(0, 0, 1);
    dynamicBg.current.add(plane2);
    const plane3 = createPlane3(120, 8, "#005A5A");
    plane3.position.set(0, 0, 2);
    dynamicBg.current.add(plane3);
    const plane4 = createPlane4(100, 3, "#ADEBF1");
    plane4.position.set(0, 0, 3);
    dynamicBg.current.add(plane4);
    const plane5 = createPlane5(80, 1, "#ADEBF1");
    plane5.position.set(0, 0, 4);
    dynamicBg.current.add(plane5);
    const plane6 = createPlane6(30, 4, "#ADEBF1");
    plane6.position.set(0, 0, 5);
    dynamicBg.current.add(plane6);

    return () => {
      tween1.current?.kill();
      tween2.current?.kill();
    };
  }, []);

  return dynamicBg.current;
};

export default useDynamicBg;
