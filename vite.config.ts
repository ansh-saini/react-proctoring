import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths({
      root: 'src',
    }),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      exclude: ['./src}/example/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'react-proctoring',
      formats: ['es', 'umd'],
      fileName: (format) => `react-proctoring.${format}.js`,
    },
    rollupOptions: {
      external: ['react-device-detect', ...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
