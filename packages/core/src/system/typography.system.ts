import { system } from "styled-system";

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
