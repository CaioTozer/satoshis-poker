import babel from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        react()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    external: ['react', 'react-dom']
};
