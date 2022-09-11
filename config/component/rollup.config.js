import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import ts from "typescript";

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
  babel({
    rootMode: "upward",
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    include: ["src/**/*"],
    exclude: "node_modules/**"
  })
];
