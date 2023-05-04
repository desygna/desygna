import React from "react";
import { CommonSandpackV4Rc1 } from "../components/sandpack";

const App = `
/**
 *
 * To get typings in your code editor,
 * you need to have a theme.ts file for your custom theme and a desygna.d.ts file
 * for type definitions of the Desygna library.
 *
 * These files allow your editor to provide autocomplete suggestions and type-checking
 * for your custom theme properties, making it easier to write type-safe components.
 *
 */
import { 
  $styled, 
  $composeAll, 
  shouldForwardProp, 
  DesygnaProvider, 
  DesygnaComposedProps
} from "@desygna/desygna-core";
import { customTheme } from "./theme";

export type CustomBoxProps = {
  id?: string;
  role?: string;
  className?: string;
  tabIndex?: number;
} & DesygnaComposedProps;

export const CustomBox = $styled("div", {
  shouldForwardProp
})<CustomBoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    transition: "all 0.2s ease"
  }, 
  $composeAll
);

/**
 *
 *   Now use the component in your app,
 *   get type-checking and autocomplete for prop values like this:
 *
 *  "text" | "background" |
 *  "primary.100" | "primary.200" | "primary.300" |
 *  "accent.100" | "accent.200" | "accent.300" |
 *  "neutral.100" | "neutral.200" | "neutral.300" |
 *  "success.100" | "success.200" | "success.300" |
 *  "warning.100" | "warning.200" | "warning.300" |
 *  "error.100" | "error.200" | "error.300" |
 *  "info.100" | "info.200" | "info.300" | ...
 */

export default function App() {
  return (
    <DesygnaProvider theme={customTheme}>
      <CustomBox display="flex" flexDirection="column" gap="12px">
        <CustomBox
          c="primary.300"
          bg="primary.100"
          borderColor="primary.200"
          borderWidth="1px"
          borderStyle="solid"
          w="full"
          h="full"
          padding="4px"
        >
          This is a custom box
        </CustomBox>

        <CustomBox
          c="accent.300"
          bg="accent.100"
          borderColor="accent.200"
          borderWidth="1px"
          borderStyle="solid"
          w="full"
          h="full"
          padding="4px"
        >
          This is a custom box
        </CustomBox>

        <CustomBox
          c="success.300"
          bg="success.100"
          borderColor="success.200"
          borderWidth="1px"
          borderStyle="solid"
          w="full"
          h="full"
          padding="4px"
        >
          This is a custom box
        </CustomBox>

        <CustomBox
          c="warning.300"
          bg="warning.100"
          borderColor="warning.200"
          borderWidth="1px"
          borderStyle="solid"
          w="full"
          h="full"
          padding="4px"
        >
          This is a custom box
        </CustomBox>

        <CustomBox
          c="error.300"
          bg="error.100"
          borderColor="error.200"
          borderWidth="1px"
          borderStyle="solid"
          w="full"
          h="full"
          padding="4px"
        >
          This is a custom box
        </CustomBox>
        <CustomBox
          c="info.300"
          bg="info.100"
          borderColor="info.200"
          borderWidth="1px"
          borderStyle="solid"
          w="full"
          h="full"
          padding="4px"
        >
          This is a custom box
        </CustomBox>
        
        <CustomBox
          c="neutral.300"
          bg="neutral.100"
          borderColor="neutral.200"
          borderWidth="1px"
          borderStyle="solid"
          w="full"
          h="full"
          padding="4px"
        >
          This is a custom box
        </CustomBox>
      </CustomBox>
    </DesygnaProvider>
  );
}
`;

const desygnaDts = `
import "@emotion/react";

import { MyCustomTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends MyCustomTheme {}
}
`;

const theme = `
import { DesygnaTheme, createDesygnaTheme } from "@desygna/desygna-core";

export type MyCustomThemeColorSwatch = {
  "100": string;
  "200": string;
  "300": string;
};

export type MyCustomThemeBreakpoints = {
  _?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
};

export interface MyCustomTheme extends DesygnaTheme {
  sizes: {
    full: string;
  };
  space: {
    full: string;
  };
  animations: {
    _fadeIn: string;
  };
  fonts: {
    heading: string;
    body: string;
    monospace: string;
  };
  breakpoints?: MyCustomThemeBreakpoints;
  colors: {
    text: string;
    background: string;
    primary: MyCustomThemeColorSwatch;
    accent: MyCustomThemeColorSwatch;
    neutral: MyCustomThemeColorSwatch;
    success: MyCustomThemeColorSwatch;
    warning: MyCustomThemeColorSwatch;
    error: MyCustomThemeColorSwatch;
    info: MyCustomThemeColorSwatch;
  };
}

export const customThemeBreakpoints = [
  "480px",
  "640px",
  "768px",
  "1024px",
  "1280px"
];

customThemeBreakpoints["sm"] = customThemeBreakpoints[0];
customThemeBreakpoints["md"] = customThemeBreakpoints[1];
customThemeBreakpoints["lg"] = customThemeBreakpoints[2];
customThemeBreakpoints["xl"] = customThemeBreakpoints[3];
customThemeBreakpoints["2xl"] = customThemeBreakpoints[4];

export const customTheme = createDesygnaTheme({
  breakpoints: customThemeBreakpoints,
  fonts: {
    body: 'Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Open Sans, system-ui",
    monospace: "monospace"
  },
  sizes: {
    full: "100%"
  },
  space: {
    full: "100%"
  },
  colors: {
    currentColor: "currentColor",
    transparent: "transparent",
    text: "black",
    background: "white",
    primary: {
      100: "#f9f1fe",
      200: "#e3ccf4",
      300: "#8e4ec6"
    },
    accent: {
      100: "#feeef8",
      200: "#f3c6e2",
      300: "#d6409f"
    },
    neutral: {
      100: "#f1f3f5",
      200: "#dfe3e6",
      300: "#889096"
    },
    success: {
      100: "#e9f9ee",
      200: "#b4dfc4",
      300: "#30a46c"
    },
    warning: {
      100: "#fff1e7",
      200: "#ffcca7",
      300: "#f76808"
    },
    error: {
      100: "#ffefef",
      200: "#f9c6c6",
      300: "#e5484d"
    },
    info: {
      100: "#edf6ff",
      200: "#b7d9f8",
      300: "#0091ff"
    },
  },
})
`;

export const ThemeTypesafetyV4Sandpack = () => {
  return (
    <CommonSandpackV4Rc1
      files={{
        "/theme.ts": theme,
        "/desygna.d.ts": desygnaDts,
        "/App.tsx": App
      }}
    />
  );
};
