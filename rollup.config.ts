import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

/** @type {import('rollup').RollupOptions} */
const options = {
    input: 'lib/main.js',
    output: [
        {
            format: 'esm',
            file: 'dist/skimple-components.js'
        },
        {
            format: 'cjs',
            file: 'dist/skimple-components.umd.cjs'
        }
    ],
    plugins: [
        vue(),
        peerDepsExternal()
    ]
}

export default options;
