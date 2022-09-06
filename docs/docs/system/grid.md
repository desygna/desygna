---
slug: /system/grid
title: Grid
---

```js
import { grid } from "@desygna/desygna";
```

A system that enables `grid` props.

| Prop                  | CSS Property        |
| --------------------- | ------------------- |
| `gridGap`             | gridGap             |
| `gridColumnGap`       | gridColumnGap       |
| `gridRowGap`          | gridRowGap          |
| `gridColumn`          | gridColumn          |
| `gridRow`             | gridRow             |
| `gridAutoFlow`        | gridAutoFlow        |
| `gridAutoColumns`     | gridAutoColumns     |
| `gridAutoRows`        | gridAutoRows        |
| `gridTemplateColumns` | gridTemplateColumns |
| `gridTemplateRows`    | gridTemplateRows    |
| `gridTemplateAreas`   | gridTemplateAreas   |
| `gridArea`            | gridArea            |

```jsx
// gridGap
<Box gridGap={10} />
<Box gridGap={[ 1, 2 ]} />

// gridColumnGap
<Box gridColumnGap={10} />
<Box gridColumnGap={[ 1, 2 ]} />

// gridRowGap
<Box gridRowGap={10} />
<Box gridRowGap={[ 1, 2 ]} />

// gridColumn
<Box gridColumn={1} />

// gridRow
<Box gridRow={1} />

// gridAutoFlow
<Box gridAutoFlow='row' />

// gridAutoColumns
<Box gridAutoColumns='auto' />

// gridAutoRows
<Box gridAutoRows='auto' />

// gridTemplateColumns
<Box gridTemplateColumns='1fr 2fr' />

// gridTemplateRows
<Box gridTemplateRows='auto' />

// gridTemplateAreas
<Box gridTemplateAreas='a b' />

// gridArea
<Box gridArea='a' />
```
