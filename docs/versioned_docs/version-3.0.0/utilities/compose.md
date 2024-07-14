---
slug: /utilities/compose
title: Compose
---

The `styled` API can take `compose` utility as argument which composes system
utilities.

```ts
import { styled, compose, color, flexbox, space } from "@desygna/desygna";

const Container = styled.div(
  // default styles
  { display: "flex" },
  // -> here we use compose
  compose(color, flexbox, space)
);

// or you can use system utilities that way:
const AnotherContainer = styled.div`
  ${color}
  ${flexbox}
  ${space}
`;
```

So, it means that you can use the `flexbox`, `color` and `space` props in your
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
