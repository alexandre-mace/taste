import type { Item, Subject } from "@/lib/subjects"

const items: Item[] = [
  {
    slug: "zen-japonais",
    photoCount: 2,
    maker: "Kyoto, Japon",
    name: "Zen japonais",
    year: 1482,
    tagline: "Le vide comme luxe suprême",
    description:
      "Codifié dans le Kyoto de l'époque Higashiyama, autour du Pavillon d'argent, l'intérieur zen repose sur des principes inchangés depuis cinq siècles : tatamis au sol, cloisons coulissantes shoji en papier de riz, et le tokonoma, cette alcôve où l'on n'expose qu'un seul objet à la fois. Rien n'est décoratif, tout est rituel : la lumière filtrée, l'ombre valorisée, l'espace vide considéré comme une matière à part entière. Tanizaki en a fait un manifeste avec son Éloge de l'ombre. C'est la source lointaine de tous les minimalismes, du Bauhaus à John Pawson. Cinq cents ans plus tard, le monde entier copie encore cette grammaire du dépouillement.",
  },
  {
    slug: "wabi-sabi",
    photoCount: 2,
    maker: "Japon",
    name: "Wabi-sabi",
    year: 1522,
    tagline: "La beauté de l'imparfait et de l'usé",
    description:
      "Théorisé par les maîtres de thé japonais, Sen no Rikyū en tête, le wabi-sabi célèbre ce que l'Occident cache : l'irrégulier, le patiné, l'incomplet. Dans la salle de thé, un bol fêlé réparé à l'or (kintsugi) vaut plus qu'une porcelaine neuve ; les murs de terre brute et les poutres tordues sont choisis pour leur imperfection même. C'est une esthétique mais surtout une philosophie : accepter le passage du temps au lieu de le combattre. Redécouvert par les décorateurs occidentaux dans les années 2010, souvent réduit à un lin froissé et trois poteries brunes, il reste l'anti-showroom absolu. La maison wabi-sabi ne se photographie pas, elle se vit.",
  },
  {
    slug: "baroque",
    photoCount: 2,
    maker: "Italie, puis France",
    name: "Baroque",
    year: 1600,
    tagline: "Le théâtre total au service du pouvoir",
    description:
      "Né dans la Rome de la Contre-Réforme pour éblouir les fidèles, le baroque envahit les palais européens au XVIIe siècle : dorures, marbres polychromes, plafonds peints en trompe-l'œil, miroirs démultipliant la lumière des lustres. Versailles en est l'apothéose française — la galerie des Glaces reste l'intérieur le plus célèbre du monde. Tout y est mise en scène du pouvoir : l'espace est un décor, le visiteur un spectateur écrasé. Son vocabulaire — courbes, contre-courbes, exubérance assumée — refait surface à chaque époque qui en a assez de la sobriété. C'est l'ancêtre revendiqué du maximalisme contemporain.",
  },
  {
    slug: "riad-marocain",
    photoCount: 2,
    maker: "Maroc",
    name: "Riad marocain",
    year: 1650,
    tagline: "La maison tournée vers son jardin secret",
    description:
      "Le riad, maison traditionnelle de Fès et Marrakech, s'organise autour d'un patio planté d'orangers et rafraîchi par une fontaine : aveugle sur la rue, entièrement ouvert sur son cœur. Son décor est un festival d'artisanats : zelliges géométriques, plâtres ciselés, cèdre peint, moucharabiehs qui tamisent la lumière. Chaque motif obéit à des règles mathématiques transmises depuis des siècles par les maâlems, les maîtres artisans. Redécouvert par les Occidentaux — Yves Saint Laurent à Marrakech en tête — il a inspiré toute la vague « orientaliste » de la décoration mondiale. C'est l'un des rares styles où l'ornement total atteint la sérénité.",
  },
  {
    slug: "rococo",
    photoCount: 2,
    maker: "France",
    name: "Rococo",
    year: 1730,
    tagline: "La courbe, l'asymétrie et la légèreté",
    description:
      "Réaction aux fastes solennels de Versailles, le rococo — ou style rocaille — règne sur les salons parisiens du règne de Louis XV : boiseries sculptées de coquilles et de fleurs, pastels poudrés, petits salons intimes pensés pour la conversation. L'asymétrie devient un art, la ligne droite est bannie, le confort apparaît enfin avec les bergères et les causeuses. Le pavillon d'Amalienburg à Munich ou le salon de la princesse à l'hôtel de Soubise en sont les chefs-d'œuvre. Moqué puis adoré, il revient à chaque fois que la décoration veut de la douceur et de la fantaisie. C'est la féminité assumée de l'histoire du décor.",
  },
  {
    slug: "neoclassique",
    maker: "France & Angleterre",
    name: "Néoclassique",
    year: 1760,
    tagline: "Le retour à l'ordre antique",
    description:
      "La redécouverte de Pompéi et d'Herculanum au milieu du XVIIIe siècle déclenche une fièvre antique : exit les courbes rocaille, place aux lignes droites, aux colonnes, aux frises et aux médaillons. En France, c'est le style Louis XVI — pieds cannelés, symétrie stricte, gris Trianon ; en Angleterre, Robert Adam invente des intérieurs d'une élégance aérienne aux stucs pastel. La raison des Lumières s'exprime en décor : proportion, clarté, retenue. Ce classicisme-là n'a jamais vraiment quitté les appartements bourgeois européens. C'est la grammaire de base de tout « bon goût » occidental.",
  },
  {
    slug: "gustavien",
    photoCount: 2,
    maker: "Suède",
    name: "Gustavien",
    year: 1780,
    tagline: "Versailles pâli par la lumière du Nord",
    description:
      "Le roi Gustave III revient de Versailles ébloui et adapte le néoclassicisme français à la Suède : mêmes lignes Louis XVI, mais peintes en gris perle, bleu brume et blanc cassé pour capter la rare lumière nordique. Les parquets sont blanchis, les miroirs multipliés, les lustres de cristal suspendus dans des pièces presque nues. Cette pauvreté élégante — le bois peint remplaçant les dorures — crée une douceur unique, ni rustique ni pompeuse. Redécouvert dans les années 1990, il est devenu le grand classique chic des intérieurs scandinaves et normands. C'est l'aristocratie du pâle.",
  },
  {
    slug: "shaker",
    photoCount: 2,
    maker: "Nouvelle-Angleterre, États-Unis",
    name: "Shaker",
    year: 1790,
    tagline: "« La beauté repose sur l'utilité »",
    description:
      "Les communautés shakers de Nouvelle-Angleterre ont produit, par pure recherche spirituelle, l'un des langages décoratifs les plus purs de l'histoire : chaises suspendues à des patères murales, meubles sans un ornement, proportions parfaites nées de l'usage. Chaque objet devait être fait « comme si l'on devait mourir demain et comme s'il devait durer mille ans ». Leurs intérieurs blancs et bois, d'une netteté monacale, ont fasciné les designers du XXe siècle, du Danois Børge Mogensen aux minimalistes contemporains. La cuisine « shaker » est devenue un standard mondial de la menuiserie. Rarement une foi a produit un design aussi intemporel.",
  },
  {
    slug: "empire",
    photoCount: 2,
    maker: "France",
    name: "Empire",
    year: 1804,
    tagline: "L'antique militarisé par Napoléon",
    description:
      "Style officiel du Premier Empire, orchestré par les architectes Percier et Fontaine, l'Empire met le décor au service de la gloire impériale : acajou massif, bronzes dorés, sphinx, aigles et abeilles, lits-bateaux et fauteuils en gondole. Les appartements de Joséphine à la Malmaison en sont le manifeste, jusqu'aux tentures en forme de tente militaire. Tout y est masculin, dense, monumental — l'antithèse exacte de la légèreté Louis XVI. Exporté par les conquêtes dans toute l'Europe, il a laissé des répliques de Saint-Pétersbourg à Naples. C'est le pouvoir fait mobilier.",
  },
  {
    slug: "biedermeier",
    photoCount: 2,
    maker: "Autriche & Allemagne",
    name: "Biedermeier",
    year: 1815,
    tagline: "Le confort bourgeois avant l'heure",
    description:
      "Après les guerres napoléoniennes, la bourgeoisie viennoise se replie sur son intérieur : le Biedermeier invente le premier « chez-soi » moderne. Bois clairs — cerisier, bouleau, frêne —, lignes simples aux courbes discrètes, tissus à rayures et petits secrétaires : le décor se met à l'échelle de la famille, non du palais. On y cultive la musique de chambre, les plantes en pot et l'art de recevoir simplement. Son élégance sobre, presque moderne, en a fait une référence des designers du XXe siècle, de Josef Frank aux Scandinaves. C'est l'ancêtre direct du cocooning.",
  },
  {
    slug: "victorien",
    photoCount: 2,
    maker: "Angleterre",
    name: "Victorien",
    year: 1840,
    tagline: "L'accumulation comme preuve de réussite",
    description:
      "L'ère victorienne marie révolution industrielle et morale bourgeoise : les intérieurs débordent de meubles capitonnés, papiers peints chargés, bibelots, fougères en pot et cadres superposés — le vide y est presque indécent. Les nouvelles classes moyennes affichent leur statut à travers l'accumulation, rendue possible par la production de masse. Chaque pièce a sa fonction codifiée, du fumoir au boudoir, et l'horreur du vide s'étend jusqu'aux napperons sur les pianos. Honni par les modernistes qui l'ont pris pour repoussoir absolu, il fascine à nouveau les décorateurs du maximalisme. C'est le style contre lequel tout le design moderne s'est construit.",
  },
  {
    slug: "arts-and-crafts",
    photoCount: 2,
    maker: "Angleterre",
    name: "Arts & Crafts",
    year: 1880,
    tagline: "La révolte de l'artisanat contre la machine",
    description:
      "Mené par William Morris depuis sa Red House, le mouvement Arts & Crafts se dresse contre la laideur industrielle victorienne : retour au fait-main, aux matériaux honnêtes, aux motifs inspirés de la nature anglaise. Les papiers peints de Morris — Willow Bough, Strawberry Thief — sont toujours édités et toujours copiés, cent quarante ans plus tard. Le mouvement pose une idée révolutionnaire : la beauté du quotidien est une question morale et sociale, pas un luxe. Il inspirera directement l'Art nouveau, le Bauhaus et le design scandinave. Tout le design moderne descend de cette maison rouge du Kent.",
  },
  {
    slug: "art-nouveau",
    photoCount: 2,
    maker: "Bruxelles & Paris",
    name: "Art nouveau",
    year: 1893,
    tagline: "La ligne coup de fouet envahit la maison",
    description:
      "Avec l'hôtel Tassel de Victor Horta à Bruxelles, la nature entre littéralement dans l'architecture : escaliers en tiges de fer forgé, verrières florales, poignées de porte en bourgeon — l'ornement n'est plus appliqué, il pousse. De Guimard à Paris à Gaudí à Barcelone en passant par Mucha, l'Art nouveau est le premier style total : il dessine tout, de la façade à la fourchette. Cette liberté organique, permise par les nouveaux matériaux industriels, scandalise puis émerveille. Étouffé en quinze ans par son propre maniérisme, il reste l'un des gestes les plus radicaux de l'histoire du décor. Ses intérieurs classés se visitent comme des œuvres d'art totales.",
  },
  {
    slug: "de-stijl",
    photoCount: 2,
    maker: "Utrecht, Pays-Bas",
    name: "De Stijl",
    year: 1917,
    tagline: "Vivre dans un Mondrian",
    description:
      "Le mouvement néerlandais De Stijl réduit le monde à ses éléments premiers : lignes droites, plans, et les trois couleurs primaires posées sur blanc, gris et noir. La maison Schröder de Gerrit Rietveld à Utrecht en est le manifeste habitable : cloisons coulissantes, mobilier intégré, sa fameuse chaise rouge et bleue — un tableau de Mondrian en trois dimensions. L'espace y est pensé comme une composition abstraite dont l'habitant fait partie. D'une radicalité inouïe pour 1924, elle est classée au patrimoine mondial de l'UNESCO. Aucun intérieur n'a jamais poussé aussi loin l'utopie géométrique.",
  },
  {
    slug: "bauhaus",
    photoCount: 2,
    maker: "Weimar & Dessau, Allemagne",
    name: "Bauhaus",
    year: 1919,
    tagline: "La forme suit la fonction",
    description:
      "L'école fondée par Walter Gropius révolutionne l'habitat en mariant art et industrie : acier tubulaire de Marcel Breuer, luminaires de Marianne Brandt, plans libres et murs blancs. L'intérieur Bauhaus supprime tout ornement au profit de la fonction, avec une conviction : le bon design doit être reproductible et accessible à tous. Fermée par les nazis en 1933, l'école essaime dans le monde entier et fonde le design moderne — la chaise Cesca et le fauteuil Wassily meublent encore nos salons. Son esthétique machine, scandaleuse à l'époque, est devenue le langage par défaut de la modernité. Cent ans après, on habite tous un peu au Bauhaus.",
  },
  {
    slug: "art-deco",
    photoCount: 2,
    maker: "Paris",
    name: "Art déco",
    year: 1925,
    tagline: "La géométrie luxueuse des Années folles",
    description:
      "Consacré par l'Exposition internationale de 1925 à Paris, l'Art déco répond à l'Art nouveau par la géométrie : éventails, chevrons, soleils levants, dans des matériaux somptueux — ébène de Macassar, galuchat, laque, ivoire. Ruhlmann en est l'ébéniste roi, les paquebots comme le Normandie ses cathédrales flottantes. C'est le premier style mondial, de Paris à New York — le Chrysler Building — jusqu'à Bombay et Shanghai. Son mélange de rigueur et de glamour ne s'est jamais démodé : hôtels, bars et boutiques y puisent sans fin. C'est le luxe moderne dans sa forme la plus reconnaissable.",
  },
  {
    slug: "moderniste",
    photoCount: 2,
    maker: "Europe",
    name: "Moderniste",
    year: 1929,
    tagline: "Plan libre, verre et acier : l'espace libéré",
    description:
      "Avec le pavillon de Barcelone de Mies van der Rohe et la villa Tugendhat à Brno, le modernisme invente l'espace fluide : plus de pièces fermées mais un plan libre rythmé de murs d'onyx et de baies vitrées, où le luxe se loge dans la matière et la proportion, non dans l'ornement. « Less is more » devient la devise d'un mouvement qui compte aussi Le Corbusier et sa villa Savoye. Le mobilier — fauteuil Barcelona, chaise longue LC4 — accède au rang d'icône au même titre que l'architecture. Ce vocabulaire domine encore la production architecturale mondiale un siècle plus tard. C'est le style qui a redéfini ce qu'habiter veut dire.",
  },
  {
    slug: "mid-century-modern",
    photoCount: 2,
    maker: "États-Unis & Scandinavie",
    name: "Mid-century modern",
    year: 1945,
    tagline: "L'optimisme d'après-guerre en formes organiques",
    description:
      "L'Amérique de l'après-guerre invente un modernisme joyeux : les Case Study Houses de Los Angeles ouvrent les maisons sur la nature, tandis que Charles et Ray Eames plient le contreplaqué et moulent la fibre de verre en assises organiques. Baies vitrées, pièces à vivre décloisonnées, mobilier aux pieds fuselés : l'habitat devient décontracté, coloré, démocratique. La série Mad Men a relancé mondialement la fièvre pour ce style dans les années 2010, faisant flamber la cote des originaux. C'est aujourd'hui le style vintage le plus recherché au monde. Aucune époque n'a produit autant d'icônes du meuble en si peu d'années.",
  },
  {
    slug: "scandinave",
    photoCount: 2,
    maker: "Danemark, Suède & Finlande",
    name: "Scandinave",
    year: 1950,
    tagline: "La beauté fonctionnelle pour tous",
    description:
      "Le design scandinave des années 1950 — Hans Wegner, Arne Jacobsen, Alvar Aalto, Finn Juhl — marie chaleur artisanale et modernisme : teck et chêne blonds, laine et cuir, formes douces dessinées pour le corps. Sa philosophie est sociale-démocrate jusque dans le mobilier : du beau, du fonctionnel, pour tout le monde. Le « hygge » danois et la lumière rare du Nord façonnent des intérieurs clairs, feutrés, où la bougie est une institution. IKEA en a diffusé une version planétaire, faisant du look scandinave le style par défaut du XXIe siècle. Peu de régions ont autant marqué la maison contemporaine.",
  },
  {
    slug: "brutalisme",
    photoCount: 2,
    maker: "Angleterre & France",
    name: "Brutalisme",
    year: 1955,
    tagline: "Le béton brut assumé jusqu'au salon",
    description:
      "Dérivé du « béton brut » de Le Corbusier à la Cité radieuse, le brutalisme assume la matière sans fard : voiles de béton laissés coffrage apparent, volumes massifs, monumentalité sans excuse. Le Barbican de Londres en est la version résidentielle culte, dont les appartements s'arrachent aujourd'hui. Longtemps haï, symbole du logement de masse, le style est réhabilité depuis les années 2010 par une génération qui y voit une honnêteté radicale — et un décor photogénique. À l'intérieur, il se marie au bois, au velours et aux plantes qui adoucissent sa rudesse. C'est le style le plus clivant du XXe siècle, et c'est précisément sa force.",
  },
  {
    slug: "space-age",
    photoCount: 2,
    maker: "France & Italie",
    name: "Space Age",
    year: 1960,
    tagline: "L'habitat rêvé de l'ère spatiale",
    description:
      "Portée par la conquête spatiale, une génération de designers — Joe Colombo, Verner Panton, Pierre Paulin, Olivier Mourgue — réinvente la maison en capsule : plastiques moulés, formes en bulle, oranges et violets saturés, habitats tout-en-un aux meubles intégrés. La chaise Panton, premier siège monobloc en plastique, et les fauteuils Djinn de Mourgue — vus dans 2001, l'Odyssée de l'espace — en sont les icônes. On imagine des maisons-bulles, des téléviseurs sphériques, des moquettes murales. Le choc pétrolier de 1973 met fin au rêve plastique, mais son optimisme pop fascine toujours. C'est le futur tel qu'on le voulait en 1968.",
  },
  {
    slug: "memphis",
    photoCount: 2,
    maker: "Milan",
    name: "Memphis",
    year: 1981,
    tagline: "Le design qui a osé être drôle",
    description:
      "Fondé à Milan autour d'Ettore Sottsass, le groupe Memphis dynamite le bon goût moderniste : stratifiés à motifs criards, terrazzo pop, formes enfantines empilées sans logique apparente, couleurs qui jurent exprès. La bibliothèque Carlton de Sottsass, totem multicolore inutilisable, en est l'emblème glorieux. Moqué par les puristes, adoré par Karl Lagerfeld qui meubla tout son appartement monégasque en Memphis, le mouvement ne dura que quelques années mais libéra le design de son sérieux. Son influence irrigue toute l'esthétique des années 1980, puis le revival postmoderne des années 2010. C'est la preuve que le décor peut être une blague brillante.",
  },
  {
    slug: "cottagecore",
    photoCount: 2,
    maker: "Internet & campagne anglaise",
    name: "Cottagecore",
    year: 2020,
    tagline: "La campagne fantasmée de la génération en ligne",
    description:
      "Éclos sur Tumblr puis TikTok pendant les confinements, le cottagecore idéalise la vie de cottage anglais : papiers peints fleuris, vaisselle dépareillée, bouquets champêtres, patchworks, pain au levain et confitures maison en garniture existentielle. C'est moins un style d'architecte qu'une esthétique générationnelle : le décor comme refuge face au numérique — diffusé, paradoxalement, par le numérique lui-même. Laura Ashley et Beatrix Potter en sont les saintes patronnes involontaires. Sa version décorative sérieuse recroise le style « English country house » de Colefax and Fowler. C'est la première esthétique d'intérieur née d'un hashtag, et à ce titre, elle est déjà historique.",
  },
]

/**
 * Styles écrits mais en attente d'une image libre de droits digne de la
 * grille (voir scripts/probe-commons.mjs et probe-openverse.mjs).
 * À déplacer dans `items` dès qu'une photo est trouvée.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pending: Item[] = [
  {
    slug: "campagne-francaise",
    maker: "Provence & campagnes françaises",
    name: "Campagne française",
    year: 1750,
    tagline: "Pierre, poutres et lin lavé",
    description:
      "Le style campagne française n'a pas été inventé : il s'est déposé lentement dans les mas provençaux, les longères normandes et les fermes du Luberon. Murs chaulés, tomettes patinées, poutres apparentes, armoires cirées et vaisselle dépareillée : tout y respire l'usage et la transmission. La palette vient du paysage — ocre, lavande, vert olivier — et les matières sont brutes : lin, terre cuite, bois fruitier. Popularisé mondialement par les maisons d'hôtes du Sud et les magazines anglo-saxons fascinés par la « French farmhouse », il reste l'un des styles les plus copiés au monde. C'est le luxe discret de ce qui n'essaie pas.",
  },
  {
    slug: "haussmannien",
    maker: "Paris",
    name: "Haussmannien",
    year: 1853,
    tagline: "Moulures, parquet, cheminée : le rêve parisien",
    description:
      "Les grands travaux du baron Haussmann dotent Paris d'un intérieur type devenu mythique : parquet en point de Hongrie, moulures et rosaces au plafond, cheminée en marbre surmontée d'un trumeau, portes à double battant et balcon filant. Ce décor standardisé du Second Empire s'est révélé d'une plasticité extraordinaire : il absorbe le mobilier design comme les héritages de famille. L'appartement haussmannien est aujourd'hui l'un des espaces résidentiels les plus désirés et les plus chers du monde, fantasme mondial du « chic parisien ». Le contraste moulures anciennes + design contemporain est devenu un genre décoratif en soi. C'est le fond de scène de l'art de vivre à la française.",
  },
  {
    slug: "hollywood-regency",
    maker: "Los Angeles",
    name: "Hollywood Regency",
    year: 1935,
    tagline: "Le glamour des studios au salon",
    description:
      "Né dans les villas des stars de l'âge d'or hollywoodien, sous la houlette de décorateurs vedettes comme Dorothy Draper ou William Haines, le Hollywood Regency met la maison en scène comme un plateau de cinéma : laque noire et blanche, miroirs partout, velours émeraude, léopard, lustres théâtraux. Tout est contraste et brillance, pensé pour flatter ses occupants comme un éclairage de studio. C'est le style de l'apparence assumée, du cocktail à 18 heures et de l'escalier fait pour les entrées remarquées. Périodiquement ressuscité — par Jonathan Adler ou Kelly Wearstler —, il reste la référence du chic spectaculaire. Le glamour, ici, est une discipline.",
  },
  {
    slug: "boheme",
    maker: "Sans frontières",
    name: "Bohème",
    year: 1968,
    tagline: "L'accumulation voyageuse et libre",
    description:
      "Héritier des ateliers d'artistes du XIXe et popularisé par la contre-culture des années 1960-70, le style bohème refuse les règles : kilims superposés, plantes en macramé, coussins berbères, meubles chinés et souvenirs de voyage cohabitent en strates joyeuses. Talitha Getty à Marrakech en fut l'icône absolue, immortalisée en caftan sur un toit-terrasse. Le « boho » raconte une vie — réelle ou fantasmée — de voyages, de trouvailles et de liberté, contre la décoration assortie des catalogues. Instagram et Pinterest l'ont recyclé en esthétique globale, parfois jusqu'à la caricature. Reste l'idée précieuse : une maison doit ressembler à ses habitants, pas à un magazine.",
  },
  {
    slug: "loft-industriel",
    maker: "New York",
    name: "Loft industriel",
    year: 1970,
    tagline: "Habiter l'usine, inventer l'espace ouvert",
    description:
      "Quand les artistes de SoHo — Rauschenberg, puis toute une génération — investissent illégalement les étages d'anciennes manufactures new-yorkaises, ils inventent sans le savoir le fantasme résidentiel des cinquante années suivantes : plateaux ouverts, briques apparentes, colonnes de fonte, verrières d'atelier et volumes démesurés. L'esthétique de l'usine — tuyauterie visible, béton, métal riveté — devient un langage décoratif à part entière. Le loft transforme la contrainte en luxe : l'espace brut vaut plus que la finition. Copié dans le monde entier jusque dans les programmes neufs « esprit loft », il a durablement décloisonné nos logements. C'est la plus belle revanche de la friche sur le salon bourgeois.",
  },
  {
    slug: "high-tech",
    maker: "Paris & Londres",
    name: "High-tech",
    year: 1977,
    tagline: "La machine exhibée comme décor",
    description:
      "Le Centre Pompidou de Piano et Rogers, avec ses entrailles colorées exposées en façade, donne son manifeste au style high-tech : structures, gaines et réseaux ne se cachent plus, ils deviennent l'ornement. Dans la maison, cela se traduit par étagères d'échafaudage, sols en caillebotis, meubles en tôle perforée et lampes d'architecte industrielles. Le livre culte High-Tech de Kron et Slesin (1978) codifie ce détournement du catalogue industriel vers le domestique. L'esthétique essaime dans les lofts et bureaux des années 1980-90, et revient aujourd'hui par la vague « gorpcore » du design. C'est la poésie assumée du fonctionnel pur.",
  },
  {
    slug: "shabby-chic",
    maker: "Angleterre & Californie",
    name: "Shabby chic",
    year: 1989,
    tagline: "La grande maison anglaise en version délavée",
    description:
      "Formalisé par Rachel Ashwell en Californie à partir du charme fané des country houses anglaises, le shabby chic cultive l'usure noble : peintures écaillées, lins lavés, housses blanches froissées, lustres à pampilles chinés et roses anciennes. Tout doit avoir l'air hérité, jamais acheté neuf — quitte à patiner soi-même une commode du samedi. Le style a dominé les années 1990-2000, des brocantes de l'Isle-sur-la-Sorgue aux magazines de décoration du monde entier. Sa version industrielle et sucrée a fini par lasser, mais son principe — préférer la patine au clinquant — a durablement infusé. C'est la nostalgie rendue habitable.",
  },
  {
    slug: "mediterraneen",
    maker: "Riviera, Grèce & Californie",
    name: "Méditerranéen",
    year: 1920,
    tagline: "Chaux blanche, terre cuite et lumière",
    description:
      "Des villas des Cyclades aux haciendas californiennes du « Mediterranean Revival » des années 1920, le style méditerranéen distille la même recette : murs à la chaux, sols en terre cuite, bois patinés par le sel, niches et arches sculptées dans l'épaisseur des murs. La palette est celle du paysage — blanc éclatant, bleu Égée, ocres et verts d'olivier — et la frontière entre dedans et dehors s'efface sous les pergolas. Popularisé par les magazines de voyage puis par la vague « coastal » d'Instagram, il évoque instantanément l'été perpétuel. De Santorin à Comporta, c'est l'esthétique vacances devenue art de vivre. Le luxe y a la texture du plâtre frais.",
  },
  {
    slug: "minimalisme",
    maker: "Londres & Japon",
    name: "Minimalisme",
    year: 1995,
    tagline: "L'espace, la lumière, et presque rien",
    description:
      "Héritier du zen japonais et du modernisme, le minimalisme des années 1990 — John Pawson en chef de file, Claudio Silvestrin, l'influence de Tadao Ando — réduit l'architecture intérieure à l'essentiel absolu : murs nus, lumière sculptée, rangements invisibles, une matière ou deux traitées à la perfection. La maison Pawson à Londres ou le monastère de Nový Dvůr montrent la rigueur quasi monastique du genre. Calvin Klein en fit l'esthétique de sa marque, les galeries d'art son décor par défaut. Exigeant à vivre — le désordre y est un scandale —, il reste l'horizon de toute épure contemporaine. Moins, ici, est réellement plus.",
  },
  {
    slug: "farmhouse-moderne",
    maker: "Texas, États-Unis",
    name: "Farmhouse moderne",
    year: 2013,
    tagline: "La ferme réinventée par la télévision",
    description:
      "Popularisé par Joanna Gaines et l'émission Fixer Upper depuis Waco, Texas, le modern farmhouse croise la ferme américaine et le confort contemporain : lambris shiplap blancs, poutres récupérées, éviers de ferme, luminaires de grange en métal noir et lettrages muraux. La recette — neutre, chaleureuse, familiale — a conquis l'Amérique périurbaine au point de devenir le style par défaut des constructions neuves des années 2010-2020. Sa diffusion par la télévision puis Pinterest en fait le premier grand style né du divertissement de masse. Critiqué pour son uniformité, il a néanmoins réhabilité bois brut et artisanat auprès du grand public. C'est le rêve pastoral en version climatisée.",
  },
  {
    slug: "maximalisme",
    maker: "Londres & Instagram",
    name: "Maximalisme",
    year: 2015,
    tagline: "Plus, c'est plus",
    description:
      "En réaction aux années de gris minimaliste, le maximalisme contemporain — Luke Edward Hall, Beata Heuman, la vague « dopamine decor » — superpose sans complexe : papiers peints panoramiques, velours saturés, galeries de cadres jusqu'au plafond, motifs qui se répondent et se contredisent. L'héritage revendiqué va du victorien au Memphis en passant par David Hicks et ses géométries seventies. La règle est qu'il n'y en a pas, sinon la cohérence secrète d'un œil sûr : le maximalisme raté vire au bazar, le réussi à la caverne d'Ali Baba chic. Instagram lui a offert une scène mondiale — le décor y est un feed permanent. C'est le retour du plaisir dans la décoration.",
  },
  {
    slug: "japandi",
    maker: "Japon × Scandinavie",
    name: "Japandi",
    year: 2017,
    tagline: "Quand Kyoto rencontre Copenhague",
    description:
      "Contraction de « Japan » et « Scandi », le japandi fusionne deux traditions cousines : l'épure chaleureuse du design danois et la sobriété artisanale japonaise. Bois clairs et bois brûlés, céramiques wabi-sabi, lignes basses, palette minérale : tout y respire le calme étudié. La parenté n'est pas nouvelle — les Danois des années 1950 admiraient déjà l'artisanat japonais —, mais l'étiquette née des réseaux sociaux a cristallisé un goût mondial des années 2020 pour les intérieurs apaisés. C'est le style refuge de l'époque anxieuse, mi-hygge, mi-zen. La maison comme respiration.",
  },
]

export const designInterieur: Subject = {
  slug: "design-interieur",
  title: "Design d'intérieur",
  category: "Arts décoratifs",
  intro:
    "Les grands styles qui ont façonné nos intérieurs, exposés par ordre chronologique — de la salle de thé de Kyoto au cottagecore des réseaux. Parcourez les courants, puis départagez-les en duel pour révéler votre goût.",
  itemNoun: "style",
  itemGender: "m",
  duelQuestion: "Lequel préférez-vous ?",
  searchPlaceholder: "Chercher un style, une époque…",
  detailFit: "cover",
  plateAspect: "aspect-4/5",
  items,
}
