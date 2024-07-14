---
slug: /system/layout
title: Layout
---

```js
import { layout } from "@desygna/desygna";
```

A system that enables `layout` props.

| Prop                | CSS Property  |
| ------------------- | ------------- |
| `width`, `w`        | width         |
| `height`, `h`       | height        |
| `display`           | display       |
| `minWidth`, `minW`  | minWidth      |
| `minHeight`, `minH` | minHeight     |
| `maxWidth`, `maxW`  | maxWidth      |
| `maxHeight`, `maxH` | maxHeight     |
| `size`              | size          |
| `verticalAlign`     | verticalAlign |
| `overflow`          | overflow      |
| `overflowX`         | overflowX     |
| `overflowY`         | overflowY     |

The `width` prop is transformed based on the following:

- Numbers from 0-1 are converted to percentage widths.
- Numbers greater than 1 are converted to pixel values.
- String values are passed as raw CSS values.
- And arrays are converted to [responsive width styles][responsive-styles].
- If `theme.sizes` is defined, the `width` prop will attempt to pick up values
  from the theme

```jsx
// examples

// width `50%`
<Box width={1/2} />

// width `256px`
<Box width={256} />

// width `'2em'`
<Box width='2em' />

// width `100%` on all viewports and `50%` from the smallest breakpoint and up
<Box width={[ 1, 1/2 ]} />

// width from `theme.sizes`
<Box width='medium' />

// display
<Box display='inline-block' />
<Box display={[ 'block', 'inline-block' ]} />

// maxWidth
<Box maxWidth={1024} />
<Box maxWidth={[ 768, null, null, 1024 ]} />

// minWidth
<Box minWidth={128} />
<Box minWidth={[ 96, 128 ]} />

// height
<Box height={64} />
<Box height={[ 48, 64 ]} />

// maxHeight
<Box maxHeight={512} />
<Box maxHeight={[ 384, 512 ]} />

// minHeight
<Box minHeight={512} />
<Box minHeight={[ 384, 512 ]} />

// size (width & height)
<Box size={32} />
<Box size={[ 32, 48 ]} />

// overflow
<Box overflow='hidden' />

// overflowX
<Box overflowX='hidden' />

// overflowY
<Box overflowY='hidden' />
```
