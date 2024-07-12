import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp } from "../../types/desygna";

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
  alignItems?: DesygnaGenericProp<CSSProp["alignItems"]>;
  alignContent?: DesygnaGenericProp<CSSProp["alignContent"]>;
  justifyItems?: DesygnaGenericProp<CSSProp["justifyItems"]>;
  justifyContent?: DesygnaGenericProp<CSSProp["justifyContent"]>;
  flexWrap?: DesygnaGenericProp<CSSProp["flexWrap"]>;
  flexDirection?: DesygnaGenericProp<CSSProp["flexDirection"]>;
  flex?: DesygnaGenericProp<CSSProp["flex"]>;
  flexGrow?: DesygnaGenericProp<CSSProp["flexGrow"]>;
  flexShrink?: DesygnaGenericProp<CSSProp["flexShrink"]>;
  flexBasis?: DesygnaGenericProp<CSSProp["flexBasis"]>;
  justifySelf?: DesygnaGenericProp<CSSProp["justifySelf"]>;
  alignSelf?: DesygnaGenericProp<CSSProp["alignSelf"]>;
  order?: DesygnaGenericProp<CSSProp["order"]>;
};
