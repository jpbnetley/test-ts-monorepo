/**
 * @type import('esbuild').BuildOptions
 */
export const config = {
  entryPoints: ['src/index.mts'],
  bundle: true,
  platform: 'node',
  target: "node18",
  outdir: "dist",
  allowOverwrite: true
}
