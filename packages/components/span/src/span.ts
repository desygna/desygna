import { HTMLAttributes } from "react";
import {
  styled,
  composeAll,
  ComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type SpanProps = HTMLAttributes<HTMLSpanElement> &
  ComposedProps &
  AsProp;

export const Span = styled.span<SpanProps>(composeAll);
