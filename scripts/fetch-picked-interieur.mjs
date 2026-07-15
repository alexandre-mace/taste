// Downloads hand-picked images for the design-interieur collection into
// public/images/design-interieur/<slug>.jpg. Values: Commons title or URL.
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const UA = "TasteProject/0.1 (personal project; hialexandre@proton.me)"
const OUT = path.join(process.cwd(), "public", "images", "design-interieur")
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const PICKS = {
  "zen-japonais": "Takagike Kashihara JPN 001.jpg",
  "wabi-sabi": "Kaisuian Interior.jpg",
  baroque: "Chateau Versailles Galerie des Glaces.jpg",
  "riad-marocain": "Riad Papillon patio at night.jpg",
  rococo: "Salon ovale de la princesse in the Hôtel de Soubise (12).jpg",
  neoclassique: "Osterley Park House-11891497834.jpg",
  gustavien: "Slott Sturehov interiör 2011a.jpg",
  shaker:
    "Architectural elements from North Family Dwelling, New Lebanon, New York MET DP266740.jpg",
  empire:
    "Throne of Napoleon, in the throne room of Fontainebleau Palace.jpg",
  biedermeier: "OÖ. Sensenschmiedemuseum, Herrenhaus, Blumauerzimmer.jpg",
  victorien: "NiddMuseum1 Victorian Parlour.jpg",
  "arts-and-crafts": "Red House home of William Morris (5).jpg",
  "art-nouveau": "Tassel House stairway.JPG",
  "de-stijl": "Rietveld Schroeder Huis Utrecht Interior.jpg",
  bauhaus:
    "Das Direktorenzimmer im Bauhausgebäude Dessau - Rekonstruktion des Zustands um 1926 (02).jpg",
  "art-deco": "Grand Foyer, Severance Hall, University Circle, Cleveland, OH.jpg",
  moderniste: "Innenaufnahmen aus der Villa Tugendhat (05).jpg",
  "mid-century-modern": "Eames House Interior.jpg",
  scandinave: "Finn Juhl House interior.jpg",
  "space-age": "Interior of Futuro house.jpg",
  memphis: "Ettore sottsass per memphis, libreria carlton, 1981.jpg",
  brutalisme: "Appartement témoin cité radieuse à rezé 01.jpg",
  cottagecore:
    'Interior of the "Gothic Cottage", Stourhead Estate - geograph.org.uk - 4723134.jpg',
}

await mkdir(OUT, { recursive: true })

for (const [slug, source] of Object.entries(PICKS)) {
  const url = source.startsWith("http")
    ? source
    : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(source)}?width=1400`
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
