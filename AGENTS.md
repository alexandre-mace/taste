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

## Éditorial

Vérifier qu'une pièce existe bien dans la discipline avant de l'ajouter : Messika ne fait pas de
montres, son motif Move est de la joaillerie. Une image doit être représentative de ce qu'elle
illustre, pas seulement jolie : six styles d'intérieur ont été réimagés pour cette raison.

Les fiches sont fact-checkées. Tests unitaires Vitest sur `lib/elo.ts`.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

Conventions de la stack : `docs/next-guidelines.md`, lien vers [dev-standards](https://github.com/alexandre-mace/dev-standards).
