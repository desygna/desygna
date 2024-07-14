import { compose } from "styled-system";
import { $animation } from "./animation.system";
import { $background } from "./background.system";
import { $border } from "./border.system";
import { $color } from "./color.system";
import { $cursor } from "./cursor.system";
import { $flexbox } from "./flexbox.system";
import { $grid } from "./grid.system";
import { $layout } from "./layout.system";
import { $position } from "./position.system";
import { $shadow } from "./shadow.system";
import { $space } from "./space.system";
import { $typography } from "./typography.system";

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
