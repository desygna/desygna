import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import { rootCode } from "./rootCode";
import { desygnaVersion } from "@site/docs/desygnaVersion";

export interface CommonSandpackProps {
  files?: Record<string, string>;
  deps?: Record<string, string>;
  editorHeight?: number;
}

export const CommonSandpack = ({
  files,
  deps,
  editorHeight = 800
}: CommonSandpackProps) => {
  return (
    <Sandpack
      theme={monokaiPro}
      template="react-ts"
      files={{
        "/index.tsx": rootCode,
        ...files
      }}
      customSetup={{
        dependencies: {
          react: "17.0.2",
          "react-dom": "17.0.2",
          "react-scripts": "4.0.3",
          "@emotion/react": "^11.10.0",
          "@emotion/styled": "^11.10.0",
          "@desygna/desygna": desygnaVersion,
          ...deps
        }
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        editorHeight
      }}
    />
  );
};

export const CommonSandpackV4Rc1 = ({
  files,
  deps,
  editorHeight = 800
}: CommonSandpackProps) => {
  return (
    <Sandpack
      theme={monokaiPro}
      template="react-ts"
      files={{
        "/index.tsx": rootCode,
        ...files
      }}
      customSetup={{
        dependencies: {
          react: "17.0.2",
          "react-dom": "17.0.2",
          "react-scripts": "4.0.3",
          "@emotion/react": "^11.10.0",
          "@emotion/styled": "^11.10.0",
          "styled-system": "^5.1.5",
          "@styled-system/should-forward-prop": "^5.1.5",
          "@desygna/desygna-core": "4.0.0-rc.1",
          ...deps
        }
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        editorHeight
      }}
    />
  );
};
