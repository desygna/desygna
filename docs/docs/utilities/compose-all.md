---
slug: /utilities/compose-all
title: $composeAll
---

Even you can use all the system utilities in your `$styled` component by
passing `$composeAll` through the `styled` function.

```ts
import { $styled, $composeAll, DesygnaComposedProps } from "@desygna/desygna";

const Container = $styled.div<DesygnaComposedProps>($composeAll());
```

It enables all the props from system utilities that provided in Desygna:

- [`$animation`](/docs/v4/system/animation)
- [`$background`](/docs/v4/system/background)
- [`$border`](/docs/v4/system/border)
- [`$color`](/docs/v4/system/color)
- [`$cursor`](/docs/v4/system/cursor)
- [`$flexbox`](/docs/v4/system/flexbox)
- [`$grid`](/docs/v4/system/grid)
- [`$layout`](/docs/v4/system/layout)
- [`$position`](/docs/v4/system/position)
- [`$shadow`](/docs/v4/system/shadow)
- [`$space`](/docs/v4/system/space)
- [`$typography`](/docs/v4/system/typography)
