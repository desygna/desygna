import { variant as _variant, VariantArgs } from "styled-system";

export function $variant<
  TStyle = object,
  K extends string = string,
  TPropName = string
>(props: VariantArgs<TStyle, K, TPropName>) {
  return _variant<TStyle, K, TPropName>(props);
}
