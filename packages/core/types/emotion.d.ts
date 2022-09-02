import "@emotion/react";
import { DesygnaTheme } from "../src/theme/types";

declare module "@emotion/react" {
  export interface Theme extends DesygnaTheme {}
}
