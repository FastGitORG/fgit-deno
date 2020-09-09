# FastGit Deno

Deno scripts for FastGit.

## Usage

1. Make sure `$HOME/.deno/bin` (or `$DENO_INSTALL_ROOT/bin`, see [Deno documentaion](https://deno.land/manual/tools/script_installer)) is in your `$PATH`.
2. Install with `deno install --allow-run -n fgit https://raw.fastgit.org/FastGitORG/fgit-deno/master/index.ts`
3. Replace regular `git` command with `fgit`:

   ```sh
   fgit clone https://github.com/FastGitORG/fgit-deno
   ```

   or pass a URL directly to download a file using `curl` (you can use any `curl` arguments)

   ```sh
   fgit https://github.com/cli/cli/releases/download/v0.12.0/gh_0.12.0_linux_amd64.tar.gz
   ```
