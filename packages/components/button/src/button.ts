import { HTMLAttributes } from "react";
import {
  styled,
  composeAll,
  ComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type ButtonComponentProps = HTMLAttributes<HTMLButtonElement> &
  ComposedProps &
  AsProp;

export const Button = styled.button<ButtonComponentProps>(composeAll);
