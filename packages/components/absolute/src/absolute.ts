import { HTMLAttributes } from "react";
import {
  $styled,
  AsProp,
  DesygnaSystemPositionProps,
  $position,
  $compose,
  $space,
  $layout,
  DesygnaSystemSpaceProps,
  DesygnaSystemLayoutProps
} from "@desygna/desygna-core";

export type DesygnaAbsoluteComponentProps = HTMLAttributes<HTMLDivElement> &
  DesygnaSystemPositionProps &
  DesygnaSystemSpaceProps &
  DesygnaSystemLayoutProps &
  AsProp;

export const Absolute = $styled.div<DesygnaAbsoluteComponentProps>(
  { position: "absolute" },
  $compose($position, $space, $layout)
);
