declare module "*.gif" {
    const value: string;
    export = value;
}
declare module "*.png" {
    const value: any;
    export default value;
}