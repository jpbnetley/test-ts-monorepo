import { context } from 'esbuild'
import { config } from './esbuild.shared.config.mjs'

import { spawn } from'node:child_process';
import readline from 'node:readline';

async function runWatch() {
 const ctx = await context(config)
 await ctx.watch()
 console.log('Watching...');
}

function runTypeCheck() {
  const child = spawn('npm', ['run', 'watch:check:types'])
    readline.createInterface({
        input: child.stdout
    }).on('line', console.log);

    readline.createInterface({
        input: child.stderr,
    }).on('line', console.log);
}

runTypeCheck()
runWatch()