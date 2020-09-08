# FastGit Deno

Deno scripts for FastGit.

## Usage

- `deno run --allow-run index.ts <git arguments>` (**requires Git**)

  Example:

  ```sh
  # Replace...
  git clone https://github.com/kidonng/fgit-deno
  # with...
  deno run --allow-run index.ts clone https://github.com/kidonng/fgit-deno
  ```

- `deno run --allow-run index.ts dl <release asset link>` (**requires curl**, you can pass in any curl arguments)

  Example:

  ```sh
  # Replace...
  curl -OL https://github.com/cli/cli/releases/download/v0.12.0/gh_0.12.0_linux_amd64.tar.gz
  # with...
  deno run --allow-run index.ts dl https://github.com/cli/cli/releases/download/v0.12.0/gh_0.12.0_linux_amd64.tar.gz
  ```

## Tips

- You can replace `index.ts` with a remote URL (GitHub CDN), so you don't have to download the scritps manually.
- `deno run --allow-run index.ts` looks too bad? You can alias it to something like `fgit` in your shell.
