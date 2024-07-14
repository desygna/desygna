import { system } from "styled-system";

export const $space = system({
  m: {
    property: "margin",
    scale: "spacings"
  },
  mt: {
    property: "marginTop",
    scale: "spacings"
  },
  mb: {
    property: "marginBottom",
    scale: "spacings"
  },
  mr: {
    property: "marginRight",
    scale: "spacings"
  },
  ml: {
    property: "marginLeft",
    scale: "spacings"
  },
  mx: {
    properties: ["marginLeft", "marginRight"],
    scale: "spacings"
  },
  my: {
    properties: ["marginTop", "marginBottom"],
    scale: "spacings"
  },
  p: {
    property: "padding",
    scale: "spacings"
  },
  pt: {
    property: "paddingTop",
    scale: "spacings"
  },
  pb: {
    property: "paddingBottom",
    scale: "spacings"
  },
  pr: {
    property: "paddingRight",
    scale: "spacings"
  },
  pl: {
    property: "paddingLeft",
    scale: "spacings"
  },
  px: {
    properties: ["paddingRight", "paddingLeft"],
    scale: "spacings"
  },
  py: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "spacings"
  },
  margin: {
    property: "margin",
    scale: "spacings"
  },
  marginTop: {
    property: "marginTop",
    scale: "spacings"
  },
  marginBottom: {
    property: "marginBottom",
    scale: "spacings"
  },
  marginRight: {
    property: "marginRight",
    scale: "spacings"
  },
  marginLeft: {
    property: "marginLeft",
    scale: "spacings"
  },
  marginX: {
    property: "gap",
    scale: "spacings"
  },
  marginY: {
    properties: ["marginLeft", "marginRight"],
    scale: "spacings"
  },
  padding: {
    property: "padding",
    scale: "spacings"
  },
  paddingTop: {
    property: "paddingTop",
    scale: "spacings"
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "spacings"
  },
  paddingRight: {
    property: "paddingRight",
    scale: "spacings"
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "spacings"
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "spacings"
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "spacings"
  },
  gap: {
    property: "gap",
    scale: "spacings"
  }
});
