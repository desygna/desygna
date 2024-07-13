import * as CSS from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeAnimation,
  DesygnaThemeTransition
} from "../types/desygna";

export const $animation = system({
  animation: {
    scale: "animations",
    property: "animation"
  },
  transition: {
    scale: "transitions",
    property: "transition"
  },
  transitionProperty: {
    property: "transitionProperty"
  },
  transitionTimingFunction: {
    property: "transitionTimingFunction"
  },
  transitionDuration: {
    property: "transitionDuration"
  },
  transitionDelay: {
    property: "transitionDelay"
  }
});

export type DesygnaSystemAnimationProps = {
  animation?: DesygnaGenericProp<
    CSS.Properties["animation"] | DesygnaThemeAnimation
  >;
  transition?: DesygnaGenericProp<
    CSS.Properties["transition"] | DesygnaThemeTransition
  >;
  transitionProperty?: DesygnaGenericProp<CSS.Properties["transitionProperty"]>;
  transitionTimingFunction?: DesygnaGenericProp<
    CSS.Properties["transitionTimingFunction"]
  >;
  transitionDuration?: DesygnaGenericProp<CSS.Properties["transitionDuration"]>;
  transitionDelay?: DesygnaGenericProp<CSS.Properties["transitionDelay"]>;
};
