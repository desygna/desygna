import { ExcludeStrPrototypeMethods } from "../../utils/misc/ExcludeStrPrototypeMethods";
import { DesygnaThemeBreakpointKey } from "./theme";

export type DesygnaGenericBreakpointValues<
  T,
  K extends keyof DesygnaThemeBreakpointKey = keyof DesygnaThemeBreakpointKey
> = {
  [key in K]: T;
};

export type DesygnaGenericProp<T, V = never> =
  | ExcludeStrPrototypeMethods<T>
  | V
  | DesygnaGenericBreakpointValues<ExcludeStrPrototypeMethods<T> | V>
  | Array<T | V>;
