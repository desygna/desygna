---
slug: /utilities/compose
title: $compose
---

The `styled` API can take `$compose` utility as argument which composes system
utilities.

```ts
import {
  $styled,
  $compose,
  $color,
  $flexbox,
  $space,
  DesygnaSystemColorProps,
  DesygnaSystemLayoutProps,
  DesygnaSystemSpaceProps
} from "@desygna/desygna";

type ContainerProps = DesygnaSystemColorProps &
  DesygnaSystemLayoutProps &
  DesygnaSystemSpaceProps;

const Container = $styled.div<ContainerProps>(
  { display: "flex" }, // default styles
  $compose($color, $flexbox, $space) // -> here we use $compose
);

// or you can use system utilities that way:
const AnotherContainer = $styled.div<ContainerProps>`
  ${$color}
  ${$flexbox}
  ${$space}
`;
```

So, it means that you can use the `$flexbox`, `$color` and `$space` props in your
`Container` component.

```tsx
import { Container } from "./Container";

export function App() {
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      background="red"
      color="white"
      p="12px"
    >
      This is an example
    </Container>
  );
}
```
