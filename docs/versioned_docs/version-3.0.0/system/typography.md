---
slug: /system/typography
title: Typography
---

```js
import { typography } from "@desygna/desygna";
```

A system that enables `typography` props.

| Prop            | CSS Property  |
| --------------- | ------------- |
| `fontFamily`    | fontFamily    |
| `fontSize`      | fontSize      |
| `fontWeight`    | fontWeight    |
| `lineHeight`    | lineHeight    |
| `letterSpacing` | letterSpacing |
| `textAlign`     | textAlign     |
| `fontStyle`     | fontStyle     |

```jsx
// examples
// font-size of `theme.fontSizes[3]`
<Text fontSize={3} />

// font-size `32px`
<Text fontSize={32} />

// font-size `'2em'`
<Text fontSize='2em' />

// font-size `10px` on all viewports and `12px` from the first breakpoint and up
<Text fontSize={[ 10, 12 ]} />

// fontFamily
<Text fontFamily='mono' />

// textAlign
<Text textAlign='center' />
<Text textAlign={[ 'center', 'left' ]} />

// lineHeight
<Text lineHeight='1.25' />

// fontWeight
<Text fontWeight='bold' />

// letterSpacing
<Text letterSpacing='0.1em' />
```
