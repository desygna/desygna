---
slug: /system/typography
title: $typography
---

### Props with scale option

| Prop            | Scale                  |
| :-------------- | :--------------------- |
| `fontFamily`    | `theme.fonts`          |
| `fontSize`      | `theme.fontSizes`      |
| `fontWeight`    | `theme.fontWeights`    |
| `lineHeight`    | `theme.lineHeights`    |
| `letterSpacing` | `theme.letterSpacings` |

### Types

```ts
export type DesygnaSystemTypographyProps = {
  fontFamily?: DesygnaGenericProp<CSS.Properties["fontFamily"] | DesygnaThemeFont>;
  fontSize?: DesygnaGenericProp<CSS.Properties["fontSize"] | DesygnaThemeFontSize | number>;
  fontWeight?: DesygnaGenericProp<CSS.Properties["fontWeight"] | DesygnaThemeFontWeight>;
  lineHeight?: DesygnaGenericProp<CSS.Properties["lineHeight"] | DesygnaThemeLineHeight | number>;
  letterSpacing?: DesygnaGenericProp<CSS.Properties["letterSpacing"] | DesygnaThemeLetterSpacing>;
  textAlign?: DesygnaGenericProp<CSS.Properties["textAlign"]>;
  fontStyle?: DesygnaGenericProp<CSS.Properties["fontStyle"]>;
  fontVariantNumeric?: DesygnaGenericProp<CSS.Properties["fontVariantNumeric"]>;
  listStyleType?: DesygnaGenericProp<CSS.Properties["listStyle"]>;
  listStylePosition?: DesygnaGenericProp<CSS.Properties["listStylePosition"]>;
  textDecoration?: DesygnaGenericProp<CSS.Properties["textDecoration"]>;
  textDecorationColor?: DesygnaGenericProp<CSS.Properties["textDecorationColor"]>;
  textDecorationStyle?: DesygnaGenericProp<CSS.Properties["textDecorationStyle"]>;
  textDecorationThickness?: DesygnaGenericProp<CSS.Properties["textDecorationThickness"]>;
  textUnderlineOffset?: DesygnaGenericProp<CSS.Properties["textUnderlineOffset"]>;
  textTransform?: DesygnaGenericProp<CSS.Properties["textTransform"]>;
  textOverflow?: DesygnaGenericProp<CSS.Properties["textOverflow"]>;
  textIndent?: DesygnaGenericProp<CSS.Properties["textIndent"]>;
  verticalAlign?: DesygnaGenericProp<CSS.Properties["verticalAlign"]>;
  whiteSpace?: DesygnaGenericProp<CSS.Properties["whiteSpace"]>;
  wordBreak?: DesygnaGenericProp<CSS.Properties["wordBreak"]>;
};
```
