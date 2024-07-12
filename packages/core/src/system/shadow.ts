import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeShadow } from "../../types/desygna";

export const $shadow = system({
  textShadow: {
    property: "color",
    scale: "shadows"
  },
  boxShadow: {
    property: "color",
    scale: "shadows"
  }
});

export type DesygnaSystemShadowProps = {
  textShadow?: DesygnaGenericProp<CSSProp["textShadow"] | DesygnaThemeShadow>;
  boxShadow?: DesygnaGenericProp<CSSProp["boxShadow"] | DesygnaThemeShadow>;
};
