// Lists top Commons results (title + size) for given queries, to pick images manually.
const UA = "TasteProject/0.1 (personal project; hialexandre@proton.me)"
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const QUERIES = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      "Audemars Piguet Royal Oak",
      "Omega Constellation watch",
      "Omega Seamaster",
      "IWC Portuguese watch",
      "IWC Portugieser",
      "Zenith El Primero chronograph",
      "Hublot Big Bang",
      "Lange 1 watch",
      "A. Lange Söhne wristwatch",
      "Blancpain Fifty Fathoms",
      "Girard-Perregaux Laureato",
      "Grand Seiko watch",
      "Tudor Black Bay",
      "Movado Museum",
      "Vacheron Constantin Overseas",
      "Cartier Ballon Bleu",
      "Bulgari Octo",
      "Bell & Ross watch",
      "Panerai Luminor",
      "Hamilton Khaki",
      "Swatch wristwatch",
      "Omega Seamaster Diver 300",
      "Richard Mille",
    ]

for (const q of QUERIES) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: `filetype:bitmap ${q}`,
    gsrnamespace: "6",
    gsrlimit: "12",
    prop: "imageinfo",
    iiprop: "url|size|mime",
  })
  const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: { "user-agent": UA },
  })
  if (!res.ok) {
    console.log(`\n=== ${q}\n  SKIPPED (HTTP ${res.status})`)
    await sleep(2000)
    continue
  }
  const data = await res.json()
  const pages = Object.values(data.query?.pages ?? {}).sort((a, b) => a.index - b.index)
  console.log(`\n=== ${q}`)
  for (const p of pages) {
    const i = p.imageinfo?.[0]
    if (!i) continue
    console.log(`  ${p.title}  (${i.width}x${i.height})`)
  }
  await sleep(400)
}
