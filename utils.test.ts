import { assertEquals } from './deps.ts'
import { replace } from './utils.ts'

Deno.test('Archive', () => {
  assertEquals(
    replace('https://github.com/FastGitORG/fgit-deno/archive/master.zip'),
    'https://archive.fastgit.org/FastGitORG/fgit-deno/archive/master.zip'
  )
  assertEquals(
    replace('https://codeload.github.com/FastGitORG/fgit-deno/zip/master'),
    'https://archive.fastgit.org/FastGitORG/fgit-deno/archive/master.zip'
  )
})

Deno.test('GitHub', () => {
  assertEquals(
    replace('https://github.com/telegramdesktop/tdesktop'),
    'https://hub.fastgit.org/telegramdesktop/tdesktop'
  )
})

Deno.test('Raw', () => {
  assertEquals(
    replace(
      'https://raw.githubusercontent.com/FastGitORG/fgit-deno/master/README.md'
    ),
    'https://raw.fastgit.org/FastGitORG/fgit-deno/master/README.md'
  )
})

Deno.test('Releases', () => {
  assertEquals(
    replace(
      'https://github.com/telegramdesktop/tdesktop/releases/download/v2.3.2/tsetup.2.3.2.tar.xz'
    ),
    'https://download.fastgit.org/telegramdesktop/tdesktop/releases/download/v2.3.2/tsetup.2.3.2.tar.xz'
  )
})

Deno.test('Not URL', () => {
  assertEquals(replace('foo'), 'foo')
})
