import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import { terser } from 'rollup-plugin-terser'

// rollup.config.js
const config = {
  input: 'src/components/colorWheel/ColorWheel.jsx',
  external: ['react', 'react-dom', 'prop-types'],
  output: {
    file: 'dist/index.js',
    format: 'esm'
    // name: 'countdown',
    // globals: {
    //   react: 'React'
    // }
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    sizeSnapshot(),
    terser()
  ]
}
export default config
