import { compose } from "styled-system";
import { $animation, type DesygnaSystemAnimationProps } from "./animation";
import { $background, type DesygnaSystemBackgroundProps } from "./background";
import { $border, type DesygnaSystemBorderProps } from "./border";
import { $color, type DesygnaSystemColorProps } from "./color";
import { $flexbox, type DesygnaSystemFlexboxProps } from "./flexbox";
import { $grid, type DesygnaSystemGridProps } from "./grid";
import { $layout, type DesygnaSystemLayoutProps } from "./layout";
import { $position, type DesygnaSystemPositionProps } from "./position";
import { $shadow, type DesygnaSystemShadowProps } from "./shadow";
import { $space, type DesygnaSystemSpaceProps } from "./space";
import { $typography, type DesygnaSystemTypographyProps } from "./typography";
import { $cursor, DesygnaSystemCursorProps } from "./cursor";

export function $composeAll() {
  return compose(
    $animation,
    $background,
    $border,
    $color,
    $cursor,
    $flexbox,
    $grid,
    $layout,
    $position,
    $shadow,
    $space,
    $typography
  );
}

export type DesygnaComposedProps = DesygnaSystemAnimationProps &
  DesygnaSystemBackgroundProps &
  DesygnaSystemBorderProps &
  DesygnaSystemColorProps &
  DesygnaSystemCursorProps &
  DesygnaSystemFlexboxProps &
  DesygnaSystemGridProps &
  DesygnaSystemLayoutProps &
  DesygnaSystemPositionProps &
  DesygnaSystemShadowProps &
  DesygnaSystemSpaceProps &
  DesygnaSystemTypographyProps;
