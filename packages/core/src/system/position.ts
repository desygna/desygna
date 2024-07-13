import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeSpace } from "../types/desygna";

export const $position = system({
  gridGap: { property: "gridGap" },
  zIndex: { property: "zIndex" },
  top: { property: "top", scale: "spacings" },
  right: { property: "right", scale: "spacings" },
  bottom: { property: "bottom", scale: "spacings" },
  left: { property: "left", scale: "spacings" }
});

export type DesygnaSystemPositionProps = {
  position?: DesygnaGenericProp<CSS.Properties["position"]>;
  zIndex?: DesygnaGenericProp<
    CSS.Properties["zIndex"] | DesygnaThemeSpace | number
  >;
  top?: DesygnaGenericProp<CSS.Properties["top"] | DesygnaThemeSpace | number>;
  right?: DesygnaGenericProp<
    CSS.Properties["right"] | DesygnaThemeSpace | number
  >;
  bottom?: DesygnaGenericProp<
    CSS.Properties["bottom"] | DesygnaThemeSpace | number
  >;
  left?: DesygnaGenericProp<
    CSS.Properties["left"] | DesygnaThemeSpace | number
  >;
};
