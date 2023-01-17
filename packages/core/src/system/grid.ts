import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";

export { grid } from "styled-system";

export type GridProps = {
  gridGap?: ResponsiveProp<CSS.Properties["gap"]>;
  gridRowGap?: ResponsiveProp<CSS.Properties["rowGap"]>;
  gridColumnGap?: ResponsiveProp<CSS.Properties["columnGap"]>;
  gridColumn?: ResponsiveProp<CSS.Properties["gridColumn"]>;
  gridRow?: ResponsiveProp<CSS.Properties["gridRow"]>;
  gridArea?: ResponsiveProp<CSS.Properties["gridArea"]>;
  gridAutoFlow?: ResponsiveProp<CSS.Properties["gridAutoFlow"]>;
  gridAutoRows?: ResponsiveProp<CSS.Properties["gridAutoRows"]>;
  gridAutoColumns?: ResponsiveProp<CSS.Properties["gridAutoColumns"]>;
  gridTemplateRows?: ResponsiveProp<CSS.Properties["gridTemplateRows"]>;
  gridTemplateColumns?: ResponsiveProp<CSS.Properties["gridTemplateColumns"]>;
  gridTemplateAreas?: ResponsiveProp<CSS.Properties["gridTemplateAreas"]>;
};
