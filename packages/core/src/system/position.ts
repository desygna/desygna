import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";

export { position } from "styled-system";

export type PositionProps = {
  position?: ResponsiveProp<CSS.Properties["position"]>;
  zIndex?: ResponsiveProp<CSS.Properties["zIndex"]> | number;
  top?: ResponsiveProp<CSS.Properties["top"]> | number;
  right?: ResponsiveProp<CSS.Properties["right"]> | number;
  bottom?: ResponsiveProp<CSS.Properties["bottom"]> | number;
  left?: ResponsiveProp<CSS.Properties["left"]> | number;
};
