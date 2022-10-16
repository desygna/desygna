import { HTMLAttributes } from "react";
import {
  styled,
  AsProp,
  FlexboxProps,
  flexbox,
  compose
} from "@desygna/desygna-core";

export type FlexComponentProps = HTMLAttributes<HTMLDivElement> &
  FlexboxProps &
  AsProp;

export const Flex = styled.div<FlexComponentProps>(
  { display: "flex" },
  compose(flexbox)
);
