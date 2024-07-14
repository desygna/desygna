---
slug: /system/animation
title: $animation
---

### Props with scale option

| Prop         | Scale               |
| :----------- | :------------------ |
| `animation`  | `theme.animations`  |
| `transition` | `theme.transitions` |

### Types

```ts
export type DesygnaSystemAnimationProps = {
  animation?: DesygnaGenericProp<DesygnaThemeAnimation>;
  transition?: DesygnaGenericProp<DesygnaThemeTransition>;
  transitionProperty?: DesygnaGenericProp<CSS.Properties["transitionProperty"]>;
  transitionTimingFunction?: DesygnaGenericProp<CSS.Properties["transitionTimingFunction"]>;
  transitionDuration?: DesygnaGenericProp<CSS.Properties["transitionDuration"]>;
  transitionDelay?: DesygnaGenericProp<CSS.Properties["transitionDelay"]>;
};
```
