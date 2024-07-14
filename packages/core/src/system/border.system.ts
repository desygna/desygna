import { system } from "styled-system";

export const $border = system({
  border: { property: "border", scale: "borders" },
  borderX: { properties: ["borderLeft", "borderRight"], scale: "borders" },
  borderY: { properties: ["borderTop", "borderBottom"], scale: "borders" },
  borderTop: { property: "borderTop", scale: "borders" },
  borderBottom: { property: "borderBottom", scale: "borders" },
  borderRight: { property: "borderRight", scale: "borders" },
  borderLeft: { property: "borderLeft", scale: "borders" },
  borderStyle: { property: "borderStyle", scale: "borderStyles" },
  borderWidth: { property: "borderWidth" },
  borderColor: { property: "borderColor", scale: "colors" },
  borderRadius: { property: "borderRadius", scale: "radii" },
  borderTopStyle: { property: "borderTopStyle", scale: "borderStyles" },
  borderTopWidth: { property: "borderTopWidth" },
  borderTopColor: { property: "borderTopColor", scale: "colors" },
  borderTopLeftRadius: { property: "borderTopLeftRadius", scale: "radii" },
  borderTopRightRadius: { property: "borderTopRightRadius", scale: "radii" },
  borderBottomStyle: { property: "borderBottomStyle", scale: "borderStyles" },
  borderBottomWidth: { property: "borderBottomWidth" },
  borderBottomColor: { property: "borderBottomColor", scale: "colors" },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  borderLeftStyle: { property: "borderLeftStyle", scale: "borderStyles" },
  borderLeftWidth: { property: "borderLeftWidth" },
  borderLeftColor: { property: "borderLeftColor", scale: "colors" },
  borderRightStyle: { property: "borderRightStyle", scale: "borderStyles" },
  borderRightWidth: { property: "borderRightWidth" },
  borderRightColor: { property: "borderRightColor", scale: "colors" },
  bl: { property: "borderLeft", scale: "borders" },
  br: { property: "borderRight", scale: "borders" },
  bt: { property: "borderTop", scale: "borders" },
  bb: { property: "borderBottom", scale: "borders" },
  outline: { property: "outline" },
  outlineColor: { property: "outlineColor", scale: "colors" },
  outlineWidth: { property: "outlineWidth" },
  outlineOffset: { property: "outlineOffset" }
});
