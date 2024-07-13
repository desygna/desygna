import { HTMLAttributes } from "react";
import {
  $styled,
  AsProp,
  DesygnaSystemFlexboxProps,
  $flexbox,
  $compose,
  $layout,
  $space,
  DesygnaSystemLayoutProps,
  DesygnaSystemSpaceProps
} from "@desygna/desygna-core";

export type DesygnaFlexComponentProps = HTMLAttributes<HTMLDivElement> &
  DesygnaSystemFlexboxProps &
  DesygnaSystemSpaceProps &
  DesygnaSystemLayoutProps &
  AsProp;

export const Flex = $styled.div<DesygnaFlexComponentProps>(
  { display: "flex" },
  $compose($flexbox, $layout, $space)
);
