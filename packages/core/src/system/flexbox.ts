import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";

export { flexbox } from "styled-system";

export type FlexboxProps = {
  alignItems?: ResponsiveProp<CSS.Properties["alignItems"]>;
  alignContent?: ResponsiveProp<CSS.Properties["alignContent"]>;
  justifyItems?: ResponsiveProp<CSS.Properties["justifyItems"]>;
  justifyContent?: ResponsiveProp<CSS.Properties["justifyContent"]>;
  flexWrap?: ResponsiveProp<CSS.Properties["flexWrap"]>;
  flexDirection?: ResponsiveProp<CSS.Properties["flexDirection"]>;
  flex?: ResponsiveProp<CSS.Properties["flex"]>;
  flexGrow?: ResponsiveProp<CSS.Properties["flexGrow"]>;
  flexShrink?: ResponsiveProp<CSS.Properties["flexShrink"]>;
  flexBasis?: ResponsiveProp<CSS.Properties["flexBasis"]>;
  justifySelf?: ResponsiveProp<CSS.Properties["justifySelf"]>;
  alignSelf?: ResponsiveProp<CSS.Properties["alignSelf"]>;
  order?: ResponsiveProp<CSS.Properties["order"]>;
};
