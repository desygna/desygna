---
slug: /system/layout
title: $layout
---

### Props with scale option

| Prop                  | Scale          |
| :-------------------- | :------------- |
| `w` or `width`        | `theme.sizes`  |
| `h` or `height`       | `theme.sizes`  |
| `minW` or `minWidth`  | `theme.sizes`  |
| `maxW` or `maxWidth`  | `theme.sizes`  |
| `minH` or `minHeight` | `theme.sizes`  |
| `maxH` or `maxHeight` | `theme.sizes`  |
| `fill`                | `theme.colors` |

### Types

```ts
export type DesygnaSystemLayoutProps = {
  width?: DesygnaGenericProp<CSS.Properties["width"] | DesygnaThemeSize | number>;
  height?: DesygnaGenericProp<CSS.Properties["height"] | DesygnaThemeSize | number>;
  w?: DesygnaGenericProp<CSS.Properties["width"] | DesygnaThemeSize | number>;
  h?: DesygnaGenericProp<CSS.Properties["height"] | DesygnaThemeSize | number>;
  minWidth?: DesygnaGenericProp<CSS.Properties["minWidth"] | DesygnaThemeSize | number>;
  minW?: DesygnaGenericProp<CSS.Properties["minWidth"] | DesygnaThemeSize | number>;
  maxWidth?: DesygnaGenericProp<CSS.Properties["maxWidth"] | DesygnaThemeSize | number>;
  maxW?: DesygnaGenericProp<CSS.Properties["maxWidth"] | DesygnaThemeSize | number>;
  minHeight?: DesygnaGenericProp<CSS.Properties["minHeight"] | DesygnaThemeSize | number>;
  minH?: DesygnaGenericProp<CSS.Properties["minHeight"] | DesygnaThemeSize | number>;
  maxHeight?: DesygnaGenericProp<CSS.Properties["maxHeight"] | DesygnaThemeSize | number>;
  maxH?: DesygnaGenericProp<CSS.Properties["maxHeight"] | DesygnaThemeSize | number>;
  display?: DesygnaGenericProp<CSS.Properties["display"]>;
  verticalAlign?: DesygnaGenericProp<CSS.Properties["verticalAlign"]>;
  overflow?: DesygnaGenericProp<CSS.Properties["overflow"]>;
  overflowX?: DesygnaGenericProp<CSS.Properties["overflowX"]>;
  overflowY?: DesygnaGenericProp<CSS.Properties["overflowY"]>;
  aspectRatio?: DesygnaGenericProp<CSS.Properties["aspectRatio"]>;
  breakAfter?: DesygnaGenericProp<CSS.Properties["breakAfter"]>;
  breakBefore?: DesygnaGenericProp<CSS.Properties["breakBefore"]>;
  breakInside?: DesygnaGenericProp<CSS.Properties["breakInside"]>;
  boxDecorationBreak?: DesygnaGenericProp<CSS.Properties["boxDecorationBreak"]>;
  boxSizing?: DesygnaGenericProp<CSS.Properties["boxSizing"]>;
  float?: DesygnaGenericProp<CSS.Properties["float"]>;
  clear?: DesygnaGenericProp<CSS.Properties["clear"]>;
  isolation?: DesygnaGenericProp<CSS.Properties["isolation"]>;
  objectFit?: DesygnaGenericProp<CSS.Properties["objectFit"]>;
  objectPosition?: DesygnaGenericProp<CSS.Properties["objectPosition"]>;
  overscrollBehavior?: DesygnaGenericProp<CSS.Properties["overscrollBehavior"]>;
  overscrollBehaviorX?: DesygnaGenericProp<CSS.Properties["overscrollBehaviorX"]>;
  overscrollBehaviorY?: DesygnaGenericProp<CSS.Properties["overscrollBehaviorY"]>;
  visibility?: DesygnaGenericProp<CSS.Properties["visibility"]>;
  transform?: DesygnaGenericProp<CSS.Properties["transform"]>;
  transformOrigin?: DesygnaGenericProp<CSS.Properties["transformOrigin"]>;
  accentColor?: DesygnaGenericProp<CSS.Properties["accentColor"]>;
  appearance?: DesygnaGenericProp<CSS.Properties["appearance"]>;
  cursor?: DesygnaGenericProp<CSS.Properties["cursor"]>;
  caretColor?: DesygnaGenericProp<CSS.Properties["caretColor"]>;
  pointerEvents?: DesygnaGenericProp<CSS.Properties["pointerEvents"]>;
  resize?: DesygnaGenericProp<CSS.Properties["resize"]>;
  scrollBehavior?: DesygnaGenericProp<CSS.Properties["scrollBehavior"]>;
  scrollMargin?: DesygnaGenericProp<CSS.Properties["scrollMargin"]>;
  scrollPadding?: DesygnaGenericProp<CSS.Properties["scrollPadding"]>;
  scrollSnapAlign?: DesygnaGenericProp<CSS.Properties["scrollSnapAlign"]>;
  scrollSnapStop?: DesygnaGenericProp<CSS.Properties["scrollSnapStop"]>;
  scrollSnapType?: DesygnaGenericProp<CSS.Properties["scrollSnapType"]>;
  touchAction?: DesygnaGenericProp<CSS.Properties["touchAction"]>;
  userSelect?: DesygnaGenericProp<CSS.Properties["userSelect"]>;
  willChange?: DesygnaGenericProp<CSS.Properties["willChange"]>;
  fill?: DesygnaGenericProp<CSS.Properties["fill"] | DesygnaThemeColor>;
  stroke?: DesygnaGenericProp<CSS.Properties["stroke"]>;
  strokeWidth?: DesygnaGenericProp<CSS.Properties["strokeWidth"]>;
};
```
