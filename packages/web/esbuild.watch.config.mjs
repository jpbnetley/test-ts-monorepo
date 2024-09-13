import { context } from 'esbuild'
import { config } from './esbuild.shared.config.mjs'

async function runWatch() {
 const ctx = await context(config)
 await ctx.watch()
 console.log('Watching...');

}

runWatch()