import * as CSS from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeColor,
  DesygnaThemeSize
} from "../types/desygna";

export const $layout = system({
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
  display: { property: "display" },
  verticalAlign: { property: "verticalAlign" },
  overflow: { property: "overflow" },
  overflowX: { property: "overflowX" },
  overflowY: { property: "overflowY" },
  aspectRatio: { property: "aspectRatio" },
  breakAfter: { property: "breakAfter" },
  breakBefore: { property: "breakBefore" },
  breakInside: { property: "breakInside" },
  boxDecorationBreak: { property: "boxDecorationBreak" },
  boxSizing: { property: "boxSizing" },
  float: { property: "float" },
  clear: { property: "clear" },
  isolation: { property: "isolation" },
  objectFit: { property: "objectFit" },
  objectPosition: { property: "objectPosition" },
  overscrollBehavior: { property: "overscrollBehavior" },
  overscrollBehaviorX: { property: "overscrollBehaviorX" },
  overscrollBehaviorY: { property: "overscrollBehaviorY" },
  visibility: { property: "visibility" },
  transform: { property: "transform" },
  transformOrigin: { property: "transformOrigin" },
  accentColor: { property: "accentColor" },
  appearance: { property: "appearance" },
  cursor: { property: "cursor" },
  caretColor: { property: "caretColor" },
  pointerEvents: { property: "pointerEvents" },
  resize: { property: "resize" },
  scrollBehavior: { property: "scrollBehavior" },
  scrollMargin: { property: "scrollMargin" },
  scrollPadding: { property: "scrollPadding" },
  scrollSnapAlign: { property: "scrollSnapAlign" },
  scrollSnapStop: { property: "scrollSnapStop" },
  scrollSnapType: { property: "scrollSnapType" },
  touchAction: { property: "touchAction" },
  userSelect: { property: "userSelect" },
  willChange: { property: "willChange" },
  fill: { property: "fill", scale: "colors" },
  stroke: { property: "stroke" },
  strokeWidth: { property: "strokeWidth" }
});

export type DesygnaSystemLayoutProps = {
  width?: DesygnaGenericProp<
    CSS.Properties["width"] | DesygnaThemeSize | number
  >;
  height?: DesygnaGenericProp<
    CSS.Properties["height"] | DesygnaThemeSize | number
  >;
  w?: DesygnaGenericProp<CSS.Properties["width"] | DesygnaThemeSize | number>;
  h?: DesygnaGenericProp<CSS.Properties["height"] | DesygnaThemeSize | number>;
  minWidth?: DesygnaGenericProp<
    CSS.Properties["minWidth"] | DesygnaThemeSize | number
  >;
  minW?: DesygnaGenericProp<
    CSS.Properties["minWidth"] | DesygnaThemeSize | number
  >;
  maxWidth?: DesygnaGenericProp<
    CSS.Properties["maxWidth"] | DesygnaThemeSize | number
  >;
  maxW?: DesygnaGenericProp<
    CSS.Properties["maxWidth"] | DesygnaThemeSize | number
  >;
  minHeight?: DesygnaGenericProp<
    CSS.Properties["minHeight"] | DesygnaThemeSize | number
  >;
  minH?: DesygnaGenericProp<
    CSS.Properties["minHeight"] | DesygnaThemeSize | number
  >;
  maxHeight?: DesygnaGenericProp<
    CSS.Properties["maxHeight"] | DesygnaThemeSize | number
  >;
  maxH?: DesygnaGenericProp<
    CSS.Properties["maxHeight"] | DesygnaThemeSize | number
  >;
  display?: DesygnaGenericProp<CSS.Properties["display"]>;
  verticalAlign?: DesygnaGenericProp<CSS.Properties["verticalAlign"]>;
  overflow?: DesygnaGenericProp<CSS.Properties["overflow"]>;
  overflowX?: DesygnaGenericProp<CSS.Properties["overflowX"]>;
  overflowY?: DesygnaGenericProp<CSS.Properties["overflowY"]>;
  aspectRatio?: DesygnaGenericProp<CSS.Properties["aspectRatio"]>;
  breakAfter?: DesygnaGenericProp<CSS.Properties["breakAfter"]>;
  breakBefore?: DesygnaGenericProp<CSS.Properties["breakBefore"]>;
  breakInside?: DesygnaGenericProp<CSS.Properties["breakInside"]>;
  boxDecorationBreak?: DesygnaGenericProp<CSS.Properties["boxDecorationBreak"]>;
  boxSizing?: DesygnaGenericProp<CSS.Properties["boxSizing"]>;
  float?: DesygnaGenericProp<CSS.Properties["float"]>;
  clear?: DesygnaGenericProp<CSS.Properties["clear"]>;
  isolation?: DesygnaGenericProp<CSS.Properties["isolation"]>;
  objectFit?: DesygnaGenericProp<CSS.Properties["objectFit"]>;
  objectPosition?: DesygnaGenericProp<CSS.Properties["objectPosition"]>;
  overscrollBehavior?: DesygnaGenericProp<CSS.Properties["overscrollBehavior"]>;
  overscrollBehaviorX?: DesygnaGenericProp<
    CSS.Properties["overscrollBehaviorX"]
  >;
  overscrollBehaviorY?: DesygnaGenericProp<
    CSS.Properties["overscrollBehaviorY"]
  >;
  visibility?: DesygnaGenericProp<CSS.Properties["visibility"]>;
  transform?: DesygnaGenericProp<CSS.Properties["transform"]>;
  transformOrigin?: DesygnaGenericProp<CSS.Properties["transformOrigin"]>;
  accentColor?: DesygnaGenericProp<CSS.Properties["accentColor"]>;
  appearance?: DesygnaGenericProp<CSS.Properties["appearance"]>;
  cursor?: DesygnaGenericProp<CSS.Properties["cursor"]>;
  caretColor?: DesygnaGenericProp<CSS.Properties["caretColor"]>;
  pointerEvents?: DesygnaGenericProp<CSS.Properties["pointerEvents"]>;
  resize?: DesygnaGenericProp<CSS.Properties["resize"]>;
  scrollBehavior?: DesygnaGenericProp<CSS.Properties["scrollBehavior"]>;
  scrollMargin?: DesygnaGenericProp<CSS.Properties["scrollMargin"]>;
  scrollPadding?: DesygnaGenericProp<CSS.Properties["scrollPadding"]>;
  scrollSnapAlign?: DesygnaGenericProp<CSS.Properties["scrollSnapAlign"]>;
  scrollSnapStop?: DesygnaGenericProp<CSS.Properties["scrollSnapStop"]>;
  scrollSnapType?: DesygnaGenericProp<CSS.Properties["scrollSnapType"]>;
  touchAction?: DesygnaGenericProp<CSS.Properties["touchAction"]>;
  userSelect?: DesygnaGenericProp<CSS.Properties["userSelect"]>;
  willChange?: DesygnaGenericProp<CSS.Properties["willChange"]>;
  fill?: DesygnaGenericProp<CSS.Properties["fill"] | DesygnaThemeColor>;
  stroke?: DesygnaGenericProp<CSS.Properties["stroke"]>;
  strokeWidth?: DesygnaGenericProp<CSS.Properties["strokeWidth"]>;
};
