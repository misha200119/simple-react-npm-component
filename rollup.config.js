import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss';

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      scss(),
      babel({
        exclude: /node_modules/,
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
    ],
  },
];