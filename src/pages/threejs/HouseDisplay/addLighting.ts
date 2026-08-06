/**
 * 添加环境光和太阳光
 */
import { Scene, AmbientLight, DirectionalLight } from "three";

const addLighting = (scene: Scene) => {
  // 环境光 - 提供柔和的基础照明（进一步增加强度）
  const ambientLight = new AmbientLight(0xffffff, 0.6 * Math.PI); // 第二个参数intensity在v0.155版本后必须要乘以Math.PI
  scene.add(ambientLight);

  // 主太阳光 - 从左上方（南面）斜照下来，模拟自然阳光（进一步增加强度）
  const sunLight = new DirectionalLight(0xfffae3, 0.8 * Math.PI); // 暖色调阳光，第二个参数intensity在v0.155版本后必须要乘以Math.PI
  sunLight.position.set(-24, 25, 12); // 从左上方照射（左边为南面）（0.8倍缩放）
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(1024, 1024);
  sunLight.shadow.camera.left = -24;
  sunLight.shadow.camera.right = 24;
  sunLight.shadow.camera.top = 24;
  sunLight.shadow.camera.bottom = -24;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 100;
  sunLight.shadow.bias = -0.0001;
  scene.add(sunLight);

  // 辅助光 - 从右侧补光，模拟天空散射光（进一步增加强度）
  const skyLight = new DirectionalLight(0xb0d4f1, 0.2 * Math.PI); // 天空蓝色调，第二个参数intensity在v0.155版本后必须要乘以Math.PI
  skyLight.position.set(16, 15, -8);
  skyLight.castShadow = true;
  skyLight.shadow.mapSize.set(1024, 1024);
  skyLight.shadow.camera.left = -24;
  skyLight.shadow.camera.right = 24;
  skyLight.shadow.camera.top = 24;
  skyLight.shadow.camera.bottom = -24;
  skyLight.shadow.camera.near = 0.5;
  skyLight.shadow.camera.far = 100;
  skyLight.shadow.bias = -0.0001;
  scene.add(skyLight);
};

export default addLighting;
