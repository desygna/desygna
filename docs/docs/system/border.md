---
slug: /system/border
title: Border
---

```js
import { border } from "@desygna/desyna";
```

A system that enables `border` props.

| Prop                      | CSS Property             |
| ------------------------- | ------------------------ |
| `border`                  | border                   |
| `borderWidth`             | borderWidth              |
| `borderStyle`             | borderStyle              |
| `borderColor`             | borderColor              |
| `borderRadius`            | borderRadius             |
| `borderTop`               | borderTop                |
| `borderTopWidth`          | borderTopWidth           |
| `borderTopStyle`          | borderTopStyle           |
| `borderTopColor`          | borderTopColor           |
| `borderTopLeftRadius`     | borderTopLeftRadius      |
| `borderTopRightRadius`    | borderTopRightRadius     |
| `borderRight`             | borderRight              |
| `borderRightWidth`        | borderRightWidth         |
| `borderRightStyle`        | borderRightStyle         |
| `borderRightColor`        | borderRightColor         |
| `borderBottom`            | borderBottom             |
| `borderBottomWidth`       | borderBottomWidth        |
| `borderBottomStyle`       | borderBottomStyle        |
| `borderBottomColor`       | borderBottomColor        |
| `borderBottomLeftRadius`  | borderBottomLeftRadius   |
| `borderBottomRightRadius` | borderBottomRightRadius  |
| `borderLeft`              | borderLeft               |
| `borderLeftWidth`         | borderLeftWidth          |
| `borderLeftStyle`         | borderLeftStyle          |
| `borderLeftColor`         | borderLeftColor          |
| `borderX`                 | borderLeft & borderRight |
| `borderY`                 | borderTop & borderBottom |

```jsx
<Box border='1px solid' />
<Box borderTop='1px solid' />
<Box borderRight='1px solid' />
<Box borderBottom='1px solid' />
<Box borderLeft='1px solid' />

// borderWidth
<Box borderWidth='4px' />

// borderStyle
<Box borderStyle='dotted' />

// borderColor
<Box borderColor='blue' />

// borderRadius
<Box borderRadius={4} />
```
