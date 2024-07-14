---
slug: /system/space
title: $space
---

### Props with scale option

| Prop                    | Scale            |
| :---------------------- | :--------------- |
| `m` or `margin`         | `theme.spacings` |
| `mt` or `marginTop`     | `theme.spacings` |
| `mb` or `marginBottom`  | `theme.spacings` |
| `mr` or `marginRight`   | `theme.spacings` |
| `ml` or `marginLeft`    | `theme.spacings` |
| `mx` or `marginX`       | `theme.spacings` |
| `my` or `marginY`       | `theme.spacings` |
| `p` or `padding`        | `theme.spacings` |
| `pt` or `paddingTop`    | `theme.spacings` |
| `pb` or `paddingBottom` | `theme.spacings` |
| `pr` or `paddingRight`  | `theme.spacings` |
| `pl` or `paddingLeft`   | `theme.spacings` |
| `px` or `paddingX`      | `theme.spacings` |
| `py` or `paddingY`      | `theme.spacings` |
| `gap`                   | `theme.spacings` |

### Types

```ts
export type DesygnaSystemSpaceProps = {
  m?: DesygnaGenericProp<CSS.Properties["margin"] | DesygnaThemeSpace | number>;
  mt?: DesygnaGenericProp<CSS.Properties["marginTop"] | DesygnaThemeSpace | number>;
  mb?: DesygnaGenericProp<CSS.Properties["marginBottom"] | DesygnaThemeSpace | number>;
  mr?: DesygnaGenericProp<CSS.Properties["marginRight"] | DesygnaThemeSpace | number>;
  ml?: DesygnaGenericProp<CSS.Properties["marginLeft"] | DesygnaThemeSpace | number>;
  mx?: DesygnaGenericProp<CSS.Properties["marginRight"] | DesygnaThemeSpace | number>;
  my?: DesygnaGenericProp<CSS.Properties["marginTop"] | DesygnaThemeSpace | number>;
  p?: DesygnaGenericProp<CSS.Properties["padding"] | DesygnaThemeSpace | number>;
  pt?: DesygnaGenericProp<CSS.Properties["paddingTop"] | DesygnaThemeSpace | number>;
  pb?: DesygnaGenericProp<CSS.Properties["paddingBottom"] | DesygnaThemeSpace | number>;
  pr?: DesygnaGenericProp<CSS.Properties["paddingRight"] | DesygnaThemeSpace | number>;
  pl?: DesygnaGenericProp<CSS.Properties["paddingLeft"] | DesygnaThemeSpace | number>;
  px?: DesygnaGenericProp<CSS.Properties["paddingRight"] | DesygnaThemeSpace | number>;
  py?: DesygnaGenericProp<CSS.Properties["paddingTop"] | DesygnaThemeSpace | number>;
  margin?: DesygnaGenericProp<CSS.Properties["margin"] | DesygnaThemeSpace | number>;
  marginTop?: DesygnaGenericProp<CSS.Properties["marginTop"] | DesygnaThemeSpace | number>;
  marginBottom?: DesygnaGenericProp<CSS.Properties["marginBottom"] | DesygnaThemeSpace | number>;
  marginRight?: DesygnaGenericProp<CSS.Properties["marginRight"] | DesygnaThemeSpace | number>;
  marginLeft?: DesygnaGenericProp<CSS.Properties["marginLeft"] | DesygnaThemeSpace | number>;
  marginX?: DesygnaGenericProp<CSS.Properties["marginRight"] | DesygnaThemeSpace | number>;
  marginY?: DesygnaGenericProp<CSS.Properties["marginTop"] | DesygnaThemeSpace | number>;
  padding?: DesygnaGenericProp<CSS.Properties["padding"] | DesygnaThemeSpace | number>;
  paddingTop?: DesygnaGenericProp<CSS.Properties["paddingTop"] | DesygnaThemeSpace | number>;
  paddingBottom?: DesygnaGenericProp<CSS.Properties["paddingBottom"] | DesygnaThemeSpace | number>;
  paddingRight?: DesygnaGenericProp<CSS.Properties["paddingRight"] | DesygnaThemeSpace | number>;
  paddingLeft?: DesygnaGenericProp<CSS.Properties["paddingLeft"] | DesygnaThemeSpace | number>;
  paddingX?: DesygnaGenericProp<CSS.Properties["paddingRight"] | DesygnaThemeSpace | number>;
  paddingY?: DesygnaGenericProp<CSS.Properties["paddingTop"] | DesygnaThemeSpace | number>;
  gap?: DesygnaGenericProp<CSS.Properties["gap"] | DesygnaThemeSpace | number>;
};
```
