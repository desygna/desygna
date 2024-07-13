import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp, DesygnaThemeColor } from "../types/desygna";

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
  background?: DesygnaGenericProp<
    CSS.Properties["background"] | DesygnaThemeColor
  >;
  backgroundImage?: DesygnaGenericProp<CSS.Properties["backgroundImage"]>;
  backgroundSize?: DesygnaGenericProp<CSS.Properties["backgroundSize"]>;
  backgroundPosition?: DesygnaGenericProp<CSS.Properties["backgroundPosition"]>;
  backgroundRepeat?: DesygnaGenericProp<CSS.Properties["backgroundRepeat"]>;
  backgroundAttachment?: DesygnaGenericProp<
    CSS.Properties["backgroundAttachment"]
  >;
  backgroundClip?: DesygnaGenericProp<CSS.Properties["backgroundClip"]>;
  backgroundOrigin?: DesygnaGenericProp<CSS.Properties["backgroundOrigin"]>;
};
