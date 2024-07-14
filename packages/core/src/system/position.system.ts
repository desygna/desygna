import { system } from "styled-system";

export const $position = system({
  gridGap: { property: "gridGap" },
  zIndex: { property: "zIndex" },
  top: { property: "top", scale: "spacings" },
  right: { property: "right", scale: "spacings" },
  bottom: { property: "bottom", scale: "spacings" },
  left: { property: "left", scale: "spacings" }
});
