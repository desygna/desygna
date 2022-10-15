import { commonPlugins } from "../../../config/component/rollup.config";

import PKG_JSON from "./package.json";

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
  plugins: [...commonPlugins]
};
