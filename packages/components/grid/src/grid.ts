import { HTMLAttributes } from "react";
import {
  styled,
  AsProp,
  GridProps,
  grid,
  compose
} from "@desygna/desygna-core";

export type GridComponentProps = HTMLAttributes<HTMLDivElement> &
  GridProps &
  AsProp;

export const Grid = styled.div<GridComponentProps>(compose(grid));
