// To avoid "module not found" errors and get proper IntelliSense
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
