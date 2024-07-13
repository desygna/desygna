import * as CSS from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeFont,
  DesygnaThemeFontSize,
  DesygnaThemeFontWeight,
  DesygnaThemeLetterSpacing,
  DesygnaThemeLineHeight
} from "../types/desygna";

export const $typography = system({
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes"
  },
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  },
  lineHeight: {
    property: "lineHeight",
    scale: "lineHeights"
  },
  letterSpacing: {
    property: "letterSpacing",
    scale: "letterSpacings"
  },
  textAlign: { property: "textAlign" },
  fontStyle: { property: "fontStyle" },
  fontVariantNumeric: { property: "fontVariantNumeric" },
  listStyleType: { property: "listStyleType" },
  listStylePosition: { property: "listStylePosition" },
  textDecoration: { property: "textDecoration" },
  textDecorationColor: { property: "textDecorationColor" },
  textDecorationStyle: { property: "textDecorationStyle" },
  textDecorationThickness: { property: "textDecorationThickness" },
  textUnderlineOffset: { property: "textUnderlineOffset" },
  textTransform: { property: "textTransform" },
  textOverflow: { property: "textOverflow" },
  textIndent: { property: "textIndent" },
  verticalAlign: { property: "verticalAlign" },
  whiteSpace: { property: "whiteSpace" },
  wordBreak: { property: "wordBreak" }
});

export type DesygnaSystemTypographyProps = {
  fontFamily?: DesygnaGenericProp<
    CSS.Properties["fontFamily"] | DesygnaThemeFont
  >;
  fontSize?: DesygnaGenericProp<
    CSS.Properties["fontSize"] | DesygnaThemeFontSize | number
  >;
  fontWeight?: DesygnaGenericProp<
    CSS.Properties["fontWeight"] | DesygnaThemeFontWeight
  >;
  lineHeight?: DesygnaGenericProp<
    CSS.Properties["lineHeight"] | DesygnaThemeLineHeight | number
  >;
  letterSpacing?: DesygnaGenericProp<
    CSS.Properties["letterSpacing"] | DesygnaThemeLetterSpacing
  >;
  textAlign?: DesygnaGenericProp<CSS.Properties["textAlign"]>;
  fontStyle?: DesygnaGenericProp<CSS.Properties["fontStyle"]>;
  fontVariantNumeric?: DesygnaGenericProp<CSS.Properties["fontVariantNumeric"]>;
  listStyleType?: DesygnaGenericProp<CSS.Properties["listStyle"]>;
  listStylePosition?: DesygnaGenericProp<CSS.Properties["listStylePosition"]>;
  textDecoration?: DesygnaGenericProp<CSS.Properties["textDecoration"]>;
  textDecorationColor?: DesygnaGenericProp<
    CSS.Properties["textDecorationColor"]
  >;
  textDecorationStyle?: DesygnaGenericProp<
    CSS.Properties["textDecorationStyle"]
  >;
  textDecorationThickness?: DesygnaGenericProp<
    CSS.Properties["textDecorationThickness"]
  >;
  textUnderlineOffset?: DesygnaGenericProp<
    CSS.Properties["textUnderlineOffset"]
  >;
  textTransform?: DesygnaGenericProp<CSS.Properties["textTransform"]>;
  textOverflow?: DesygnaGenericProp<CSS.Properties["textOverflow"]>;
  textIndent?: DesygnaGenericProp<CSS.Properties["textIndent"]>;
  verticalAlign?: DesygnaGenericProp<CSS.Properties["verticalAlign"]>;
  whiteSpace?: DesygnaGenericProp<CSS.Properties["whiteSpace"]>;
  wordBreak?: DesygnaGenericProp<CSS.Properties["wordBreak"]>;
};
