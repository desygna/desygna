import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";

export { shadow } from "styled-system";

export type ShadowProps = {
  textShadow?: ResponsiveProp<CSS.Properties["textShadow"]>;
  boxShadow?: ResponsiveProp<CSS.Properties["boxShadow"]>;
};
