---
slug: /system/position
title: $position
---

### Props with scale option

| Prop     | Scale            |
| :------- | :--------------- |
| `zIndex` | `theme.zIndices` |
| `top`    | `theme.spacings` |
| `right`  | `theme.spacings` |
| `bottom` | `theme.spacings` |
| `left`   | `theme.spacings` |

### Types

```ts
export type DesygnaSystemPositionProps = {
  position?: DesygnaGenericProp<CSS.Properties["position"]>;
  zIndex?: DesygnaGenericProp<CSS.Properties["zIndex"] | DesygnaThemeZIndices | number>;
  top?: DesygnaGenericProp<CSS.Properties["top"] | DesygnaThemeSpace | number>;
  right?: DesygnaGenericProp<CSS.Properties["right"] | DesygnaThemeSpace | number>;
  bottom?: DesygnaGenericProp<CSS.Properties["bottom"] | DesygnaThemeSpace | number>;
  left?: DesygnaGenericProp<CSS.Properties["left"] | DesygnaThemeSpace | number>;
};
```
