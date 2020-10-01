#!/usr/bin/env node

const { spawn } = require('child_process')
const chalk = require('chalk')

const brp = 'git@github.com:Indyandie/baf-svelte-parcel.git'
const dirname = process.argv[2] || 'basp'

const spawner = (cmd, args=[], exit) => {
   const cmdName = `${cmd} ${args.length > 0 ? args[0] : ''}`
   
   let spawny

   if(args)  spawny = spawn(cmd, args, {stdio: 'inherit'})
   else spawny = spawn(cmd, [], {stdio: 'inherit'})

   spawny.on('error', 
      error => console.error(chalk.red(error))
   )
   spawny.on('close', code => {
      console.log(chalk.green.bold(`✅ ${cmdName}`))
      console.log(`${'='.repeat(64)} \n`)
      if(exit && code === 0) exit()
      else spawny.kill()
   })

   return spawny
}

const basp = async () => {
   console.log(chalk.white.bold('\nInstalling baf-svelte-parcel'))
   console.log('hold tight this could take a few minutes\n')
   console.log('🐙🧬🐙')
   spawner('git', ['clone', brp, dirname], 
      () => {
         process.chdir(dirname)
         console.log('📦 installing packages...')

         spawner('rm', ['-rf', '.npmignore', 'cli', '.git'], 
            () => {
               spawner('git', ['init'], 
                  () => spawner('git', ['add', '.'], 
                     () => spawner('git', ['commit', '-m', '"init"'])
                  )
               )
            }
         )
         spawner('npm', ['i'], () => {
            console.log(chalk.yellow.bold('Great success! 🎉\n'))
            console.log('Don\'t forget to switch directory.')
            console.log('run:', chalk.white.bold(`cd ${dirname}`))
         })
      }
   )
}

// Check if file exist
let isDuplicate

const list = spawn('ls')
   .stdout.on('data', data => {
      const files = new Set(`${data}`.split('\n'))
      isDuplicate = files.has(dirname)
   })
   .on('close', code => {
      if(!isDuplicate) basp()
      else console.log(
         chalk.red(`\nThe directory <${chalk.bold(dirname)}> is in use.\n`), 
         chalk.blueBright('🤖 Try a different name.')
      )
   })