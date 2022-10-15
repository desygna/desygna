import * as CSS from "csstype";
import {
  system,
  layout as systemLayout,
  LayoutProps as SystemLayoutProps,
  compose,
  ResponsiveValue,
  TLengthStyledSystem,
  Theme
} from "styled-system";

export type LayoutProps = SystemLayoutProps & {
  w?:
    | CSS.Properties["width"]
    | ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, Theme>;
  h?:
    | CSS.Properties["height"]
    | ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, Theme>;
  minW?:
    | CSS.Properties["minWidth"]
    | ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, Theme>;
  maxW?:
    | CSS.Properties["maxWidth"]
    | ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, Theme>;
  minH?:
    | CSS.Properties["minHeight"]
    | ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, Theme>;
  maxH?:
    | CSS.Properties["maxHeight"]
    | ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, Theme>;
};

export const layout = compose(
  systemLayout,
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
