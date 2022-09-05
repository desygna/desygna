import { DesygnaTheme } from "./types";

export type CreateThemeType = DesygnaTheme & {
  breakpointAliases?: string[];
};

export function createTheme({
  breakpointAliases,
  breakpoints,
  borderRadius,
  borderWidth,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  zIndices
}: CreateThemeType): DesygnaTheme {
  if (breakpointAliases) {
    breakpointAliases.forEach((alias, index) => {
      // @ts-ignore
      breakpoints[alias] = breakpoints[index];
    });
  }

  const t: DesygnaTheme = {
    breakpoints,
    borderRadius,
    borderWidth,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    sizes,
    shadows,
    space,
    zIndices
  };

  return t;
}
