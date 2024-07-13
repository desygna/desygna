import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp } from "../types/desygna";

export const $flexbox = system({
  alignItems: { property: "alignItems" },
  alignContent: { property: "alignContent" },
  justifyItems: { property: "justifyItems" },
  justifyContent: { property: "justifyContent" },
  flexWrap: { property: "flexWrap" },
  flexDirection: { property: "flexDirection" },
  flex: { property: "flex" },
  flexGrow: { property: "flexGrow" },
  flexShrink: { property: "flexShrink" },
  flexBasis: { property: "flexBasis" },
  justifySelf: { property: "justifySelf" },
  alignSelf: { property: "alignSelf" },
  order: { property: "order" }
});

export type DesygnaSystemFlexboxProps = {
  alignItems?: DesygnaGenericProp<CSS.Properties["alignItems"]>;
  alignContent?: DesygnaGenericProp<CSS.Properties["alignContent"]>;
  justifyItems?: DesygnaGenericProp<CSS.Properties["justifyItems"]>;
  justifyContent?: DesygnaGenericProp<CSS.Properties["justifyContent"]>;
  flexWrap?: DesygnaGenericProp<CSS.Properties["flexWrap"]>;
  flexDirection?: DesygnaGenericProp<CSS.Properties["flexDirection"]>;
  flex?: DesygnaGenericProp<CSS.Properties["flex"]>;
  flexGrow?: DesygnaGenericProp<CSS.Properties["flexGrow"]>;
  flexShrink?: DesygnaGenericProp<CSS.Properties["flexShrink"]>;
  flexBasis?: DesygnaGenericProp<CSS.Properties["flexBasis"]>;
  justifySelf?: DesygnaGenericProp<CSS.Properties["justifySelf"]>;
  alignSelf?: DesygnaGenericProp<CSS.Properties["alignSelf"]>;
  order?: DesygnaGenericProp<CSS.Properties["order"]>;
};
