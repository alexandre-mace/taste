# Gap Analysis : Theorie vs Pratique

> Ecarts entre les guidelines de la stack et le code actuel, à la date de l'audit.
> Organisé par priorité. Les cases servent le temps d'une session de nettoyage :
> le prochain audit réécrit le fichier.
> Audit de main à 6ba9ca6d831d412c8500dc68c67ef3f9b8630a96, le 18/11/2026. Un delta part de ce commit.

Premier passage : toutes les origines sont `ancien`. 67 fichiers lus en deux zones et un passage
par thèmes, chaque constat Haute et Moyenne soumis à réfutation (un seul réfuté : le champ de
recherche a un nom accessible par son `placeholder`).

---

## 1. Crédits photo (Haute priorité)

**Idéal** : `AGENTS.md` veut un `photoCredit` par image, et le pied de page annonce « Photos :
crédits par pièce ».
**Actuel** : 152 pièces sur 228 n'ont aucun crédit, et une en a un faux.

- [ ] `lib/subjects.ts:19` et les 5 `lib/subjects/*.ts` : 152 pièces sans `photoCredit` (Montres 57/78, Montres Femme 5/48, design d'intérieur 24/35, chaises 31/32, voitures 35/35). Le docblock dit « les photos Commons restent créditées globalement », mais `0af2ade` a retiré le crédit global. Des fichiers Commons en CC BY-SA ou Licence Art Libre (Jeep Willys, 2CV, Thonet 14) ne sont attribués nulle part (sûr ; ancien)
  - Rassembler d'abord les sources : Montres Homme n'a pas de `scripts/picks/montres.json` (titres dans `fetch-images.mjs`), le design d'intérieur est dans `fetch-picked-interieur.mjs`, dix pièces Femme n'ont aucune source (§4). Puis remplir depuis l'`extmetadata` Commons (`Artist`, `LicenseShortName`), rendre `photoCredit` obligatoire dans `Item` dans le même commit, et corriger le docblock.
- [ ] `lib/subjects/montres-femme.ts:67` : la Cartier Panthère est créditée « Johnson Watch Co, Flickr (domaine public) », alors que l'image est le fichier Commons de Gisling, CC BY-SA 3.0 (`scripts/picks/montres-femme.json:2`, même photo vérifiée à l'œil). Erreur posée par `f083574` (sûr ; ancien)
  - « Gisling, Wikimedia Commons (CC BY-SA 3.0) ».

## 2. Comportement et architecture (Moyenne priorité)

**Idéal** : la page reste serveur et passe les données en props (Playbook de `next-guidelines.md`) ; un vote n'est enregistré que sur un choix de l'utilisateur.
**Actuel** : le catalogue part dans le bundle client, et une flèche dans le menu vote.

- [ ] `components/duel-arena.tsx:86-95` : l'écouteur `keydown` sur `window` enregistre un duel sur ArrowLeft ou ArrowRight quelle que soit la cible. Dans le menu des collections ouvert sur la page duel, Base UI 1.7 ne stoppe que les flèches verticales : une flèche horizontale vote à l'insu de l'utilisateur (probable : lu dans Base UI, à rejouer en local ; ancien)
  - Sortir si `(event.target as Element).closest('[role="menu"], [role="dialog"], input, textarea, [contenteditable]')`. `event.defaultPrevented` ne suffit pas, Base UI n'appelle pas `preventDefault` sur ces flèches.
- [ ] `components/site-header.tsx:14`, `components/classement-view.tsx:32-42`, `components/duel-arena.tsx:21-35` : trois composants client importent des valeurs de `@/lib/subjects`. Le `SiteHeader` étant dans le layout racine, les 5 collections, descriptions comprises, partent sur chaque page dans un chunk de 210 Ko (75 Ko gzip) (sûr ; ancien)
  - Le layout passe à `SiteHeader` une liste `{ slug, label }` ; classement et duel reçoivent les pièces réduites (slug, name, maker, year, tagline). Garde : `no-restricted-imports` des valeurs de `@/lib/subjects` dans les fichiers `"use client"`.
- [ ] `components/classement-view.tsx:134-139` : « Tout recommencer » vide le classement, la vue passe à l'`Empty` et démonte le déclencheur ; Base UI ne rend le focus qu'à un élément encore dans le DOM, il tombe sur `<body>` (sûr à la lecture ; ancien)
  - Focus sur l'`EmptyTitle` (`tabIndex={-1}`) seulement après une remise à zéro, par un drapeau posé dans `onClick`, pour ne pas voler le focus à la première visite.

## 3. Accessibilité (Moyenne priorité)

**Idéal** : `react-guidelines.md` §6, un focus toujours visible et des liens nommés.
**Actuel** :

- [ ] `app/page.tsx:50`, `:76`, `components/classement-view.tsx:216` : `outline-none` sans aucun indicateur de focus à la place (sûr ; ancien)
  - `app/page.tsx:50` : la classe `group` est sur la rangée, pas sur le lien, donc `focus-visible:underline` sur le lien lui-même. `:76` est réglé par le point suivant. `classement-view.tsx:216` : le motif `group-focus-visible:` d'`item-card.tsx:31`. Garde : `outline-none` sans `focus-visible:` ni `group-focus-visible:`.
- [ ] `app/page.tsx:76-87` : le lien des vignettes ne contient que des images en `alt=""`, donc aucun nom, et double le lien du titre (sûr ; ancien)
  - `aria-hidden` et `tabIndex={-1}`, les deux ensemble.
- [ ] `app/[subject]/classement/page.tsx:19` et `app/[subject]/duel/page.tsx:19` : titres construits sur `subject.title`, identiques pour Montres et Montres Femme (sûr ; ancien)
  - `subjectLabel(subject)`, comme `app/[subject]/page.tsx:29`.

## 4. Configuration et outillage (Moyenne priorité)

**Idéal** : le tableau des versions et les « Current patterns » de `next-guidelines.md`.
**Actuel** :

- [ ] `package.json` : pas de champ `packageManager` (sûr ; ancien)
  - `"packageManager": "pnpm@12.4.2"`. Vercel l'honore (vu dans le journal de build de bonpote/site).
- [ ] `package.json` : `tailwindcss` et `@tailwindcss/postcss` en `^4` (4.3.2 au lockfile). 4.3.4 est publiée et casse le build avec Geist, que `geist` charge par `next/font/local` (sûr ; ancien)
  - `4.3.3` exact pour les deux, puis `rm -rf .next && pnpm build`.
- [ ] `eslint.config.mjs`, `.prettierrc` : ESLint + Prettier au lieu de Biome 2.6 + oxlint (sûr ; ancien)
  - Le `.oxlintrc.json` des seules règles du compilateur. À faire avant la montée de TypeScript (§7) et avec le point suivant.
- [ ] `next.config.ts` : React Compiler non activé (sûr ; ancien)
  - `reactCompiler: true`, `babel-plugin-react-compiler` en dev dependency. Les `useMemo`/`useCallback` existants se retirent ensuite en touchant les fichiers, pas en campagne (`react-guidelines.md` §2).
- [ ] `next.config.ts`, `app/layout.tsx` : ni `cacheComponents` ni `ensureStatic` (sûr ; ancien)
  - `cacheComponents: true` d'abord, puis `export const ensureStatic = 'navigation'` : le build échoue sur `ensureStatic` sans `cacheComponents`. Toutes les routes dynamiques ont leur `generateStaticParams`.
- [ ] `app/layout.tsx:11-21` : ni `metadataBase`, ni `openGraph` (`locale: "fr_FR"`), ni `app/opengraph-image.tsx` ; icône en data URI au lieu de `app/icon.tsx` et `app/apple-icon.png` (sûr ; ancien)
  - `metadataBase` sur taste.alexandremace.fr, description en constante, OG sur données figées, `icon.tsx` en `ImageResponse` pour l'emoji 🖼️.
- [ ] Porte qualité : aucune garde pour les familles cherchables de cet audit, tirets cadratins, `outline-none` sans focus, `.gitkeep` dans un dossier non vide (sûr ; ancien)
  - Dans le linter, seule porte de la pile (Biome GritQL ou règle oxlint en JS), en épargnant la classe de caractères de `components/explorer-grid.tsx:26`. Le guide Next ne demande ni hook ni CI.

## 5. Documentation des agents (Moyenne priorité)

**Idéal** : `AGENTS.md` décrit l'état réel du projet.
**Actuel** :

- [ ] `AGENTS.md:9-10` et `app/globals.css:10` : « Archivo et Geist Mono, monochrome, radius 0 » et « Studio monochrome ». Depuis `d0a4805` (« Base UI et Archivo laissent place à aria-nova et Geist : tokens du kit (sable, encre, bleu) »), le fond est sable, l'accent bleu `#0737FF`, `--radius` 0.625rem, Geist Sans. La ligne d'`AGENTS.md` a été écrite après, en `4d3c377` (sûr ; ancien)
  - Réécrire sur Geist, les tokens du kit et l'accent bleu, en gardant le refus du registre serif et or.
- [ ] `AGENTS.md`, section « `separator` vient du kit » : la cause donnée est fausse. `app/globals.css:3` importe `shadcn/tailwind.css`, qui définit `data-horizontal` sur `[data-orientation="horizontal"]` ; compilé avec les versions de `598c484`, la classe d'origine ciblait bien l'attribut émis par Base UI. La section contredit `react-guidelines.md` §3 (sûr ; ancien)
  - Rejouer en local le séparateur de `598c484^` pour trouver la vraie cause, puis réécrire ou retirer la section. La correction actuelle fonctionne, elle reste en place d'ici là.

## 6. Données et attribution (Moyenne priorité)

- [ ] `lib/subjects.ts:20-25` : un seul `photoCredit` pour toute la galerie d'une pièce. `scandinave.jpg` (maison Finn Juhl, Commons) s'affiche « Alex Tyson, Pexels », crédit de `scandinave-2.jpg` ; `brutalisme-2.jpg` (Habitat 67) est crédité « The Modern House » comme le Barbican de `brutalisme.jpg` (sûr sur ces deux cas ; ancien)
  - `photoCredits: string[]` aligné sur `itemImages()`, affiché sous la photo courante ; à mener avec §1, dont il partage les sources. Relever les 26 pièces à plusieurs photos.

## 7. Basse priorité

### Dépendances

- [ ] `package.json` : `@base-ui/react` en `latest` (1.7.0 au lockfile, 1.9.0 publiée) (sûr ; ancien)
  - `^1.7.0` ; la montée passe par le kit.
- [ ] `package.json` : `react` et `react-dom` 19.2.4 contre 19.3. Pas un plancher de sécurité : l'App Router rend avec le React 19.3 embarqué par Next 16.4.6 (sûr ; ancien)
  - 19.3.1.
- [ ] `package.json` : `typescript ^5` (5.9.3) contre 7.0 via 6.0 (sûr ; ancien)
  - Après le passage à Biome : typescript-eslint refuse TypeScript 7.
- [ ] `package.json:39` : `vitest ^4.1.10` contre 5.0 (sûr ; ancien)
- [ ] `package.json:24` : la CLI `shadcn` en `dependencies`, alors qu'elle ne sert qu'à fournir `shadcn/tailwind.css` (sûr ; ancien)
  - `devDependencies`.
- [ ] `lib/utils.ts:1-6` : `cn` vient de `clsx` + `tailwind-merge` au lieu du paquet `cn` (`react-guidelines.md` §3) (sûr ; ancien)
  - Migration dans le kit, puis `/propagate-kit` ; `lib/utils.ts` réduit à `export { cn } from "cn"`.
- [ ] `vitest.config.ts` : ni `sequence.shuffle`, ni `restoreMocks`, ni `unstubGlobals` (`react-guidelines.md` §5). Mélangée, la suite passe (sûr ; ancien)

### Sécurité

- [ ] `next.config.ts` : aucun en-tête de sécurité (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`), que `next-guidelines.md` §6 bis compte comme écart. Site statique sans saisie envoyée, d'où la priorité (sûr ; ancien)
  - CSP sans nonce dans `headers()` (un nonce rendrait toutes les pages dynamiques). Relever d'abord par `curl -sI` ce que Vercel envoie déjà.

### Typographie et texte

- [ ] Tirets cadratins dans le texte visible et les commentaires, 12 occurrences : `app/[subject]/classement/page.tsx:19`, `app/[subject]/duel/page.tsx:19`, `app/[subject]/page.tsx:48`, `app/page.tsx:64`, `components/classement-view.tsx:99`, `components/duel-arena.tsx:101`, `components/item-frame.tsx:7`, `lib/subjects.ts:14` et `:74`, `lib/subjects/montres.ts:574` et `:675`, `lib/subjects/montres-femme.ts:388` ; plus `scripts/fetch-images.mjs:70`, `scripts/fetch-picked.mjs:12` et la sortie de `scripts/probe-openverse.mjs:24` (sûr ; ancien)
  - Virgule ou deux-points. Ne pas toucher `components/explorer-grid.tsx:26`, qui doit reconnaître le caractère dans une saisie.
- [ ] `app/layout.tsx:14` : gabarit `"%s - Taste"`, trait d'union là où `writing.md` veut le tiret demi-cadratin (sûr ; ancien)
  - `"%s – Taste"`.
- [ ] `components/duel-arena.tsx:104-111` : le paragraphe en `flex gap-x-2` sépare le point de la consigne, on lit « ← → . Chaque duel » (sûr ; ancien)
- [ ] `app/[subject]/[slug]/page.tsx:69-70` : « Collection {subject.title} » affiche « Collection Montres » sur une fiche Montres Femme (sûr ; ancien)
  - `subjectLabel(subject)`.
- [ ] `app/globals.css:5` : « jamais posee » (sûr ; ancien)

### Commentaires et docblocks

- [ ] Commentaires en anglais sur un projet français (`writing.md`) : `components/bezel-progress.tsx:3-6`, `:44-45`, `components/cartel.tsx:3-6`, `components/duel-arena.tsx:38-39`, `:51-52`, `:65-66`, `components/explorer-grid.tsx:20`, `components/item-frame.tsx:6-9`, `components/item-gallery.tsx:9-12`, `components/page-header.tsx:3`, `hooks/use-rankings.ts:37`, `:66-67`, `:90`, `lib/elo.ts:42`, `:55`, `:76-81`, `scripts/fetch-picks.mjs:1-3`, `scripts/probe-commons.mjs:1`, `scripts/probe-openverse.mjs:1-2` (sûr ; ancien)
  - Traduire ; `lib/elo.ts:77` et `:96` parlent encore de « watches » alors que `pickPair` sert les cinq collections.
- [ ] `lib/subjects.ts:74` raconte une migration au lieu de décrire la fonction ; `:81` annonce « Les autres variantes » alors que le filtre renvoie aussi le sujet lui-même (sûr ; ancien)
- [ ] Commentaires d'historique : `lib/subjects/montres-femme.ts:174` (« promues depuis `pending` », qui n'existe plus), « Vague 2 / Vague 3 » (`montres-femme.ts:129`, `:388`, `montres.ts:574`, `:675`), `design-interieur.ts:325-328` (sûr ; ancien)
  - Ne garder que ce qui reste vrai.

### Accessibilité

- [ ] `components/item-card.tsx:27`, `components/classement-view.tsx:231`, `components/duel-arena.tsx:207` : l'`alt` répète le nom que le `Cartel` du même lien ou bouton affiche déjà (sûr ; ancien)
  - `alt=""`.
- [ ] `components/site-header.tsx:81-92` : la section active sans `aria-current`, que son jumeau `app/[subject]/page.tsx:65` pose (sûr ; ancien)
  - `aria-current="page"` quand `pathname === href`, `"true"` sur une fiche de la section ; `aria-label` sur le `<nav>`.
- [ ] `components/site-header.tsx:50-52` : les entrées du menu des collections naviguent par `router.push`, sans `href` : ni nouvel onglet, ni copie du lien, ni prefetch. Le kit n'exporte pas d'habillage de `Menu.LinkItem` (sûr ; ancien)
  - `DropdownMenuLinkItem` dans le kit, avec `closeOnClick`, puis `/propagate-kit`.

### Code mort et jumeaux

- [ ] `app/page.tsx:67`, `app/[subject]/page.tsx:50`, `components/classement-view.tsx:54-57` : pluriels et accords d'`itemNoun` recalculés, alors que `lib/subjects.ts:121` porte déjà la logique (sûr ; ancien)
  - Helpers `itemCountLabel` et `allSeenLabel` dans `lib/subjects.ts`.
- [ ] `app/page.tsx:8-13` : `COVERS` répète des slugs hors des données, un renommage donne une image cassée sans erreur au build (les 12 existent aujourd'hui) (sûr ; ancien)
  - Un champ `covers` sur `Subject`, ou un test Vitest qui résout chaque slug.
- [ ] `components/duel-arena.tsx:211` (`cn(cn(...))`) et `components/page-header.tsx:21-23` (`cn` sur une chaîne statique) (sûr ; ancien)
- [ ] `hooks/use-rankings.ts:64-83` : un écouteur `storage` par abonné, et `ready` s'abonne sans en avoir besoin. Le résultat reste juste (sûr ; ancien)
  - Un écouteur au niveau du module.
- [ ] `components/bezel-progress.tsx:1` : `"use client"` sans état ni interaction (sûr ; ancien)
- [ ] `app/layout.tsx:33-36` et `app/globals.css:99-107` : `font-sans` et le lissage déclarés deux fois, sur `<html>` au lieu du `<body>` (sûr ; ancien)
- [ ] `app/globals.css`, `app/layout.tsx`, `app/[subject]/page.tsx`, `components/classement-view.tsx` : non formatés selon le `.prettierrc` du projet (sûr ; ancien)
  - `pnpm format`, script étendu au CSS ; à remplacer par Biome (§4).
- [ ] `components/.gitkeep`, `hooks/.gitkeep`, `lib/.gitkeep`, `public/.gitkeep` : dossiers non vides (sûr ; ancien)
- [ ] `README.md` : celui du modèle, qui prescrit `shadcn add button` depuis le registry officiel, ce qui écraserait le bouton du kit (sûr ; ancien)
  - Un README court qui renvoie à `AGENTS.md`, ou la suppression.

### Scripts d'images

- [ ] `scripts/fetch-images.mjs:8` et `scripts/fetch-picked.mjs:6` : écrivent dans `public/watches`, abandonné en `43311e9` ; `fetch-picked.mjs` plante au premier fichier (sûr ; ancien)
  - Verser les sélections dans `scripts/picks/montres.json`, une fois le runner corrigé (point suivant), sinon un lancement remet les originaux filigranés.
- [ ] `scripts/fetch-picks.mjs:20-45` : chaque lancement réécrit toutes les images du sujet, dont celles recadrées à la main (sûr ; ancien)
  - Sauter les slugs dont l'image existe, sauf ceux passés en argument.
- [ ] `scripts/fetch-picked-interieur.mjs` : jumeau périmé du runner ; ses sélections précèdent `b692daf` et le lancer remettrait les images écartées (sûr ; ancien)
  - `scripts/picks/design-interieur.json` à jour, photos `-2` comprises, puis suppression.
- [ ] `scripts/picks/montres-femme.json` : les 10 pièces de `ab88043` n'y figurent pas, leur source n'est enregistrée nulle part (sûr ; ancien)
- [ ] `User-Agent` recopié dans les 6 scripts, avec une adresse de contact personnelle publiée dans un dépôt public (probable : confirmer que la publication est voulue ; ancien)
  - Une constante partagée dans `scripts/`, le contact lu dans une variable d'environnement.

### Kit `@alexandremace` (à corriger dans le kit, puis `/propagate-kit`)

- [ ] `components/made-with-love.tsx:16` : rend un `<footer>`, d'où deux landmarks `contentinfo` avec celui de `app/layout.tsx:42` ; et `"use client"` sans interaction (sûr ; ancien)
- [ ] `components/ui/button.tsx:59-72` : `LinkButton` ne retire pas le `href` sous `aria-disabled`, et s'appelle `ButtonLink` dans le guide (sûr ; ancien)
- [ ] `components/ui/alert-dialog.tsx:120`, `components/ui/dropdown-menu.tsx:45`, `:125`, `:142` : classes `cn-*` qu'aucune règle ne définit (à vérifier : la CLI shadcn les réécrit peut-être à l'`add` ; ancien)
- [ ] `components/ui/empty.tsx:71` (`EmptyDescription` typé `"p"`, rend un `<div>`) et `components/ui/kbd.tsx:16` (`KbdGroup` typé `"div"`, rend un `<kbd>`) (probable : vérifier upstream ; ancien)
- [ ] `app/globals.css:11-17`, `:30-31` : tokens du kit en hexadécimal, le guide les veut en OkLCh (à vérifier dans le kit ; ancien)

## Questions pour l'équipe communication

Sans réponse, le lot applique la valeur par défaut indiquée.

- `app/layout.tsx:45` annonce « Photos : crédits par pièce » alors que 152 fiches n'en ont pas. Par défaut : la phrase reste, et §1 complète les crédits.
- `components/duel-arena.tsx:116-121` affiche « Votre classement est maintenant fiable » dès 60 duels, quelle que soit la taille de la collection : sur les 78 Montres, une partie des pièces n'a encore jamais été opposée. Par défaut : le texte reste.
- `lib/subjects/montres.ts`, `intro` : « … à l'Apple Watch », alors que le parcours finit en 2022 sur la MoonSwatch. Par défaut : inchangé.
- `lib/subjects/montres-femme.ts`, `intro` : « … à la céramique de la J12 » (2000), alors que la salle va jusqu'en 2020. Par défaut : inchangé.

## Écarts assumés

Aucun pour ce premier passage.
