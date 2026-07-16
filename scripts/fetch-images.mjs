// Fetches free-licensed watch photos from Wikipedia / Wikimedia Commons
// into public/watches/<slug>.jpg. Usage: node scripts/fetch-images.mjs [slug...]
import { mkdir, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"

const UA = "TasteProject/0.1 (personal project; hialexandre@proton.me)"
const OUT = path.join(process.cwd(), "public", "watches")

// wiki: English Wikipedia article title (lead image)
// commons: Wikimedia Commons search query (fallback, or primary if no wiki)
const MANIFEST = [
  { slug: "rolex-submariner", wiki: "Rolex Submariner" },
  { slug: "rolex-daytona", wiki: "Rolex Daytona" },
  { slug: "rolex-datejust", wiki: "Rolex Datejust" },
  { slug: "rolex-day-date", wiki: "Rolex Day-Date" },
  { slug: "rolex-gmt-master", wiki: "Rolex GMT Master II" },
  { slug: "rolex-explorer", wiki: "Rolex Explorer" },
  { slug: "rolex-milgauss", wiki: "Rolex Milgauss" },
  { slug: "rolex-sea-dweller", wiki: "Rolex Sea Dweller" },
  { slug: "omega-speedmaster", wiki: "Omega Speedmaster" },
  { slug: "omega-seamaster-300m", commons: "Omega Seamaster Diver 300M" },
  { slug: "patek-philippe-nautilus", commons: "Patek Philippe Nautilus" },
  { slug: "patek-philippe-calatrava", wiki: "Patek Philippe Calatrava" },
  { slug: "patek-philippe-aquanaut", commons: "Patek Philippe Aquanaut" },
  { slug: "audemars-piguet-royal-oak", commons: "Audemars Piguet Royal Oak watch" },
  { slug: "audemars-piguet-royal-oak-offshore", commons: "Royal Oak Offshore" },
  { slug: "vacheron-constantin-222", commons: "Vacheron Constantin Historique 222"},
  { slug: "vacheron-constantin-patrimony", commons: "Vacheron Constantin Patrimony" },
  { slug: "jaeger-lecoultre-reverso", commons: "Jaeger-LeCoultre Reverso watch" },
  { slug: "cartier-tank", wiki: "Cartier Tank" },
  { slug: "cartier-santos", commons: "Cartier Santos watch" },
  { slug: "iwc-portugieser", commons: "IWC Portugieser watch" },
  { slug: "iwc-pilots-watch", commons: "IWC pilot's watch" },
  { slug: "breitling-navitimer", wiki: "Breitling Navitimer" },
  { slug: "tag-heuer-monaco", wiki: "TAG Heuer Monaco" },
  { slug: "tag-heuer-carrera", commons: "Heuer Carrera chronograph" },
  { slug: "zenith-el-primero", commons: "Zenith El Primero watch" },
  { slug: "panerai-luminor", commons: "Panerai Luminor watch" },
  { slug: "panerai-radiomir", commons: "Panerai Radiomir watch" },
  { slug: "richard-mille", commons: "Richard Mille watch" },
  { slug: "blancpain-fifty-fathoms", commons: "Blancpain Fifty Fathoms watch" },
  { slug: "breguet-classique", commons: "Breguet Classique watch" },
  { slug: "breguet-type-xx", commons: "Breguet Type XX watch" },
  { slug: "grand-seiko-hi-beat", commons: "Grand Seiko Automatic Hi-Beat"},
  { slug: "seiko-skx007", commons: "Seiko SKX007" },
  { slug: "seiko-5", commons: "Seiko 5 automatic watch" },
  { slug: "casio-g-shock", commons: "Casio G-Shock DW-5600" },
  { slug: "casio-f91w", wiki: "Casio F-91W" },
  { slug: "swatch", commons: "Swatch wristwatch" },
  { slug: "tissot-prx", commons: "Tissot PRX" },
  { slug: "longines-legend-diver", commons: "Longines Legend Diver" },
  { slug: "tudor-black-bay", commons: "Tudor Black Bay watch" },
  { slug: "nomos-tangente", commons: "Nomos Tangente" },
  { slug: "junghans-max-bill", commons: "Junghans Max Bill" },
  { slug: "mondaine", commons: "Mondaine watch" },
  { slug: "apple-watch", wiki: "Apple Watch" },
  { slug: "hamilton-khaki-field", commons: "Hamilton Khaki Field" },
  { slug: "hamilton-ventura", commons: "Hamilton Ventura watch" },
  { slug: "oris-aquis", commons: "Oris Aquis" },
  { slug: "rado-captain-cook", commons: "Rado Captain Cook watch" },
  { slug: "piaget-polo", commons: "Piaget Polo" },
  { slug: "timex-marlin", commons: "Timex Marlin" },
  { slug: "universal-geneve-polerouter", commons: "Universal Polerouter" },
  { slug: "bulova-accutron-spaceview", commons: "Bulova Accutron Spaceview" },
  { slug: "seiko-astron", commons: "Seiko Astron" },
  { slug: "hamilton-pulsar", commons: "Pulsar Time Computer LED watch" },
  { slug: "ulysse-nardin-freak", commons: "Ulysse Nardin Freak" },
  { slug: "fp-journe", commons: "F.P. Journe watch" },
  // Absentes de Commons — images Flickr domaine public (voir fetch-picked.mjs)
  {
    slug: "lange-sohne-lange-1",
    url: "https://live.staticflickr.com/4270/34031722963_e2b33510c2_b.jpg",
  },
  {
    slug: "bulgari-octo-finissimo",
    url: "https://live.staticflickr.com/4289/34978824501_2d8eed09b4_b.jpg",
  },
  {
    slug: "bell-ross-br03",
    url: "https://live.staticflickr.com/1811/41969344380_d0831e1a7a_b.jpg",
  },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function fetchRetry(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { "user-agent": UA } })
    if (res.status === 429 || res.status === 503) {
      const wait = 4000 * (i + 1)
      console.log(`  429 on ${url.slice(0, 80)}, waiting ${wait / 1000}s`)
      await sleep(wait)
      continue
    }
    return res
  }
  throw new Error(`rate-limited after ${tries} tries: ${url}`)
}

async function getJson(url) {
  const res = await fetchRetry(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

async function fromWikipedia(title) {
  try {
    const data = await getJson(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
    )
    return data.originalimage?.source ?? data.thumbnail?.source ?? null
  } catch {
    return null
  }
}

async function fromCommons(query) {
  try {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      generator: "search",
      gsrsearch: `filetype:bitmap ${query}`,
      gsrnamespace: "6",
      gsrlimit: "10",
      prop: "imageinfo",
      iiprop: "url|size|mime",
      iiurlwidth: "1400",
    })
    const data = await getJson(`https://commons.wikimedia.org/w/api.php?${params}`)
    const pages = Object.values(data.query?.pages ?? {})
    const candidates = pages
      .map((p) => ({ info: p.imageinfo?.[0], index: p.index, title: p.title }))
      .filter((c) => c.info && c.info.width >= 500 && c.info.height >= 500)
      .filter((c) => /jpe?g|png/.test(c.info.mime))
      .sort((a, b) => a.index - b.index)
    return candidates[0]?.info.thumburl ?? candidates[0]?.info.url ?? null
  } catch {
    return null
  }
}

async function download(url, dest) {
  const res = await fetchRetry(url)
  if (!res.ok) throw new Error(`download ${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 5000) throw new Error(`too small (${buf.length}B) ${url}`)
  await writeFile(dest, buf)
  return buf.length
}

await mkdir(OUT, { recursive: true })
const only = process.argv.slice(2)
const targets = only.length ? MANIFEST.filter((m) => only.includes(m.slug)) : MANIFEST

const results = { ok: [], fail: [] }
for (const item of targets) {
  const dest = path.join(OUT, `${item.slug}.jpg`)
  if (!only.length && existsSync(dest)) {
    results.ok.push(item.slug)
    continue
  }
  let url = null
  try {
    if (item.url) url = item.url
    if (!url && item.wiki) url = await fromWikipedia(item.wiki)
    if (!url && item.commons) url = await fromCommons(item.commons)
    if (!url && item.wiki) url = await fromCommons(item.wiki)
    if (!url) throw new Error("no image found")
    const size = await download(url, dest)
    console.log(`OK  ${item.slug}  ${(size / 1024).toFixed(0)}kB  ${url}`)
    results.ok.push(item.slug)
  } catch (err) {
    console.log(`FAIL ${item.slug}: ${err.message}`)
    results.fail.push(item.slug)
  }
  await sleep(1200)
}

console.log(`\n${results.ok.length} ok, ${results.fail.length} failed`)
if (results.fail.length) console.log("failed:", results.fail.join(", "))
