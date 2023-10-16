declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "react-tilt" {
  export default Record<string, any>;
}

declare module "sphere-collision";

declare module "d3-geo";
