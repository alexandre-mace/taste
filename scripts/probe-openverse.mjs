// Searches Openverse (CC-licensed images across Flickr & co) for given queries.
// Usage: node scripts/probe-openverse.mjs "query 1" "query 2" ...
const UA = "TasteProject/0.1 (personal project; hialexandre@proton.me)"
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

for (const q of process.argv.slice(2)) {
  const params = new URLSearchParams({
    q,
    page_size: "10",
    license: "by,by-sa,cc0,pdm,by-nc,by-nc-sa",
  })
  const res = await fetch(`https://api.openverse.org/v1/images/?${params}`, {
    headers: { "user-agent": UA },
  })
  console.log(`\n=== ${q}`)
  if (!res.ok) {
    console.log(`  HTTP ${res.status}`)
    await sleep(3000)
    continue
  }
  const data = await res.json()
  for (const r of data.results ?? []) {
    console.log(
      `  [${r.license}${r.license_version ? " " + r.license_version : ""}] ${r.width}x${r.height} — ${r.title?.slice(0, 60)} — by ${r.creator?.slice(0, 30)} (${r.source})`
    )
    console.log(`    img: ${r.url}`)
    console.log(`    page: ${r.foreign_landing_url}`)
  }
  await sleep(1500)
}
