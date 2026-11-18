import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Le quota Hobby est de 5 000 transformations par mois, pour tout le compte.
    // Avec les 15 largeurs par défaut, 254 images ouvrent 3 810 variantes ; ces
    // 4 largeurs couvrent tous les `sizes` du site en 2x (44 px → 96, 270 px → 640,
    // 560 px → 1200, la largeur des sources) et sont un sous-ensemble des défauts,
    // donc les variantes déjà en cache resservent.
    imageSizes: [96, 256],
    deviceSizes: [640, 1200],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    // Anciennes routes mono-sujet (avant l'arrivée des collections multiples).
    return [
      { source: "/duel", destination: "/montres/duel", permanent: true },
      {
        source: "/classement",
        destination: "/montres/classement",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
