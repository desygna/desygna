import * as CSS from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeBorder,
  DesygnaThemeBorderRadius,
  DesygnaThemeBorderStyle,
  DesygnaThemeBorderWidth,
  DesygnaThemeColor
} from "../types/desygna";

export const $border = system({
  border: { property: "border", scale: "borders" },
  borderX: { properties: ["borderLeft", "borderRight"], scale: "borders" },
  borderY: { properties: ["borderTop", "borderBottom"], scale: "borders" },
  borderTop: { property: "borderTop", scale: "borders" },
  borderBottom: { property: "borderBottom", scale: "borders" },
  borderRight: { property: "borderRight", scale: "borders" },
  borderLeft: { property: "borderLeft", scale: "borders" },
  borderStyle: { property: "borderStyle", scale: "borderStyles" },
  borderWidth: { property: "borderWidth" },
  borderColor: { property: "borderColor", scale: "colors" },
  borderRadius: { property: "borderRadius", scale: "radii" },
  borderTopStyle: { property: "borderTopStyle", scale: "borderStyles" },
  borderTopWidth: { property: "borderTopWidth" },
  borderTopColor: { property: "borderTopColor", scale: "colors" },
  borderTopLeftRadius: { property: "borderTopLeftRadius", scale: "radii" },
  borderTopRightRadius: { property: "borderTopRightRadius", scale: "radii" },
  borderBottomStyle: { property: "borderBottomStyle", scale: "borderStyles" },
  borderBottomWidth: { property: "borderBottomWidth" },
  borderBottomColor: { property: "borderBottomColor", scale: "colors" },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  borderLeftStyle: { property: "borderLeftStyle", scale: "borderStyles" },
  borderLeftWidth: { property: "borderLeftWidth" },
  borderLeftColor: { property: "borderLeftColor", scale: "colors" },
  borderRightStyle: { property: "borderRightStyle", scale: "borderStyles" },
  borderRightWidth: { property: "borderRightWidth" },
  borderRightColor: { property: "borderRightColor", scale: "colors" },
  bl: { property: "borderLeft", scale: "borders" },
  br: { property: "borderRight", scale: "borders" },
  bt: { property: "borderTop", scale: "borders" },
  bb: { property: "borderBottom", scale: "borders" },
  outline: { property: "outline" },
  outlineColor: { property: "outlineColor", scale: "colors" },
  outlineWidth: { property: "outlineWidth" },
  outlineOffset: { property: "outlineOffset" }
});

export type DesygnaSystemBorderProps = {
  border?: DesygnaGenericProp<CSS.Properties["border"] | DesygnaThemeBorder>;
  borderX?:
    | DesygnaGenericProp<CSS.Properties["borderLeft"] | DesygnaThemeBorder>
    | DesygnaGenericProp<CSS.Properties["borderRight"] | DesygnaThemeBorder>;
  borderY?:
    | DesygnaGenericProp<CSS.Properties["borderTop"] | DesygnaThemeBorder>
    | DesygnaGenericProp<CSS.Properties["borderBottom"] | DesygnaThemeBorder>;
  borderTop?: DesygnaGenericProp<
    CSS.Properties["borderTop"] | DesygnaThemeBorder
  >;
  borderBottom?: DesygnaGenericProp<
    CSS.Properties["borderBottom"] | DesygnaThemeBorder
  >;
  borderRight?: DesygnaGenericProp<
    CSS.Properties["borderRight"] | DesygnaThemeBorder
  >;
  borderLeft?: DesygnaGenericProp<
    CSS.Properties["borderLeft"] | DesygnaThemeBorder
  >;
  borderStyle?: DesygnaGenericProp<
    CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderWidth?: DesygnaGenericProp<
    CSS.Properties["borderWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderColor?: DesygnaGenericProp<
    CSS.Properties["borderColor"] | DesygnaThemeColor
  >;
  borderRadius?: DesygnaGenericProp<
    CSS.Properties["borderRadius"] | DesygnaThemeBorderRadius
  >;
  borderTopStyle?: DesygnaGenericProp<
    CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderTopWidth?: DesygnaGenericProp<
    CSS.Properties["borderTopWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderTopColor?: DesygnaGenericProp<
    CSS.Properties["borderColor"] | DesygnaThemeColor
  >;
  borderTopLeftRadius?: DesygnaGenericProp<
    CSS.Properties["borderTopLeftRadius"] | DesygnaThemeBorderRadius
  >;
  borderTopRightRadius?: DesygnaGenericProp<
    CSS.Properties["borderTopRightRadius"] | DesygnaThemeBorderRadius
  >;
  borderBottomStyle?: DesygnaGenericProp<
    CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderBottomWidth?: DesygnaGenericProp<
    CSS.Properties["borderBottomWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderBottomColor?: DesygnaGenericProp<
    CSS.Properties["borderColor"] | DesygnaThemeColor
  >;
  borderBottomLeftRadius?: DesygnaGenericProp<
    CSS.Properties["borderRadius"] | DesygnaThemeBorderRadius
  >;
  borderBottomRightRadius?: DesygnaGenericProp<
    CSS.Properties["borderBottomRightRadius"] | DesygnaThemeBorderRadius
  >;
  borderLeftStyle?: DesygnaGenericProp<
    CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderLeftWidth?: DesygnaGenericProp<
    CSS.Properties["borderLeftWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderLeftColor?: DesygnaGenericProp<
    CSS.Properties["borderColor"] | DesygnaThemeColor
  >;
  borderRightStyle?: DesygnaGenericProp<
    CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderRightWidth?: DesygnaGenericProp<
    CSS.Properties["borderRightWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderRightColor?: DesygnaGenericProp<
    CSS.Properties["borderColor"] | DesygnaThemeColor
  >;
  bl?: DesygnaGenericProp<CSS.Properties["borderLeft"] | DesygnaThemeBorder>;
  br?: DesygnaGenericProp<CSS.Properties["borderRight"] | DesygnaThemeBorder>;
  bt?: DesygnaGenericProp<CSS.Properties["borderTop"] | DesygnaThemeBorder>;
  bb?: DesygnaGenericProp<CSS.Properties["borderBottom"] | DesygnaThemeBorder>;
  outline?: DesygnaGenericProp<CSS.Properties["outline"]>;
  outlineColor?: DesygnaGenericProp<
    CSS.Properties["outlineColor"] | DesygnaThemeColor
  >;
  outlineWidth?: DesygnaGenericProp<CSS.Properties["outlineWidth"]>;
  outlineOffset?: DesygnaGenericProp<CSS.Properties["outlineOffset"]>;
};
