import { DesygnaTheme } from "./types";

export function createDesygnaTheme<
  T extends Partial<DesygnaTheme> = Partial<DesygnaTheme>
>(theme: T): T {
  return theme;
}
