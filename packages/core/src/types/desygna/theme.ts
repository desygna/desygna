import { DesygnaTheme } from "../../theme";
import { PathToStringProps, StringPathJoin } from "../../utils/misc/StringPath";

export type DesygnaThemeBreakpointKey = DesygnaTheme["breakpoints"];

export type DesygnaThemeAnimation = StringPathJoin<
  PathToStringProps<DesygnaTheme["animations"]>,
  "."
>;
export type DesygnaThemeColor = StringPathJoin<
  PathToStringProps<DesygnaTheme["colors"]>,
  "."
>;
export type DesygnaThemeBorder = StringPathJoin<
  PathToStringProps<DesygnaTheme["borders"]>,
  "."
>;
export type DesygnaThemeBorderWidth = StringPathJoin<
  PathToStringProps<DesygnaTheme["borderWidths"]>,
  "."
>;
export type DesygnaThemeBorderStyle = StringPathJoin<
  PathToStringProps<DesygnaTheme["borderStyles"]>,
  "."
>;
export type DesygnaThemeFont = StringPathJoin<
  PathToStringProps<DesygnaTheme["fonts"]>,
  "."
>;
export type DesygnaThemeFontSize = StringPathJoin<
  PathToStringProps<DesygnaTheme["fontSizes"]>,
  "."
>;
export type DesygnaThemeFontWeight = StringPathJoin<
  PathToStringProps<DesygnaTheme["fontWeights"]>,
  "."
>;
export type DesygnaThemeLineHeight = StringPathJoin<
  PathToStringProps<DesygnaTheme["lineHeights"]>,
  "."
>;
export type DesygnaThemeLetterSpacing = StringPathJoin<
  PathToStringProps<DesygnaTheme["letterSpacings"]>,
  "."
>;
export type DesygnaThemeBorderRadius = StringPathJoin<
  PathToStringProps<DesygnaTheme["radii"]>,
  "."
>;
export type DesygnaThemeShadow = StringPathJoin<
  PathToStringProps<DesygnaTheme["shadows"]>,
  "."
>;
export type DesygnaThemeSize = StringPathJoin<
  PathToStringProps<DesygnaTheme["sizes"]>,
  "."
>;
export type DesygnaThemeSpace = StringPathJoin<
  PathToStringProps<DesygnaTheme["spacings"]>,
  "."
>;
export type DesygnaThemeTransition = StringPathJoin<
  PathToStringProps<DesygnaTheme["transitions"]>,
  "."
>;
export type DesygnaThemeZIndices = StringPathJoin<
  PathToStringProps<DesygnaTheme["zIndices"]>,
  "."
>;
