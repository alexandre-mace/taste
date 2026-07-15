// Generic picked-images fetcher: node scripts/fetch-picks.mjs <subject>
// Reads scripts/picks/<subject>.json ({slug: "Commons title" | "https://..."})
// and downloads into public/images/<subject>/<slug>.jpg
import { mkdir, writeFile, readFile } from "node:fs/promises"
import path from "node:path"

const UA = "TasteProject/0.1 (personal project; hialexandre@proton.me)"
const subject = process.argv[2]
if (!subject) {
  console.error("usage: node scripts/fetch-picks.mjs <subject>")
  process.exit(1)
}
const picks = JSON.parse(
  await readFile(path.join("scripts", "picks", `${subject}.json`), "utf8")
)
const OUT = path.join("public", "images", subject)
await mkdir(OUT, { recursive: true })
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

for (const [slug, source] of Object.entries(picks)) {
  const url = source.startsWith("http")
    ? source
    : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(source.replace(/^File:/, ""))}?width=1400`
  let done = false
  for (let i = 0; i < 4 && !done; i++) {
    const res = await fetch(url, {
      headers: { "user-agent": UA },
      redirect: "follow",
    })
    if (res.status === 429) {
      await sleep(5000 * (i + 1))
      continue
    }
    if (!res.ok) {
      console.log(`FAIL ${slug}: ${res.status}`)
      done = true
      break
    }
    const buf = Buffer.from(await res.arrayBuffer())
    await writeFile(path.join(OUT, `${slug}.jpg`), buf)
    console.log(`OK  ${slug}  ${(buf.length / 1024).toFixed(0)}kB`)
    done = true
  }
  if (!done) console.log(`FAIL ${slug}: rate-limited after 4 tries`)
  await sleep(1200)
}
