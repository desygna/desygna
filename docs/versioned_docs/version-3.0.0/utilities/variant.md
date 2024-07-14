---
slug: /utilities/variant
title: Variant
---

The `styled` API can also take `variant` which is a function that takes a
variants related to the component.

```ts
import { styled, variant } from "@desygna/desygna";

const Container = styled.div(
  variant({
    // -> you can pass any prop name here
    prop: "type",
    // variants
    variants: {
      primary: {
        background: "red",
        color: "white"
      },
      secondary: {
        background: "blue",
        color: "white"
      }
    }
  })
);
`;
```

So, you can use the `type` prop (which is defined in `variant` utility) in your
component.

```tsx
import { Container } from "./Container";

export function App() {
  return <Container type="primary">This is an example</Container>;
}
```
