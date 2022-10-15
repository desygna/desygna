import { DesygnaTheme } from "./types";

export type CreateThemeType<T extends DesygnaTheme = DesygnaTheme> = {
  [K in keyof T]: T[K];
} & {
  breakpointAliases?: string[];
};

export type CreateThemeReturnType<T extends DesygnaTheme = DesygnaTheme> = Omit<
  CreateThemeType<T>,
  "breakpointAliases"
>;

export function createTheme<T extends DesygnaTheme = DesygnaTheme>({
  breakpointAliases,
  ...themeValues
}: CreateThemeType<T>): CreateThemeReturnType<T> {
  if (breakpointAliases) {
    breakpointAliases.forEach((alias, index) => {
      themeValues.breakpoints[alias] = themeValues.breakpoints[index];
    });
  }

  const theme: CreateThemeReturnType<T> = themeValues;

  return theme;
}
