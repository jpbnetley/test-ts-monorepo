import { context } from 'esbuild'
import { config } from './esbuild.shared.config.mjs'

import { spawn } from'node:child_process';
import readline from 'node:readline';
import util from 'node:util'

/**
 * formats the console based on text received
 * @param {string} data 
 */
function logInColor(data){
    if (data.includes('Found 0 errors')){
        console.log(util.styleText('green', data))
        return
    }

    console.log(util.styleText('red', data))
}


async function runWatch() {
 const ctx = await context(config)
 await ctx.watch()
 console.log('Watching...');
}

function runTypeCheck() {
  const child = spawn('npm', ['run', 'watch:check:types'])
    readline.createInterface({
        input: child.stdout
    }).on('line', logInColor);

    readline.createInterface({
        input: child.stderr,
    }).on('line', logInColor)
}

runTypeCheck()
runWatch()