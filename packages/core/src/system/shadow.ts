import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeShadow } from "../types/desygna";

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
  textShadow?: DesygnaGenericProp<
    CSS.Properties["textShadow"] | DesygnaThemeShadow
  >;
  boxShadow?: DesygnaGenericProp<
    CSS.Properties["boxShadow"] | DesygnaThemeShadow
  >;
};
