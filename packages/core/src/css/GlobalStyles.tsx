import { Global, GlobalProps } from "@emotion/react";

export type GlobalStylesProps = {
  css: GlobalProps["styles"];
};

export const GlobalStyles = ({ css }: GlobalStylesProps) => {
  return <Global styles={css} />;
};
