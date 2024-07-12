import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeSpace } from "../../types/desygna";

export const $position = system({
  gridGap: { property: "gridGap" },
  zIndex: { property: "zIndex" },
  top: { property: "top", scale: "spacings" },
  right: { property: "right", scale: "spacings" },
  bottom: { property: "bottom", scale: "spacings" },
  left: { property: "left", scale: "spacings" }
});

export type DesygnaSystemPositionProps = {
  position?: DesygnaGenericProp<CSSProp["position"]>;
  zIndex?: DesygnaGenericProp<CSSProp["zIndex"] | DesygnaThemeSpace | number>;
  top?: DesygnaGenericProp<CSSProp["top"] | DesygnaThemeSpace | number>;
  right?: DesygnaGenericProp<CSSProp["right"] | DesygnaThemeSpace | number>;
  bottom?: DesygnaGenericProp<CSSProp["bottom"] | DesygnaThemeSpace | number>;
  left?: DesygnaGenericProp<CSSProp["left"] | DesygnaThemeSpace | number>;
};
