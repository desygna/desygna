import { HTMLAttributes } from "react";
import {
  styled,
  AsProp,
  PositionProps,
  position,
  compose
} from "@desygna/desygna-core";

export type AbsoluteComponentProps = HTMLAttributes<HTMLDivElement> &
  PositionProps &
  AsProp;

export const Absolute = styled.div<AbsoluteComponentProps>(compose(position));

Absolute.defaultProps = {
  position: "absolute"
};
