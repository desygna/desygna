import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeColor } from "../../types/desygna";

export const $color = system({
  c: {
    scale: "colors",
    property: "color"
  },
  color: {
    scale: "colors",
    property: "color"
  },
  backgroundColor: {
    scale: "colors",
    property: "backgroundColor"
  },
  bg: {
    scale: "colors",
    property: "backgroundColor"
  }
});

export type DesygnaSystemColorProps = {
  c?: DesygnaGenericProp<CSSProp["color"], DesygnaThemeColor>;
  color?: DesygnaGenericProp<CSSProp["color"], DesygnaThemeColor>;
  backgroundColor?: DesygnaGenericProp<
    CSSProp["backgroundColor"],
    DesygnaThemeColor
  >;
  bg?: DesygnaGenericProp<CSSProp["backgroundColor"], DesygnaThemeColor>;
};
