// Downloads hand-picked Commons files by exact title into public/watches/<slug>.jpg
import { writeFile } from "node:fs/promises"
import path from "node:path"

const UA = "TasteProject/0.1 (personal project; hialexandre@proton.me)"
const OUT = path.join(process.cwd(), "public", "watches")
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const PICKS = {
  "seiko-astron": "Seiko Astron.jpg",
  "hamilton-pulsar": "PulsarTimeComputer.jpg",
  "bulova-accutron-spaceview":
    "Bulova Accutron Spaceview con calibro 214, prima metà anni '70.jpg",
  "universal-geneve-polerouter": "Universal-Polerouter.jpg",
  "cartier-panthere": "Cartier Panthere lady's 2 tone watch.jpg",
  "fp-journe": "FP-Journe-IMG 0341.jpg",
  "ulysse-nardin-freak": "Freak Vision.jpg",
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
