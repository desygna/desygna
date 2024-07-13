import { HTMLAttributes } from "react";
import {
  $styled,
  AsProp,
  DesygnaSystemGridProps,
  $grid,
  $compose,
  DesygnaSystemLayoutProps,
  DesygnaSystemSpaceProps,
  $layout,
  $space
} from "@desygna/desygna-core";

export type DesygnaGridComponentProps = HTMLAttributes<HTMLDivElement> &
  DesygnaSystemGridProps &
  DesygnaSystemLayoutProps &
  DesygnaSystemSpaceProps &
  AsProp;

export const Grid = $styled.div<DesygnaGridComponentProps>(
  { display: "grid" },
  $compose($grid, $layout, $space)
);
