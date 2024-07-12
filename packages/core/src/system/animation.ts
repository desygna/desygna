import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeAnimation,
  DesygnaThemeTransition
} from "../../types/desygna";

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
  animation?: DesygnaGenericProp<CSSProp["animation"] | DesygnaThemeAnimation>;
  transition?: DesygnaGenericProp<
    CSSProp["transition"] | DesygnaThemeTransition
  >;
  transitionProperty?: DesygnaGenericProp<CSSProp["transitionProperty"]>;
  transitionTimingFunction?: DesygnaGenericProp<
    CSSProp["transitionTimingFunction"]
  >;
  transitionDuration?: DesygnaGenericProp<CSSProp["transitionDuration"]>;
  transitionDelay?: DesygnaGenericProp<CSSProp["transitionDelay"]>;
};
