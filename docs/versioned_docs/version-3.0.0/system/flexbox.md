---
slug: /system/flexbox
title: Flexbox
---

```js
import { flexbox } from "@desygna/desygna";
```

A system that enables `flexbox` props.

| Prop             | CSS Property   |
| ---------------- | -------------- |
| `alignItems`     | alignItems     |
| `alignContent`   | alignContent   |
| `justifyItems`   | justifyItems   |
| `justifyContent` | justifyContent |
| `flexWrap`       | flexWrap       |
| `flexDirection`  | flexDirection  |
| `flex`           | flex           |
| `flexGrow`       | flexGrow       |
| `flexShrink`     | flexShrink     |
| `flexBasis`      | flexBasis      |
| `justifySelf`    | justifySelf    |
| `alignSelf`      | alignSelf      |
| `order`          | order          |

```jsx
// alignItems
<Flex alignItems='center' />

// alignContent
<Flex alignContent='center' />

// justifyContent
<Flex justifyContent='center' />

// flexWrap
<Flex flexWrap='wrap' />

// flexBasis
<Flex flexBasis='auto' />

// flexDirection
<Flex flexDirection='column' />

// flex
<Box flex='1 1 auto' />

// justifySelf
<Box justifySelf='center' />

// alignSelf
<Box alignSelf='center' />

// order
<Box order='2' />
```
