import { DesygnaTheme } from "./types";

type Bps<T = string, K = Record<string, string>> = T[] & {
  [P in keyof K]?: string;
};

function isValidObject(value: any): value is Record<string, string> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function createDesygnaTheme<T extends Partial<DesygnaTheme> = Partial<DesygnaTheme>>(
  theme: T
): T {
  let breakpoints: Bps<string, T["breakpoints"]> = [] as Bps<string, T["breakpoints"]>;

  if (!isValidObject(theme.breakpoints)) {
    console.warn("[Desygna] - Please provide a valid `breakpoints` for theme");
    return theme;
  }

  if (theme.breakpoints) {
    Object.entries(theme.breakpoints).forEach(([key, value]) => {
      (breakpoints as any)[key] = value;
    });
  }

  theme.breakpoints = breakpoints;
  return theme;
}
