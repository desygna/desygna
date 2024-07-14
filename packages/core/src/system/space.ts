import * as CSS from "csstype";
import { compose, space as spaceSystem, system } from "styled-system";
import { ResponsiveProp } from "../types/ResponsiveProp";

export const space = compose(
  spaceSystem,
  system({
    gap: {
      property: "gap",
      scale: "space"
    }
  })
);

export type SpaceProps = {
  m?: ResponsiveProp<CSS.Properties["margin"]> | number;
  mt?: ResponsiveProp<CSS.Properties["marginTop"]> | number;
  mb?: ResponsiveProp<CSS.Properties["marginBottom"]> | number;
  mr?: ResponsiveProp<CSS.Properties["marginRight"]> | number;
  ml?: ResponsiveProp<CSS.Properties["marginLeft"]> | number;
  mx?: ResponsiveProp<CSS.Properties["marginRight"]> | number;
  my?: ResponsiveProp<CSS.Properties["marginTop"]> | number;
  p?: ResponsiveProp<CSS.Properties["padding"]> | number;
  pt?: ResponsiveProp<CSS.Properties["paddingTop"]> | number;
  pb?: ResponsiveProp<CSS.Properties["paddingBottom"]> | number;
  pr?: ResponsiveProp<CSS.Properties["paddingRight"]> | number;
  pl?: ResponsiveProp<CSS.Properties["paddingLeft"]> | number;
  px?: ResponsiveProp<CSS.Properties["paddingRight"]> | number;
  py?: ResponsiveProp<CSS.Properties["paddingTop"]> | number;
  margin?: ResponsiveProp<CSS.Properties["margin"]> | number;
  marginTop?: ResponsiveProp<CSS.Properties["marginTop"]> | number;
  marginBottom?: ResponsiveProp<CSS.Properties["marginBottom"]> | number;
  marginRight?: ResponsiveProp<CSS.Properties["marginRight"]> | number;
  marginLeft?: ResponsiveProp<CSS.Properties["marginLeft"]> | number;
  marginX?: ResponsiveProp<CSS.Properties["marginRight"]> | number;
  marginY?: ResponsiveProp<CSS.Properties["marginTop"]> | number;
  padding?: ResponsiveProp<CSS.Properties["padding"]> | number;
  paddingTop?: ResponsiveProp<CSS.Properties["paddingTop"]> | number;
  paddingBottom?: ResponsiveProp<CSS.Properties["paddingBottom"]> | number;
  paddingRight?: ResponsiveProp<CSS.Properties["paddingRight"]> | number;
  paddingLeft?: ResponsiveProp<CSS.Properties["paddingLeft"]> | number;
  paddingX?: ResponsiveProp<CSS.Properties["paddingRight"]> | number;
  paddingY?: ResponsiveProp<CSS.Properties["paddingTop"]> | number;
  gap?: ResponsiveProp<CSS.Properties["gap"]>;
};
