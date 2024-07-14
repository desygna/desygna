import { HTMLAttributes } from "react";
import {
  $styled,
  $composeAll,
  DesygnaComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type DesygnaButtonComponentProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  "color"
> &
  DesygnaComposedProps &
  AsProp;

export const Button = $styled.button<DesygnaButtonComponentProps>(
  $composeAll()
);
