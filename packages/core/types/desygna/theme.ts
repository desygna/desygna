import { Theme } from "@emotion/react";
import { PathToStringProps, StringPathJoin } from "../../utils/misc/StringPath";

export type DesygnaThemeBreakpointKey = Theme["breakpoints"];

export type DesygnaThemeAnimation = StringPathJoin<
  PathToStringProps<Theme["animations"]>,
  "."
>;
export type DesygnaThemeColor = StringPathJoin<
  PathToStringProps<Theme["colors"]>,
  "."
>;
export type DesygnaThemeBorder = StringPathJoin<
  PathToStringProps<Theme["borders"]>,
  "."
>;
export type DesygnaThemeBorderWidth = StringPathJoin<
  PathToStringProps<Theme["borderWidths"]>,
  "."
>;
export type DesygnaThemeBorderStyle = StringPathJoin<
  PathToStringProps<Theme["borderStyles"]>,
  "."
>;
export type DesygnaThemeFont = StringPathJoin<
  PathToStringProps<Theme["fonts"]>,
  "."
>;
export type DesygnaThemeFontSize = StringPathJoin<
  PathToStringProps<Theme["fontSizes"]>,
  "."
>;
export type DesygnaThemeFontWeight = StringPathJoin<
  PathToStringProps<Theme["fontWeights"]>,
  "."
>;
export type DesygnaThemeLineHeight = StringPathJoin<
  PathToStringProps<Theme["lineHeights"]>,
  "."
>;
export type DesygnaThemeLetterSpacing = StringPathJoin<
  PathToStringProps<Theme["letterSpacings"]>,
  "."
>;
export type DesygnaThemeBorderRadius = StringPathJoin<
  PathToStringProps<Theme["radii"]>,
  "."
>;
export type DesygnaThemeShadow = StringPathJoin<
  PathToStringProps<Theme["shadows"]>,
  "."
>;
export type DesygnaThemeSize = StringPathJoin<
  PathToStringProps<Theme["sizes"]>,
  "."
>;
export type DesygnaThemeSpace = StringPathJoin<
  PathToStringProps<Theme["spacings"]>,
  "."
>;
export type DesygnaThemeTransition = StringPathJoin<
  PathToStringProps<Theme["transitions"]>,
  "."
>;
export type DesygnaThemeZIndices = StringPathJoin<
  PathToStringProps<Theme["zIndices"]>,
  "."
>;
