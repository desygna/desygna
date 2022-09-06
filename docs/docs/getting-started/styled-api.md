---
slug: /styled-api
title: Styled API
---

You can create a component by using the `styled` API.

```ts
import { styled } from "@desygna/desygna";

export const Container = styled.div({
  backgroundColor: "red",
  padding: "10px",
  borderRadius: "5px"
});
```

## With Custom Props

The `styled` API can take custom props as arguments.

```ts
import { styled } from "@desygna/desygna";

export type ContainerType = {
  fullWidth?: boolean;
};

export const Container = styled.div<ContainerType>(({ fullWidth }) => ({
  width: fullWidth ? "100%" : "auto"
}));
```
