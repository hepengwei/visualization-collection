/**
 * 图片资源管理和加载
 */
import { LoadingManager, Texture, TextureLoader } from "three";
import radialGradient from "images/threejs/radialGradient.png";
import earth from "images/threejs/earth.jpeg";
import glow from "images/threejs/glow.png";
import aperture from "images/threejs/aperture.png";
import lightColumn from "images/threejs/lightColumn.png";

// 图片资源列表
const texturesList = [
  { name: "radialGradient", url: radialGradient },
  { name: "earth", url: earth },
  { name: "glow", url: glow },
  { name: "aperture", url: aperture },
  { name: "lightColumn", url: lightColumn },
];

export default class Resources {
  // @ts-ignore
  private manager: LoadingManager;
  private callback: () => void;
  private textureLoader?: InstanceType<typeof TextureLoader>;
  public textures: Record<string, Texture>;
  constructor(callback: () => void) {
    this.callback = callback; // 资源加载完成的回调

    this.textures = {}; // 贴图对象

    this.createLoadingManager();
    this.loadResources();
  }

  /**
   * 创建加载状态管理器
   */
  private createLoadingManager() {
    this.manager = new LoadingManager();
    // 加载完成
    this.manager.onLoad = () => {
      this.callback();
    };
  }

  /**
   * 加载资源
   */
  private loadResources(): void {
    this.textureLoader = new TextureLoader(this.manager);
    texturesList.forEach((item) => {
      this.textureLoader?.load(item.url, (t) => {
        this.textures[item.name] = t;
      });
    });
  }
}
