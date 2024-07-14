import * as CSS from "csstype";
import { DesygnaGenericProp, DesygnaThemeColor } from "../types/desygna";

export type DesygnaSystemBackgroundProps = {
  background?: DesygnaGenericProp<CSS.Properties["background"] | DesygnaThemeColor>;
  backgroundImage?: DesygnaGenericProp<CSS.Properties["backgroundImage"]>;
  backgroundSize?: DesygnaGenericProp<CSS.Properties["backgroundSize"]>;
  backgroundPosition?: DesygnaGenericProp<CSS.Properties["backgroundPosition"]>;
  backgroundRepeat?: DesygnaGenericProp<CSS.Properties["backgroundRepeat"]>;
  backgroundAttachment?: DesygnaGenericProp<CSS.Properties["backgroundAttachment"]>;
  backgroundClip?: DesygnaGenericProp<CSS.Properties["backgroundClip"]>;
  backgroundOrigin?: DesygnaGenericProp<CSS.Properties["backgroundOrigin"]>;
};
