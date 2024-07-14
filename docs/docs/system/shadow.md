---
slug: /system/shadow
title: $shadow
---

### Props with scale option

| Prop         | Scale           |
| :----------- | :-------------- |
| `textShadow` | `theme.shadows` |
| `boxShadow`  | `theme.shadows` |

### Types

```ts
export type DesygnaSystemShadowProps = {
  textShadow?: DesygnaGenericProp<CSS.Properties["textShadow"] | DesygnaThemeShadow>;
  boxShadow?: DesygnaGenericProp<CSS.Properties["boxShadow"] | DesygnaThemeShadow>;
};
```
