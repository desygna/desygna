import { system as _system, Config, styleFn } from "styled-system";

export function $system(styleDefinitions: Config): styleFn {
  return _system(styleDefinitions);
}
