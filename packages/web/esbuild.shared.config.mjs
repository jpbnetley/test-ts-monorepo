/**
 * @type import('esbuild').BuildOptions
 */
export const config = {
  entryPoints: ['src/**/*'],
  bundle: false,
  platform: 'browser',
  target: ["chrome58","firefox57","safari11","edge16"],
  outdir: "dist",
  allowOverwrite: true,
  sourcemap: 'inline',
  outExtension: {
    '.js': '.mjs'
  }
}
