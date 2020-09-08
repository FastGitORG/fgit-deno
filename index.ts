import { run } from './utils.ts'

const { args } = Deno

const repoRegex = /github\.com(\/.+\/[^\/]+)/
const relRegex = /github\.com(\/.+\/.+\/releases\/download\/.+)/
const ghMirror = 'hub.fastgit.org'
const dlMirror = 'download.fastgit.org'

if (args[0] === 'dl') {
  const replaced = args[1].replace(relRegex, `${dlMirror}$1`)

  run(['curl', '-OL', replaced])
} else {
  const replaced = args.map((arg) => arg.replace(repoRegex, `${ghMirror}$1`))

  run(['git', ...replaced])
}
