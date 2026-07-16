import type { Item, Subject } from "@/lib/subjects"

const items: Item[] = [
  {
    slug: "ford-t",
    maker: "Ford",
    name: "Model T",
    year: 1908,
    tagline: "La voiture qui a motorisé le monde",
    description:
      "Lancée en 1908 et produite à plus de quinze millions d'exemplaires, la Ford T est la première voiture fabriquée à la chaîne : son prix chute d'année en année jusqu'à devenir accessible aux ouvriers qui la construisent. Henry Ford promettait « n'importe quelle couleur pourvu qu'elle soit noire » : la peinture noire séchait plus vite. Robuste, simple, réparable à la ferme, elle met l'Amérique entière sur roues et invente la civilisation automobile. Aucune voiture n'a changé le monde aussi profondément. Tout ce qui roule aujourd'hui descend d'elle.",
  },
  {
    slug: "bugatti-type-35",
    maker: "Bugatti",
    name: "Type 35",
    year: 1924,
    tagline: "La plus victorieuse des voitures de course",
    description:
      "Chef-d'œuvre d'Ettore Bugatti, la Type 35 accumule plus de deux mille victoires en course dans les années 1920, un record jamais approché. Son radiateur en fer à cheval, son bleu de France et ses roues en aluminium coulé (une première mondiale) en font aussi l'une des plus belles machines jamais dessinées. Ettore la vendait aux gentlemen drivers qui la conduisaient jusqu'au circuit, couraient, puis rentraient dîner. Elle a fondé le mythe Bugatti et le romantisme du sport automobile. C'est la course automobile faite sculpture.",
  },
  {
    slug: "traction-avant",
    maker: "Citroën",
    name: "Traction Avant",
    year: 1934,
    tagline: "La révolution technique qui roulait à plat",
    description:
      "Première grande série à roues avant motrices, à carrosserie monocoque et à suspension indépendante, la Traction Avant a dix ans d'avance sur tout le monde en 1934, au point de ruiner Citroën, racheté par Michelin. Basse, tenant la route comme aucune autre, elle devient la voiture des gangsters puis de la Gestapo et de la Résistance, avant d'incarner la France des années 1950. Sa silhouette noire aux ailes bombées est un morceau de cinéma français à elle seule. Elle a établi l'ADN Citroën : l'audace technique avant tout.",
  },
  {
    slug: "coccinelle",
    maker: "Volkswagen",
    name: "Coccinelle",
    year: 1938,
    tagline: "La voiture la plus produite de l'histoire",
    description:
      "Née « voiture du peuple » dans l'Allemagne des années 1930 sur un dessin de Ferdinand Porsche, la Coccinelle devient après-guerre l'exact contraire de ses origines : le symbole automobile de la contre-culture, des surfeurs californiens et du flower power. Produite à 21,5 millions d'exemplaires jusqu'en 2003 au Mexique, c'est le plus grand succès automobile de tous les temps sur une même plateforme. Son moteur boxer arrière refroidi par air et sa silhouette en dôme sont reconnaissables entre mille. Herbie en a fait une star de cinéma. Aucune voiture n'est plus universellement aimée.",
  },
  {
    slug: "jeep-willys",
    maker: "Willys",
    name: "Jeep MB",
    year: 1941,
    tagline: "Le soldat à quatre roues",
    description:
      "Conçue en quelques semaines pour l'armée américaine, la Willys MB débarque partout où la Seconde Guerre mondiale se joue : Eisenhower la comptait parmi les armes qui ont gagné la guerre. Quatre roues motrices, mécanique indestructible, calandre à fentes devenue marque déposée : elle invente le tout-terrain moderne et engendre après-guerre toute la lignée des 4x4 civils. Les surplus militaires en font l'outil des fermiers du monde entier. Land Rover, Toyota Land Cruiser, tous ses héritiers l'admettent. C'est l'utilitaire élevé au rang de mythe.",
  },
  {
    slug: "2cv",
    maker: "Citroën",
    name: "2CV",
    year: 1948,
    tagline: "Quatre roues sous un parapluie",
    description:
      "Cahier des charges légendaire : transporter quatre personnes et cinquante kilos de pommes de terre à 60 km/h en traversant un champ labouré sans casser un panier d'œufs. La 2CV, présentée en 1948, y répond avec une suspension géniale, une capote en toile et un dépouillement assumé qui en fait la voiture la moins chère et la plus attachante de France. Produite pendant quarante-deux ans, elle motorise paysans, curés, étudiants et soixante-huitards avec la même bonhomie. Sa silhouette bossue est un sourire sur roues. C'est l'intelligence frugale française à son sommet.",
  },
  {
    slug: "land-rover",
    maker: "Land Rover",
    name: "Series I",
    year: 1948,
    tagline: "Le tout-terrain gentleman-farmer",
    description:
      "Dessinée dit-on dans le sable d'une plage galloise en s'inspirant de la Jeep, la Land Rover de 1948 devait être un véhicule agricole provisoire : elle est restée en production, à peine modifiée, jusqu'au dernier Defender de 2016. Carrosserie en aluminium (l'acier était rationné), formes dessinées à la règle, aptitude à traverser n'importe quoi : elle devient l'outil des explorateurs, de la Croix-Rouge et de la reine d'Angleterre. On estime que les deux tiers de tous les exemplaires produits roulent encore. C'est l'anti-mode absolue, donc un sommet du style.",
  },
  {
    slug: "combi-vw",
    maker: "Volkswagen",
    name: "Combi T1",
    year: 1950,
    tagline: "La maison roulante de la liberté",
    description:
      "Croquis d'un importateur néerlandais visitant l'usine Volkswagen en 1947, le Combi naît en 1950 : une boîte sur la plateforme de la Coccinelle, moteur à l'arrière, visage souriant à deux tons de peinture. Van des artisans en Europe, il devient dans l'Amérique des sixties le vaisseau du mouvement hippie, direction Woodstock ou Katmandou. Son pare-brise en V et son immense logo VW en font l'un des visages les plus sympathiques du design industriel. Les T1 « Samba » à vingt-trois fenêtres s'échangent aujourd'hui au prix d'une Porsche. C'est le véhicule officiel du rêve de liberté.",
  },
  {
    slug: "citroen-ds",
    maker: "Citroën",
    name: "DS",
    year: 1955,
    tagline: "La déesse tombée du futur",
    description:
      "Au salon de Paris 1955, la DS récolte douze mille commandes le premier jour : jamais une voiture n'avait paru à ce point venue d'ailleurs. Suspension hydropneumatique qui l'élève à la mise en route, direction et freins assistés, carrosserie aérodynamique signée Flaminio Bertoni : Roland Barthes lui consacre un texte fameux, la comparant aux cathédrales gothiques. Elle sauve la vie du général de Gaulle au Petit-Clamart en roulant à plat sur ses roues crevées. Fantômas, les préfets et les poètes se la partagent. C'est la plus grande voiture française de l'histoire, et probablement la plus belle idée que l'automobile ait eue d'elle-même.",
  },
  {
    slug: "fiat-500",
    maker: "Fiat",
    name: "Nuova 500",
    year: 1957,
    tagline: "Le pot de yaourt qui a motorisé l'Italie",
    description:
      "Dessinée par Dante Giacosa, la Nuova 500 de 1957 fait tenir quatre Italiens dans moins de trois mètres, avec un bicylindre de scooter à l'arrière et un toit en toile pour économiser la tôle. Elle motorise le miracle économique italien comme la Vespa avant elle, se gare dans un mouchoir et grimpe les ruelles de Naples en chantant. Sa bouille ronde est devenue l'incarnation même de la dolce vita. Réinterprétée avec succès en 2007, elle vit une seconde carrière mondiale. C'est le plus grand petit dessin de l'histoire automobile.",
  },
  {
    slug: "cadillac-eldorado",
    maker: "Cadillac",
    name: "Eldorado",
    year: 1959,
    tagline: "L'apothéose des ailerons chromés",
    description:
      "La Cadillac Eldorado de 1959 pousse le rêve américain jusqu'à l'absurde sublime : presque six mètres de long, des ailerons d'avion de chasse culminant à plus d'un mètre, des feux-fusées et assez de chrome pour se coiffer dedans. Dessinée sous l'ère Harley Earl, père du styling américain et de l'obsolescence stylistique programmée, elle est le sommet exact d'une folie que la décennie suivante dégonflera. Elvis, les casinos, Las Vegas : tout l'imaginaire américain tient dans ses ailerons. C'est le baroque atomique sur roues blanches.",
  },
  {
    slug: "mini",
    maker: "Austin",
    name: "Mini",
    year: 1959,
    tagline: "Le génie tient dans trois mètres",
    description:
      "Réponse d'Alec Issigonis à la crise de Suez, la Mini de 1959 révolutionne l'architecture automobile : moteur transversal, traction avant, roues aux quatre coins : 80 % de l'espace pour les passagers dans une boîte de trois mètres. Toutes les compactes du monde copient encore cette formule. Voiture des ouvriers puis coqueluche du Swinging London (Beatles, Twiggy, Peter Sellers), elle gagne trois fois le rallye de Monte-Carlo en humiliant les grosses cylindrées. The Italian Job en fait une héroïne de cinéma. C'est le plus grand tour de magie du design automobile.",
  },
  {
    slug: "jaguar-type-e",
    maker: "Jaguar",
    name: "Type E",
    year: 1961,
    tagline: "« La plus belle voiture jamais construite »",
    description:
      "Au salon de Genève 1961, Enzo Ferrari lui-même aurait qualifié la Type E de plus belle voiture jamais construite. Son capot interminable dessiné par l'aérodynamicien Malcolm Sayer, ses phares carénés et sa poupe fuselée en font une sculpture roulante : le MoMA de New York l'a d'ailleurs fait entrer dans sa collection permanente. Capable de 240 km/h pour la moitié du prix d'une Ferrari, elle incarne le Swinging London côté vitesse. George Best et Brigitte Bardot en avaient une, naturellement. C'est le désir automobile à l'état pur.",
  },
  {
    slug: "ferrari-250-gto",
    maker: "Ferrari",
    name: "250 GTO",
    year: 1962,
    tagline: "Le graal absolu du collectionneur",
    description:
      "Trente-six exemplaires construits pour homologuer Ferrari en course GT, un V12 de trois litres chantant jusqu'à 8 000 tours, une robe dessinée à la soufflerie et finie au marteau : la 250 GTO est le graal absolu du collectionnisme automobile. Un exemplaire s'est vendu plus de 70 millions de dollars : record de tous les temps pour une Ferrari, seule une Mercedes 300 SLR l'a jamais dépassée aux enchères. Victorieuse partout dans les années 1960, elle marie beauté, palmarès et rareté comme aucune autre. Son club de propriétaires est le cercle le plus fermé du monde. C'est la Joconde de l'automobile.",
  },
  {
    slug: "alpine-a110",
    maker: "Alpine",
    name: "A110",
    year: 1962,
    tagline: "La berlinette bleue reine des rallyes",
    description:
      "Construite à Dieppe par Jean Rédélé sur base Renault, la berlinette A110 pèse moins de 700 kilos grâce à sa coque en polyester : sur les routes verglacées du Monte-Carlo 1971, elle signe un triplé historique et remporte en 1973 le premier championnat du monde des rallyes. Basse, effilée, peinte en bleu France, elle est la giant killer par excellence : l'agilité contre la puissance. Son mythe est tel que Renault l'a ressuscitée en 2017, silhouette quasi identique. C'est le plus beau chapitre du sport automobile français.",
  },
  {
    slug: "aston-db5",
    maker: "Aston Martin",
    name: "DB5",
    year: 1963,
    tagline: "La voiture de James Bond, pour toujours",
    description:
      "Grand tourisme britannique au six-cylindres soyeux et à la robe dessinée chez Touring de Milan, la DB5 serait restée une aristocrate confidentielle sans Goldfinger en 1964 : sièges éjectables, mitrailleuses et plaques tournantes en font instantanément « la voiture la plus célèbre du monde ». Sean Connery, puis presque chaque Bond jusqu'à Daniel Craig, la ressortent comme un talisman. Son gris argent Silver Birch est devenu une couleur mythologique. Aucun placement de produit n'a jamais aussi bien réussi. C'est l'élégance anglaise armée jusqu'aux pare-chocs.",
  },
  {
    slug: "porsche-911",
    maker: "Porsche",
    name: "911",
    year: 1963,
    tagline: "La silhouette qui refuse de mourir",
    description:
      "Dessinée par Ferdinand « Butzi » Porsche, la 911 défend depuis 1963 une hérésie technique (le moteur en porte-à-faux arrière) à force de génie d'ingénierie, jusqu'à en faire la sportive la plus aboutie du monde. Sa ligne fastback aux phares ronds n'a jamais changé de philosophie en soixante ans et huit générations : une évolution continue unique dans l'histoire industrielle. Du Monte-Carlo au Mans, elle a tout gagné. Steve McQueen ouvrait Le Mans au volant de la sienne. C'est la preuve qu'un dessin parfait n'a pas besoin d'être remplacé, seulement affûté.",
  },
  {
    slug: "mustang",
    maker: "Ford",
    name: "Mustang",
    year: 1964,
    tagline: "La pony car de l'Amérique jeune",
    description:
      "Lancée à la foire mondiale de New York en avril 1964, la Mustang invente un genre (la pony car) et pulvérise tous les records : un million d'exemplaires en moins de deux ans. Lee Iacocca l'a voulue longue de capot, courte de coffre et surtout accessible : le glamour d'un coupé européen au prix d'une berline familiale. Steve McQueen la sanctifie dans la poursuite de Bullitt, la plus célèbre de l'histoire du cinéma. Elle reste en production ininterrompue depuis soixante ans. C'est la jeunesse américaine coulée dans la tôle.",
  },
  {
    slug: "miura",
    maker: "Lamborghini",
    name: "Miura",
    year: 1966,
    tagline: "La première supercar de l'histoire",
    description:
      "Conçue en secret par de jeunes ingénieurs de Sant'Agata et habillée par Marcello Gandini, 27 ans, chez Bertone, la Miura installe pour la première fois un V12 en position centrale transversale dans une voiture de route : la supercar est née. Ses 280 km/h en font la voiture la plus rapide du monde en 1966, et ses cils de phares la plus troublante. La scène d'ouverture de The Italian Job, sur la route du Grand-Saint-Bernard, est un monument. Ferruccio Lamborghini, l'ex-fabricant de tracteurs, venait de coiffer Ferrari. C'est la beauté insolente des sixties italiennes.",
  },
  {
    slug: "range-rover",
    maker: "Range Rover",
    name: "Classic",
    year: 1970,
    tagline: "L'inventeur du 4x4 de luxe",
    description:
      "En 1970, Rover invente une catégorie qui dominera le monde cinquante ans plus tard : le tout-terrain luxueux, aussi à l'aise devant l'opéra que dans la boue. V8 alu, suspensions longues, immense vitrage et ligne d'une pureté telle qu'elle fut exposée au Louvre : le Range Rover première génération reste un choc de justesse. Il traverse le Sahara comme les beaux quartiers, souvent le même jour. Tout SUV premium actuel n'est qu'une note de bas de page de ce dessin. C'est le gentleman-farmer devenu icône mondiale.",
  },
  {
    slug: "renault-5",
    maker: "Renault",
    name: "5",
    year: 1972,
    tagline: "La citadine pop qui a conquis la France",
    description:
      "Dessinée en secret par Michel Boué, mort avant son lancement, la Renault 5 de 1972 invente la citadine moderne et sympathique : hayon, boucliers en plastique intégrés (une première) et une bouille aux phares écarquillés qui parle à tout le monde. Publicités dessinées, coloris pop, versions Le Car pour l'Amérique : elle devient la voiture la plus vendue de France pendant une décennie. La délirante 5 Turbo, moteur en position centrale et ailes gonflées, en fait une légende du rallye. Sa réincarnation électrique de 2024 a été élue voiture de l'année. C'est le design démocratique à la française.",
  },
  {
    slug: "countach",
    maker: "Lamborghini",
    name: "Countach",
    year: 1974,
    tagline: "Le poster de toutes les chambres d'ados",
    description:
      "Encore Gandini, encore un choc : la Countach abandonne les courbes de la Miura pour un coin d'origami brutal, portes en élytre comprises : les fameuses ciseaux copiées depuis par toutes les supercars en mal de spectacle. Si extrême qu'on la disait inconduisible, si photogénique qu'elle a tapissé les chambres de tous les adolescents des années 1980. Son nom est un juron piémontais d'émerveillement. Elle définit pour toujours l'esthétique de la supercar : impraticable, irrationnelle, indispensable. C'est le rêve automobile à l'état chimiquement pur.",
  },
  {
    slug: "golf-gti",
    maker: "Volkswagen",
    name: "Golf GTI",
    year: 1976,
    tagline: "L'inventrice de la sportive raisonnable",
    description:
      "Projet quasi clandestin d'ingénieurs de Wolfsburg, la Golf GTI de 1976 glisse un moteur à injection dans la compacte dessinée par Giugiaro : la « hot hatch » est née : la sportive qu'on peut utiliser tous les jours, emmener au supermarché puis jeter dans les virages. Liseré rouge de calandre, balle de golf sur le levier de vitesse, tissu écossais : ses codes sont devenus des reliques. Toutes les compactes sportives depuis cinquante ans reprennent sa formule. C'est la démocratisation du plaisir de conduire.",
  },
  {
    slug: "classe-g",
    maker: "Mercedes-Benz",
    name: "Classe G",
    year: 1979,
    tagline: "Le cube militaire devenu star de Beverly Hills",
    description:
      "Né en 1979 comme véhicule militaire co-développé avec Steyr en Autriche, le Geländewagen n'a jamais cédé sur son dessin : un cube aux arêtes vives, charnières apparentes et clignotants posés sur les ailes, produit à la main à Graz depuis quarante-cinq ans. Le paradoxe fait son mythe : l'engin conçu pour l'armée est devenu le 4x4 des rappeurs, des princes et de Kim Kardashian, en version V8 biturbo à 200 000 euros. Le pape lui-même roule en G blindé. C'est la plus improbable des icônes de luxe : un outil qui a refusé de changer.",
  },
  {
    slug: "delorean",
    maker: "DeLorean",
    name: "DMC-12",
    year: 1981,
    tagline: "La machine à remonter le temps",
    description:
      "Carrosserie en inox brossé jamais peinte, portes papillon, dessin de Giugiaro : la DMC-12 de John DeLorean avait tout pour devenir légendaire, sauf la mécanique et les finances : l'aventure s'effondre en 1982 dans un scandale retentissant. Puis Retour vers le futur en fait en 1985 la machine temporelle la plus célèbre du cinéma, et l'échec industriel devient immortalité culturelle. Quatre-vingt-huit miles à l'heure restent une vitesse mythique. Aucune voiture ratée n'a aussi bien réussi. C'est la preuve que le destin d'un objet se joue parfois ailleurs que dans sa fiche technique.",
  },
  {
    slug: "205-gti",
    maker: "Peugeot",
    name: "205 GTI",
    year: 1984,
    tagline: "Le sacré numéro qui a sauvé Peugeot",
    description:
      "La 205 sauve Peugeot de la faillite en 1983, et sa version GTI de 1984 devient instantanément la reine des hot hatches : châssis d'une vivacité féline, moteur rageur, jantes pétales et liserés rouges. Sur les routes de France, elle est la terreur des nationales et l'objet de tous les désirs adolescents. Sa cousine Turbo 16 remporte deux titres mondiaux des rallyes aux mains de Timo Salonen puis Juha Kankkunen. Les puristes la préfèrent encore à la Golf GTI, débat inépuisable des dîners français. C'est l'agilité française des années 80, cote de collection en prime.",
  },
  {
    slug: "testarossa",
    maker: "Ferrari",
    name: "Testarossa",
    year: 1984,
    tagline: "Les branchies de Miami Vice",
    description:
      "Ses flancs striés d'ouïes latérales (les plus larges jamais montées sur une voiture de série) font de la Testarossa dessinée par Pininfarina l'emblème absolu des années 1980. Flat-12 de 390 chevaux, rétroviseur haut perché en position unique, blancheur immaculée dans Miami Vice aux côtés de Don Johnson : elle est le luxe décomplexé de la décennie Reagan. Affiche de chambre d'ado à égalité avec la Countach, elle a retrouvé une cote flamboyante portée par la nostalgie eighties. C'est le power dressing appliqué à l'automobile.",
  },
  {
    slug: "f40",
    maker: "Ferrari",
    name: "F40",
    year: 1987,
    tagline: "La dernière Ferrari d'Enzo, la plus pure",
    description:
      "Dernière voiture lancée du vivant d'Enzo Ferrari, la F40 célèbre les quarante ans de la marque en poussant la brutalité au rang d'art : carrosserie en kevlar et carbone, vitres en plexiglas, aucun assistant, pas même de moquette, et 324 km/h, première voiture de série à franchir les 320. Son immense aileron et son V8 biturbo qui crache des flammes en font l'anti-luxe absolu : tout pour la vitesse, rien pour le confort. Les pilotes la craignent, les collectionneurs la vénèrent. C'est le testament d'Enzo : une voiture de course à peine civilisée.",
  },
  {
    slug: "mx5",
    maker: "Mazda",
    name: "MX-5",
    year: 1989,
    tagline: "Le roadster le plus vendu de l'histoire",
    description:
      "Alors que le roadster anglais est mort de sa propre incurie industrielle, Mazda le ressuscite en 1989 avec la philosophie japonaise du jinba ittai : le cheval et le cavalier ne font qu'un. Légère, simple, fiable et joyeuse, la MX-5 prouve que le plaisir de conduire n'a rien à voir avec la puissance. Plus d'un million d'exemplaires plus tard, c'est le roadster le plus vendu de tous les temps, et la réponse universelle des passionnés à toute question automobile : « Miata is always the answer ». C'est la joie de conduire distillée à l'état pur.",
  },
  {
    slug: "mclaren-f1",
    maker: "McLaren",
    name: "F1",
    year: 1992,
    tagline: "Trois sièges, un V12, aucun compromis",
    description:
      "Gordon Murray dessine en 1992 la voiture de route parfaite selon un ingénieur de Formule 1 : poste de conduite central entouré de deux passagers, coque carbone, V12 BMW atmosphérique, or véritable en isolant thermique du compartiment moteur. Ses 386,4 km/h de 1998 resteront sept ans le record mondial d'une voiture de série, atteints presque par accident, la F1 n'ayant jamais été conçue pour la vitesse pure. Victorieuse au Mans 1995 quasi sans préparation, elle s'échange aujourd'hui au-delà de vingt millions. C'est l'ingénierie sans marketing, et donc la perfection.",
  },
  {
    slug: "twingo",
    maker: "Renault",
    name: "Twingo",
    year: 1992,
    tagline: "Le monospace de poche qui souriait",
    description:
      "Une seule motorisation, quatre couleurs pop, pas d'options ou presque : la Twingo de 1992 réinvente la petite voiture avec une radicalité douce signée Patrick Le Quément, qui arracha le projet en promettant sa démission. Son monocorps d'œuf, ses phares en amande et son tableau de bord central en font un personnage de dessin animé plus qu'une automobile. « À vous d'inventer la vie qui va avec », disait la publicité : l'un des plus grands slogans français. Banquette coulissante, esprit malin : tout Renault est là. C'est le design affectif poussé à la série.",
  },
  {
    slug: "prius",
    maker: "Toyota",
    name: "Prius",
    year: 1997,
    tagline: "L'hybride qui a changé la conscience automobile",
    description:
      "Lancée au Japon en 1997, la Prius est la première hybride essence-électrique de grande série : moche assumée, technologiquement révolutionnaire, elle divise les moteurs et les opinions. Hollywood en fait un manifeste (Leonardo DiCaprio arrive aux Oscars en Prius) et les chauffeurs de taxi du monde entier son cheval de trait inusable. Vingt-cinq millions d'hybrides Toyota plus tard, elle a préparé les esprits à l'électrification bien avant Tesla. C'est la voiture qui a fait de la vertu un argument automobile.",
  },
  {
    slug: "veyron",
    maker: "Bugatti",
    name: "Veyron 16.4",
    year: 2005,
    tagline: "Les 1 000 chevaux et les 400 km/h apprivoisés",
    description:
      "Caprice de Ferdinand Piëch, la Veyron devait cocher quatre chiffres impossibles : 1 000 chevaux, 400 km/h, moins de 3 secondes au 100 km/h, et pouvoir aller à l'opéra en smoking. Son W16 quadriturbo et ses dix radiateurs y parviennent en 2005, pulvérisant tout ce que l'automobile croyait possible, chaque exemplaire vendu à perte, en pur exercice de prestige industriel. Elle ressuscite Bugatti et invente l'hypercar moderne. C'est la démonstration de force la plus coûteuse et la plus fascinante de l'histoire automobile.",
  },
  {
    slug: "model-s",
    maker: "Tesla",
    name: "Model S",
    year: 2012,
    tagline: "La berline qui a électrisé l'industrie",
    description:
      "En 2012, la Model S transforme la voiture électrique de pénitence écologique en objet de désir : 400 kilomètres d'autonomie, accélérations de supercar, écran géant et mises à jour à distance comme un smartphone. L'industrie entière, incrédule puis paniquée, réorganise cent ans de certitudes autour de son exemple. Le mode « Ludicrous » humilie les V8 aux feux rouges, le réseau Superchargeur abolit l'angoisse de la panne. Quoi qu'on pense de son fondateur, c'est la voiture qui a fait basculer le siècle automobile.",
  },
  {
    slug: "cybertruck",
    maker: "Tesla",
    name: "Cybertruck",
    year: 2019,
    tagline: "Le polygone qui divise la planète",
    description:
      "Présenté en 2019 dans un fiasco mémorable (les vitres « incassables » brisées en direct), le Cybertruck assume un dessin d'exosquelette en inox plié qui semble sorti d'un jeu vidéo des années 1980. Aucun véhicule de série n'avait osé une rupture esthétique aussi violente depuis des décennies : on le déteste ou on le vénère, personne ne l'ignore. Ses arêtes sans concession ont déjà infusé dans le design automobile mondial. Icône instantanée ou impasse spectaculaire, l'histoire tranchera. C'est le brutalisme roulant de l'ère Musk.",
  },
]

export const voitures: Subject = {
  slug: "voitures",
  title: "Voitures",
  category: "Automobile",
  intro:
    "Les voitures qui ont écrit l'histoire, exposées par ordre chronologique, de la Ford T au Cybertruck. Parcourez la collection, puis départagez les modèles en duel pour révéler votre goût.",
  itemNoun: "voiture",
  itemGender: "f",
  duelQuestion: "Laquelle préférez-vous ?",
  searchPlaceholder: "Chercher un modèle, une marque…",
  detailFit: "cover",
  plateAspect: "aspect-4/3",
  items,
}
