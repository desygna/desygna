import * as CSS from "csstype";
import { ResponsiveValue, system, Theme } from "styled-system";

export type CursorProps = {
  cursor?:
    | CSS.Properties["cursor"]
    | ResponsiveValue<CSS.Property.Cursor, Theme>;
};

export const cursor = system({
  cursor: {
    property: "cursor"
  }
});
