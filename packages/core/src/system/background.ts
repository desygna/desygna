import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";

export { background } from "styled-system";

export type BackgroundProps = {
  background?: ResponsiveProp<CSS.Properties["background"]>;
  backgroundImage?: ResponsiveProp<CSS.Properties["backgroundImage"]>;
  backgroundSize?: ResponsiveProp<CSS.Properties["backgroundSize"]>;
  backgroundPosition?: ResponsiveProp<CSS.Properties["backgroundPosition"]>;
  backgroundRepeat?: ResponsiveProp<CSS.Properties["backgroundRepeat"]>;
};
