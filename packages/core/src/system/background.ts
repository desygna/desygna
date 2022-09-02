import * as CSS from "csstype";
import {
  system,
  BackgroundProps as StyledBackgroundProps
} from "styled-system";

export type BackgroundProps = StyledBackgroundProps & {
  bg?: CSS.Properties["backgroundColor"];
  backgroundColor?: CSS.Properties["backgroundColor"];
};

export const background = system({
  bg: {
    scale: "colors",
    property: "backgroundColor"
  },
  backgroundColor: {
    scale: "colors",
    property: "backgroundColor"
  }
});
