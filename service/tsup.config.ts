import { defineConfig } from 'tsup'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig({ path: `.env.${process.env.NODE_ENV}` })

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  target: 'es2020',
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  minify: false,
  shims: true,
  dts: false,
})
