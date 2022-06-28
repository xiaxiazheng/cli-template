import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

export default {
  input: "src/index.ts",
  plugins: [
    resolve(), // 处理 npm 包的相关引入依赖
    commonjs(), // 将 commonjs 语法转化成 es module 语法
    typescript(), // 处理 TS 语法
    babel({
      presets: ["@babel/preset-env"], // 处理 es 语法
      babelHelpers: "bundled",
      extensions: [".js", ".es6", ".es", ".mjs", ".ts"],
    }),
    // terser(), // 压缩代码
    filesize(), // 在控制台显示文件大小
  ],
  output: {
    file: "dist/bundle.js",
    format: "esm",
    // dir: "dist",
    // sourcemap: true,
    // entryFileNames: "[name].js",
  },
};
