---
slug: /system/position
title: Position
---

```js
import { position } from "@desygna/desygna";
```

A system that enables `position` props.

| Prop       | CSS Property |
| ---------- | ------------ |
| `position` | position     |
| `zIndex`   | zIndex       |
| `top`      | top          |
| `right`    | right        |
| `bottom`   | bottom       |
| `left`     | left         |

```jsx
// position
<Box position="absolute" />

// zIndex
<Absolute zIndex={2} />

// top, right, bottom, left
<Fixed
  top="0"
  right="0"
  bottom="0"
  left="0"
/>
```
