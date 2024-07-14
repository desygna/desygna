import * as CSS from "csstype";
import { system } from "styled-system";
import { ResponsiveProp } from "../types/ResponsiveProp";

export type LayoutProps = {
  width?: ResponsiveProp<CSS.Properties["width"]> | number;
  height?: ResponsiveProp<CSS.Properties["height"]> | number;
  w?: ResponsiveProp<CSS.Properties["width"]> | number;
  h?: ResponsiveProp<CSS.Properties["height"]> | number;
  minWidth?: ResponsiveProp<CSS.Properties["minWidth"]> | number;
  minW?: ResponsiveProp<CSS.Properties["minWidth"]> | number;
  maxWidth?: ResponsiveProp<CSS.Properties["maxWidth"]> | number;
  maxW?: ResponsiveProp<CSS.Properties["maxWidth"]> | number;
  minHeight?: ResponsiveProp<CSS.Properties["minHeight"]> | number;
  minH?: ResponsiveProp<CSS.Properties["minHeight"]> | number;
  maxHeight?: ResponsiveProp<CSS.Properties["maxHeight"]> | number;
  maxH?: ResponsiveProp<CSS.Properties["maxHeight"]> | number;
  display?: ResponsiveProp<CSS.Properties["display"]>;
  verticalAlign?: ResponsiveProp<CSS.Properties["verticalAlign"]>;
  overflow?: ResponsiveProp<CSS.Properties["overflow"]>;
  overflowX?: ResponsiveProp<CSS.Properties["overflowX"]>;
  overflowY?: ResponsiveProp<CSS.Properties["overflowY"]>;
};

export const layout = system({
  width: {
    scale: "sizes",
    property: "width"
  },
  w: {
    scale: "sizes",
    property: "width"
  },
  minWidth: {
    scale: "sizes",
    property: "minWidth"
  },
  minW: {
    scale: "sizes",
    property: "minWidth"
  },
  maxWidth: {
    scale: "sizes",
    property: "maxWidth"
  },
  maxW: {
    scale: "sizes",
    property: "maxWidth"
  },
  height: {
    scale: "sizes",
    property: "height"
  },
  h: {
    scale: "sizes",
    property: "height"
  },
  minHeight: {
    scale: "sizes",
    property: "minHeight"
  },
  minH: {
    scale: "sizes",
    property: "minHeight"
  },
  maxHeight: {
    scale: "sizes",
    property: "maxHeight"
  },
  maxH: {
    scale: "sizes",
    property: "maxHeight"
  },
  display: {
    property: "display"
  },
  verticalAlign: {
    property: "verticalAlign"
  },
  overflow: {
    property: "overflow"
  },
  overflowX: {
    property: "overflowX"
  },
  overflowY: {
    property: "overflowY"
  }
});
