---
slug: /system/grid
title: $grid
---

### Props with scale option

| Prop            | Scale            |
| :-------------- | :--------------- |
| `gridGap`       | `theme.spacings` |
| `gridRowGap`    | `theme.spacings` |
| `gridColumnGap` | `theme.spacings` |

### Types

```ts
export type DesygnaSystemGridProps = {
  gridGap?: DesygnaGenericProp<CSS.Properties["gap"] | DesygnaThemeSpace | number>;
  gridRowGap?: DesygnaGenericProp<CSS.Properties["rowGap"] | DesygnaThemeSpace | number>;
  gridColumnGap?: DesygnaGenericProp<CSS.Properties["columnGap"] | DesygnaThemeSpace | number>;
  gridColumn?: DesygnaGenericProp<CSS.Properties["gridColumn"]>;
  gridRow?: DesygnaGenericProp<CSS.Properties["gridRow"]>;
  gridArea?: DesygnaGenericProp<CSS.Properties["gridArea"]>;
  gridAutoFlow?: DesygnaGenericProp<CSS.Properties["gridAutoFlow"]>;
  gridAutoRows?: DesygnaGenericProp<CSS.Properties["gridAutoRows"]>;
  gridAutoColumns?: DesygnaGenericProp<CSS.Properties["gridAutoColumns"]>;
  gridTemplateRows?: DesygnaGenericProp<CSS.Properties["gridTemplateRows"]>;
  gridTemplateColumns?: DesygnaGenericProp<CSS.Properties["gridTemplateColumns"]>;
  gridTemplateAreas?: DesygnaGenericProp<CSS.Properties["gridTemplateAreas"]>;
};
```
