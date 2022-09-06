import { compose } from "styled-system";

import { background } from "./background";
import type { BackgroundProps } from "./background";
import { border } from "./border";
import type { BorderProps } from "./border";
import { color } from "./color";
import type { ColorProps } from "./color";
import { cursor } from "./cursor";
import type { CursorProps } from "./cursor";
import { flexbox } from "./flexbox";
import type { FlexboxProps } from "./flexbox";
import { grid } from "./grid";
import type { GridProps } from "./grid";
import { layout } from "./layout";
import type { LayoutProps } from "./layout";
import { position } from "./position";
import type { PositionProps } from "./position";
import { shadow } from "./shadow";
import type { ShadowProps } from "./shadow";
import { space } from "./space";
import type { SpaceProps } from "./space";
import { typography } from "./typography";
import type { TypographyProps } from "./typography";

export type ComposedProps = BackgroundProps &
  BorderProps &
  ColorProps &
  CursorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export const composeAll = compose(
  background,
  border,
  color,
  cursor,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
);
