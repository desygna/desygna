import { HTMLAttributes } from "react";
import {
  styled,
  composeAll,
  ComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  ComposedProps &
  AsProp;

export const Button = styled.div<ButtonProps>(composeAll);
