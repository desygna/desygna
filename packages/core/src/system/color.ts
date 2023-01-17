import * as CSS from "csstype";
import { system } from "styled-system";
import { ResponsiveProp } from "../types/ResponsiveProp";

export type ColorProps = {
  color?: ResponsiveProp<CSS.Properties["color"]>;
  backgroundColor?: ResponsiveProp<CSS.Properties["backgroundColor"]>;
  bg?: ResponsiveProp<CSS.Properties["backgroundColor"]>;
};

export const color = system({
  color: {
    scale: "colors",
    property: "color"
  },
  backgroundColor: {
    scale: "colors",
    property: "backgroundColor"
  },
  bg: {
    scale: "colors",
    property: "backgroundColor"
  }
});
