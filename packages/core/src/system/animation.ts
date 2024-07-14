import * as CSS from "csstype";
import {
  DesygnaGenericProp,
  DesygnaThemeAnimation,
  DesygnaThemeTransition
} from "../types/desygna";

export type DesygnaSystemAnimationProps = {
  animation?: DesygnaGenericProp<CSS.Properties["animation"] | DesygnaThemeAnimation>;
  transition?: DesygnaGenericProp<CSS.Properties["transition"] | DesygnaThemeTransition>;
  transitionProperty?: DesygnaGenericProp<CSS.Properties["transitionProperty"]>;
  transitionTimingFunction?: DesygnaGenericProp<CSS.Properties["transitionTimingFunction"]>;
  transitionDuration?: DesygnaGenericProp<CSS.Properties["transitionDuration"]>;
  transitionDelay?: DesygnaGenericProp<CSS.Properties["transitionDelay"]>;
};
