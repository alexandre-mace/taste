import type { Item, Subject } from "@/lib/subjects"

const items: Item[] = [
  {
    slug: "cartier-baignoire",
    maker: "Cartier",
    name: "Baignoire",
    year: 1912,
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    tagline: "L'ovale étiré de Louis Cartier",
    description:
      "En 1912, Louis Cartier étire le cercle d'une montre en un ovale allongé : le dessin, baptisé plus tard « Baignoire » pour sa forme de tub, devient l'une des signatures les plus durables de la maison. Godrons d'or, cadran épuré, chiffres romains étirés : c'est la montre-bijou dans sa forme la plus architecturale. Adorée dans les années 1960 par Catherine Deneuve puis redécouverte par la génération Instagram dans sa version Mini, elle traverse les modes sans prendre une ride. La version « Allongée » des années 1950 s'arrache aux enchères. C'est la preuve qu'une forme juste n'a pas d'époque.",
  },
  {
    slug: "vca-cadenas",
    maker: "Van Cleef & Arpels",
    name: "Cadenas",
    year: 1935,
    photoCredit: "shakko · Wikimedia Commons (CC BY-SA 3.0)",
    tagline: "La montre-cadenas de la duchesse de Windsor",
    description:
      "Dessinée en 1935, la Cadenas de Van Cleef & Arpels enroule son bracelet en un fermoir de cadenas dont le cadran, incliné vers celle qui la porte, permet de lire l'heure sans geste visible — car une dame du monde ne consulte pas sa montre en société. La légende l'associe à Wallis Simpson, duchesse de Windsor et cliente fidèle de la maison, dont l'histoire d'amour scandaleuse avec Édouard VIII fascine l'époque. Bijou d'abord, montre ensuite, elle incarne l'âge d'or de la joaillerie horlogère parisienne. Toujours au catalogue, quasi inchangée. C'est l'heure lue à la dérobée, transformée en geste d'élégance.",
  },
  {
    slug: "bulgari-serpenti",
    maker: "Bulgari",
    name: "Serpenti",
    year: 1948,
    tagline: "Le serpent qui s'enroule au poignet",
    description:
      "Née à Rome à la fin des années 1940, la Serpenti enroule un serpent d'or au poignet, la tête abritant le cadran, le corps en spirale Tubogas épousant le bras sans fermoir. Elizabeth Taylor la porte sur le tournage de Cléopâtre en 1962 — la photo fait le tour du monde et scelle le mythe. Symbole de séduction et de renaissance dans l'iconographie antique, le serpent devient l'emblème absolu de Bulgari, décliné en émail, en diamants, en acier. Les versions vintage à écailles émaillées comptent parmi les montres-bijoux les plus recherchées des enchères. C'est le bijou qui hypnotise, et qui donne l'heure presque par accident.",
  },
  {
    slug: "blancpain-ladybird",
    maker: "Blancpain",
    name: "Ladybird",
    year: 1956,
    tagline: "Le plus petit mouvement rond de son temps",
    description:
      "En 1956, Blancpain lance la Ladybird autour du plus petit mouvement rond du monde, 11,85 millimètres de diamètre — un exploit pensé non comme une prouesse de laboratoire mais comme un produit pour les femmes actives de l'après-guerre. À sa tête, fait rarissime : une femme, Betty Fiechter, première dirigeante d'une manufacture horlogère suisse, qui pilote Blancpain depuis 1933. La Ladybird traverse les décennies en versions acier, or et serties, toujours au catalogue aujourd'hui. C'est un jalon doublement féminin de l'horlogerie : par sa clientèle et par celle qui l'a créée.",
  },
  {
    slug: "rolex-lady-datejust",
    maker: "Rolex",
    name: "Lady-Datejust",
    year: 1957,
    tagline: "L'icône Rolex à l'échelle du poignet féminin",
    description:
      "En 1957, Rolex décline son best-seller absolu en 26 millimètres : la Lady-Datejust reprend tout de sa grande sœur — guichet de date, loupe Cyclope, lunette cannelée, bracelet Jubilé — dans des proportions pensées pour le poignet féminin. Elle devient la montre des femmes de pouvoir avant que l'expression n'existe, des cours royales aux conseils d'administration. Déclinée en acier, or, nacre et diamants, elle est probablement la montre féminine la plus vendue de l'histoire. Sa cote vintage grimpe portée par le retour des petits diamètres. C'est l'uniforme discret de la réussite au féminin.",
  },
  {
    slug: "chopard-happy-diamonds",
    maker: "Chopard",
    name: "Happy Diamonds",
    year: 1976,
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    tagline: "Les diamants qui dansent en liberté",
    description:
      "En 1976, le designer Ronald Kurowski a une idée en observant les gouttes d'eau d'une cascade : libérer les diamants de leur serti pour les laisser tourbillonner librement entre deux glaces saphir, autour du cadran. « Les diamants sont plus heureux quand ils sont libres », commente la fille du fondateur — le nom Happy Diamonds est né. D'abord montre d'homme (elle reçoit une distinction à Baden-Baden), elle devient l'icône féminine de Chopard et engendre toute la lignée Happy Sport. Le brevet des diamants mobiles reste l'une des signatures les plus contrefaites de la joaillerie. C'est la préciosité qui refuse de se tenir tranquille.",
  },
  {
    slug: "cartier-panthere",
    maker: "Cartier",
    name: "Panthère",
    year: 1983,
    tagline: "Le bracelet-bijou des années 80",
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    description:
      "Lancée en 1983, la Panthère doit son nom à son bracelet à maillons brossés, souple comme le félin emblème de Cartier depuis 1914. Petit boîtier carré hérité de la Santos, or et acier assumés : c'est la montre-bijou des années 1980, portée aussi bien par les femmes que par les hommes, de Keith Richards à Pierce Brosnan. Retirée du catalogue en 2004, elle est relancée en 2017 quasi inchangée et redevient immédiatement un best-seller. Elle incarne le glamour deux-tons de la décennie Dynasty mieux qu'aucune autre. C'est la preuve que Cartier fabrique des icônes en série.",
  },
  {
    slug: "chopard-happy-sport",
    maker: "Chopard",
    name: "Happy Sport",
    year: 1993,
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    tagline: "L'acier et le diamant enfin réunis",
    description:
      "En 1993, Caroline Scheufele, héritière de Chopard, ose une hérésie : marier l'acier, métal utilitaire, aux diamants, matière du soir — avec les pierres mobiles des Happy Diamonds dansant sur le cadran. La Happy Sport invente la montre de jour précieuse, celle qu'on porte au tennis comme au dîner, et devient l'un des plus grands succès de l'horlogerie féminine des années 1990. Sa lunette aux sept diamants tourbillonnants est reconnaissable entre mille. Toujours best-seller trente ans plus tard, déclinée à l'infini. C'est le luxe descendu de son piédestal, sans rien perdre de son éclat.",
  },
  {
    slug: "casio-baby-g",
    maker: "Casio",
    name: "Baby-G",
    year: 1994,
    photoCredit: "MIKI Yoshihito · Flickr (CC BY 2.0)",
    tagline: "La G-Shock des filles des années 90",
    description:
      "En 1994, Casio décline sa G-Shock indestructible pour les adolescentes : la Baby-G, plus compacte, déclinée en rose bubblegum, bleu lagon et blanc néon, devient instantanément l'accessoire des lycéennes de Tokyo à Los Angeles. Portée avec les chaussettes hautes et le kogal style à Shibuya, adoptée par les Spice Girls et Gwen Stefani, elle est la montre pop de toute une génération. Résistante aux chocs comme sa grande sœur, elle assume d'être un jouet autant qu'un instrument. C'est la culture jeune des années 1990 cristallisée au poignet, et un souvenir générationnel mondial.",
  },
  {
    slug: "chanel-j12",
    maker: "Chanel",
    name: "J12",
    year: 2000,
    photoCredit: "Chun's Pictures · Flickr (CC BY 2.0)",
    tagline: "La céramique noire qui a changé le siècle",
    description:
      "Dessinée par Jacques Helleu comme un objet de désir absolu — il voulait « la montre que l'on porte avec tout, tout le temps » —, la J12 impose en 2000 un matériau que l'horlogerie ne prenait pas au sérieux : la céramique high-tech noire, inrayable, plus légère que l'acier, d'un noir laqué profond. Montre de femme pensée sans complexe comme une vraie montre sportive, elle conquiert ensuite les hommes — trajectoire inverse de toute l'histoire horlogère. Sa version blanche de 2003 relance la mode mondiale des montres blanches. C'est la première icône horlogère du XXIe siècle, tous genres confondus.",
  },
  {
    slug: "breguet-reine-de-naples",
    maker: "Breguet",
    name: "Reine de Naples",
    year: 2002,
    tagline: "L'héritière de la toute première montre-bracelet",
    description:
      "En 1810, Abraham-Louis Breguet reçoit de Caroline Murat, reine de Naples et sœur de Napoléon, la commande la plus visionnaire de l'histoire horlogère : une montre à porter au bracelet — la toute première montre-bracelet jamais réalisée. La pièce originale, ovale et attachée d'un bracelet de cheveux tressés d'or, a disparu ; la collection Reine de Naples lancée en 2002 la réinvente avec son boîtier ovoïde incliné, sa couronne à 4 heures et son guillochage grand feu. C'est le rappel somptueux que la montre-bracelet est une invention féminine. L'histoire au poignet, littéralement.",
  },
  {
    slug: "cartier-ballon-bleu",
    maker: "Cartier",
    name: "Ballon Bleu",
    year: 2007,
    tagline: "Le rond parfait au cabochon protégé",
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    description:
      "Lancée en 2007, la Ballon Bleu est le plus grand succès commercial récent de Cartier. Son boîtier galet, bombé comme un ballon, enveloppe la couronne et son cabochon de saphir bleu dans un arc de métal, créant une silhouette immédiatement identifiable. Le chiffre romain XII déformé par le guichet de couronne est devenu une signature. Kate Middleton en a fait sa montre de tous les jours, assurant sa célébrité mondiale. Elle prouve que Cartier sait encore créer des icônes au XXIe siècle.",
  },
  {
    slug: "omega-constellation",
    maker: "Omega",
    name: "Constellation",
    year: 1982,
    tagline: "Les griffes d'Omega, icône des années Cindy",
    description:
      "La Constellation existe depuis 1952, mais c'est la refonte « Manhattan » de 1982 qui crée l'icône féminine : quatre griffes enserrant le verre, bracelet intégré, lunette gravée de chiffres romains. Cindy Crawford en devient l'ambassadrice en 1995 — l'un des premiers grands contrats entre une top model et une manufacture — et fait de la Constellation la montre féminine la plus reconnaissable de la décennie. Le médaillon d'observatoire gravé au dos rappelle les records de précision qui ont donné son nom au modèle. C'est l'élégance à griffes, au sens propre.",
  },
  // Vague 2 — élargissement du canon (juillet 2026). Le registre trie par
  // année, l'ordre d'insertion ici n'a pas d'importance.
  {
    slug: "omega-ladymatic",
    maker: "Omega",
    name: "Ladymatic",
    year: 1955,
    photoCredit: "Thomas Quine · Wikimedia Commons (CC BY 2.0)",
    tagline: "La première automatique pensée pour elles",
    description:
      "En 1955, Omega lance la Ladymatic, sa première montre automatique conçue pour les femmes, animée par le calibre 455 — alors le plus petit mouvement automatique à rotor du monde, certifié chronomètre. Le geste est inédit : offrir aux femmes la même exigence de précision mécanique qu'aux hommes, à une époque où l'horlogerie féminine se résume trop souvent au serti. Le succès est immédiat et durable. Relancée en 2010 dans la collection De Ville avec Nicole Kidman en ambassadrice, elle rappelle qu'Omega a pris les poignets féminins au sérieux avant presque tout le monde. C'est la technique offerte, pas concédée.",
  },
  {
    slug: "georg-jensen-vivianna",
    maker: "Georg Jensen",
    name: "Vivianna",
    year: 1969,
    photoCredit: "Torun Bülow-Hübe · Wikimedia Commons (domaine public)",
    tagline: "Le jonc-miroir de Torun",
    description:
      "Dessinée en 1962 par Vivianna Torun Bülow-Hübe, légende de l'orfèvrerie scandinave, et produite par Georg Jensen à partir de 1969, la Vivianna est un jonc ouvert qui se glisse au poignet sans fermoir, coiffé d'un cadran-miroir sans index. Torun voulait « une montre qui ne fasse pas de nous les esclaves du temps » : le miroir renvoie à celle qui la porte son propre regard plutôt que la fuite des heures. Icône absolue du design scandinave, jamais sortie du catalogue, elle est régulièrement citée parmi les montres féminines les plus importantes de tous les temps. C'est moins une montre qu'un manifeste : le temps ramené à soi.",
  },
  {
    slug: "chopard-ice-cube",
    maker: "Chopard",
    name: "Ice Cube",
    year: 1999,
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    tagline: "Les cubes d'or adoubés par Rihanna",
    description:
      "En 1999, Chopard empile des cubes facettés — or poli ou tout-pavé de diamants — en une géométrie radicale, urbaine, presque brutaliste : l'Ice Cube tranche avec tout ce que la maison — et l'époque — produit alors. La montre trouve sa consécration pop en 2017 quand Rihanna co-signe la collection « Rihanna ♥ Chopard » et en fait l'emblème d'un luxe streetwear avant l'heure. Entre joaillerie glacée et minimalisme architectural, elle traverse les générations sans prendre une ride. C'est le glamour passé au cube.",
  },
  {
    slug: "jlc-rendez-vous",
    maker: "Jaeger-LeCoultre",
    name: "Rendez-Vous",
    year: 2012,
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    tagline: "L'étoile qui marque l'heure du rendez-vous",
    description:
      "Lancée en 2012, la Rendez-Vous est la grande collection féminine mécanique de Jaeger-LeCoultre : chiffres floraux dessinés comme une calligraphie, guillochage soleillé, et sur le réhaut une petite étoile que l'on positionne sur l'heure d'un rendez-vous à ne pas manquer. La Grande Maison y verse tout son savoir-faire, des calibres automatiques maison jusqu'aux cadrans de haute joaillerie de la Rendez-Vous Ivy et aux complications célestes de la Celestial. Pilier commercial de la manufacture, omniprésente sur les tapis rouges au poignet des ambassadrices de la maison, elle prouve que la mécanique fine se conjugue au féminin sans se travestir. C'est l'heure qui compte vraiment, marquée d'une étoile.",
  },
]

/**
 * Pièces écrites mais en attente d'une image libre de droits digne de la
 * grille (Chanel, Hermès, Patek, VCA gardent leurs visuels sous licence).
 * À déplacer dans `items` dès qu'une photo est trouvée.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pending: Item[] = [
  {
    slug: "patek-koscowicz",
    maker: "Patek Philippe",
    name: "Montre de la comtesse Koscowicz",
    year: 1868,
    tagline: "La première montre-bracelet conservée de l'histoire",
    description:
      "On l'oublie systématiquement : la montre-bracelet est née au poignet des femmes, un demi-siècle avant que les hommes n'osent l'adopter. Après la pièce perdue créée par Breguet pour Caroline Murat en 1810, la plus ancienne montre-bracelet conservée est ce bracelet-bijou en or émaillé livré par Patek Philippe à la comtesse hongroise Koscowicz en 1868. À l'époque, l'objet est classé parmi les bijoux — l'idée qu'un homme porte sa montre au poignet ferait rire les clubs londoniens. Il faudra les tranchées de 1914 pour que les messieurs rattrapent cinquante ans de retard. Toute l'horlogerie de poignet descend de cette pièce de dame.",
  },
  {
    slug: "jlc-calibre-101",
    maker: "Jaeger-LeCoultre",
    name: "Calibre 101",
    year: 1929,
    tagline: "Le plus petit mouvement mécanique du monde",
    description:
      "Créé en 1929, le Calibre 101 de Jaeger-LeCoultre reste, près d'un siècle plus tard, le plus petit mouvement mécanique du monde : 14 millimètres de long, moins d'un gramme, 98 composants assemblés à la loupe par une poignée d'horlogères de la Vallée de Joux. Il permet des montres-bijoux où la mécanique disparaît littéralement dans le serti. Elizabeth II en portait une, discrètement glissée au poignet, le jour de son couronnement en 1953. Produit à quelques exemplaires par an, il est l'un des secrets les mieux gardés de la haute horlogerie. C'est la miniaturisation élevée au rang d'art féminin.",
  },
  {
    slug: "poiray-ma-premiere",
    maker: "Poiray",
    name: "Ma Première",
    year: 1985,
    tagline: "La parisienne aux bracelets interchangeables",
    description:
      "Créée en 1985 par la maison de la place Vendôme, Ma Première invente un geste que toute l'industrie copiera trente ans plus tard : le bracelet interchangeable sans outil, qui change la montre d'humeur en quelques secondes — satin le soir, cuir grainé au bureau, vernis fluo le week-end. Son boîtier coussin cerclé de godrons devient un classique du chic parisien, offert de mère en fille pour les grandes occasions. C'est la montre française féminine par excellence, indémodable et malicieuse. Une idée simple, exécutée avec esprit : très parisien, précisément.",
  },
  {
    slug: "chanel-premiere",
    maker: "Chanel",
    name: "Première",
    year: 1987,
    tagline: "La première montre de la maison Chanel",
    description:
      "Quand Chanel lance sa toute première montre en 1987, Jacques Helleu en dessine le boîtier d'après la géométrie du bouchon du parfum N°5 — lui-même inspiré de la place Vendôme. Chaîne entrelacée de cuir comme le sac 2.55, cadran laqué noir sans chiffre : tout le vocabulaire de Gabrielle Chanel tient dans quelques centimètres carrés. Le succès est immédiat et installe la légitimité horlogère de la maison, ouvrant la voie à la J12. Rééditée en 2022 dans sa forme d'origine, elle a retrouvé le succès instantanément. C'est du Chanel à l'état pur : rien de superflu, tout est signature.",
  },
  {
    slug: "hermes-cape-cod",
    maker: "Hermès",
    name: "Cape Cod",
    year: 1991,
    tagline: "Le carré dans le rectangle, et le Double Tour",
    description:
      "Dessinée en 1991 par Henri d'Origny à qui l'on demandait un boîtier carré — il livra « un carré dans un rectangle », aux attaches inspirées des maillons de la chaîne d'ancre Hermès —, la Cape Cod prend sa dimension mythique en 1998 : Martin Margiela, alors directeur artistique des collections femme, imagine le bracelet Double Tour qui s'enroule deux fois autour du poignet comme un lien de cuir. Le geste devient l'une des signatures les plus copiées de la montre féminine. Sellerie, cuir, discrétion : tout Hermès est là. C'est l'élégance qui s'attache au lieu de s'afficher.",
  },
  {
    slug: "patek-twenty4",
    maker: "Patek Philippe",
    name: "Twenty~4",
    year: 1999,
    tagline: "La Patek pensée pour la vie des femmes",
    description:
      "En 1999, Patek Philippe lance sa première collection entièrement dédiée aux femmes depuis des décennies : la Twenty~4, du nom des vingt-quatre heures d'une vie active qu'elle prétend accompagner — du bureau au dîner sans changer de montre. Boîtier rectangulaire inspiré de la Gondolo, deux rangées de diamants, bracelet intégré : le manifeste d'une génération de femmes qui s'achètent elles-mêmes leur haute horlogerie au lieu de l'attendre en cadeau. Le slogan « Qui serez-vous dans les prochaines 24 heures ? » assume le propos. C'est la porte d'entrée féminine de la plus prestigieuse des manufactures.",
  },
  // Vague 2 — élargissement du canon (recherche de juillet 2026, sources :
  // Vogue Scandinavia, Worldtempus, 1stDibs, FHH, GPHG, archives maisons).
  {
    slug: "boucheron-reflet",
    maker: "Boucheron",
    name: "Reflet",
    year: 1947,
    tagline: "Le talisman d'Édith Piaf",
    description:
      "Imaginée par Gérard Boucheron, la Reflet aligne ses godrons d'or verticaux au poignet et cache une invention brevetée en 1944 : l'attache invisible qui permet de changer de bracelet d'un geste. Édith Piaf en fait son talisman absolu — elle en achète vingt et un exemplaires entre 1949 et 1963, qu'elle offre à ceux qu'elle aime, dont celui gravé « Je ne sonne que les heures heureuses ». Près de quatre-vingts ans plus tard, la Reflet est toujours au catalogue de la place Vendôme, quasi inchangée. C'est la montre-bijou parisienne par excellence : une idée d'orfèvre, une histoire d'amour, une devise. Les heures malheureuses attendront.",
  },
  {
    slug: "cartier-crash",
    maker: "Cartier",
    name: "Crash",
    year: 1967,
    tagline: "La montre fondue du Swinging London",
    description:
      "Née en 1967 chez Cartier London sous Jean-Jacques Cartier, la Crash étire et tord le boîtier comme une montre molle de Dalí — la légende maison évoque une Baignoire déformée dans un accident de voiture. En pleine Swinging London, cette forme impossible devient le manifeste du chic anticonformiste, portée par les Londoniennes les plus audacieuses. Produite au compte-gouttes, rééditée confidentiellement à Paris en 1991 puis à Londres en 2013, elle est devenue le graal absolu des montres de forme : un exemplaire de 1967 a dépassé 1,5 million de dollars aux enchères en 2022. C'est le surréalisme au poignet, et la preuve que Cartier sait aussi casser ses propres codes.",
  },
  {
    slug: "piaget-manchette",
    maker: "Piaget",
    name: "Montres-manchettes 21st Century",
    year: 1969,
    tagline: "L'or et les pierres dures de la jet-set",
    description:
      "À la fin des années 1960, Piaget fait scandale et sensation : des manchettes d'or martelé aux cadrans de jade, lapis-lazuli, opale ou œil-de-tigre, réunies en 1969 sous la bannière « 21st Century ». Orchestré par Yves Piaget, ce style habille la « Piaget Society » — Jackie Kennedy, Elizabeth Taylor, Sophia Loren, Andy Warhol — et fait de la maison LE joaillier-horloger de la décennie. La montre cesse d'être un instrument pour devenir une œuvre portable, où la mécanique extra-plate maison disparaît dans le bijou. Les exemplaires d'époque s'arrachent aujourd'hui aux enchères. C'est le sommet du glamour horloger des sixties.",
  },
  {
    slug: "piaget-limelight-gala",
    maker: "Piaget",
    name: "Limelight Gala",
    year: 1973,
    tagline: "Les cornes étirées du Gstaad Palace",
    description:
      "Dévoilée en 1973 lors d'une soirée au Gstaad Palace, dessinée par Jean-Claude Gueit, la Limelight Gala étire deux cornes asymétriques serties de diamants de part et d'autre d'un boîtier rond, prolongé d'un bracelet d'or souple comme un tissu. C'est l'emblème de la jet-set du « Piaget Society style », de Monte-Carlo à Palm Springs. Rebaptisée et relancée en 2013, célébrée en grande pompe pour ses cinquante ans en 2023, elle est redevenue le pilier féminin de la maison. Son asymétrie précieuse est reconnaissable au premier regard. C'est la fête des années 1970 qui continue, un demi-siècle plus tard.",
  },
  {
    slug: "hermes-kelly",
    maker: "Hermès",
    name: "Kelly",
    year: 1975,
    tagline: "Le cadenas du sac devenu montre",
    description:
      "En 1975, Hermès transforme le cadenas du sac Kelly — dessiné par Robert Dumas dans les années 1930 — en boîtier de montre, suspendu au poignet sur un simple lien de cuir. L'objet est d'une audace tranquille : une montre qui pend comme une breloque, assumant le bijou plus que l'instrument, portée par les initiées comme un mot de passe. Culte chez les amatrices de vintage, très recherchée aux enchères, elle a été relancée en 2024 — première refonte en près d'un demi-siècle. C'est tout Hermès en miniature : la sellerie, le secret, l'humour. Un cadenas qui n'enferme que le temps.",
  },
  {
    slug: "audemars-piguet-royal-oak-lady",
    maker: "Audemars Piguet",
    name: "Royal Oak Lady",
    year: 1976,
    ref: "8638",
    tagline: "L'acier au féminin, dessiné par une femme",
    description:
      "Quatre ans après la Royal Oak de Gérald Genta, Audemars Piguet en confie la version féminine à Jacqueline Dimier, l'une des premières femmes designers de l'industrie, qui dirigera le design de la maison de 1975 à 1999. Sa Royal Oak Lady de 1976, 29 millimètres, réf. 8638, est une rupture totale : une montre de femme en acier, quand l'or et le platine régnaient sans partage. Le pari prend — 423 exemplaires vendus la première année, plus d'un millier dès 1979 — et la déclinaison féminine porte largement le succès d'un modèle jugé trop massif en version homme. C'est l'icône du luxe sportif, au féminin dès l'origine, et signée par une femme.",
  },
  {
    slug: "ebel-beluga",
    maker: "Ebel",
    name: "Beluga",
    year: 1985,
    tagline: "La vague dorée des années 80",
    description:
      "Lancée en 1985 exclusivement en or, la Beluga ondule : boîtier aux courbes pleines, bracelet « vague » qui coule autour du poignet, lunette sertie de quarante diamants. Elle est l'archétype de la montre-bijou des années 1980-90, l'âge d'or d'Ebel — « les architectes du temps » — quand la maison de La Chaux-de-Fonds rivalisait avec les plus grands. Rare icône féminine née hors du cercle des maisons du très haut luxe, elle a défini une élégance ronde et sensuelle à contre-courant des angles de la décennie. Sa silhouette n'a jamais quitté le catalogue. C'est la douceur érigée en style.",
  },
  {
    slug: "franck-muller-cintree-curvex",
    maker: "Franck Muller",
    name: "Cintrée Curvex",
    year: 1992,
    tagline: "Le tonneau cintré des années folles 90",
    description:
      "En 1992, Franck Muller cintre le tonneau Art déco dans les trois dimensions : la Cintrée Curvex épouse le poignet comme aucun boîtier avant elle, habillée de chiffres exubérants peints comme des enseignes. Elle fait du jeune horloger genevois le « maître des complications » et LA montre statement des années 1990-2000, adorée des femmes — et d'Elton John. Ses déclinaisons Color Dreams, aux chiffres multicolores, définissent le glamour pré-2000 et s'offrent aujourd'hui une vraie seconde vie en vintage. C'est l'exubérance assumée, à contre-courant du minimalisme — et ça lui va très bien.",
  },
  {
    slug: "hermes-heure-h",
    maker: "Hermès",
    name: "Heure H",
    year: 1996,
    tagline: "La lettre devenue boîtier",
    description:
      "Dessinée en 1996 par Philippe Mouquet, l'Heure H résout une équation d'une élégance rare : le boîtier carré EST la lettre H — Hermès et Horlogerie d'un seul trait. Ni logo apposé ni monogramme imprimé : la signature est la structure même de l'objet. Portée sur les bracelets de cuir de la sellerie maison, déclinée du mini au serti, elle est devenue le porte-drapeau de l'horlogerie Hermès et l'une des montres de mode les plus reconnaissables au monde, best-seller trente ans après. C'est le design réduit à son os : une initiale qui donne l'heure.",
  },
  {
    slug: "longines-dolcevita",
    maker: "Longines",
    name: "DolceVita",
    year: 1997,
    tagline: "Le rectangle Art déco de la dolce vita",
    description:
      "En 1997, Longines ressuscite ses rectangles Art déco des années 1920 et les baptise en hommage à la douceur de vivre fellinienne : la DolceVita est née. Proportions justes, chiffres romains ou rail de chemin de fer, prix accessible : elle devient l'un des best-sellers mondiaux les plus constants de l'horlogerie féminine, portée par des ambassadrices comme Jennifer Lawrence. La Mini DolceVita de 2023 a relancé la fièvre des petites montres rectangulaires auprès d'une nouvelle génération. Près de trente ans de succès ininterrompu pour un dessin vieux d'un siècle. C'est la preuve que l'Art déco ne se démode pas — il attend.",
  },
  {
    slug: "girard-perregaux-cats-eye",
    maker: "Girard-Perregaux",
    name: "Cat's Eye",
    year: 2004,
    tagline: "L'ovale mécanique, manifeste anti-quartz",
    description:
      "En 2004, Girard-Perregaux dessine un boîtier ovale aux courbes d'œil de chat et prend un parti radical : la Cat's Eye ne recevra que des mouvements mécaniques de manufacture, jusqu'au tourbillon sous pont d'or et aux phases de lune. Dans l'horlogerie féminine des années 2000, saturée de quartz habillé de diamants, c'est un manifeste : les femmes aussi ont droit à la belle mécanique. Vingt ans au catalogue et une place régulière dans les listes des montres féminines les plus marquantes du siècle lui donnent raison. C'est la haute horlogerie conjuguée au féminin sans condescendance.",
  },
  {
    slug: "vca-pont-des-amoureux",
    maker: "Van Cleef & Arpels",
    name: "Lady Arpels Pont des Amoureux",
    year: 2010,
    tagline: "Le baiser de minuit en émail grand feu",
    description:
      "Sur un pont parisien peint en émail grand feu, elle avance portée par les heures, lui par les minutes — et à minuit comme à midi, les deux amoureux se rejoignent pour un baiser. Le Pont des Amoureux, lancé en 2010, est le sommet des « Complications Poétiques » de Van Cleef & Arpels : un double affichage rétrograde développé exclusivement pour raconter cette histoire. Prix de la Montre Dame au Grand Prix d'Horlogerie de Genève 2010, il a redéfini la haute horlogerie féminine comme un art narratif. C'est la complication la plus romantique jamais construite : la mécanique au service d'un baiser.",
  },
  {
    slug: "chanel-boyfriend",
    maker: "Chanel",
    name: "Boy·Friend",
    year: 2015,
    tagline: "Le vestiaire masculin emprunté, encore",
    description:
      "En 2015, Chanel applique à l'horlogerie le geste fondateur de Gabrielle Chanel — emprunter au vestiaire des hommes — avec un clin d'œil à Boy Capel, l'amour de sa vie : la Boy·Friend étire un boîtier octogonal aux proportions volontairement masculines sur un poignet féminin. Les puristes s'inclinent devant les versions squelette animées du calibre 3 de la maison, d'une rigueur architecturale rare. Après la Première et la J12, c'est la montre qui a définitivement installé Chanel dans la cour de la haute horlogerie. C'est du Chanel canonique : l'élégance qui se prend au sérieux mécaniquement, jamais solennellement.",
  },
  {
    slug: "vacheron-egerie",
    maker: "Vacheron Constantin",
    name: "Égérie",
    year: 2020,
    tagline: "Le plissé couture de la plus vieille manufacture",
    description:
      "En 2020, la plus ancienne manufacture horlogère en activité continue lance sa première vraie collection féminine contemporaine : l'Égérie, au cadran plissé comme un tissu de haute couture et à la couronne désaxée sertie d'une pierre de lune. Mouvements de manufacture, du quartz banni jusqu'au tourbillon : Vacheron Constantin parle enfin directement aux femmes, sans dilution ni condescendance. Saluée par la critique comme le signe d'un basculement de toute l'industrie, elle est jeune mais déjà pilier. C'est deux cent soixante-cinq ans de savoir-faire, plissés au féminin.",
  },
  {
    slug: "dior-la-d",
    maker: "Dior",
    name: "La D de Dior",
    year: 2003,
    tagline: "La montre dessinée comme un bouton de tailleur",
    description:
      "Victoire de Castellane, créatrice de la joaillerie Dior, dessine en 2003 une montre qui refuse tous les codes horlogers : La D de Dior est ronde et plate « comme un bouton de tailleur Bar », avec un bracelet qui évoque un ruban de gros-grain. Pensée comme un accessoire de couture plus que comme un instrument, déclinée en nacre, opale, malachite et diamants, elle assume une préciosité joyeuse et féminine sans s'excuser. Elle a installé Dior comme acteur horloger légitime. C'est la couture qui donne l'heure.",
  },
]

export const montresFemme: Subject = {
  slug: "montres-femme",
  title: "Montres",
  variant: "Femme",
  category: "Horlogerie",
  intro:
    "On l'oublie : la montre-bracelet est née au poignet des femmes, de Caroline Murat à la comtesse Koscowicz. Du bijou secret à la céramique de la J12, parcourez le canon féminin, puis départagez les pièces en duel pour révéler votre goût.",
  itemNoun: "pièce",
  itemGender: "f",
  duelQuestion: "Laquelle préférez-vous ?",
  searchPlaceholder: "Chercher une marque, un modèle…",
  detailFit: "contain",
  plateAspect: "aspect-4/5",
  items,
}
