---
slug: /utilities/compose-all
title: Compose All
---

Even you can use all the `system` utilities in your `styled` component by
passing `composeAll` through the `styled` function.

```tsx
import { styled, composeAll } from "@desygna/desygna";

const Container = styled.div(composeAll);
```

It enables all the props from system utilities that provided in Desygna:

- [`background`](/docs/system/background)
- [`border`](/docs/system/border)
- [`color`](/docs/system/color)
- [`cursor`](/docs/system/cursor)
- [`flexbox`](/docs/system/flexbox)
- [`grid`](/docs/system/grid)
- [`layout`](/docs/system/layout)
- [`position`](/docs/system/position)
- [`shadow`](/docs/system/shadow)
- [`space`](/docs/system/space)
- [`typography`](/docs/system/typography)
