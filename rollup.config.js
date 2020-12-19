import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: "components/index.tsx",
  output: {
    dir: "./",
    entryFileNames: "lib/component-library.js",
    format: "cjs",
  },
  plugins: [peerDepsExternal(), typescript()],
};

export default config;
