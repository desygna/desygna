import * as CSS from "csstype";
import {
  DesygnaGenericProp,
  DesygnaThemeBorder,
  DesygnaThemeBorderRadius,
  DesygnaThemeBorderStyle,
  DesygnaThemeBorderWidth,
  DesygnaThemeColor
} from "../types/desygna";

export type DesygnaSystemBorderProps = {
  border?: DesygnaGenericProp<CSS.Properties["border"] | DesygnaThemeBorder>;
  borderX?:
    | DesygnaGenericProp<CSS.Properties["borderLeft"] | DesygnaThemeBorder>
    | DesygnaGenericProp<CSS.Properties["borderRight"] | DesygnaThemeBorder>;
  borderY?:
    | DesygnaGenericProp<CSS.Properties["borderTop"] | DesygnaThemeBorder>
    | DesygnaGenericProp<CSS.Properties["borderBottom"] | DesygnaThemeBorder>;
  borderTop?: DesygnaGenericProp<CSS.Properties["borderTop"] | DesygnaThemeBorder>;
  borderBottom?: DesygnaGenericProp<CSS.Properties["borderBottom"] | DesygnaThemeBorder>;
  borderRight?: DesygnaGenericProp<CSS.Properties["borderRight"] | DesygnaThemeBorder>;
  borderLeft?: DesygnaGenericProp<CSS.Properties["borderLeft"] | DesygnaThemeBorder>;
  borderStyle?: DesygnaGenericProp<CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle>;
  borderWidth?: DesygnaGenericProp<
    CSS.Properties["borderWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderColor?: DesygnaGenericProp<CSS.Properties["borderColor"] | DesygnaThemeColor>;
  borderRadius?: DesygnaGenericProp<CSS.Properties["borderRadius"] | DesygnaThemeBorderRadius>;
  borderTopStyle?: DesygnaGenericProp<CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle>;
  borderTopWidth?: DesygnaGenericProp<
    CSS.Properties["borderTopWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderTopColor?: DesygnaGenericProp<CSS.Properties["borderColor"] | DesygnaThemeColor>;
  borderTopLeftRadius?: DesygnaGenericProp<
    CSS.Properties["borderTopLeftRadius"] | DesygnaThemeBorderRadius
  >;
  borderTopRightRadius?: DesygnaGenericProp<
    CSS.Properties["borderTopRightRadius"] | DesygnaThemeBorderRadius
  >;
  borderBottomStyle?: DesygnaGenericProp<CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle>;
  borderBottomWidth?: DesygnaGenericProp<
    CSS.Properties["borderBottomWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderBottomColor?: DesygnaGenericProp<CSS.Properties["borderColor"] | DesygnaThemeColor>;
  borderBottomLeftRadius?: DesygnaGenericProp<
    CSS.Properties["borderRadius"] | DesygnaThemeBorderRadius
  >;
  borderBottomRightRadius?: DesygnaGenericProp<
    CSS.Properties["borderBottomRightRadius"] | DesygnaThemeBorderRadius
  >;
  borderLeftStyle?: DesygnaGenericProp<CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle>;
  borderLeftWidth?: DesygnaGenericProp<
    CSS.Properties["borderLeftWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderLeftColor?: DesygnaGenericProp<CSS.Properties["borderColor"] | DesygnaThemeColor>;
  borderRightStyle?: DesygnaGenericProp<CSS.Properties["borderStyle"] | DesygnaThemeBorderStyle>;
  borderRightWidth?: DesygnaGenericProp<
    CSS.Properties["borderRightWidth"] | DesygnaThemeBorderWidth | number
  >;
  borderRightColor?: DesygnaGenericProp<CSS.Properties["borderColor"] | DesygnaThemeColor>;
  bl?: DesygnaGenericProp<CSS.Properties["borderLeft"] | DesygnaThemeBorder>;
  br?: DesygnaGenericProp<CSS.Properties["borderRight"] | DesygnaThemeBorder>;
  bt?: DesygnaGenericProp<CSS.Properties["borderTop"] | DesygnaThemeBorder>;
  bb?: DesygnaGenericProp<CSS.Properties["borderBottom"] | DesygnaThemeBorder>;
  outline?: DesygnaGenericProp<CSS.Properties["outline"]>;
  outlineColor?: DesygnaGenericProp<CSS.Properties["outlineColor"] | DesygnaThemeColor>;
  outlineWidth?: DesygnaGenericProp<CSS.Properties["outlineWidth"]>;
  outlineOffset?: DesygnaGenericProp<CSS.Properties["outlineOffset"]>;
};
