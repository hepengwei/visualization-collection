import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./public/draco/gltf/");
dracoLoader.setDecoderConfig({ type: "js" });

export const loadGlb: (url: string) => Promise<GLTF> = (url) => {
  return new Promise((resolve, reject) => {
    var loader = new GLTFLoader();
    loader.setCrossOrigin("anonymous");
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      url,
      (gltf: GLTF) => {
        resolve(gltf);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};
