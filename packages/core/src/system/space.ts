import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeSpace } from "../types/desygna";

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
  m?: DesygnaGenericProp<CSS.Properties["margin"] | DesygnaThemeSpace | number>;
  mt?: DesygnaGenericProp<
    CSS.Properties["marginTop"] | DesygnaThemeSpace | number
  >;
  mb?: DesygnaGenericProp<
    CSS.Properties["marginBottom"] | DesygnaThemeSpace | number
  >;
  mr?: DesygnaGenericProp<
    CSS.Properties["marginRight"] | DesygnaThemeSpace | number
  >;
  ml?: DesygnaGenericProp<
    CSS.Properties["marginLeft"] | DesygnaThemeSpace | number
  >;
  mx?: DesygnaGenericProp<
    CSS.Properties["marginRight"] | DesygnaThemeSpace | number
  >;
  my?: DesygnaGenericProp<
    CSS.Properties["marginTop"] | DesygnaThemeSpace | number
  >;
  p?: DesygnaGenericProp<
    CSS.Properties["padding"] | DesygnaThemeSpace | number
  >;
  pt?: DesygnaGenericProp<
    CSS.Properties["paddingTop"] | DesygnaThemeSpace | number
  >;
  pb?: DesygnaGenericProp<
    CSS.Properties["paddingBottom"] | DesygnaThemeSpace | number
  >;
  pr?: DesygnaGenericProp<
    CSS.Properties["paddingRight"] | DesygnaThemeSpace | number
  >;
  pl?: DesygnaGenericProp<
    CSS.Properties["paddingLeft"] | DesygnaThemeSpace | number
  >;
  px?: DesygnaGenericProp<
    CSS.Properties["paddingRight"] | DesygnaThemeSpace | number
  >;
  py?: DesygnaGenericProp<
    CSS.Properties["paddingTop"] | DesygnaThemeSpace | number
  >;
  margin?: DesygnaGenericProp<
    CSS.Properties["margin"] | DesygnaThemeSpace | number
  >;
  marginTop?: DesygnaGenericProp<
    CSS.Properties["marginTop"] | DesygnaThemeSpace | number
  >;
  marginBottom?: DesygnaGenericProp<
    CSS.Properties["marginBottom"] | DesygnaThemeSpace | number
  >;
  marginRight?: DesygnaGenericProp<
    CSS.Properties["marginRight"] | DesygnaThemeSpace | number
  >;
  marginLeft?: DesygnaGenericProp<
    CSS.Properties["marginLeft"] | DesygnaThemeSpace | number
  >;
  marginX?: DesygnaGenericProp<
    CSS.Properties["marginRight"] | DesygnaThemeSpace | number
  >;
  marginY?: DesygnaGenericProp<
    CSS.Properties["marginTop"] | DesygnaThemeSpace | number
  >;
  padding?: DesygnaGenericProp<
    CSS.Properties["padding"] | DesygnaThemeSpace | number
  >;
  paddingTop?: DesygnaGenericProp<
    CSS.Properties["paddingTop"] | DesygnaThemeSpace | number
  >;
  paddingBottom?: DesygnaGenericProp<
    CSS.Properties["paddingBottom"] | DesygnaThemeSpace | number
  >;
  paddingRight?: DesygnaGenericProp<
    CSS.Properties["paddingRight"] | DesygnaThemeSpace | number
  >;
  paddingLeft?: DesygnaGenericProp<
    CSS.Properties["paddingLeft"] | DesygnaThemeSpace | number
  >;
  paddingX?: DesygnaGenericProp<
    CSS.Properties["paddingRight"] | DesygnaThemeSpace | number
  >;
  paddingY?: DesygnaGenericProp<
    CSS.Properties["paddingTop"] | DesygnaThemeSpace | number
  >;
  gap?: DesygnaGenericProp<CSS.Properties["gap"] | DesygnaThemeSpace | number>;
};
