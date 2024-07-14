import { type DesygnaSystemAnimationProps } from "./animation";
import { type DesygnaSystemBackgroundProps } from "./background";
import { type DesygnaSystemBorderProps } from "./border";
import { type DesygnaSystemColorProps } from "./color";
import { type DesygnaSystemCursorProps } from "./cursor";
import { type DesygnaSystemFlexboxProps } from "./flexbox";
import { type DesygnaSystemGridProps } from "./grid";
import { type DesygnaSystemLayoutProps } from "./layout";
import { type DesygnaSystemPositionProps } from "./position";
import { type DesygnaSystemShadowProps } from "./shadow";
import { type DesygnaSystemSpaceProps } from "./space";
import { type DesygnaSystemTypographyProps } from "./typography";

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
