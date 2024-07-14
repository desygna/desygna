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

- [`background`](/docs/v3/system/background)
- [`border`](/docs/v3/system/border)
- [`color`](/docs/v3/system/color)
- [`cursor`](/docs/v3/system/cursor)
- [`flexbox`](/docs/v3/system/flexbox)
- [`grid`](/docs/v3/system/grid)
- [`layout`](/docs/v3/system/layout)
- [`position`](/docs/v3/system/position)
- [`shadow`](/docs/v3/system/shadow)
- [`space`](/docs/v3/system/space)
- [`typography`](/docs/v3/system/typography)
