// Downloads hand-picked Commons files by exact title into public/watches/<slug>.jpg
import { writeFile } from "node:fs/promises"
import path from "node:path"

const UA = "TasteProject/0.1 (personal project; hialexandre@proton.me)"
const OUT = path.join(process.cwd(), "public", "watches")
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const PICKS = {
  "patek-philippe-nautilus": "Patek-Philippe-Nautilus-5711-1A-010-1.jpg",
  "tag-heuer-monaco": "TAG Heuer Monaco, 2020.jpg",
  "tag-heuer-carrera": "Heuer Carrera 1964.jpg",
  "seiko-5": "Seiko 5 Sports SNZH53K1.jpg",
  "nomos-tangente":
    "Nomos Tangente neomatik 41 Update, Ref. 180, DUW 6101 -- 2024 -- 0149-51X.jpg",
}

for (const [slug, title] of Object.entries(PICKS)) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(title)}?width=1400`
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
  await sleep(1500)
}
