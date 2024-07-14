import { compose as _compose, styleFn } from "styled-system";

export function $compose(...parsers: styleFn[]): styleFn {
  return _compose(...parsers);
}
