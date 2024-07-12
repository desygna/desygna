import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeColor } from "../../types/desygna";

export const $background = system({
  background: {
    scale: "colors",
    property: "background"
  },
  backgroundImage: { property: "backgroundImage" },
  backgroundSize: { property: "backgroundSize" },
  backgroundPosition: { property: "backgroundPosition" },
  backgroundRepeat: { property: "backgroundRepeat" },
  backgroundAttachment: { property: "backgroundAttachment" },
  backgroundClip: { property: "backgroundClip" },
  backgroundOrigin: { property: "backgroundOrigin" }
});

export declare type DesygnaSystemBackgroundProps = {
  background?: DesygnaGenericProp<CSSProp["background"] | DesygnaThemeColor>;
  backgroundImage?: DesygnaGenericProp<CSSProp["backgroundImage"]>;
  backgroundSize?: DesygnaGenericProp<CSSProp["backgroundSize"]>;
  backgroundPosition?: DesygnaGenericProp<CSSProp["backgroundPosition"]>;
  backgroundRepeat?: DesygnaGenericProp<CSSProp["backgroundRepeat"]>;
  backgroundAttachment?: DesygnaGenericProp<CSSProp["backgroundAttachment"]>;
  backgroundClip?: DesygnaGenericProp<CSSProp["backgroundClip"]>;
  backgroundOrigin?: DesygnaGenericProp<CSSProp["backgroundOrigin"]>;
};
