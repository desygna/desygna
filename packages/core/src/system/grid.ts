import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp } from "../../types/desygna";

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
  gridGap?: DesygnaGenericProp<CSSProp["gap"]>;
  gridRowGap?: DesygnaGenericProp<CSSProp["rowGap"]>;
  gridColumnGap?: DesygnaGenericProp<CSSProp["columnGap"]>;
  gridColumn?: DesygnaGenericProp<CSSProp["gridColumn"]>;
  gridRow?: DesygnaGenericProp<CSSProp["gridRow"]>;
  gridArea?: DesygnaGenericProp<CSSProp["gridArea"]>;
  gridAutoFlow?: DesygnaGenericProp<CSSProp["gridAutoFlow"]>;
  gridAutoRows?: DesygnaGenericProp<CSSProp["gridAutoRows"]>;
  gridAutoColumns?: DesygnaGenericProp<CSSProp["gridAutoColumns"]>;
  gridTemplateRows?: DesygnaGenericProp<CSSProp["gridTemplateRows"]>;
  gridTemplateColumns?: DesygnaGenericProp<CSSProp["gridTemplateColumns"]>;
  gridTemplateAreas?: DesygnaGenericProp<CSSProp["gridTemplateAreas"]>;
};
