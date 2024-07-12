export type DesygnaThemeRecord =
  | string
  | {
      [key: string]: DesygnaThemeRecord;
    };

export interface DesygnaTheme {
  animations?: {
    [key: string]: string;
  };
  colors?: {
    [key: string]: DesygnaThemeRecord;
  };
  breakpoints?: {
    [key: string]: string;
  };
  mediaQueries?: {
    [key: string]: string;
  };
  borders?: {
    [key: string]: DesygnaThemeRecord;
  };
  borderWidths?: {
    [key: string]: DesygnaThemeRecord;
  };
  borderStyles?: {
    [key: string]: DesygnaThemeRecord;
  };
  fonts?: {
    [key: string]: DesygnaThemeRecord;
  };
  fontSizes?: {
    [key: string]: DesygnaThemeRecord;
  };
  fontWeights?: {
    [key: string]: DesygnaThemeRecord;
  };
  lineHeights?: {
    [key: string]: DesygnaThemeRecord;
  };
  letterSpacings?: {
    [key: string]: DesygnaThemeRecord;
  };
  radii?: {
    [key: string]: DesygnaThemeRecord;
  };
  shadows?: {
    [key: string]: DesygnaThemeRecord;
  };
  sizes?: {
    [key: string]: DesygnaThemeRecord;
  };
  spacings?: {
    [key: string]: DesygnaThemeRecord;
  };
  transitions?: {
    [key: string]: DesygnaThemeRecord;
  };
  zIndices?: {
    [key: string]: DesygnaThemeRecord;
  };
}
