import * as CSS from "csstype";
import { DesygnaGenericProp, DesygnaThemeSpace } from "../types/desygna";

export type DesygnaSystemGridProps = {
  gridGap?: DesygnaGenericProp<CSS.Properties["gap"] | DesygnaThemeSpace | number>;
  gridRowGap?: DesygnaGenericProp<CSS.Properties["rowGap"] | DesygnaThemeSpace | number>;
  gridColumnGap?: DesygnaGenericProp<CSS.Properties["columnGap"] | DesygnaThemeSpace | number>;
  gridColumn?: DesygnaGenericProp<CSS.Properties["gridColumn"]>;
  gridRow?: DesygnaGenericProp<CSS.Properties["gridRow"]>;
  gridArea?: DesygnaGenericProp<CSS.Properties["gridArea"]>;
  gridAutoFlow?: DesygnaGenericProp<CSS.Properties["gridAutoFlow"]>;
  gridAutoRows?: DesygnaGenericProp<CSS.Properties["gridAutoRows"]>;
  gridAutoColumns?: DesygnaGenericProp<CSS.Properties["gridAutoColumns"]>;
  gridTemplateRows?: DesygnaGenericProp<CSS.Properties["gridTemplateRows"]>;
  gridTemplateColumns?: DesygnaGenericProp<CSS.Properties["gridTemplateColumns"]>;
  gridTemplateAreas?: DesygnaGenericProp<CSS.Properties["gridTemplateAreas"]>;
};
