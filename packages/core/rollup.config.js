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
    rootMode: "upward",
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    babelHelpers: "runtime",
    include: ["src/**/*"],
    exclude: /node_modules/,
    skipPreflightCheck: "true"
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
  plugins
};
