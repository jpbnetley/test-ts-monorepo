/**
 * @type import('esbuild').BuildOptions
 */
export const config = {
  entryPoints: ['src/**/*'],
  bundle: false,
  platform: 'browser',
  target: "node18",
  outdir: "dist",
  allowOverwrite: true,
  sourcemap: 'linked',
  outExtension: {
    '.js': '.mjs'
  },
}
