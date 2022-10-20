declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "react-tilt" {
  export default Record<string, any>;
}

declare module "sphere-collision";
