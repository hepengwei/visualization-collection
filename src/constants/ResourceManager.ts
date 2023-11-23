/**
 * 图片资源管理器
 */
import { LoadingManager, Texture, TextureLoader } from "three";

export interface ResourceItem {
  name: string;
  url: string;
}

class ResourceManager {
  // @ts-ignore
  private manager: LoadingManager;
  private resourceList: ResourceItem[];
  private callback: () => void;
  private textureLoader?: InstanceType<typeof TextureLoader>;
  public textures: Record<string, Texture>;
  
  constructor(resourceList: ResourceItem[], callback: () => void) {
    this.resourceList = resourceList;
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
    this.resourceList.forEach((item) => {
      this.textureLoader?.load(item.url, (t: Texture) => {
        // @ts-ignore
        t.colorSpace = "srgb"; // 设置标准色
        this.textures[item.name] = t;
      });
    });
  }
}

export default ResourceManager;
