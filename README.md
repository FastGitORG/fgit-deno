# FastGit Deno

[Deno](https://deno.land/) script for replacing GitHub URLs with FastGit counterparts.

## Installation

1. Make sure `$HOME/.deno/bin` (or `$DENO_INSTALL_ROOT/bin`, see [Deno docs](https://deno.land/manual/tools/script_installer)) is in your `$PATH`.
2. `deno install -n fgit https://raw.fastgit.org/FastGitORG/fgit-deno/master/index.ts`

## Usage

- Use `git`, replacing URL with `fgit`:

  ```sh
  git clone $(fgit https://github.com/FastGitORG/fgit-deno)
  ```

  You can easily write a wrapper function:

  ```sh
  # git clone with FastGit
  fgcl () {
     git clone $(fgit $1)
  }
  ```

  Then use it like `fgcl https://github.com/FastGitORG/fgit-deno`.

- Use `curl`, replacing URL with `fgit`:

  ```sh
  curl -L -O $(fgit https://github.com/cli/cli/releases/download/v0.12.0/gh_0.12.0_linux_amd64.tar.gz)
  ```
