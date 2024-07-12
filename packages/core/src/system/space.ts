import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeSpace } from "../../types/desygna";

export const $space = system({
  m: {
    property: "margin",
    scale: "spacings"
  },
  mt: {
    property: "marginTop",
    scale: "spacings"
  },
  mb: {
    property: "marginBottom",
    scale: "spacings"
  },
  mr: {
    property: "marginRight",
    scale: "spacings"
  },
  ml: {
    property: "marginLeft",
    scale: "spacings"
  },
  mx: {
    properties: ["marginLeft", "marginRight"],
    scale: "spacings"
  },
  my: {
    properties: ["marginTop", "marginBottom"],
    scale: "spacings"
  },
  p: {
    property: "padding",
    scale: "spacings"
  },
  pt: {
    property: "paddingTop",
    scale: "spacings"
  },
  pb: {
    property: "paddingBottom",
    scale: "spacings"
  },
  pr: {
    property: "paddingRight",
    scale: "spacings"
  },
  pl: {
    property: "paddingLeft",
    scale: "spacings"
  },
  px: {
    properties: ["paddingRight", "paddingLeft"],
    scale: "spacings"
  },
  py: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "spacings"
  },
  margin: {
    property: "margin",
    scale: "spacings"
  },
  marginTop: {
    property: "marginTop",
    scale: "spacings"
  },
  marginBottom: {
    property: "marginBottom",
    scale: "spacings"
  },
  marginRight: {
    property: "marginRight",
    scale: "spacings"
  },
  marginLeft: {
    property: "marginLeft",
    scale: "spacings"
  },
  marginX: {
    property: "gap",
    scale: "spacings"
  },
  marginY: {
    properties: ["marginLeft", "marginRight"],
    scale: "spacings"
  },
  padding: {
    property: "padding",
    scale: "spacings"
  },
  paddingTop: {
    property: "paddingTop",
    scale: "spacings"
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "spacings"
  },
  paddingRight: {
    property: "paddingRight",
    scale: "spacings"
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "spacings"
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "spacings"
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "spacings"
  },
  gap: {
    property: "gap",
    scale: "spacings"
  }
});

export type DesygnaSystemSpaceProps = {
  m?: DesygnaGenericProp<CSSProp["margin"] | DesygnaThemeSpace | number>;
  mt?: DesygnaGenericProp<CSSProp["marginTop"] | DesygnaThemeSpace | number>;
  mb?: DesygnaGenericProp<CSSProp["marginBottom"] | DesygnaThemeSpace | number>;
  mr?: DesygnaGenericProp<CSSProp["marginRight"] | DesygnaThemeSpace | number>;
  ml?: DesygnaGenericProp<CSSProp["marginLeft"] | DesygnaThemeSpace | number>;
  mx?: DesygnaGenericProp<CSSProp["marginRight"] | DesygnaThemeSpace | number>;
  my?: DesygnaGenericProp<CSSProp["marginTop"] | DesygnaThemeSpace | number>;
  p?: DesygnaGenericProp<CSSProp["padding"] | DesygnaThemeSpace | number>;
  pt?: DesygnaGenericProp<CSSProp["paddingTop"] | DesygnaThemeSpace | number>;
  pb?: DesygnaGenericProp<
    CSSProp["paddingBottom"] | DesygnaThemeSpace | number
  >;
  pr?: DesygnaGenericProp<CSSProp["paddingRight"] | DesygnaThemeSpace | number>;
  pl?: DesygnaGenericProp<CSSProp["paddingLeft"] | DesygnaThemeSpace | number>;
  px?: DesygnaGenericProp<CSSProp["paddingRight"] | DesygnaThemeSpace | number>;
  py?: DesygnaGenericProp<CSSProp["paddingTop"] | DesygnaThemeSpace | number>;
  margin?: DesygnaGenericProp<CSSProp["margin"] | DesygnaThemeSpace | number>;
  marginTop?: DesygnaGenericProp<
    CSSProp["marginTop"] | DesygnaThemeSpace | number
  >;
  marginBottom?: DesygnaGenericProp<
    CSSProp["marginBottom"] | DesygnaThemeSpace | number
  >;
  marginRight?: DesygnaGenericProp<
    CSSProp["marginRight"] | DesygnaThemeSpace | number
  >;
  marginLeft?: DesygnaGenericProp<
    CSSProp["marginLeft"] | DesygnaThemeSpace | number
  >;
  marginX?: DesygnaGenericProp<
    CSSProp["marginRight"] | DesygnaThemeSpace | number
  >;
  marginY?: DesygnaGenericProp<
    CSSProp["marginTop"] | DesygnaThemeSpace | number
  >;
  padding?: DesygnaGenericProp<CSSProp["padding"] | DesygnaThemeSpace | number>;
  paddingTop?: DesygnaGenericProp<
    CSSProp["paddingTop"] | DesygnaThemeSpace | number
  >;
  paddingBottom?: DesygnaGenericProp<
    CSSProp["paddingBottom"] | DesygnaThemeSpace | number
  >;
  paddingRight?: DesygnaGenericProp<
    CSSProp["paddingRight"] | DesygnaThemeSpace | number
  >;
  paddingLeft?: DesygnaGenericProp<
    CSSProp["paddingLeft"] | DesygnaThemeSpace | number
  >;
  paddingX?: DesygnaGenericProp<
    CSSProp["paddingRight"] | DesygnaThemeSpace | number
  >;
  paddingY?: DesygnaGenericProp<
    CSSProp["paddingTop"] | DesygnaThemeSpace | number
  >;
  gap?: DesygnaGenericProp<CSSProp["gap"] | DesygnaThemeSpace | number>;
};
