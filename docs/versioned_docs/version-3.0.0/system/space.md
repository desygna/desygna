---
slug: /system/space
title: Space
---

```ts
import { space } from "@desygna/desygna";
```

A system that enables `spacing` props.

The space utility converts shorthand margin and padding props to margin and
padding CSS declarations.

- Numbers from 0 to the length of theme.space are converted to values on the
  space scale.
- Negative values can be used for negative margins.
- Numbers greater than the length of the theme.space array are converted to raw
  pixel values.
- String values are passed as raw CSS values.
- And array values are converted into responsive values.

Margin and padding props follow a shorthand syntax for specifying direction.

| Prop                  | CSS Property                   |
| --------------------- | ------------------------------ |
| `margin`, `m`         | margin                         |
| `marginTop`, `mt`     | margin-top                     |
| `marginRight`, `mr`   | margin-right                   |
| `marginBottom`, `mb`  | margin-bottom                  |
| `marginLeft`, `ml`    | margin-left                    |
| `marginX`, `mx`       | margin-left and margin-right   |
| `marginY`, `my`       | margin-top and margin-bottom   |
| `padding`, `p`        | padding                        |
| `paddingTop`, `pt`    | padding-top                    |
| `paddingRight`, `pr`  | padding-right                  |
| `paddingBottom`, `pb` | padding-bottom                 |
| `paddingLeft`, `pl`   | padding-left                   |
| `paddingX`, `px`      | padding-left and padding-right |
| `paddingY`, `py`      | padding-top and padding-bottom |
| `gap`                 | gap                            |

```jsx
// examples (margin prop)

// sets margin value of `theme.space[2]`
<Box m={2} />

// sets margin value of `-1 * theme.space[2]`
<Box m={-2} />

// sets a margin value of `16px` since it's greater than `theme.space.length`
<Box m={16} />

// sets margin `'auto'`
<Box m='auto' />

// sets margin `8px` on all viewports and `16px` from the first breakpoint and up
<Box m={[ 2, 3 ]} />
```
