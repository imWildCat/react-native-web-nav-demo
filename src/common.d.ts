/// <reference types="nativewind/types" />

declare module '*.svg' {
  const content: string; // React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';