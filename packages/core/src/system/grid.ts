import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp } from "../types/desygna";

export const $grid = system({
  gridGap: { property: "gridGap" },
  gridRowGap: { property: "gridRowGap" },
  gridColumnGap: { property: "gridColumnGap" },
  gridColumn: { property: "gridColumn" },
  gridRow: { property: "gridRow" },
  gridArea: { property: "gridArea" },
  gridAutoFlow: { property: "gridAutoFlow" },
  gridAutoRows: { property: "gridAutoRows" },
  gridAutoColumns: { property: "gridAutoColumns" },
  gridTemplateRows: { property: "gridTemplateRows" },
  gridTemplateColumns: { property: "gridTemplateColumns" },
  gridTemplateAreas: { property: "gridTemplateAreas" }
});

export type DesygnaSystemGridProps = {
  gridGap?: DesygnaGenericProp<CSS.Properties["gap"]>;
  gridRowGap?: DesygnaGenericProp<CSS.Properties["rowGap"]>;
  gridColumnGap?: DesygnaGenericProp<CSS.Properties["columnGap"]>;
  gridColumn?: DesygnaGenericProp<CSS.Properties["gridColumn"]>;
  gridRow?: DesygnaGenericProp<CSS.Properties["gridRow"]>;
  gridArea?: DesygnaGenericProp<CSS.Properties["gridArea"]>;
  gridAutoFlow?: DesygnaGenericProp<CSS.Properties["gridAutoFlow"]>;
  gridAutoRows?: DesygnaGenericProp<CSS.Properties["gridAutoRows"]>;
  gridAutoColumns?: DesygnaGenericProp<CSS.Properties["gridAutoColumns"]>;
  gridTemplateRows?: DesygnaGenericProp<CSS.Properties["gridTemplateRows"]>;
  gridTemplateColumns?: DesygnaGenericProp<
    CSS.Properties["gridTemplateColumns"]
  >;
  gridTemplateAreas?: DesygnaGenericProp<CSS.Properties["gridTemplateAreas"]>;
};
