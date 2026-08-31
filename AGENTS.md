# taste

Musée personnel du goût : pour chaque sujet, explorer les pièces les plus iconiques (fiches en
français, parcours chronologique numéroté) et les départager en duels Elo, classement gardé en
`localStorage` sous la clé `taste:<sujet>:elo`.

Les ailes sont des disciplines distinctes, **jamais numérotées** : montres homme et femme, design
d'intérieur, chaises, voitures. Tous les budgets, du Casio à la haute horlogerie.

## Direction artistique

« Studio » : Archivo et Geist Mono, monochrome, radius 0. Le registre serif et or du musée classique
a été explicitement écarté. Références : neuemontreal.com, rezo-zero.com.

## Images

Projet perso non commercial, et la politique de licence est assumée : visuels de presse des maisons,
catalogues d'enchères, presse spécialisée et Unsplash, chacun avec son `photoCredit`. On refuse
seulement les filigranes et la basse résolution. La contrainte Commons stricte est abandonnée.

Chaîne : probes (`scripts/probe-*.mjs`), sélections JSON par sujet dans `scripts/picks/`, runner
`scripts/fetch-picks.mjs`, redimensionnement `sips` à 1200 px avec conversion sRGB (attention aux
JPEG en CMJN).

**La vérification visuelle est obligatoire et ne se délègue pas.** Les recherches renvoient souvent du
hors-sujet, et une sélection faite sur des noms de fichiers ne prouve rien. Méthode : une
planche-contact PIL, vignettes et libellés, lue d'un coup pour juger des dizaines d'images à la fois.
Déléguer les probes à des agents marche bien, l'oeil final reste à faire.

## `separator` vient du kit

shadcn écrit encore les variantes d'orientation en `data-horizontal:` / `data-vertical:`,
c'est-à-dire les attributs booléens `[data-horizontal]` / `[data-vertical]`. Base UI 1.7
n'en émet aucun : il écrit `data-orientation="horizontal"`. Le séparateur n'avait donc ni
hauteur ni largeur, il était invisible.

Le composant est entré au registry `@alexandremace` pour cette raison : il se met à jour
par `pnpm dlx shadcn@latest add @alexandremace/separator`, et jamais par un `shadcn add
separator` officiel, qui ramènerait la version cassée.

## Éditorial

Vérifier qu'une pièce existe bien dans la discipline avant de l'ajouter : Messika ne fait pas de
montres, son motif Move est de la joaillerie. Une image doit être représentative de ce qu'elle
illustre, pas seulement jolie : six styles d'intérieur ont été réimagés pour cette raison.

Les fiches sont fact-checkées. Tests unitaires Vitest sur `lib/elo.ts`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

Conventions de la stack : `docs/next-guidelines.md`, lien vers [dev-standards](https://github.com/alexandre-mace/dev-standards).
