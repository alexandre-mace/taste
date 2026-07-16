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
    slug: "vca-cadenas",
    maker: "Van Cleef & Arpels",
    name: "Cadenas",
    year: 1935,
    tagline: "La montre-cadenas de la duchesse de Windsor",
    description:
      "Dessinée en 1935, la Cadenas de Van Cleef & Arpels enroule son bracelet en un fermoir de cadenas dont le cadran, incliné vers celle qui la porte, permet de lire l'heure sans geste visible — car une dame du monde ne consulte pas sa montre en société. La légende l'associe à Wallis Simpson, duchesse de Windsor et cliente fidèle de la maison, dont l'histoire d'amour scandaleuse avec Édouard VIII fascine l'époque. Bijou d'abord, montre ensuite, elle incarne l'âge d'or de la joaillerie horlogère parisienne. Toujours au catalogue, quasi inchangée. C'est l'heure lue à la dérobée, transformée en geste d'élégance.",
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
