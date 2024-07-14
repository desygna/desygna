import { system } from "styled-system";

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
