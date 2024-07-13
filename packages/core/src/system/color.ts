import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeColor } from "../types/desygna";

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
  c?: DesygnaGenericProp<CSS.Properties["color"], DesygnaThemeColor>;
  color?: DesygnaGenericProp<CSS.Properties["color"], DesygnaThemeColor>;
  backgroundColor?: DesygnaGenericProp<
    CSS.Properties["backgroundColor"],
    DesygnaThemeColor
  >;
  bg?: DesygnaGenericProp<CSS.Properties["backgroundColor"], DesygnaThemeColor>;
};
