import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeFont,
  DesygnaThemeFontSize,
  DesygnaThemeFontWeight,
  DesygnaThemeLetterSpacing,
  DesygnaThemeLineHeight
} from "../../types/desygna";

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
  fontFamily?: DesygnaGenericProp<CSSProp["fontFamily"] | DesygnaThemeFont>;
  fontSize?: DesygnaGenericProp<
    CSSProp["fontSize"] | DesygnaThemeFontSize | number
  >;
  fontWeight?: DesygnaGenericProp<
    CSSProp["fontWeight"] | DesygnaThemeFontWeight
  >;
  lineHeight?: DesygnaGenericProp<
    CSSProp["lineHeight"] | DesygnaThemeLineHeight | number
  >;
  letterSpacing?: DesygnaGenericProp<
    CSSProp["letterSpacing"] | DesygnaThemeLetterSpacing
  >;
  textAlign?: DesygnaGenericProp<CSSProp["textAlign"]>;
  fontStyle?: DesygnaGenericProp<CSSProp["fontStyle"]>;
  fontVariantNumeric?: DesygnaGenericProp<CSSProp["fontVariantNumeric"]>;
  listStyleType?: DesygnaGenericProp<CSSProp["listStyle"]>;
  listStylePosition?: DesygnaGenericProp<CSSProp["listStylePosition"]>;
  textDecoration?: DesygnaGenericProp<CSSProp["textDecoration"]>;
  textDecorationColor?: DesygnaGenericProp<CSSProp["textDecorationColor"]>;
  textDecorationStyle?: DesygnaGenericProp<CSSProp["textDecorationStyle"]>;
  textDecorationThickness?: DesygnaGenericProp<
    CSSProp["textDecorationThickness"]
  >;
  textUnderlineOffset?: DesygnaGenericProp<CSSProp["textUnderlineOffset"]>;
  textTransform?: DesygnaGenericProp<CSSProp["textTransform"]>;
  textOverflow?: DesygnaGenericProp<CSSProp["textOverflow"]>;
  textIndent?: DesygnaGenericProp<CSSProp["textIndent"]>;
  verticalAlign?: DesygnaGenericProp<CSSProp["verticalAlign"]>;
  whiteSpace?: DesygnaGenericProp<CSSProp["whiteSpace"]>;
  wordBreak?: DesygnaGenericProp<CSSProp["wordBreak"]>;
};
