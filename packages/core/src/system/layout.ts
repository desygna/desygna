import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import {
  DesygnaGenericProp,
  DesygnaThemeColor,
  DesygnaThemeSize
} from "../../types/desygna";

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
  width?: DesygnaGenericProp<CSSProp["width"] | DesygnaThemeSize | number>;
  height?: DesygnaGenericProp<CSSProp["height"] | DesygnaThemeSize | number>;
  w?: DesygnaGenericProp<CSSProp["width"] | DesygnaThemeSize | number>;
  h?: DesygnaGenericProp<CSSProp["height"] | DesygnaThemeSize | number>;
  minWidth?: DesygnaGenericProp<
    CSSProp["minWidth"] | DesygnaThemeSize | number
  >;
  minW?: DesygnaGenericProp<CSSProp["minWidth"] | DesygnaThemeSize | number>;
  maxWidth?: DesygnaGenericProp<
    CSSProp["maxWidth"] | DesygnaThemeSize | number
  >;
  maxW?: DesygnaGenericProp<CSSProp["maxWidth"] | DesygnaThemeSize | number>;
  minHeight?: DesygnaGenericProp<
    CSSProp["minHeight"] | DesygnaThemeSize | number
  >;
  minH?: DesygnaGenericProp<CSSProp["minHeight"] | DesygnaThemeSize | number>;
  maxHeight?: DesygnaGenericProp<
    CSSProp["maxHeight"] | DesygnaThemeSize | number
  >;
  maxH?: DesygnaGenericProp<CSSProp["maxHeight"] | DesygnaThemeSize | number>;
  display?: DesygnaGenericProp<CSSProp["display"]>;
  verticalAlign?: DesygnaGenericProp<CSSProp["verticalAlign"]>;
  overflow?: DesygnaGenericProp<CSSProp["overflow"]>;
  overflowX?: DesygnaGenericProp<CSSProp["overflowX"]>;
  overflowY?: DesygnaGenericProp<CSSProp["overflowY"]>;
  aspectRatio?: DesygnaGenericProp<CSSProp["aspectRatio"]>;
  breakAfter?: DesygnaGenericProp<CSSProp["breakAfter"]>;
  breakBefore?: DesygnaGenericProp<CSSProp["breakBefore"]>;
  breakInside?: DesygnaGenericProp<CSSProp["breakInside"]>;
  boxDecorationBreak?: DesygnaGenericProp<CSSProp["boxDecorationBreak"]>;
  boxSizing?: DesygnaGenericProp<CSSProp["boxSizing"]>;
  float?: DesygnaGenericProp<CSSProp["float"]>;
  clear?: DesygnaGenericProp<CSSProp["clear"]>;
  isolation?: DesygnaGenericProp<CSSProp["isolation"]>;
  objectFit?: DesygnaGenericProp<CSSProp["objectFit"]>;
  objectPosition?: DesygnaGenericProp<CSSProp["objectPosition"]>;
  overscrollBehavior?: DesygnaGenericProp<CSSProp["overscrollBehavior"]>;
  overscrollBehaviorX?: DesygnaGenericProp<CSSProp["overscrollBehaviorX"]>;
  overscrollBehaviorY?: DesygnaGenericProp<CSSProp["overscrollBehaviorY"]>;
  visibility?: DesygnaGenericProp<CSSProp["visibility"]>;
  transform?: DesygnaGenericProp<CSSProp["transform"]>;
  transformOrigin?: DesygnaGenericProp<CSSProp["transformOrigin"]>;
  accentColor?: DesygnaGenericProp<CSSProp["accentColor"]>;
  appearance?: DesygnaGenericProp<CSSProp["appearance"]>;
  cursor?: DesygnaGenericProp<CSSProp["cursor"]>;
  caretColor?: DesygnaGenericProp<CSSProp["caretColor"]>;
  pointerEvents?: DesygnaGenericProp<CSSProp["pointerEvents"]>;
  resize?: DesygnaGenericProp<CSSProp["resize"]>;
  scrollBehavior?: DesygnaGenericProp<CSSProp["scrollBehavior"]>;
  scrollMargin?: DesygnaGenericProp<CSSProp["scrollMargin"]>;
  scrollPadding?: DesygnaGenericProp<CSSProp["scrollPadding"]>;
  scrollSnapAlign?: DesygnaGenericProp<CSSProp["scrollSnapAlign"]>;
  scrollSnapStop?: DesygnaGenericProp<CSSProp["scrollSnapStop"]>;
  scrollSnapType?: DesygnaGenericProp<CSSProp["scrollSnapType"]>;
  touchAction?: DesygnaGenericProp<CSSProp["touchAction"]>;
  userSelect?: DesygnaGenericProp<CSSProp["userSelect"]>;
  willChange?: DesygnaGenericProp<CSSProp["willChange"]>;
  fill?: DesygnaGenericProp<CSSProp["fill"] | DesygnaThemeColor>;
  stroke?: DesygnaGenericProp<CSSProp["stroke"]>;
  strokeWidth?: DesygnaGenericProp<CSSProp["strokeWidth"]>;
};
