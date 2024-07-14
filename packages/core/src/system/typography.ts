import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";

export { typography } from "styled-system";

export type TypographyProps = {
  fontFamily?: ResponsiveProp<CSS.Properties["fontFamily"]>;
  fontSize?: ResponsiveProp<CSS.Properties["fontSize"] | number>;
  fontWeight?: ResponsiveProp<CSS.Properties["fontWeight"]>;
  lineHeight?: ResponsiveProp<CSS.Properties["lineHeight"] | number>;
  letterSpacing?: ResponsiveProp<CSS.Properties["letterSpacing"]> | number;
  textAlign?: ResponsiveProp<CSS.Properties["textAlign"]>;
  fontStyle?: ResponsiveProp<CSS.Properties["fontStyle"]>;
};
