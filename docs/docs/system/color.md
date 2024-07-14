---
slug: /system/color
title: Color
---

```js
import { color } from "@desygna/desygna";
```

A system that enables `color` and `backgroundColor` props.

| Prop               | CSS Property    |
| ------------------ | --------------- |
| `background`, `bg` | backgroundColor |
| `color`            | color           |

```jsx
// examples
// picks the value defined in `theme.colors.blue`
<Box color='blue' />

// picks up a nested color value using dot notation
// `theme.colors.gray[0]`
<Box color='gray.0' />

// raw CSS color value
<Box color='#f00' />

// background colors
<Box bg='blue' />

// verbose prop
<Box backgroundColor='blue' />
```
