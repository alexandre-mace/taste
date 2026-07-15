import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
