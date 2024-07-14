import * as CSS from "csstype";
import { ResponsiveProp } from "../types/ResponsiveProp";

export { border } from "styled-system";

export type BorderProps = {
  border?: ResponsiveProp<CSS.Properties["border"]>;
  borderX?:
    | ResponsiveProp<CSS.Properties["borderLeft"]>
    | ResponsiveProp<CSS.Properties["borderRight"]>;
  borderY?:
    | ResponsiveProp<CSS.Properties["borderTop"]>
    | ResponsiveProp<CSS.Properties["borderBottom"]>;
  borderTop?: ResponsiveProp<CSS.Properties["borderTop"]>;
  borderBottom?: ResponsiveProp<CSS.Properties["borderBottom"]>;
  borderRight?: ResponsiveProp<CSS.Properties["borderRight"]>;
  borderLeft?: ResponsiveProp<CSS.Properties["borderLeft"]>;
  borderStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderWidth?: ResponsiveProp<CSS.Properties["borderWidth"]> | number;
  borderColor?: ResponsiveProp<CSS.Properties["borderColor"]>;
  borderRadius?: ResponsiveProp<CSS.Properties["borderRadius"]>;
  borderTopStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderTopWidth?: ResponsiveProp<CSS.Properties["borderTopWidth"]> | number;
  borderTopColor?: ResponsiveProp<CSS.Properties["borderColor"]>;
  borderTopLeftRadius?: ResponsiveProp<CSS.Properties["borderTopLeftRadius"]>;
  borderTopRightRadius?: ResponsiveProp<CSS.Properties["borderTopRightRadius"]>;
  borderBottomStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderBottomWidth?:
    | ResponsiveProp<CSS.Properties["borderBottomWidth"]>
    | number;
  borderBottomColor?: ResponsiveProp<CSS.Properties["borderColor"]>;
  borderBottomLeftRadius?: ResponsiveProp<CSS.Properties["borderRadius"]>;
  borderBottomRightRadius?: ResponsiveProp<
    CSS.Properties["borderBottomRightRadius"]
  >;
  borderLeftStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderLeftWidth?: ResponsiveProp<CSS.Properties["borderLeftWidth"]> | number;
  borderLeftColor?: ResponsiveProp<CSS.Properties["borderColor"]>;
  borderRightStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderRightWidth?:
    | ResponsiveProp<CSS.Properties["borderRightWidth"]>
    | number;
  borderRightColor?: ResponsiveProp<CSS.Properties["borderColor"]>;
};
