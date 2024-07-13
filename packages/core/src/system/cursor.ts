import * as CSS from "csstype";
import { system } from "styled-system";
import { DesygnaGenericProp } from "../types/desygna";

export const $cursor = system({
  cursor: {
    property: "cursor"
  }
});

export type DesygnaSystemCursorProps = {
  cursor?: DesygnaGenericProp<CSS.Properties["cursor"]>;
};
