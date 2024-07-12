import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeBorder,
  DesygnaThemeBorderRadius,
  DesygnaThemeBorderStyle,
  DesygnaThemeBorderWidth,
  DesygnaThemeColor
} from "../../types/desygna";

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
  border?: DesygnaGenericProp<CSSProp["border"] | DesygnaThemeBorder>;
  borderX?:
    | DesygnaGenericProp<CSSProp["borderLeft"] | DesygnaThemeBorder>
    | DesygnaGenericProp<CSSProp["borderRight"] | DesygnaThemeBorder>;
  borderY?:
    | DesygnaGenericProp<CSSProp["borderTop"] | DesygnaThemeBorder>
    | DesygnaGenericProp<CSSProp["borderBottom"] | DesygnaThemeBorder>;
  borderTop?: DesygnaGenericProp<CSSProp["borderTop"] | DesygnaThemeBorder>;
  borderBottom?: DesygnaGenericProp<
    CSSProp["borderBottom"] | DesygnaThemeBorder
  >;
  borderRight?: DesygnaGenericProp<CSSProp["borderRight"] | DesygnaThemeBorder>;
  borderLeft?: DesygnaGenericProp<CSSProp["borderLeft"] | DesygnaThemeBorder>;
  borderStyle?: DesygnaGenericProp<
    CSSProp["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderWidth?: DesygnaGenericProp<
    CSSProp["borderWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderColor?: DesygnaGenericProp<CSSProp["borderColor"] | DesygnaThemeColor>;
  borderRadius?: DesygnaGenericProp<
    CSSProp["borderRadius"] | DesygnaThemeBorderRadius
  >;
  borderTopStyle?: DesygnaGenericProp<
    CSSProp["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderTopWidth?: DesygnaGenericProp<
    CSSProp["borderTopWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderTopColor?: DesygnaGenericProp<
    CSSProp["borderColor"] | DesygnaThemeColor
  >;
  borderTopLeftRadius?: DesygnaGenericProp<
    CSSProp["borderTopLeftRadius"] | DesygnaThemeBorderRadius
  >;
  borderTopRightRadius?: DesygnaGenericProp<
    CSSProp["borderTopRightRadius"] | DesygnaThemeBorderRadius
  >;
  borderBottomStyle?: DesygnaGenericProp<
    CSSProp["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderBottomWidth?: DesygnaGenericProp<
    CSSProp["borderBottomWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderBottomColor?: DesygnaGenericProp<
    CSSProp["borderColor"] | DesygnaThemeColor
  >;
  borderBottomLeftRadius?: DesygnaGenericProp<
    CSSProp["borderRadius"] | DesygnaThemeBorderRadius
  >;
  borderBottomRightRadius?: DesygnaGenericProp<
    CSSProp["borderBottomRightRadius"] | DesygnaThemeBorderRadius
  >;
  borderLeftStyle?: DesygnaGenericProp<
    CSSProp["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderLeftWidth?: DesygnaGenericProp<
    CSSProp["borderLeftWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderLeftColor?: DesygnaGenericProp<
    CSSProp["borderColor"] | DesygnaThemeColor
  >;
  borderRightStyle?: DesygnaGenericProp<
    CSSProp["borderStyle"] | DesygnaThemeBorderStyle
  >;
  borderRightWidth?: DesygnaGenericProp<
    CSSProp["borderRightWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderRightColor?: DesygnaGenericProp<
    CSSProp["borderColor"] | DesygnaThemeColor
  >;
  bl?: DesygnaGenericProp<CSSProp["borderLeft"] | DesygnaThemeBorder>;
  br?: DesygnaGenericProp<CSSProp["borderRight"] | DesygnaThemeBorder>;
  bt?: DesygnaGenericProp<CSSProp["borderTop"] | DesygnaThemeBorder>;
  bb?: DesygnaGenericProp<CSSProp["borderBottom"] | DesygnaThemeBorder>;
  outline?: DesygnaGenericProp<CSSProp["outline"]>;
  outlineColor?: DesygnaGenericProp<
    CSSProp["outlineColor"] | DesygnaThemeColor
  >;
  outlineWidth?: DesygnaGenericProp<CSSProp["outlineWidth"]>;
  outlineOffset?: DesygnaGenericProp<CSSProp["outlineOffset"]>;
};
