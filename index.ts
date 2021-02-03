// @deno-types="https://cdn.jsdelivr.net/npm/is-url-superb@5.0.0/index.d.ts"
import { default as isUrl } from 'https://cdn.skypack.dev/is-url-superb@5.0.0'

const GITHUB = 'github.com'
const GITHUB_ARCHIVE = 'codeload.github.com'
const GITHUB_RAW = 'raw.githubusercontent.com'
const FASTGIT = 'hub.fastgit.org'
// Deprecrated: codeload.fastgit.org
const FASTGIT_ARCHIVE = 'archive.fastgit.org'
const FASTGIT_RAW = 'raw.fastgit.org'
const FASTGIT_RELEASES = 'download.fastgit.org'

export const replace = (raw: string) => {
  if (!isUrl(raw)) return raw

  const url = new URL(raw)
  const { hostname, pathname } = url
  const path = pathname.split('/')
  const type = path[3]

  switch (hostname) {
    case GITHUB:
      switch (type) {
        case 'archive':
          url.hostname = FASTGIT_ARCHIVE
          break
        case 'releases':
          url.hostname = FASTGIT_RELEASES
          break
        default:
          url.hostname = FASTGIT
      }
      break
    case GITHUB_ARCHIVE:
      path[3] = 'archive'
      path[4] += '.zip'

      url.hostname = FASTGIT_ARCHIVE
      url.pathname = path.join('/')
      break
    case GITHUB_RAW:
      url.hostname = FASTGIT_RAW
  }

  return url.toString()
}

if (import.meta.main)
  for (const arg of Deno.args)
    Deno.stdout.writeSync(new TextEncoder().encode(replace(arg)))
