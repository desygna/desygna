---
slug: /system/color
title: $color
---

### Props with scale option

| Prop                      | Scale          |
| :------------------------ | :------------- |
| `c` or `color`            | `theme.colors` |
| `bg` or `backgroundColor` | `theme.colors` |

### Types

```ts
export type DesygnaSystemColorProps = {
  c?: DesygnaGenericProp<CSS.Properties["color"], DesygnaThemeColor>;
  color?: DesygnaGenericProp<CSS.Properties["color"], DesygnaThemeColor>;
  backgroundColor?: DesygnaGenericProp<CSS.Properties["backgroundColor"], DesygnaThemeColor>;
  bg?: DesygnaGenericProp<CSS.Properties["backgroundColor"], DesygnaThemeColor>;
};
```
