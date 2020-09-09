import { run, replace } from './utils.ts'
import { isUrl } from './deps.ts'

const { args } = Deno

if (isUrl(args[0])) {
  const _args = args.length > 1 ? args.slice(1) : ['-OL']
  run(['curl', replace(args[0]), ..._args])
} else {
  run(['git', ...args.map(replace)])
}
