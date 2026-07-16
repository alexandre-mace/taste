import type { Item, Subject } from "@/lib/subjects"

const items: Item[] = [
  {
    slug: "rolex-submariner",
    maker: "Rolex",
    name: "Submariner",
    year: 1953,
    ref: "124060",
    tagline: "La plongeuse qui a défini le genre",
    description:
      "Lancée en 1953, la Submariner est la première montre de plongée étanche à 100 mètres, et sans doute la montre la plus copiée de l'histoire. Sa lunette tournante graduée, ses index luminescents et son boîtier Oyster ont fixé le vocabulaire de toutes les plongeuses qui ont suivi. Portée par Sean Connery dans les premiers James Bond, elle est passée du statut d'outil professionnel à celui d'icône culturelle. Sa production limitée face à une demande mondiale en a fait un objet de spéculation autant que d'horlogerie. C'est la référence absolue : on juge toutes les autres montres de sport par rapport à elle.",
  },
  {
    slug: "rolex-daytona",
    maker: "Rolex",
    name: "Cosmograph Daytona",
    year: 1963,
    ref: "116500LN",
    tagline: "Le chronographe le plus convoité au monde",
    description:
      "Conçue pour les pilotes de course, la Daytona tire son nom du circuit de Floride où Rolex chronométrait les courses d'endurance. Longtemps invendue dans les années 1960 et 1970, elle est devenue l'objet d'un retournement spectaculaire : la « Paul Newman », portée par l'acteur, s'est vendue 17,8 millions de dollars aux enchères en 2017, un record. Sa lunette tachymétrique et ses trois compteurs en font le chronographe sportif par excellence. Aujourd'hui, les listes d'attente s'étirent sur des années et elle se négocie bien au-dessus de son prix boutique. C'est la montre-trophée par définition.",
  },
  {
    slug: "rolex-datejust",
    maker: "Rolex",
    name: "Datejust",
    year: 1945,
    ref: "126234",
    tagline: "Le classique polyvalent absolu",
    description:
      "Première montre-bracelet automatique et certifiée chronomètre à afficher la date dans un guichet, la Datejust est le modèle le plus vendu de Rolex depuis 1945. Sa loupe Cyclope, ajoutée en 1953, et sa lunette cannelée sont devenues des signatures instantanément reconnaissables. Ni sportive ni habillée, elle traverse toutes les situations avec la même aisance, du bureau au week-end. Déclinée dans des dizaines de tailles, cadrans et matériaux, elle a orné les poignets de présidents comme de stars. C'est l'archétype de la montre unique, celle qu'on garde toute une vie.",
  },
  {
    slug: "rolex-day-date",
    maker: "Rolex",
    name: "Day-Date",
    year: 1956,
    ref: "228238",
    tagline: "La « President », montre du pouvoir",
    description:
      "Lancée en 1956, la Day-Date est la première montre à afficher le jour de la semaine en toutes lettres, en plus de la date. Exclusivement produite en or ou en platine, elle est livrée sur le bracelet « President » à maillons semi-circulaires créé pour elle. Lyndon B. Johnson fut le premier président américain à la porter au poignet. Le surnom officieux était né. Symbole de réussite parfois ostentatoire, elle reste le sommet du catalogue Rolex classique. Le cadran champagne sur or jaune est l'image même du pouvoir au poignet.",
  },
  {
    slug: "rolex-gmt-master",
    maker: "Rolex",
    name: "GMT-Master II",
    year: 1955,
    ref: "126710BLRO",
    tagline: "La montre des pilotes, lunette « Pepsi »",
    description:
      "Développée en 1955 avec la Pan Am pour ses équipages transatlantiques, la GMT-Master affiche un second fuseau horaire grâce à une aiguille 24 heures et une lunette bicolore. La combinaison bleu et rouge, dite « Pepsi », distinguait le jour de la nuit et est devenue l'un des codes couleur les plus célèbres de l'horlogerie. La version « Batman » bleu et noir a créé l'événement à son lancement en 2013. Montre d'outil devenue objet de désir, elle incarne l'âge d'or du voyage en jet. Elle reste la référence des montres de voyageur.",
  },
  {
    slug: "rolex-explorer",
    maker: "Rolex",
    name: "Explorer",
    year: 1953,
    ref: "124270",
    tagline: "Née sur l'Everest, l'épure absolue",
    description:
      "L'Explorer est lancée en 1953 pour célébrer la première ascension de l'Everest par Hillary et Norgay, équipés de chronomètres Oyster. Son cadran noir aux chiffres 3-6-9 est un modèle de lisibilité, sans date, sans lunette, sans fioriture. C'est la Rolex des puristes : celle qui fait tout, ne montre rien, et se reconnaît pourtant au premier regard. Ian Fleming, créateur de James Bond, la portait lui-même. En 36 mm, elle est peut-être la montre-outil la plus épurée jamais dessinée.",
  },
  {
    slug: "rolex-milgauss",
    maker: "Rolex",
    name: "Milgauss",
    year: 1956,
    ref: "116400GV",
    tagline: "L'antimagnétique des scientifiques",
    description:
      "Créée en 1956 pour les ingénieurs et scientifiques du CERN, la Milgauss résiste à des champs magnétiques de 1 000 gauss grâce à une cage de Faraday interne, d'où son nom. Son aiguille des secondes en forme d'éclair orange est l'une des plus ludiques jamais montées par Rolex. La version à verre saphir teinté vert, unique dans le catalogue, lui a valu le surnom de « GV » pour Glace Verte. Longtemps mal-aimée, elle a été retirée du catalogue en 2023, ce qui a immédiatement relancé l'intérêt des collectionneurs. C'est la Rolex des originaux.",
  },
  {
    slug: "rolex-sea-dweller",
    maker: "Rolex",
    name: "Sea-Dweller",
    year: 1967,
    ref: "126600",
    tagline: "La plongeuse extrême des professionnels",
    description:
      "Développée en 1967 pour les plongeurs à saturation des programmes Sealab de l'US Navy, puis adoptée par la française Comex à partir de 1971, la Sea-Dweller est la version extrême de la Submariner : étanche à 610 mètres d'abord, puis 1 220 mètres dès 1978. Sa valve à hélium, inventée pour l'occasion, permet aux plongeurs à saturation de remonter sans que le verre n'explose. La version « Deepsea » descend même à 3 900 mètres, et un modèle expérimental a accompagné James Cameron au fond de la fosse des Mariannes. C'est l'outil professionnel poussé à l'absurde, et c'est précisément ce qui plaît. La lunette rouge « Single Red » de 2017 rend hommage au prototype originel.",
  },
  {
    slug: "omega-speedmaster",
    maker: "Omega",
    name: "Speedmaster Professional",
    year: 1957,
    ref: "310.30.42.50.01.001",
    tagline: "La première montre portée sur la Lune",
    description:
      "La Speedmaster est la seule montre qualifiée par la NASA pour les vols habités après avoir survécu à des tests d'une brutalité légendaire. Au poignet de Buzz Aldrin le 21 juillet 1969, elle devient la première montre portée sur la Lune, un titre que personne ne pourra jamais lui reprendre. Lors d'Apollo 13, elle sert à chronométrer la mise à feu de 14 secondes qui ramène l'équipage sur Terre. Toujours équipée d'un mouvement à remontage manuel et d'un verre hésalite comme à l'époque, la « Moonwatch » est probablement la montre à l'histoire la plus forte du monde. Elle reste étonnamment accessible pour une telle légende.",
  },
  {
    slug: "omega-seamaster-300m",
    maker: "Omega",
    name: "Seamaster Diver 300M",
    year: 1993,
    ref: "210.30.42.20.03.001",
    tagline: "La montre de James Bond depuis 1995",
    description:
      "Lancée en 1993, la Seamaster Diver 300M devient mondialement célèbre deux ans plus tard au poignet de Pierce Brosnan dans GoldenEye. Depuis, chaque James Bond porte une Seamaster, jusqu'à la version titane spécialement conçue avec Daniel Craig pour Mourir peut attendre. Son cadran laqué bleu aux vagues gravées, sa valve à hélium apparente et sa lunette crantée la distinguent immédiatement de sa rivale de Genève. Étanche à 300 mètres et équipée du mouvement Co-Axial Master Chronometer, c'est une vraie plongeuse moderne. Elle offre sans doute le meilleur rapport icône-prix du marché.",
  },
  {
    slug: "patek-philippe-nautilus",
    maker: "Patek Philippe",
    name: "Nautilus",
    year: 1976,
    ref: "5711/1A",
    tagline: "Le graal en acier de Gérald Genta",
    description:
      "Dessinée en 1976 par Gérald Genta sur un coin de table de restaurant, la Nautilus transpose le luxe absolu dans un boîtier d'acier inspiré d'un hublot de paquebot. Son cadran à rayures horizontales et son boîtier à « oreilles » en font l'une des silhouettes les plus reconnaissables de l'horlogerie. La référence 5711 est devenue l'objet de toutes les spéculations : son arrêt en 2021 a fait exploser les prix, jusqu'à dix fois le tarif boutique. La version cadran vert, puis la Tiffany bleue vendue 6,5 millions de dollars aux enchères, ont marqué l'apogée de la folie horlogère des années 2020. C'est la montre la plus désirée du monde, tout simplement.",
  },
  {
    slug: "patek-philippe-calatrava",
    maker: "Patek Philippe",
    name: "Calatrava",
    year: 1932,
    ref: "6119R",
    tagline: "La montre habillée dans sa forme parfaite",
    description:
      "Lancée en 1932 et inspirée des principes du Bauhaus, la Calatrava est l'archétype de la montre habillée : un cadran rond, deux ou trois aiguilles, et rien d'autre. Sa lunette « Clous de Paris » guillochée est devenue l'une des signatures de Patek Philippe. C'est la montre des grandes occasions et des transmissions familiales, celle que vise le fameux slogan : « Vous ne possédez jamais complètement une Patek Philippe, vous en êtes juste le gardien pour les générations futures. » Sous son apparente simplicité se cache une finition de mouvement parmi les plus belles du monde. L'élégance ne se démode pas, et la Calatrava en est la preuve depuis bientôt un siècle.",
  },
  {
    slug: "patek-philippe-aquanaut",
    maker: "Patek Philippe",
    name: "Aquanaut",
    year: 1997,
    ref: "5167A",
    tagline: "La Patek décontractée sur caoutchouc",
    description:
      "Lancée en 1997 pour séduire une clientèle plus jeune, l'Aquanaut reprend l'esprit de la Nautilus dans un design plus moderne, avec un cadran à motif grenade et un bracelet en caoutchouc « Tropical ». Le pari était osé pour la manufacture la plus traditionnelle de Genève : mettre du caoutchouc sur une Patek. Vingt-cinq ans plus tard, c'est l'un des modèles les plus demandés du catalogue, porté par une génération qui mélange streetwear et haute horlogerie. La version chronographe orange et la « Luce » sertie ont élargi la famille. C'est la Patek qu'on porte avec un t-shirt.",
  },
  {
    slug: "audemars-piguet-royal-oak",
    maker: "Audemars Piguet",
    name: "Royal Oak",
    year: 1972,
    ref: "15510ST",
    tagline: "La montre qui a inventé le luxe sportif",
    description:
      "En 1972, Audemars Piguet joue sa survie en lançant une montre en acier au prix d'une montre en or : la Royal Oak, dessinée en une nuit par Gérald Genta. Sa lunette octogonale à huit vis apparentes, son cadran « Petite Tapisserie » et son bracelet intégré scandalisent puis révolutionnent l'industrie. Elle invente à elle seule la catégorie du « luxe sportif en acier » que tout le monde copiera. Cinquante ans plus tard, elle fait toujours vivre la manufacture du Brassus et s'arrache à des multiples de son prix. C'est l'un des trois ou quatre designs les plus importants de l'histoire horlogère.",
  },
  {
    slug: "audemars-piguet-royal-oak-offshore",
    maker: "Audemars Piguet",
    name: "Royal Oak Offshore",
    year: 1993,
    tagline: "La Royal Oak muscle, icône des années 2000",
    description:
      "En 1993, le jeune designer Emmanuel Gueit gonfle la Royal Oak à 42 mm et l'habille de caoutchouc : les puristes hurlent, le public adore. Surnommée « The Beast », l'Offshore invente la montre de luxe surdimensionnée et devient l'emblème des sportifs et des rappeurs des années 2000. Arnold Schwarzenegger et Jay-Z en font un symbole de réussite ostentatoire. Ses éditions limitées, des « Safari » aux modèles en carbone forgé, sont devenues des objets de collection à part entière. C'est la démesure assumée, et elle a ouvert la voie à toute une esthétique.",
  },
  {
    slug: "vacheron-constantin-222",
    maker: "Vacheron Constantin",
    name: "Historiques 222",
    year: 1977,
    tagline: "Le sport-chic oublié devenu culte",
    description:
      "Lancée en 1977 pour les 222 ans de Vacheron Constantin, plus ancienne manufacture en activité continue au monde, la 222 est la réponse de la maison à la Royal Oak et à la Nautilus. Dessinée par le jeune Jorg Hysek, elle se distingue par sa lunette cannelée vissée et sa petite croix de Malte dorée incrustée dans le boîtier à 5 heures. Produite à quelques centaines d'exemplaires seulement, elle est longtemps restée un secret de collectionneurs avant que sa cote n'explose. Sa réédition en or jaune en 2022 a été l'un des lancements les plus applaudis de la décennie. C'est l'ancêtre direct de l'Overseas, et le choix du connaisseur absolu.",
  },
  {
    slug: "vacheron-constantin-patrimony",
    maker: "Vacheron Constantin",
    name: "Patrimony",
    year: 2004,
    tagline: "Le minimalisme selon Genève",
    description:
      "La Patrimony distille l'élégance des montres Vacheron Constantin des années 1950 dans un design d'une pureté absolue : boîtier extra-plat, cadran bombé, index bâtons et minuterie « perlée ». Aucune ligne n'est superflue, chaque proportion est calculée au dixième de millimètre. Poinçon de Genève, finitions main : c'est la haute horlogerie dans sa forme la plus discrète. Face à une Calatrava, elle joue la carte de la retenue aristocratique. C'est la montre de celui qui n'a plus rien à prouver.",
  },
  {
    slug: "jaeger-lecoultre-reverso",
    maker: "Jaeger-LeCoultre",
    name: "Reverso",
    year: 1931,
    tagline: "Le boîtier réversible Art déco",
    description:
      "Née en 1931 pour les joueurs de polo britanniques des Indes qui brisaient leurs verres de montre, la Reverso pivote sur elle-même pour protéger son cadran. Son boîtier rectangulaire aux godrons Art déco est l'un des designs les plus purs de l'histoire, inchangé depuis plus de 90 ans. Son dos d'acier se prête aux gravures et émaux personnalisés, ou accueille un second cadran sur les versions Duoface. Manufacture aux mille calibres, Jaeger-LeCoultre en a fait des versions allant de la plus simple à la Grande Complication. C'est la montre rectangulaire par excellence, et un chef-d'œuvre de design fonctionnel.",
  },
  {
    slug: "cartier-tank",
    maker: "Cartier",
    name: "Tank",
    year: 1917,
    tagline: "Un siècle d'élégance rectangulaire",
    description:
      "Dessinée par Louis Cartier en 1917, la Tank s'inspire de la vue aérienne des chars Renault de la Première Guerre mondiale : les brancards sont les chenilles, le boîtier la cabine. Chiffres romains, chemin de fer, cabochon de saphir : son vocabulaire n'a pas changé en plus d'un siècle. Jackie Kennedy, Andy Warhol, Yves Saint Laurent, la princesse Diana : la liste de ses porteurs est un panthéon du style. Warhol disait la porter sans jamais la remonter, « parce que c'est la montre qu'il faut porter ». Déclinée en Louis, Américaine, Française ou Must, elle reste la montre habillée la plus iconique du monde.",
  },
  {
    slug: "cartier-santos",
    maker: "Cartier",
    name: "Santos",
    year: 1904,
    tagline: "La première montre-bracelet moderne",
    description:
      "En 1904, l'aviateur brésilien Alberto Santos-Dumont se plaint à son ami Louis Cartier de ne pouvoir lire l'heure en vol sans lâcher les commandes. Cartier lui dessine une montre-bracelet carrée à vis apparentes : la Santos, considérée comme la première montre-bracelet d'homme moderne. Ses vis dorées sur la lunette, scandaleuses à l'époque, anticipent de 70 ans le design industriel de la Royal Oak. Relancée en 2018 avec un bracelet interchangeable ingénieux, elle connaît une seconde jeunesse. Porter une Santos, c'est porter l'acte de naissance de la montre moderne.",
  },
  {
    slug: "iwc-portugieser",
    maker: "IWC",
    name: "Portugieser",
    year: 1939,
    ref: "IW5007",
    tagline: "L'instrument marin devenu classique",
    description:
      "En 1939, deux négociants portugais commandent à IWC une montre-bracelet aussi précise qu'un chronomètre de marine : la manufacture loge un mouvement de montre de poche dans un boîtier de 41,5 mm, gigantesque pour l'époque. Chiffres arabes fins, chemin de fer, aiguilles feuilles : la Portugieser est l'épure d'un instrument scientifique. Sa version chronographe, la 3714, est l'un des chronographes les plus vendus du segment. La Perpetual Calendar de Kurt Klaus, réglable par la seule couronne, est un monument d'ingéniosité. C'est la grande classique des amateurs de cadrans lisibles.",
  },
  {
    slug: "iwc-pilots-watch",
    maker: "IWC",
    name: "Pilot's Watch Mark",
    year: 1948,
    ref: "Mark XI",
    tagline: "La montre d'aviateur de référence",
    description:
      "La Mark 11, développée en 1948 pour la Royal Air Force, est la montre de pilote par excellence : cadran noir, chiffres blancs, triangle à 12 heures et cage antimagnétique. Elle est restée en service militaire pendant plus de 30 ans, un record. Ses descendantes, de la Mark XII à l'actuelle Mark XX, perpétuent ce design d'instrument sans un gramme de décoration. La Big Pilot de 46 mm, avec sa couronne oignon, en est la version spectaculaire. C'est le purisme militaire élevé au rang de style.",
  },
  {
    slug: "breitling-navitimer",
    maker: "Breitling",
    name: "Navitimer",
    year: 1952,
    tagline: "L'ordinateur de bord au poignet",
    description:
      "Lancée en 1952, la Navitimer intègre une règle à calcul circulaire qui permettait aux pilotes de calculer vitesses, consommations et conversions en plein vol. Son cadran ultra-dense, illisible pour les profanes, est précisément ce qui fait son charme : c'est un instrument, pas un bijou. Adoptée par l'AOPA, la plus grande association de pilotes au monde, elle est LA montre d'aviation civile. Scott Carpenter en a porté une version 24 heures en orbite en 1962, avant même la Speedmaster lunaire. Plus de 70 ans après, elle se porte comme un morceau d'âge d'or de l'aviation.",
  },
  {
    slug: "tag-heuer-monaco",
    maker: "TAG Heuer",
    name: "Monaco",
    year: 1969,
    ref: "CBL2111",
    tagline: "Le carré bleu de Steve McQueen",
    description:
      "Premier chronographe automatique carré et étanche de l'histoire, la Monaco fait sensation à son lancement en 1969 avec son cadran bleu métallisé et sa couronne à gauche. Steve McQueen la porte en 1971 dans le film Le Mans, associée à sa combinaison Gulf : l'image devient l'une des plus iconiques du sport automobile. Son boîtier carré, radical aujourd'hui encore, était une hérésie à l'époque. La montre de McQueen s'est vendue 2,2 millions de dollars aux enchères en 2020. C'est le chronographe des esthètes qui trouvent le rond trop sage.",
  },
  {
    slug: "tag-heuer-carrera",
    maker: "TAG Heuer",
    name: "Carrera",
    year: 1963,
    tagline: "Le chronographe de course épuré",
    description:
      "Jack Heuer dessine la Carrera en 1963 en pensant aux pilotes de la Carrera Panamericana, la course routière mexicaine la plus dangereuse du monde. Son idée révolutionnaire : un cadran parfaitement dégagé, où la lunette intérieure inclinée porte les graduations pour libérer l'affichage. C'est l'un des chronographes les plus lisibles et les plus élégants jamais dessinés. Les rééditions « Glassbox » modernes ont retrouvé l'esprit des originales des années 1960. Face à la Daytona, elle joue l'authenticité d'un lien réel avec la course automobile.",
  },
  {
    slug: "zenith-el-primero",
    maker: "Zenith",
    name: "Chronomaster El Primero",
    year: 1969,
    tagline: "Le premier chronographe automatique haute fréquence",
    description:
      "Le 10 janvier 1969, Zenith présente El Primero, premier chronographe automatique intégré au monde, battant Heuer et Seiko dans la course historique. Sa haute fréquence de 5 Hz lui permet de mesurer le dixième de seconde, un exploit inégalé pendant des décennies. Dans les années 1970, l'horloger Charles Vermot cache les outillages dans un grenier pour les sauver de la direction américaine qui voulait tout jeter : ce geste sauve le calibre, qui équipera plus tard les Daytona de Rolex. Les compteurs tricolores gris, anthracite et bleu du modèle A386 sont une signature immédiatement reconnaissable. C'est le mouvement le plus légendaire de l'horlogerie moderne.",
  },
  {
    slug: "panerai-luminor",
    maker: "Panerai",
    name: "Luminor",
    year: 1950,
    ref: "PAM01312",
    tagline: "Le coussin italien au pont de couronne",
    description:
      "Conçue pour les nageurs de combat de la marine italienne, la Luminor se reconnaît entre mille à son pont protège-couronne à levier, breveté en 1956. Son boîtier coussin de 44 mm et son cadran « sandwich » luminescent en font l'une des montres les plus viriles du marché. Sylvester Stallone la découvre à Florence en 1995, la porte dans Daylight et en offre à ses amis, dont Schwarzenegger : la « Panéramania » est née. La marque florentine devenue genevoise a bâti tout un culte sur ce design militaire des années 1940. C'est la montre statement par excellence : on la voit de l'autre bout de la pièce.",
  },
  {
    slug: "panerai-radiomir",
    maker: "Panerai",
    name: "Radiomir",
    year: 1936,
    tagline: "L'originale des commandos de la Décima",
    description:
      "La Radiomir de 1936 est la première montre de plongée militaire de l'histoire, créée par Panerai avec Rolex pour les commandos sous-marins italiens. Son nom vient de la pâte luminescente au radium qui rendait son cadran lisible dans les eaux noires. Boîtier coussin, anses en fil de fer soudé, cadran d'une simplicité absolue : c'est le degré zéro du design, et c'est magnifique. Les collectionneurs s'arrachent les rares exemplaires d'époque aux cadrans devenus crème. Plus fine et plus vintage que la Luminor, c'est la Panerai des connaisseurs.",
  },
  {
    slug: "richard-mille",
    maker: "Richard Mille",
    name: "RM 011",
    year: 2007,
    tagline: "La machine de course à 200 000 euros",
    description:
      "Richard Mille a inventé en 2001 une nouvelle catégorie : la montre technique extrême au prix d'une supercar, conçue comme une Formule 1 du poignet. La RM 011, développée avec le pilote Felipe Massa, est le modèle qui a fait décoller la marque : boîtier tonneau squeletté, matériaux aérospatiaux, chronographe flyback. Rafael Nadal joue et gagne Roland-Garros avec sa RM 027 de 18 grammes au poignet, démonstration ultime. Portée par les milliardaires, les athlètes et les rappeurs, c'est la marque la plus ostentatoire du XXIe siècle. Un symbole : on ne dit plus « une montre de luxe », on dit « une Richard Mille ».",
  },
  {
    slug: "blancpain-fifty-fathoms",
    maker: "Blancpain",
    name: "Fifty Fathoms",
    year: 1953,
    tagline: "La première vraie montre de plongée",
    description:
      "Commandée en 1953 par les nageurs de combat français du capitaine Maloubier, la Fifty Fathoms précède la Submariner de quelques mois et fixe le cahier des charges de la montre de plongée moderne : lunette tournante crantée, cadran noir contrasté, étanchéité à cinquante brasses. Jacques-Yves Cousteau la porte dans Le Monde du silence, Palme d'or 1956. Sa lunette bombée en saphir et son cadran d'un noir profond en font l'une des plongeuses les plus luxueuses du marché. La version Bathyscaphe, plus sobre, séduit les puristes. C'est la plongeuse originelle, pour ceux qui savent.",
  },
  {
    slug: "breguet-classique",
    maker: "Breguet",
    name: "Classique",
    year: 1775,
    ref: "5177",
    tagline: "L'héritage du plus grand horloger de l'histoire",
    description:
      "Abraham-Louis Breguet a inventé une part considérable de l'horlogerie moderne : le tourbillon, la spirale Breguet, la première montre-bracelet pour Caroline Murat en 1810. La collection Classique perpétue son langage : cadrans guillochés main, chiffres Breguet, aiguilles « à pomme » bleuies au feu et cannelures de carrure. Chaque montre semble sortie du XVIIIe siècle avec la précision du XXIe. Marie-Antoinette, Napoléon, Churchill : ses clients forment le who's who de trois siècles. Porter une Breguet, c'est porter l'histoire de l'horlogerie elle-même.",
  },
  {
    slug: "breguet-type-xx",
    maker: "Breguet",
    name: "Type XX",
    year: 1954,
    tagline: "Le chronographe militaire français",
    description:
      "Le Type 20 est le chronographe commandé dans les années 1950 par l'armée de l'air française à plusieurs fournisseurs, dont Breguet, qui en a fait sa version civile Type XX. Sa fonction retour-en-vol, qui permet de relancer un chronométrage d'une seule pression, était essentielle pour les navigations aériennes. Boîtier robuste, lunette graduée, compteurs contrastés : c'est l'outil militaire français par excellence. La réédition 2023, fidèle aux originales, a été saluée par les collectionneurs. C'est le pan « pilote » inattendu de la plus aristocratique des maisons.",
  },
  {
    slug: "grand-seiko-hi-beat",
    maker: "Grand Seiko",
    name: "Hi-Beat 36000",
    year: 1968,
    tagline: "La perfection japonaise à haute fréquence",
    description:
      "Née en 1960 pour battre les Suisses sur leur propre terrain, Grand Seiko a atteint son sommet avec les calibres Hi-Beat à 36 000 alternances par heure, parmi les plus précis jamais produits en série. Dans les années 1960, ses montres dominent les concours de chronométrie des observatoires suisses, au point que ceux-ci cessent de publier les résultats. Le style « Grammar of Design » de 1967, aux facettes plates et arêtes vives polies au « Zaratsu », donne aux boîtiers un éclat de miroir unique. Cadrans texturés inspirés de la nature, aiguilles biseautées, finition obsessionnelle : c'est l'artisanat japonais au niveau de la haute horlogerie. Longtemps secret bien gardé, Grand Seiko est devenu un culte mondial chez les connaisseurs.",
  },
  {
    slug: "seiko-skx007",
    maker: "Seiko",
    name: "SKX007",
    year: 1996,
    ref: "SKX007",
    tagline: "La plongeuse du peuple, culte absolu",
    description:
      "Produite de 1996 à 2019, la SKX007 est probablement la montre la plus recommandée de l'histoire des forums horlogers : une vraie plongeuse ISO 6425 à moins de 200 euros. Boîtier coussin, lunette crantée, lume légendaire de Seiko : elle a tout des grandes pour le prix d'un dîner. Des millions d'amateurs ont commencé leur collection par elle, et beaucoup l'ont gardée. Son arrêt de production en a fait un objet de collection dont la cote grimpe. C'est la preuve définitive que le culte horloger n'est pas une question de prix.",
  },
  {
    slug: "seiko-5",
    maker: "Seiko",
    name: "5 Sports",
    year: 1963,
    tagline: "L'automatique accessible depuis 1963",
    description:
      "Lancée en 1963, la Seiko 5 promettait cinq attributs : mouvement automatique, jour et date, étanchéité, couronne protégée et boîtier robuste, le tout à prix populaire. Elle a mis la montre mécanique au poignet de millions de personnes dans le monde entier, des étudiants japonais aux soldats du Vietnam. Ses déclinaisons se comptent par milliers, dont les fameuses « SNK » à moins de 100 euros, éternelles recommandations pour débuter. La gamme moderne 5 Sports recycle le design de la SKX disparue. Aucune montre n'a démocratisé la mécanique comme elle.",
  },
  {
    slug: "casio-g-shock",
    maker: "Casio",
    name: "G-Shock DW-5600",
    year: 1983,
    ref: "DW-5600",
    tagline: "L'indestructible qui a survécu à tout",
    description:
      "En 1981, l'ingénieur Kikuo Ibe brise la montre offerte par son père et se jure de créer une montre incassable : après 200 prototypes jetés du troisième étage, la G-Shock naît en 1983. Le carré DW-5600, héritier direct de l'originale, résiste aux chocs, à l'eau, au froid et à peu près à tout ce que la vie peut lui infliger. Portée par les militaires, les skateurs, Kanye West et le personnel de la NASA, elle transcende toutes les tribus. Son design brutaliste n'a pas changé en 40 ans, et c'est très bien ainsi. C'est l'anti-montre de luxe absolue, et une icône tout aussi légitime.",
  },
  {
    slug: "casio-f91w",
    maker: "Casio",
    name: "F-91W",
    year: 1989,
    ref: "F-91W",
    tagline: "La digitale à 15 euros la plus portée du monde",
    description:
      "Vendue à des millions d'exemplaires par an depuis 1989, la F-91W est probablement la montre la plus portée de l'histoire de l'humanité. Sept ans de pile, alarme, chronomètre, 21 grammes : elle fait tout ce qu'on attend d'une montre pour le prix de deux cafés. Obama en a porté une, les hackers l'adorent, et elle est devenue un statement anti-luxe chez les milliardaires de la tech. Son design n'a jamais changé, ce qui en fait paradoxalement l'un des objets les plus intemporels du design industriel. C'est le degré zéro du prix et le degré maximal de l'icône.",
  },
  {
    slug: "swatch",
    maker: "Swatch",
    name: "Original Gent",
    year: 1983,
    tagline: "La montre pop qui a sauvé l'horlogerie suisse",
    description:
      "En pleine crise du quartz, alors que l'horlogerie suisse agonise face au Japon, Nicolas Hayek lance en 1983 une montre plastique à 50 francs, produite en 51 composants au lieu de 91 : la Swatch. Le pari : faire de la montre un accessoire de mode qu'on collectionne comme des baskets. Le succès est planétaire, des centaines de millions d'exemplaires sont vendus, et les bénéfices financent le rachat d'Omega, Breguet et Blancpain. Les collaborations avec Keith Haring puis la MoonSwatch de 2022, qui a créé des émeutes en boutique, prouvent que la formule marche toujours. Sans elle, l'horlogerie suisse telle qu'on la connaît n'existerait plus.",
  },
  {
    slug: "tissot-prx",
    maker: "Tissot",
    name: "PRX Powermatic 80",
    year: 1978,
    ref: "T137.407",
    tagline: "Le sport-chic des années 70 à prix imbattable",
    description:
      "Réédition d'un modèle de 1978, la PRX a explosé à son lancement en 2021 en offrant l'esthétique bracelet intégré des années 1970 à moins de 700 euros en automatique. Cadran gaufré façon Nautilus, boîtier tonneau brossé, 80 heures de réserve de marche : le rapport qualité-prix a stupéfié le marché. Elle est devenue la montre d'entrée de gamme la plus recommandée au monde, et la porte d'entrée d'une génération TikTok vers l'horlogerie. Les déclinaisons chronographe et 35 mm ont suivi le succès. C'est la démocratisation du luxe sportif, et une leçon de produit.",
  },
  {
    slug: "longines-legend-diver",
    maker: "Longines",
    name: "Legend Diver",
    year: 1960,
    tagline: "La plongeuse à double couronne des sixties",
    description:
      "Réédition fidèle d'une plongeuse de 1960, la Legend Diver arbore le design « Super Compressor » : deux couronnes, dont une pour la lunette intérieure tournante, et un cadran laqué bombé. Son esthétique skin-diver des années 1960 en fait l'une des plus élégantes plongeuses vintage du marché. Longines, qui fut l'une des plus grandes manufactures de l'histoire avant le quartz, puise dans des archives parmi les plus riches du monde. La version 39 mm de 2023 a corrigé le seul reproche des puristes. C'est le charme rétro sans les risques du vintage.",
  },
  {
    slug: "tudor-black-bay",
    maker: "Tudor",
    name: "Black Bay 58",
    year: 2018,
    ref: "M79030N",
    tagline: "Le vintage Rolex à prix accessible",
    description:
      "Tudor, la marque sœur de Rolex, a réussi l'une des renaissances les plus spectaculaires de l'horlogerie avec la Black Bay, qui puise dans les Submariner Tudor des années 1950. La Black Bay 58, en 39 mm avec ses accents dorés et sa couronne rose, est devenue la plongeuse la plus recommandée du segment intermédiaire. Aiguilles « Snowflake », lunette bordeaux ou noire, calibre manufacture certifié chronomètre : l'ADN Rolex à moitié prix. David Beckham et Lady Gaga en ont assuré la publicité. C'est le meilleur des deux mondes : l'héritage sans la liste d'attente.",
  },
  {
    slug: "nomos-tangente",
    maker: "Nomos",
    name: "Tangente",
    year: 1992,
    tagline: "Le Bauhaus de Glashütte",
    description:
      "Fondée à Glashütte juste après la réunification, Nomos a bâti son succès sur la Tangente, un design d'inspiration Bauhaus aux chiffres fins et aux aiguilles bleuies, dérivé des montres des années 1930. Manufacture véritable, la maison produit ses propres calibres, dont l'ultra-plat DUW avec son échappement maison, à des prix qui défient la concurrence suisse. Son esthétique typographique obsessionnelle en a fait la montre favorite des architectes et des graphistes. Le cadran argenté galvanique et le fond saphir sont d'une pureté rare sous les 3 000 euros. C'est le minimalisme allemand dans sa forme la plus aboutie.",
  },
  {
    slug: "junghans-max-bill",
    maker: "Junghans",
    name: "Max Bill",
    year: 1961,
    tagline: "Le design d'école d'Ulm au poignet",
    description:
      "Dessinée en 1961 par Max Bill, élève du Bauhaus et fondateur de l'école d'Ulm, cette montre est l'une des rares conçues par un designer majeur du XXe siècle. Chaque détail obéit à une logique mathématique : la typographie, les proportions, le verre bombé qui adoucit la géométrie. Elle figure dans les collections de design de plusieurs musées, dont le MoMA à travers l'horloge de cuisine du même Bill. Junghans la produit quasi inchangée depuis 60 ans, en quartz comme en mécanique. C'est moins une montre qu'un manifeste de design fonctionnel, porté au quotidien.",
  },
  {
    slug: "mondaine",
    maker: "Mondaine",
    name: "Official Swiss Railways",
    year: 1986,
    tagline: "L'horloge des gares suisses au poignet",
    description:
      "La Mondaine reprend l'horloge des chemins de fer suisses dessinée en 1944 par Hans Hilfiker, ingénieur des CFF : cadran blanc, index bâtons noirs et célèbre trotteuse rouge en forme de palette de chef de gare. Sur les quais, cette trotteuse s'arrête deux secondes à midi pour que toutes les gares du pays repartent synchrones : un détail devenu légende du design. Licenciée par Mondaine en 1986, l'horloge devient montre et entre au MoMA et au Design Museum de Londres. Apple a même copié le design en 2012 dans iOS, moyennant un accord à plusieurs millions. C'est le design helvétique dans sa forme la plus pure et la plus démocratique.",
  },
  {
    slug: "apple-watch",
    maker: "Apple",
    name: "Apple Watch",
    year: 2015,
    tagline: "La montre la plus vendue du monde",
    description:
      "Lancée en 2015, l'Apple Watch est devenue en quelques années la montre la plus vendue au monde, dépassant à elle seule toute l'industrie horlogère suisse en volume. Capteurs cardiaques, ECG, détection de chute : elle a redéfini la montre comme objet de santé et sauvé des vies documentées. Son design par Jony Ive, avec sa couronne digitale réinventée, est l'aboutissement du langage industriel d'Apple. Les puristes horlogers la méprisent, mais elle a paradoxalement ramené une génération entière au port d'un objet au poignet. Qu'on l'aime ou non, c'est la montre la plus importante du XXIe siècle.",
  },
  {
    slug: "hamilton-khaki-field",
    maker: "Hamilton",
    name: "Khaki Field Mechanical",
    year: 1969,
    ref: "H69439931",
    tagline: "La montre de soldat authentique",
    description:
      "La Khaki Field descend en ligne directe des montres militaires que Hamilton fournissait à l'armée américaine, de la Seconde Guerre mondiale au Vietnam. Cadran noir mat, chiffres 24 heures, aiguilles seringues, remontage manuel : c'est la copie quasi conforme de la MIL-W-46374 réglementaire. À moins de 600 euros, elle offre une authenticité militaire qu'aucun marketing ne peut fabriquer. Hollywood l'adore : Hamilton apparaît dans plus de 500 films, d'Interstellar à Indiana Jones. C'est la field watch de référence, sans un gramme de prétention.",
  },
  {
    slug: "hamilton-ventura",
    maker: "Hamilton",
    name: "Ventura",
    year: 1957,
    tagline: "Le triangle électrique d'Elvis",
    description:
      "Lancée en 1957, la Ventura est la première montre électrique du monde, et son boîtier triangulaire dessiné par Richard Arbib reste l'un des designs les plus audacieux de l'histoire horlogère. Elvis Presley la porte en 1961 dans Blue Hawaii, et elle devient à jamais « la montre d'Elvis ». Son style rétrofuturiste américain des années atomiques n'a aucun équivalent : on dirait une Cadillac au poignet. Les Men in Black l'ont adoptée à l'écran, renforçant son statut culte. Ce n'est pas une montre consensuelle, et c'est exactement son intérêt.",
  },
  {
    slug: "oris-aquis",
    maker: "Oris",
    name: "Aquis",
    year: 2011,
    tagline: "La plongeuse indépendante au poisson rouge",
    description:
      "L'Aquis est la plongeuse moderne d'Oris, l'une des dernières grandes marques horlogères suisses indépendantes : fondée en 1904, et redevenue son propre maître en 1982 quand ses dirigeants l'ont rachetée. Design contemporain, lunette céramique, 300 mètres d'étanchéité, à des prix nettement sous les géants du secteur : c'est la proposition la plus honnête du marché. Ses éditions engagées pour la protection des océans et son calibre 400 à cinq jours de réserve de marche et dix ans de garantie ont renforcé sa crédibilité. La marque au poisson rouge cultive une sympathie que les grands groupes ne peuvent pas acheter. C'est la plongeuse de l'amateur indépendant d'esprit.",
  },
  {
    slug: "rado-captain-cook",
    maker: "Rado",
    name: "Captain Cook",
    year: 1962,
    tagline: "La plongeuse rétro à lunette tournante concave",
    description:
      "Réédition d'une plongeuse confidentielle de 1962, la Captain Cook est devenue depuis 2017 le best-seller inattendu de Rado, la marque « maître des matériaux » du groupe Swatch. Sa lunette concave inversée et son ancre mobile sur le cadran lui donnent un charme sixties unique. Les versions céramique high-tech monobloc rappellent que Rado a été pionnière de ce matériau dès les années 1980. Son cadran vert bouteille a surfé sur la vague des cadrans colorés avec un succès particulier. C'est le vintage-cool à la suisse, sans se prendre au sérieux.",
  },
  {
    slug: "piaget-polo",
    maker: "Piaget",
    name: "Polo",
    year: 1979,
    tagline: "Le luxe doré des années Studio 54",
    description:
      "Lancée en 1979 en pleine ère disco, la Polo originale était un lingot d'or intégral aux godrons horizontaux, où bracelet et boîtier ne faisaient qu'un. C'était la montre des années Studio 54, portée par Andy Warhol et les jet-setteurs, symbole d'un luxe hédoniste assumé. Piaget, maître incontesté des mouvements ultra-plats depuis les années 1950, y logeait des calibres d'une finesse record. La Polo moderne, ronde dans un boîtier coussin, vise le terrain de l'Overseas. La version 79 relancée en or massif rejoue la carte du glamour originel.",
  },
  {
    slug: "timex-marlin",
    maker: "Timex",
    name: "Marlin",
    year: 1960,
    tagline: "La mécanique américaine populaire",
    description:
      "Le Marlin incarne l'âge d'or de Timex, quand un Américain sur trois portait une montre de la marque, vendue en pharmacie et démolie en direct à la télévision dans les fameux tests « It takes a licking and keeps on ticking ». Réédité en mécanique à remontage manuel depuis 2017, ce petit boîtier de 34 mm au cadran argenté bombé offre un charme fifties intact pour environ 200 euros. Son succès a surpris Timex elle-même et relancé toute une gamme rétro. C'est la porte d'entrée la plus charmante vers la montre mécanique vintage. Simple, honnête, américaine.",
  },
  {
    slug: "universal-geneve-polerouter",
    maker: "Universal Genève",
    name: "Polerouter",
    year: 1954,
    tagline: "Le premier chef-d'œuvre de Gérald Genta",
    description:
      "En 1954, un designer de 23 ans nommé Gérald Genta dessine sa première montre marquante : la Polerouter, commandée par Universal Genève pour célébrer les vols polaires de la compagnie SAS entre Copenhague et Los Angeles. Son cadran à double niveau, ses index appliqués et ses cornes torsadées en font l'une des montres les plus élégantes des années 1950. Elle reçoit ensuite le calibre « microtor », un des premiers mouvements automatiques à micro-rotor intégré. Vingt ans avant la Royal Oak et la Nautilus, tout le talent de Genta est déjà là. Longtemps sous-cotée, elle est devenue l'un des grands cultes du vintage accessible.",
  },
  {
    slug: "bulova-accutron-spaceview",
    maker: "Bulova",
    name: "Accutron Spaceview",
    year: 1960,
    tagline: "Le diapason qui a électrisé l'horlogerie",
    description:
      "L'Accutron de 1960 est la première montre électronique de l'histoire : un diapason vibrant à 360 hertz remplace le balancier, et la montre émet un bourdonnement caractéristique au lieu d'un tic-tac. Précise à une minute par mois, une performance inouïe à l'époque, elle équipe les pilotes de l'US Air Force et sa technologie accompagne les missions spatiales américaines. La version « Spaceview », au cadran ouvert dévoilant les bobines vertes et le circuit, était à l'origine un modèle de démonstration pour les vitrines : les clients l'ont tellement réclamée que Bulova l'a commercialisée. C'est l'icône rétrofuturiste par excellence, chaînon manquant entre la mécanique et le quartz.",
  },
  {
    slug: "seiko-astron",
    maker: "Seiko",
    name: "Quartz Astron",
    year: 1969,
    ref: "35SQ",
    tagline: "La première montre à quartz du monde",
    description:
      "Le 25 décembre 1969, Seiko lance à Tokyo la Quartz Astron : la première montre-bracelet à quartz de l'histoire, précise à cinq secondes par mois quand les meilleures mécaniques dérivaient de plusieurs secondes par jour. Vendue 450 000 yens, le prix d'une Toyota Corolla, elle est produite à une centaine d'exemplaires dans un boîtier en or. Seiko ouvre ensuite ses brevets, précipitant la « crise du quartz » qui manquera d'emporter toute l'horlogerie suisse dans les années 1970. Peu d'objets ont autant bouleversé une industrie entière. Dans un parcours chronologique, c'est la ligne de fracture entre deux mondes.",
  },
  {
    slug: "hamilton-pulsar",
    maker: "Hamilton",
    name: "Pulsar Time Computer",
    year: 1972,
    ref: "P1",
    tagline: "La première montre digitale, à LED rouges",
    description:
      "Lancée en 1972 par Hamilton, la Pulsar est la première montre numérique de l'histoire : pas d'aiguilles, juste des diodes rouges qui s'illuminent à la pression d'un bouton. La P1 en or massif coûtait 2 100 dollars, plus cher qu'une Rolex Day-Date de l'époque. Roger Moore la porte dans Vivre et laisser mourir, son premier James Bond, et le président Gerald Ford s'affiche avec au poignet. Son esthétique « Time Computer » incarne l'ère spatiale finissante et annonce l'invasion du digital. C'est la préhistoire flamboyante de toutes les montres connectées.",
  },
  {
    slug: "ulysse-nardin-freak",
    maker: "Ulysse Nardin",
    name: "Freak",
    year: 2001,
    tagline: "Ni aiguilles, ni cadran, ni couronne",
    description:
      "En 2001, la Freak fait voler en éclats trois siècles de conventions : pas d'aiguilles, pas de cadran, pas de couronne, c'est le mouvement entier qui tourne sur lui-même en carrousel pour indiquer l'heure. Imaginée par le génial Ludwig Oechslin pour Rolf Schnyder, elle inaugure surtout le premier échappement en silicium de l'horlogerie, une révolution technique que toute l'industrie adoptera, de Patek à Omega. Chaque génération de Freak sert depuis de laboratoire roulant à Ulysse Nardin. C'est peut-être la montre la plus radicale du XXIe siècle. Un manifeste mécanique qu'on porte au poignet.",
  },
  {
    slug: "lange-sohne-lange-1",
    maker: "A. Lange & Söhne",
    name: "Lange 1",
    year: 1994,
    tagline: "Le chef-d'œuvre asymétrique de Saxe",
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    description:
      "En décembre 1990, un an après la chute du Mur, Walter Lange ressuscite la manufacture familiale de Glashütte nationalisée par la RDA ; la Lange 1, présentée en 1994, est son premier modèle, et un coup de maître. Son cadran asymétrique, ordonné selon le nombre d'or, et sa grande date inspirée de l'horloge de l'opéra de Dresde sont devenus des icônes instantanées. Le mouvement, avec sa platine trois-quarts en maillechort, son coq de balancier gravé main et ses chatons en or, est parmi les plus beaux du monde. Beaucoup de collectionneurs la placent au-dessus de Patek en finition pure. C'est la preuve que la haute horlogerie parle aussi allemand.",
  },
  {
    slug: "bulgari-octo-finissimo",
    maker: "Bulgari",
    name: "Octo Finissimo",
    year: 2014,
    tagline: "L'ultra-plat aux 110 facettes",
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    description:
      "L'Octo Finissimo a enchaîné huit records mondiaux de finesse en dix ans : mouvement automatique, tourbillon, chronographe et même répétition minutes, tout y passe, dans des boîtiers de quelques millimètres d'épaisseur. Son design aux 110 facettes, hérité de Gérald Genta dont Bulgari a racheté la maison, marie géométrie romaine et radicalité contemporaine. La version titane sablé, d'un gris uniforme presque irréel, est devenue l'icône du design horloger des années 2010. Elle a prouvé qu'une maison de joaillerie italienne pouvait battre les Suisses sur leur propre terrain technique. C'est la montre d'architecte par excellence.",
  },
  {
    slug: "bell-ross-br03",
    maker: "Bell & Ross",
    name: "BR 03",
    year: 2005,
    tagline: "L'instrument de cockpit carré",
    photoCredit: "Johnson Watch Co · Flickr (domaine public)",
    description:
      "Fondée en 1992 par deux amis français, Bell & Ross a trouvé son identité en 2005 avec la BR 01 : un instrument de cockpit d'avion littéralement transposé au poignet, carré à quatre vis, cadran circulaire ultra-lisible. La BR 03, sa déclinaison en 42 mm, est devenue le cœur de la collection. Le design « rond dans un carré » est l'une des rares signatures véritablement nouvelles de l'horlogerie du XXIe siècle. Ses déclinaisons céramique, camouflage ou « Phantom » tout noir cultivent l'esthétique militaire et aéronautique. C'est la montre des amateurs de design industriel radical.",
  },
  {
    slug: "fp-journe",
    maker: "F.P. Journe",
    name: "Octa Calendrier",
    year: 2002,
    tagline: "« Invenit et Fecit », le maître indépendant",
    description:
      "François-Paul Journe est l'horloger contemporain le plus célébré au monde : sa devise « Invenit et Fecit » (il l'a inventé et l'a fait) signe des montres entièrement conçues et fabriquées dans son atelier de Genève, avec des mouvements en or rose massif. L'Octa Calendrier combine calendrier annuel et grande date dans son langage inimitable : cadran excentré, chiffres dodus, architecture asymétrique. Produites à quelques centaines d'exemplaires par an, ses montres s'arrachent aux enchères à des multiples de leur prix, portées par une génération de collectionneurs qui le place au niveau de Breguet. Lauréat record du Grand Prix d'Horlogerie de Genève, il incarne l'âge d'or des indépendants. Posséder un Journe, c'est posséder la haute horlogerie vivante.",
  },
  // Vague 3 — sport-luxe intégré, classiques et avant-garde (juillet 2026).
  {
    slug: "patek-golden-ellipse",
    maker: "Patek Philippe",
    name: "Golden Ellipse",
    year: 1968,
    photoCredit: "Patek Philippe · visuel officiel",
    tagline: "Le nombre d'or fait boîtier",
    description:
      "En 1968, Patek Philippe lance sa première collection entièrement nouvelle depuis la Calatrava de 1932, et c'est une pure affaire de proportions : la Golden Ellipse dessine un boîtier elliptique fondé sur le nombre d'or, ce rapport de 1 à 1,618 que les Grecs jugeaient parfait. Ni ronde ni rectangulaire, elle échappe à toute mode et se contente d'un cadran d'un bleu profond rehaussé d'or. Sans complication, sans esbroufe, elle mise tout sur la justesse de la forme. Plus de cinquante-cinq ans plus tard, elle est toujours au catalogue, quasi inchangée. C'est la preuve qu'un dessin juste se passe de tout le reste.",
  },
  {
    slug: "jaeger-memovox-polaris",
    maker: "Jaeger-LeCoultre",
    name: "Memovox Polaris",
    year: 1965,
    photoCredit: "Jaeger-LeCoultre · Robb Report",
    tagline: "Le réveil qui sonne sous l'eau",
    description:
      "Comment prévenir un plongeur qu'il est temps de remonter ? Jaeger-LeCoultre répond en 1965 avec la Memovox Polaris, une montre de plongée dotée d'un réveil mécanique dont la sonnerie reste audible sous l'eau grâce à un fond à triple caisse de résonance. Ses trois couronnes commandent l'heure, la lunette interne et l'alarme, sous un cadran noir d'une lisibilité parfaite. La version de 1968, produite à seulement 768 exemplaires en acier, est devenue l'une des JLC les plus recherchées des collectionneurs. Rééditée en Tribute to Polaris, elle a donné son nom à toute une collection sportive. C'est l'horlogerie qui résout un problème concret avec une élégance folle.",
  },
  {
    slug: "girard-perregaux-laureato",
    maker: "Girard-Perregaux",
    name: "Laureato",
    year: 1975,
    photoCredit: "Girard-Perregaux · Monochrome-Watches",
    tagline: "L'octogone oublié du sport-chic",
    description:
      "Sorti en 1975 en pleine crise du quartz, le Laureato superpose une lunette octogonale à un boîtier tonneau et un bracelet intégré, animé à l'origine par un mouvement à quartz haute fréquence entièrement maison, une prouesse pour l'époque. Il appartient à la même famille que la Royal Oak, la Nautilus et l'Ingenieur, ce sport-luxe à bracelet intégré né dans les années 1970, mais reste longtemps le grand oublié du genre. Son nom, clin d'œil au Lauréat de Mike Nichols, ne sera officialisé qu'en 1995. Redécouvert et relancé, il retrouve enfin la place qui lui revient. C'est la pièce manquante d'un canon que tout le monde croyait complet.",
  },
  {
    slug: "iwc-ingenieur",
    maker: "IWC",
    name: "Ingenieur SL",
    year: 1976,
    photoCredit: "A Collected Man",
    tagline: "Le quatrième Genta",
    description:
      "En 1976, IWC confie à Gérald Genta le soin de dessiner une Ingenieur sportive : il livre la référence 1832 « SL », lunette cerclée de cinq vis et bracelet intégré, sœur de la Royal Oak et de la Nautilus nées de la même main. C'est le quatrième grand dessin de Genta dans le genre du sport-luxe en acier, celui que l'on oublie toujours de citer. Échec commercial à sa sortie, moins de mille pièces produites jusqu'en 1983, elle devient logiquement un graal de collectionneur. IWC l'a relancée en fanfare en 2023, consacrant enfin son statut. C'est l'icône restée dans l'ombre des deux autres, et qui en sort à peine.",
  },
  {
    slug: "vacheron-overseas",
    maker: "Vacheron Constantin",
    name: "Overseas",
    year: 1996,
    photoCredit: "Sotheby's · catalogue d'enchères",
    tagline: "La croix de Malte part en voyage",
    description:
      "Descendante directe de la 222 de 1977, l'Overseas de 1996 est la sportive de voyage de la plus ancienne manufacture en activité : bracelet intégré, lunette dessinée d'après la croix de Malte emblème de la maison, résistance aux champs magnétiques pour le globe-trotter. Elle complète, aux côtés de la Royal Oak et de la Nautilus, la sainte trinité du sport-luxe genevois. Ses bracelets interchangeables sans outil, acier, cuir et caoutchouc, en font l'une des intégrées les plus polyvalentes du marché. Devenue une pièce très désirée, elle réconcilie la haute horlogerie avec le poignet du quotidien. C'est le luxe qui prend enfin l'avion en classe affaires.",
  },
  {
    slug: "hublot-big-bang",
    maker: "Hublot",
    name: "Big Bang",
    year: 2005,
    photoCredit: "The Marin Vault",
    tagline: "L'art de la fusion, assumé",
    description:
      "Quand Jean-Claude Biver dévoile la Big Bang à Bâle en 2005, il fonde ce qu'il nomme « l'art de la fusion » : mélanger dans un même boîtier l'acier, la céramique, le Kevlar, le caoutchouc, l'or et la fibre de carbone, matières que l'horlogerie classique n'aurait jamais osé marier. Lunette vissée de six plots en H, allure de hublot de navire, cadran squelette : elle rafle le Prix du Design du Grand Prix d'Horlogerie de Genève la même année. Clivante, tapageuse, adorée des sportifs et des rappeurs, elle relance à elle seule la maison Hublot. Impossible de raconter les années 2000 horlogères sans elle. C'est le bruit et la fureur, brevetés.",
  },
  {
    slug: "chopard-alpine-eagle",
    maker: "Chopard",
    name: "Alpine Eagle",
    year: 2019,
    photoCredit: "Chopard · visuel officiel",
    tagline: "L'œil de l'aigle en acier Lucent",
    description:
      "L'Alpine Eagle de 2019 ressuscite la St. Moritz de 1980, la toute première montre en acier de Chopard, imaginée par Karl-Friedrich Scheufele quand il avait vingt-deux ans, et relancée trente-neuf ans plus tard avec son fils. Son cadran texturé évoque l'iris d'un aigle, son acier Lucent breveté est refondu à partir de matière recyclée, son bracelet intégré file la ligne sport-chic. Projet réunissant trois générations d'une même famille, elle devient presque instantanément un classique culte de la vague des intégrées. Elle prouve qu'on peut encore entrer tard dans un genre saturé et s'y faire une place. C'est l'histoire de famille devenue objet de désir.",
  },
  {
    slug: "de-bethune-db28",
    maker: "De Bethune",
    name: "DB28",
    year: 2010,
    photoCredit: "De Bethune · Monochrome-Watches",
    tagline: "Le vaisseau de titane bleui",
    description:
      "La DB28 de 2010 ne ressemble à aucune autre montre : ses cornes flottantes articulées épousent le poignet par une géométrie variable, son titane est bleui par oxydation thermique jusqu'à un bleu nuit sidéral, son pont de balancier en delta signe le style de Denis Flageollet. Manifeste de la maison la plus avant-gardiste des indépendants, elle décroche l'Aiguille d'Or du Grand Prix d'Horlogerie de Genève en 2011, plus haute distinction du métier. Chaque détail y relève de la recherche pure, du balancier en silicium et platine aux finitions polies main. Elle regarde vers l'espace autant que vers la tradition. C'est l'horlogerie de demain, faite à l'ancienne.",
  },
  {
    slug: "mbf-lm1",
    maker: "MB&F",
    name: "Legacy Machine N°1",
    year: 2011,
    photoCredit: "MB&F · The Hour Glass",
    tagline: "Le balancier suspendu dans le vide",
    description:
      "Maximilian Büsser a fondé MB&F en 2005 pour transformer la montre en sculpture cinétique, et la Legacy Machine N°1 de 2011 en est le sommet lisible : un immense balancier flotte, suspendu, au-dessus du cadran, comme en lévitation, entouré de deux cadrans inclinés à double fuseau et d'un indicateur de réserve de marche en éventail. Là où les premières « Machines » de la maison étaient franchement extraterrestres, celle-ci rend hommage à l'horlogerie du XIXe siècle avec une émotion rare. Le spectacle mécanique se joue côté cadran, sous vos yeux, en permanence. Elle a scellé le statut de MB&F comme l'un des ateliers les plus créatifs du monde. C'est de la haute horlogerie qui se regarde comme un aquarium.",
  },
  {
    slug: "grand-seiko-snowflake",
    maker: "Grand Seiko",
    name: "Snowflake",
    year: 2010,
    photoCredit: "Grand Seiko · visuel officiel",
    tagline: "La neige de Shinshu au poignet",
    description:
      "Son cadran texturé évoque la surface d'une neige fraîche, celle des montagnes de Shinshu où elle est assemblée, et sa trotteuse glisse sans à-coups au lieu de tictaquer : c'est le mouvement Spring Drive, hybride unique de mécanique et de régulation électronique dont Seiko a le secret. Surnommée « Snowflake » spontanément par les collectionneurs, la référence SBGA211 révèle à l'Occident, à partir de 2010, l'existence d'une haute horlogerie japonaise aussi obsessionnelle que la suisse. Boîtier en titane clair, aiguille bleuie, finitions Zaratsu polies au miroir : tout y respire la retenue. Elle a converti une génération entière de passionnés. C'est la preuve que la perfection peut être discrète.",
  },
  // Vague 3 — icônes accessibles et pop (juillet 2026).
  {
    slug: "movado-museum",
    maker: "Movado",
    name: "Museum Watch",
    year: 1947,
    photoCredit: "Sheiban Jewelers",
    tagline: "Le soleil au zénith, rien d'autre",
    description:
      "En 1947, le designer américain Nathan George Horwitt dessine un cadran d'une radicalité absolue : aucun chiffre, aucun index, juste un point d'or unique à midi figurant le soleil à son zénith. L'idée est si pure qu'elle entre en 1960 dans la collection permanente du Museum of Modern Art de New York, d'où le nom « Museum ». Horwitt dut d'ailleurs batailler des années pour faire reconnaître sa paternité, la montre ayant longtemps été copiée sans permission. Devenue la signature de Movado, produite en quantités industrielles à prix raisonnable, elle a mis le design de musée au poignet de tout le monde. C'est le minimalisme avant que le mot ne devienne une mode.",
  },
  {
    slug: "doxa-sub-300",
    maker: "Doxa",
    name: "SUB 300",
    year: 1967,
    photoCredit: "Doxa · visuel officiel",
    tagline: "Le cadran orange des profondeurs",
    description:
      "Présentée à Bâle en 1967, la Doxa SUB 300 est la première montre de plongée vraiment pensée pour le grand public et non pour les seuls professionnels : son cadran orange vif, dernière couleur visible quand on descend, la rend lisible là où toutes les autres s'éteignent. Sa lunette porte une table de décompression mise au point avec US Divers, la société de Jacques Cousteau, dont les plongeurs de la Calypso l'adoptent aussitôt. Popularisée plus tard par Dirk Pitt, le héros des romans de Clive Cussler, elle devient un objet culte à la silhouette immédiatement reconnaissable. Peu de montres ont autant démocratisé la plongée. C'est l'orange qui a rendu les abysses lisibles.",
  },
  {
    slug: "vostok-amphibia",
    maker: "Vostok",
    name: "Amphibia",
    year: 1967,
    photoCredit: "SevenFiveThree · Wikimedia Commons (CC BY-SA 4.0)",
    tagline: "La plongeuse soviétique indestructible",
    description:
      "Conçue en 1967 par Mikhaïl Novikov et Vera Belova pour les hommes-grenouilles de la marine soviétique, l'Amphibia résout l'étanchéité avec une logique inversée géniale : plus la pression augmente en profondeur, plus le verre et le fond à baïonnette se plaquent et se scellent d'eux-mêmes. Là où l'Ouest multiplie les joints, l'URSS retourne le problème avec trois fois rien. Robuste à l'excès, réparable avec un tournevis, vendue pour une bouchée de pain, elle traverse les décennies sans jamais changer d'esprit. Elle est devenue culte auprès des amateurs du monde entier, précisément pour son ingéniosité contre-intuitive. C'est la preuve que la contrainte accouche parfois du génie.",
  },
  {
    slug: "seiko-turtle",
    maker: "Seiko",
    name: "Prospex Turtle",
    year: 1976,
    photoCredit: "Belmont Watches",
    tagline: "La tortue au boîtier coussin",
    description:
      "Lancée en 1976 sous la référence 6309, cette plongeuse automatique doit son surnom de « Turtle » à son boîtier coussin arrondi, évoquant une carapace de tortue. Robuste, étanche, animée d'un mouvement automatique quasi increvable, elle accompagne des générations de plongeurs, des rizières d'Asie aux mers tropicales, pour un prix dérisoire. Son rapport robustesse-prix en fait l'une des montres-outils les plus aimées de l'histoire, rééditée à succès dans la série SRP. Elle incarne une certaine idée japonaise de l'objet honnête : faire simple, faire solide, faire durable. C'est la montre de plongée du peuple, et elle en est fière.",
  },
  {
    slug: "casio-calculatrice",
    maker: "Casio",
    name: "CA-53W",
    year: 1988,
    photoCredit: "Morn · Wikimedia Commons (CC BY-SA 4.0)",
    tagline: "La calculatrice de Marty McFly",
    description:
      "Casio met une calculatrice au poignet dès les années 1980, et la CA-53W de 1988 en devient l'archétype : huit touches minuscules, écran à cristaux liquides, boîtier de résine noire, le tout pour le prix d'un sandwich. Elle doit sa célébrité au cinéma, portée par Marty McFly dans les deuxième et troisième volets de Retour vers le futur, ce qui lui vaut son surnom éternel. Objet geek assumé, gadget increvable, elle est toujours produite quasiment à l'identique près de quarante ans plus tard. Portée aujourd'hui au second degré comme au premier, elle ne se démode pas parce qu'elle n'a jamais cherché à être à la mode. C'est le futur des années 80, resté au poignet.",
  },
  {
    slug: "braun-aw10",
    maker: "Braun",
    name: "AW 10",
    year: 1989,
    photoCredit: "Braun · visuel officiel",
    tagline: "Moins, mais mieux",
    description:
      "Quand Braun se lance dans la montre-bracelet à la fin des années 1980, c'est Dietrich Lubs, dans le sillage du grand Dieter Rams, qui en dessine le cadran : lisibilité maximale, index nets, une seule touche de jaune sur la trotteuse, et rien de superflu. L'AW 10 de 1989 applique au poignet le fameux « moins, mais mieux » qui a fait la légende du design Braun, des radios aux calculatrices. Elle devient le modèle secret de tout le minimalisme horloger contemporain, copiée à l'infini par des marques qui ne la citent jamais. Rééditée pour son statut d'icône, elle reste une leçon de rigueur. C'est le fonctionnalisme allemand réduit à sa plus juste expression.",
  },
  {
    slug: "casio-casioak",
    maker: "Casio",
    name: "G-Shock GA-2100",
    year: 2019,
    photoCredit: "Creation Watches",
    tagline: "La G-Shock surnommée CasiOak",
    description:
      "Sortie en 2019, la G-Shock GA-2100 troque les habituels pavés de résine pour une fine lunette octogonale, et les collectionneurs la baptisent aussitôt « CasiOak », contraction de Casio et de Royal Oak, tant sa silhouette évoque l'icône d'Audemars Piguet à un centième du prix. Le clin d'œil provoque une pénurie mondiale surprise et fait d'elle l'un des plus gros phénomènes G-Shock de la décennie. Ultra-fine pour une G-Shock, personnalisable à l'infini par la communauté, elle truste les classements de la meilleure montre à moins de cent euros. Elle prouve qu'un dessin malin vaut tous les budgets marketing. C'est le luxe cité de mémoire, en résine et bonne humeur.",
  },
  {
    slug: "omega-swatch-moonswatch",
    maker: "Omega × Swatch",
    name: "MoonSwatch",
    year: 2022,
    photoCredit: "StrapHabit",
    tagline: "La Speedmaster de tout le monde",
    description:
      "Le 26 mars 2022, Omega et Swatch dévoilent la MoonSwatch, réinterprétation en biocéramique de la mythique Speedmaster qui a marché sur la Lune, vendue autour de deux cent soixante euros et déclinée en onze planètes du système solaire. Le résultat provoque des files d'attente mondiales et des bousculades devant les boutiques Swatch, du jamais-vu dans l'horlogerie. En important la logique de la « hype » des baskets en édition limitée, l'objet fait entrer le Graal spatial d'Omega dans des milliers de poignets qui n'y auraient jamais eu accès. Phénomène pop autant qu'objet horloger, la MoonSwatch est le coup de tonnerre récent du secteur. C'est la Lune rendue accessible, avec humour et malice.",
  },
]

export const montres: Subject = {
  slug: "montres",
  title: "Montres",
  variant: "Homme",
  category: "Horlogerie",
  intro:
    "Les montres qui ont écrit l'histoire, exposées par ordre chronologique, de l'atelier d'Abraham-Louis Breguet à l'Apple Watch. Parcourez la collection, puis départagez les pièces en duel pour révéler votre goût.",
  itemNoun: "pièce",
  itemGender: "f",
  duelQuestion: "Laquelle préférez-vous ?",
  searchPlaceholder: "Chercher une marque, un modèle…",
  detailFit: "contain",
  plateAspect: "aspect-4/5",
  items,
}
