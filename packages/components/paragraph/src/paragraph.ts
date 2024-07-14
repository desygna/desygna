import { HTMLAttributes } from "react";
import {
  $styled,
  $composeAll,
  DesygnaComposedProps,
  AsProp
} from "@desygna/desygna-core";

export type DesygnaParagraphComponentProps =
  HTMLAttributes<HTMLParagraphElement> & DesygnaComposedProps & AsProp;

export const Paragraph = $styled.p<DesygnaParagraphComponentProps>(
  $composeAll()
);
