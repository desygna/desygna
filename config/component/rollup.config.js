import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import ts from "typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export const commonPlugins = [
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
    include: ["src/**/*"],
    exclude: "node_modules/**"
  }),
  resolve(),
  terser()
];
