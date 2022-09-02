import * as CSS from "csstype";
import { system } from "styled-system";

export type CursorProps = {
  cursor?: CSS.Properties["cursor"];
};

export const cursor = system({
  cursor: {
    property: "cursor"
  }
});
