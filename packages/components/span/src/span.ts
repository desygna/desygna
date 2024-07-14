import { HTMLAttributes } from "react";
import {
  $styled,
  $composeAll,
  DesygnaComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type SpanProps = HTMLAttributes<HTMLSpanElement> &
  DesygnaComposedProps &
  AsProp;

export const Span = $styled.span<SpanProps>($composeAll());
