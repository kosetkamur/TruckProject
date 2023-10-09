declare module "*.module.css";
declare module "*.module.scss";
declare module "*.png" {
    const value: any;
    export = value;
}
declare module "*.svg" {
    const value: any;
    export = value;
}
declare module '*.sass' {
    const content: Record<string, string>;
    export default content;
}