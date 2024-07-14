import * as CSS from "csstype";
import { DesygnaGenericProp, DesygnaThemeSpace, DesygnaThemeZIndices } from "../types/desygna";

export type DesygnaSystemPositionProps = {
  position?: DesygnaGenericProp<CSS.Properties["position"]>;
  zIndex?: DesygnaGenericProp<CSS.Properties["zIndex"] | DesygnaThemeZIndices | number>;
  top?: DesygnaGenericProp<CSS.Properties["top"] | DesygnaThemeSpace | number>;
  right?: DesygnaGenericProp<CSS.Properties["right"] | DesygnaThemeSpace | number>;
  bottom?: DesygnaGenericProp<CSS.Properties["bottom"] | DesygnaThemeSpace | number>;
  left?: DesygnaGenericProp<CSS.Properties["left"] | DesygnaThemeSpace | number>;
};
