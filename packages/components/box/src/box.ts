import { HTMLAttributes } from "react";
import {
  $styled,
  $composeAll,
  DesygnaComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type DesygnaBoxComponentProps = HTMLAttributes<HTMLDivElement> &
  DesygnaComposedProps &
  AsProp;

export const Box = $styled.div<DesygnaBoxComponentProps>($composeAll());
