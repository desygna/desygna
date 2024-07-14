import * as CSS from "csstype";
import { DesygnaGenericProp, DesygnaThemeColor } from "../types/desygna";

export type DesygnaSystemColorProps = {
  c?: DesygnaGenericProp<CSS.Properties["color"], DesygnaThemeColor>;
  color?: DesygnaGenericProp<CSS.Properties["color"], DesygnaThemeColor>;
  backgroundColor?: DesygnaGenericProp<CSS.Properties["backgroundColor"], DesygnaThemeColor>;
  bg?: DesygnaGenericProp<CSS.Properties["backgroundColor"], DesygnaThemeColor>;
};
