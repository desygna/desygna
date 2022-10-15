import { HTMLAttributes } from "react";
import {
  styled,
  composeAll,
  ComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  ComposedProps &
  AsProp;

export const Paragraph = styled.p<ParagraphProps>(composeAll);
