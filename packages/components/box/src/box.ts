import { HTMLAttributes } from "react";
import {
  styled,
  composeAll,
  ComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type BoxComponentProps = HTMLAttributes<HTMLDivElement> &
  ComposedProps &
  AsProp;

export const Box = styled.div<BoxComponentProps>(composeAll);
