import * as CSS from "csstype";
import {
  system,
  space as systemSpace,
  LayoutProps as SystemLayoutProps,
  compose
} from "styled-system";

export type LayoutProps = SystemLayoutProps & {
  w?: CSS.Properties["width"];
  h?: CSS.Properties["height"];
  minW?: CSS.Properties["minWidth"];
  maxW?: CSS.Properties["maxWidth"];
  minH?: CSS.Properties["minHeight"];
  maxH?: CSS.Properties["maxHeight"];
};

export const layout = compose(
  systemSpace,
  system({
    w: {
      scale: "sizes",
      property: "width"
    },
    h: {
      scale: "sizes",
      property: "height"
    },
    minW: {
      scale: "sizes",
      property: "minWidth"
    },
    maxW: {
      scale: "sizes",
      property: "maxWidth"
    },
    minH: {
      scale: "sizes",
      property: "minHeight"
    },
    maxH: {
      scale: "sizes",
      property: "maxHeight"
    }
  })
);
