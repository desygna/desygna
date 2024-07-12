import type { Properties as CSSProp } from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp } from "../../types/desygna";

export const $cursor = system({
  cursor: {
    property: "cursor"
  }
});

export type DesygnaSystemCursorProps = {
  cursor?: DesygnaGenericProp<CSSProp["cursor"]>;
};
