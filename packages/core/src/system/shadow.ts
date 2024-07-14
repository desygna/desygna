import * as CSS from "csstype";
import { DesygnaGenericProp, DesygnaThemeShadow } from "../types/desygna";

export type DesygnaSystemShadowProps = {
  textShadow?: DesygnaGenericProp<CSS.Properties["textShadow"] | DesygnaThemeShadow>;
  boxShadow?: DesygnaGenericProp<CSS.Properties["boxShadow"] | DesygnaThemeShadow>;
};
