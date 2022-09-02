import * as CSS from "csstype";
import { system } from "styled-system";

export type ColorProps = {
  color?: CSS.Properties["color"];
};

export const color = system({
  color: {
    scale: "colors",
    property: "color"
  }
});
