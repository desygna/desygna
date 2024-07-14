import React from "react";
import {
  OpenInCodeSandboxButton,
  Sandpack,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  UnstyledOpenInCodeSandboxButton
} from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import { rootCode } from "./rootCode";

export interface CommonSandpackProps {
  files?: Record<string, string>;
  deps?: Record<string, string>;
  editorHeight?: number;
}

const tsconfig = `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react"
  }
}
`;

export const CommonSandpack = ({ files, deps, editorHeight = 800 }: CommonSandpackProps) => {
  return (
    <SandpackProvider
      theme={monokaiPro}
      files={{
        "/index.tsx": rootCode,
        "/tsconfig.json": tsconfig,
        ...files
      }}
      template="react-ts"
      customSetup={{
        dependencies: {
          react: "17.0.2",
          "react-dom": "17.0.2",
          "react-scripts": "4.0.3",
          "@emotion/react": "^11.10.0",
          "@emotion/styled": "^11.10.0",
          "styled-system": "^5.1.5",
          "@styled-system/should-forward-prop": "^5.1.5",
          "@desygna/desygna": "4.0.0-pre.2",
          ...deps
        },
        devDependencies: {
          "@types/react": "^17.0.2"
        }
      }}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor />
      </SandpackLayout>
      <pre style={{ marginTop: 8 }}>
        <UnstyledOpenInCodeSandboxButton className="button button--primary button--md">
          Open in sandbox
        </UnstyledOpenInCodeSandboxButton>
      </pre>
    </SandpackProvider>
  );
};

export const CommonSandpackV4 = ({ files, deps, editorHeight = 800 }: CommonSandpackProps) => {
  return (
    <SandpackProvider
      theme={monokaiPro}
      files={{
        "/index.tsx": rootCode,
        "/tsconfig.json": tsconfig,
        ...files
      }}
      template="react-ts"
      customSetup={{
        dependencies: {
          react: "17.0.2",
          "react-dom": "17.0.2",
          "react-scripts": "4.0.3",
          "@emotion/react": "^11.10.0",
          "@emotion/styled": "^11.10.0",
          "styled-system": "^5.1.5",
          "@styled-system/should-forward-prop": "^5.1.5",
          "@desygna/desygna-core": "4.0.0-pre.2",
          ...deps
        },
        devDependencies: {
          "@types/react": "^17.0.2"
        }
      }}

      // options={{
      //   showLineNumbers: true,
      //   showInlineErrors: true,
      //   editorHeight
      // }}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor />
      </SandpackLayout>
      <pre style={{ marginTop: 8 }}>
        <UnstyledOpenInCodeSandboxButton className="button button--primary button--md">
          Open in sandbox
        </UnstyledOpenInCodeSandboxButton>
      </pre>
    </SandpackProvider>
  );
};
