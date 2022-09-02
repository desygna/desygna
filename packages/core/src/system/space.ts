import * as CSS from "csstype";
import {
  compose,
  space as spaceSystem,
  system,
  SpaceProps as SystemSpaceProps
} from "styled-system";

export const space = compose(
  spaceSystem,
  system({
    gap: {
      property: "gap",
      scale: "space"
    }
  })
);

export type SpaceProps = SystemSpaceProps & {
  gap?: CSS.Properties["gap"];
};
