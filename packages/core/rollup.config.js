import { DEFAULT_EXTENSIONS } from "@babel/core";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import ts from "typescript";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import url from "@rollup/plugin-url";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import PKG_JSON from "./package.json";

const plugins = [
  external({
    includeDependencies: true
  }),
  commonjs(),
  typescript({
    typescript: ts,
    include: ["src/**/*"],
    exclude: [
      "coverage",
      "config",
      "dist",
      "node_modules/**",
      "**/*.test.js",
      "**/*.test.ts"
    ],
    useTsconfigDeclarationDir: true
  }),
  commonjs(),
  babel({
    babelHelpers: "runtime",
    exclude: /node_modules/,
    presets: [
      [
        "@babel/preset-typescript",
        {
          isTSX: true,
          allExtensions: true
        }
      ],
      [
        "@babel/preset-react",
        {
          development: false,
          runtime: "automatic",
          importSource: "@emotion/react"
        }
      ],
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "entry",
          corejs: 3,
          exclude: ["transform-typeof-symbol"],
          loose: true,
          targets: {
            node: "current"
          }
        }
      ]
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: true
        }
      ],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread"
    ],
    extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"]
  }),
  url(),
  resolve(),
  terser()
];

export default {
  input: "src/index.ts",
  output: [
    {
      file: PKG_JSON.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: PKG_JSON.module,
      format: "esm",
      sourcemap: true
    }
  ],
  external: [/@babel\/runtime/],
  plugins
};
