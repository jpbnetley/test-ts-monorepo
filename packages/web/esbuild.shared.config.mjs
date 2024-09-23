/**
 * @type import('esbuild').BuildOptions
 */
export const config = {
  entryPoints: ['src/index.mts'],
  bundle: true,
  platform: 'browser',
  target: "node18",
  outdir: "dist",
  allowOverwrite: true,
  sourcemap: 'linked'
}
