import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";
import { ThemeRecord } from "../types/ThemeRecord";

export interface DesygnaTheme {
  breakpoints?: ResponsiveProp<CSS.Properties["width"]>;
  borderRadius?: ThemeRecord<CSS.Properties["borderRadius"]>;
  borderWidth?: ThemeRecord<CSS.Properties["borderWidth"]>;
  colors?: ThemeRecord<CSS.Properties["color"]>;
  fonts?: ThemeRecord<CSS.Properties["fontFamily"]>;
  fontSizes?: ThemeRecord<CSS.Properties["fontSize"]>;
  fontWeights?: ThemeRecord<CSS.Properties["fontWeight"]>;
  letterSpacings?: ThemeRecord<CSS.Properties["letterSpacing"]>;
  lineHeights?: ThemeRecord<CSS.Properties["lineHeight"]>;
  sizes?: ThemeRecord<CSS.Properties["width"]>;
  shadows?: ThemeRecord<CSS.Properties["boxShadow"]>;
  space?: ThemeRecord<CSS.Properties["width"]>;
  zIndices?: ThemeRecord<CSS.Properties["zIndex"]>;
}
