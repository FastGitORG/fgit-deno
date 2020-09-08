export const run = async (cmd: [string, ...string[]]) => {
  const { stdout } = Deno.run({
    cmd,
    stdout: 'piped',
  })
  const iter = Deno.iter(stdout)

  for await (const chunk of iter) {
    Deno.stdout.writeSync(chunk)
  }
}
