import type { Item, Subject } from "@/lib/subjects"

const items: Item[] = [
  {
    slug: "ming-horseshoe",
    maker: "Chine, dynastie Ming",
    name: "Fauteuil fer à cheval",
    year: 1550,
    tagline: "La courbe parfaite, quatre siècles avant le design",
    description:
      "Le fauteuil Ming à dossier en fer à cheval résout au XVIe siècle un problème que le design moderne mettra quatre cents ans à reposer : un dossier et des accoudoirs d'une seule courbe continue, assemblée sans un clou par tenons et mortaises. Taillé dans le huanghuali, un palissandre doré aujourd'hui plus précieux que l'or, il allie économie de moyens et noblesse de port : on s'y tient droit, comme le lettré confucéen auquel il était destiné. Hans Wegner s'en inspirera directement pour sa Round Chair et sa Wishbone. Les grands exemplaires s'arrachent en salle des ventes au prix d'un appartement parisien. C'est le premier chef-d'œuvre du design d'assise, et peut-être l'indépassable.",
  },
  {
    slug: "windsor",
    maker: "Angleterre & Amérique",
    name: "Windsor",
    year: 1710,
    tagline: "L'assise du peuple anglo-saxon",
    description:
      "Née dans les ateliers des tourneurs anglais du début du XVIIIe siècle, la Windsor plante des barreaux tournés dans une assise en bois plein creusée à l'herminette : une architecture rustique, légère et quasi indestructible. Emportée en Amérique, elle devient la chaise des tavernes, des fermes et des assemblées : les pères fondateurs auraient signé la Déclaration d'indépendance assis sur des Windsor. Sa silhouette en éventail n'a jamais quitté la production depuis trois siècles. Elle a inspiré les Shakers comme les Scandinaves. C'est la démocratie du bois tourné.",
  },
  {
    slug: "shaker-ladder-back",
    maker: "Nouvelle-Angleterre, États-Unis",
    name: "Chaise shaker",
    year: 1820,
    tagline: "La foi faite chaise",
    description:
      "Les Shakers fabriquaient leurs chaises à barreaux comme ils priaient : avec une exigence de perfection qui excluait tout ornement. Dossier en échelle, assise en sangles de tissu tressées, bois tourné au plus juste : chaque gramme superflu est retiré, chaque proportion pesée. Suspendues aux patères des murs pour libérer le sol pendant le ménage, elles sont même pensées pour le rangement. Kaare Klint et les Danois du XXe siècle les considéraient comme des modèles absolus. C'est le degré zéro de l'ornement et le degré maximal du soin : la définition même du design moderne, cent ans avant lui.",
  },
  {
    slug: "thonet-14",
    maker: "Thonet",
    name: "Chaise n° 14",
    year: 1859,
    tagline: "La chaise bistrot, premier meuble industriel",
    description:
      "Six pièces de hêtre courbé à la vapeur, dix vis, deux écrous : la n° 14 de Michael Thonet est le premier meuble pensé pour la production et l'expédition de masse. Trente-six chaises démontées tenaient dans une caisse d'un mètre cube, envoyée aux quatre coins du monde. Plus de cinquante millions d'exemplaires vendus avant 1930, et des générations de cafés viennois et de bistrots parisiens meublés d'un seul geste courbe. Le Corbusier l'admirait et la plaçait dans ses intérieurs puristes. Elle est toujours en production, cent soixante-cinq ans plus tard. C'est la chaise la plus importante de l'histoire, tout simplement.",
  },
  {
    slug: "hill-house",
    maker: "Charles Rennie Mackintosh",
    name: "Hill House",
    year: 1903,
    tagline: "L'échelle noire, plus sculpture que siège",
    description:
      "Dessinée en 1903 pour la chambre à coucher de la Hill House d'Helensburgh, la chaise de Mackintosh assume de n'être pas confortable : son dossier en échelle démesuré, terminé par une grille, est une pure composition graphique destinée à rythmer l'espace blanc de la pièce. Laquée noire, plus haute qu'un homme assis, elle annonce l'idée radicale que le mobilier peut être d'abord de l'architecture. Les Viennois de la Sécession l'adulaient, le design italien des années 1970 la rééditera religieusement chez Cassina. C'est le moment où la chaise devient une œuvre d'art assumée.",
  },
  {
    slug: "red-and-blue",
    maker: "Gerrit Rietveld",
    name: "Rouge et bleue",
    year: 1918,
    tagline: "Un Mondrian en trois dimensions",
    description:
      "Construite en 1918 avec des sections de bois standard du commerce, peinte ensuite aux couleurs de De Stijl, la chaise Rouge et bleue de Rietveld est un manifeste : deux plans inclinés flottant dans une cage de lignes noires aux bouts jaunes, l'assise réduite à sa plus simple expression géométrique. Elle ne cherche pas le confort mais la démonstration : l'espace traverse la chaise au lieu qu'elle l'occupe. Sœur de la maison Schröder, elle est de toutes les collections de musées du monde. C'est le tableau abstrait dans lequel on peut s'asseoir.",
  },
  {
    slug: "wassily",
    maker: "Marcel Breuer",
    name: "Wassily",
    year: 1925,
    tagline: "Le vélo devenu fauteuil",
    description:
      "Marcel Breuer, 23 ans, jeune maître au Bauhaus, contemple le guidon de son vélo Adler et comprend que l'acier tubulaire courbé peut faire un meuble : le fauteuil B3 est le premier siège en tube d'acier de l'histoire, un club anglais dématérialisé en lignes chromées et bandes de tissu tendues. Rebaptisé « Wassily » parce que Kandinsky, son collègue de Dessau, en fut l'un des premiers admirateurs, il fonde à lui seul l'esthétique du mobilier moderne. Copié, réédité, cité à l'infini, il n'a pas pris une ride en un siècle. C'est l'acte de naissance du meuble machine.",
  },
  {
    slug: "cesca",
    maker: "Marcel Breuer",
    name: "Cesca",
    year: 1928,
    tagline: "Le porte-à-faux qui flotte sur l'air",
    description:
      "Avec la Cesca, Breuer applique le tube d'acier à une idée neuve : la chaise cantilever, sans pieds arrière, qui fait asseoir sur un ressort d'acier plutôt que sur quatre points. Le contraste entre le chrome froid du tube et la chaleur du cadre en hêtre canné est devenu l'un des accords les plus copiés du design. Produite par millions, squattant aussi bien les salles à manger bourgeoises que les salles d'attente, elle est peut-être la chaise moderniste la plus répandue au monde. Le MoMA la considère comme l'une des dix chaises les plus importantes du siècle. C'est l'avant-garde devenue meuble de famille.",
  },
  {
    slug: "lc4",
    maker: "Le Corbusier, Jeanneret & Perriand",
    name: "Chaise longue LC4",
    year: 1928,
    tagline: "La machine à se reposer",
    description:
      "« Machine à repos » selon les mots mêmes de Le Corbusier, la LC4 née de la collaboration avec Charlotte Perriand et Pierre Jeanneret épouse la courbe exacte du corps allongé : son arceau chromé glisse librement sur le socle noir, du redressé complet à la sieste totale, sans aucun mécanisme. C'est Perriand, longtemps effacée derrière les deux hommes, qui en régla l'ergonomie au millimètre. Peau de vache ou cuir noir, elle trône depuis un siècle dans tous les intérieurs d'architectes. C'est l'allongement fait géométrie pure.",
  },
  {
    slug: "barcelona",
    maker: "Ludwig Mies van der Rohe",
    name: "Barcelona",
    year: 1929,
    tagline: "Le trône du modernisme",
    description:
      "Dessinée avec Lilly Reich pour le pavillon allemand de l'Exposition de Barcelone en 1929 (officiellement pour accueillir le roi d'Espagne), la chaise Barcelona croise deux lames d'acier en ciseaux sous des coussins de cuir capitonnés. Mies voulait un siège « monumental et digne » à la hauteur de son pavillon d'onyx et de travertin : il créa le trône du XXe siècle. Depuis, aucun hall de siège social, aucun loft d'architecte ne se pense sans elle. Éditée par Knoll depuis 1953, contrefaite des millions de fois. C'est le pouvoir moderne assis sur du cuir noir.",
  },
  {
    slug: "paimio",
    maker: "Alvar Aalto",
    name: "Paimio 41",
    year: 1932,
    tagline: "Le bois courbé qui soigne",
    description:
      "Dessiné pour le sanatorium antituberculeux de Paimio, le fauteuil 41 d'Alvar Aalto devait faciliter la respiration des malades : l'inclinaison du dossier en contreplaqué de bouleau laqué a été calculée avec les médecins. Aalto prouve que la chaleur du bois lamellé peut tout ce que le tube d'acier des Allemands fait en froid : la modernité devient organique, nordique, humaine. La boucle fermée de ses flancs en bouleau est d'une élégance de calligraphie. C'est le moment où le modernisme apprend la douceur, et le manifeste fondateur du design finlandais.",
  },
  {
    slug: "stool-60",
    maker: "Alvar Aalto",
    name: "Tabouret 60",
    year: 1933,
    tagline: "Trois pieds courbés, un siècle d'usage",
    description:
      "Trois pieds en L de bouleau massif courbé (la « jambe Aalto », brevetée) vissés sous un disque : le tabouret 60 est l'un des objets les plus simples et les plus intelligents du siècle. Empilable en tour hélicoïdale, il sert de siège, de table de chevet, de marchepied ou de socle à peu près partout, des écoles finlandaises à l'Apple Store. Édité par Artek depuis 1935 sans interruption, copié par IKEA et tous les autres. Huit millions d'exemplaires et aucun signe de fatigue. C'est le degré zéro du meuble, donc un sommet.",
  },
  {
    slug: "zig-zag",
    maker: "Gerrit Rietveld",
    name: "Zig-Zag",
    year: 1934,
    tagline: "Quatre planches, un éclair",
    description:
      "Quatre plans de bois assemblés en Z : la Zig-Zag de Rietveld supprime les pieds, remplacés par une ligne brisée qui défie visiblement la gravité. L'assemblage à queues d'aronde et boulons cachés relève de la haute voltige d'ébénisterie. Rietveld cherchait une chaise fabricable d'une seule pièce de matériau ; il a trouvé un idéogramme. Le porte-à-faux n'est plus une prouesse d'acier mais un geste graphique pur, qui inspirera la Panton trois décennies plus tard. C'est le trait de crayon devenu siège.",
  },
  {
    slug: "lcw",
    maker: "Charles & Ray Eames",
    name: "LCW",
    year: 1946,
    tagline: "« La chaise du siècle » en contreplaqué moulé",
    description:
      "Pendant la guerre, Charles et Ray Eames moulent du contreplaqué pour des attelles de jambes de la Navy ; en 1946, ils appliquent la technologie à une chaise basse dont les coques épousent le corps en deux coquilles séparées, reliées par des entretoises et des silentblocs de caoutchouc. Time Magazine la nommera « meilleur design du XXe siècle ». Ni vis apparente, ni angle droit : tout est courbe organique et chaleur du bois de frêne ou de noyer. Elle fonde l'empire Eames chez Herman Miller. C'est l'Amérique optimiste d'après-guerre, moulée en trois dimensions.",
  },
  {
    slug: "womb",
    maker: "Eero Saarinen",
    name: "Womb",
    year: 1948,
    tagline: "Le fauteuil dans lequel on se love",
    description:
      "Florence Knoll commande à Saarinen « un fauteuil comme un panier de coussins dans lequel je peux me pelotonner » : la Womb (utérus, le nom assume tout) moule une coque de fibre de verre garnie de mousse où l'on s'assoit en tailleur, de travers, en boule. C'est la première grande chaise pensée pour la posture libre plutôt que pour la position assise correcte. Sa silhouette enveloppante rassure autant qu'elle accueille. Elle inaugure l'ère des coques organiques que Saarinen portera jusqu'à la Tulip. C'est le confort psychanalysé.",
  },
  {
    slug: "wishbone",
    maker: "Hans J. Wegner",
    name: "Wishbone CH24",
    year: 1949,
    tagline: "Le Ming danois tressé main",
    description:
      "Wegner découvre les fauteuils Ming dans un livre et en distille l'essence pendant des années : la Wishbone de 1949 en est l'aboutissement, dossier-accoudoirs d'une seule courbe vapeur, dossier en Y (le bréchet qui lui donne son nom) et assise en corde de papier tressée à la main, cent vingt mètres et une heure de travail par chaise. Produite sans interruption par Carl Hansen & Søn depuis 1950, elle est LA chaise danoise, celle des tables familiales cultivées du monde entier. Chaque détail est à la fois structurel et beau. C'est l'artisanat scandinave à son point de perfection.",
  },
  {
    slug: "dsw",
    maker: "Charles & Ray Eames",
    name: "Plastic Chair DSW",
    year: 1950,
    photoCredit: "withassociates · Flickr (CC BY-SA 2.0)",
    tagline: "La coque universelle aux mille bases",
    description:
      "Première chaise de série en plastique moulé, la Plastic Chair des Eames sépare génialement la coque de son piètement : la même assise en fibre de verre se visse sur des pieds bois « Eiffel », des tubes d'acier ou des patins, en une famille infinie. Pensée pour le concours « mobilier à bas coût » du MoMA, elle démocratise le design d'auteur des décennies avant IKEA. Sa déclinaison DSW aux pieds de bois clair est devenue l'un des objets les plus photographiés de Pinterest, et les plus contrefaits du monde. C'est la chaise moderne par défaut de la planète entière.",
  },
  {
    slug: "diamond",
    maker: "Harry Bertoia",
    name: "Diamond",
    year: 1952,
    tagline: "De l'air sculpté en fil d'acier",
    description:
      "« Ces chaises sont surtout faites d'air, comme des sculptures », disait Bertoia, sculpteur avant tout, de sa Diamond : une nappe de fils d'acier soudés à la main, cintrée en corolle de diamant posée sur un piètement fin comme un trait. La transparence totale du treillis dissout le meuble dans l'espace : révolution silencieuse en 1952. Knoll la produit depuis soixante-dix ans, dedans comme dehors. Les royalties permirent à Bertoia d'abandonner le mobilier pour ses sculptures sonores. C'est le dessin dans l'espace, littéralement.",
  },
  {
    slug: "serie-7",
    maker: "Arne Jacobsen",
    name: "Série 7",
    year: 1955,
    tagline: "La danoise la plus vendue du monde",
    description:
      "Neuf couches de placage moulées en une coque cintrée à la taille : la Série 7 de Jacobsen raffine la technique des Eames en une silhouette de sablier devenue la chaise la plus vendue de l'histoire du design danois (plus de cinq millions d'exemplaires). Empilable, légère, disponible dans toutes les couleurs, elle meuble la moitié des cuisines, écoles et cafés de Scandinavie. Le portrait de Christine Keeler posant nue à califourchon sur une (copie de) Série 7 en fit une icône pop en 1963. C'est l'industrialisation du galbe parfait.",
  },
  {
    slug: "tulip",
    maker: "Eero Saarinen",
    name: "Tulip",
    year: 1956,
    tagline: "La fin du « taudis de pieds »",
    description:
      "Saarinen détestait le « slum of legs », ce taudis de pieds encombrant le dessous des tables : la Tulip pose une coque de fibre de verre sur un unique pied central en fonte d'aluminium, comme un verre de vin ou une fleur. Avec la table assortie, elle compose les intérieurs les plus futuristes des années 1950, jusqu'aux plateaux de Star Trek, meublés de copies directement inspirées d'elle. Sa blancheur sculpturale reste d'une modernité intacte. Knoll la produit sans pause depuis 1957. C'est l'assise réduite à une seule ligne verticale, l'épure absolue du siècle américain.",
  },
  {
    slug: "eames-lounge",
    maker: "Charles & Ray Eames",
    name: "Lounge Chair",
    year: 1956,
    tagline: "Le gant de baseball du gentleman moderne",
    description:
      "Charles Eames voulait « le confort chaleureux et usé d'un gant de première base » : trois coques de contreplaqué moulé plaquées de palissandre, du cuir noir capitonné de plumes et de duvet, un ottoman assorti. La Lounge Chair 670 de 1956 est le luxe assumé du couple qui avait démocratisé la chaise. Présentée en direct à la télévision américaine, offerte à Billy Wilder, elle n'a jamais quitté ni la production Herman Miller ni les lofts d'architectes. Sa cote vintage grimpe sans fin. C'est le fauteuil-club réinventé par la modernité, et son plus grand best-seller de prestige.",
  },
  {
    slug: "superleggera",
    maker: "Gio Ponti",
    name: "Superleggera",
    year: 1957,
    tagline: "1,7 kilo, soulevable d'un doigt",
    description:
      "Gio Ponti part de la chaise vernaculaire des pêcheurs de Chiavari et la raffine pendant dix ans jusqu'à l'os : la Superleggera de 1957 pèse 1,7 kilo, se soulève d'un seul doigt (la publicité montrait un enfant la brandissant) et survit, dit-on, à une chute du quatrième étage en rebondissant. Section triangulaire des montants de frêne, assise cannée, rien d'autre. C'est la réponse italienne au fonctionnalisme : la légèreté comme élégance suprême, la tradition artisanale poussée à la limite physique. Cassina la produit toujours. C'est l'esprit milanais fait chaise.",
  },
  {
    slug: "egg",
    maker: "Arne Jacobsen",
    name: "Egg",
    year: 1958,
    tagline: "Un cocon pivotant sculpté au sous-sol",
    description:
      "Jacobsen sculpte l'Egg dans le plâtre de son garage pour le hall du SAS Royal Hotel de Copenhague, premier gratte-ciel danois dont il dessine tout, du bâtiment aux cendriers : une coquille enveloppante qui isole du brouhaha du lobby, pivotant sur son pied d'aluminium. C'est l'invention du cocon privé dans l'espace public, concept que tous les hôtels et aéroports du monde exploiteront. Sa silhouette d'œuf entrouvert est l'une des plus reconnaissables du design. Le hall du Royal en a fait un pèlerinage. C'est l'intimité devenue mobilier.",
  },
  {
    slug: "acapulco",
    maker: "Mexique, artisan inconnu",
    name: "Acapulco",
    year: 1962,
    tagline: "L'anonyme des tropiques devenue culte",
    description:
      "Nul ne sait qui a tendu le premier ces cordes de vinyle colorées sur un œuf d'acier ouvert, quelque part dans l'Acapulco des années 1950-60, l'âge d'or où Hollywood bronzait sur la côte mexicaine. Inspirée dit-on des techniques de tissage mayas, aérée pour la chaleur tropicale, la chaise Acapulco est un design vernaculaire sans auteur, sans brevet, sans éditeur, et pourtant instantanément reconnaissable. Redécouverte dans les années 2000, elle a envahi les terrasses et les rooftops du monde entier. C'est la preuve que l'anonymat peut produire des icônes.",
  },
  {
    slug: "ball",
    maker: "Eero Aarnio",
    name: "Ball",
    year: 1963,
    tagline: "La pièce dans la pièce",
    description:
      "Eero Aarnio dessine sa première maison, n'a pas de fauteuil à sa taille et découpe une sphère : la Ball Chair, présentée à Cologne en 1966, fait le tour du monde en une semaine. Coque de fibre de verre pivotante, intérieur capitonné rouge, téléphone intégré en option : c'est un cockpit d'intimité, une « pièce dans la pièce » selon ses mots. Elle devient l'emblème absolu du design space age, réquisitionnée par le cinéma et la publicité dès qu'il faut dire « futur sixties ». Le Prisonnier en a fait un personnage de série à part entière. C'est la bulle pop dans laquelle tout le monde a rêvé de s'asseoir.",
  },
  {
    slug: "panton",
    maker: "Verner Panton",
    name: "Panton",
    year: 1967,
    tagline: "La première chaise d'une seule pièce de plastique",
    description:
      "Verner Panton poursuit l'idée pendant dix ans contre l'avis de toute l'industrie : une chaise en porte-à-faux moulée d'une seule pièce de plastique, sans assemblage aucun. Vitra ose enfin en 1967, et la Panton devient l'objet le plus sensuel du design pop : une vague glossy rouge, orange ou blanche qui semble coulée d'un tube de peinture. Sa courbe en S réalise en polymère le rêve entrevu par la Zig-Zag de Rietveld. Kate Moss posera dessus pour Vogue, comme Amanda Lear avant elle. C'est la ligne libre enfin affranchie de la menuiserie.",
  },
  {
    slug: "sacco",
    maker: "Gatti, Paolini & Teodoro",
    name: "Sacco",
    year: 1968,
    tagline: "L'anti-chaise remplie de billes",
    description:
      "Trois jeunes designers turinois proposent à Zanotta un « siège universel » : un sac de billes de polystyrène qui épouse n'importe quelle posture (assis, vautré, en tailleur). En pleine contestation de 1968, le Sacco est un manifeste politique autant qu'un meuble : il abolit la chaise bourgeoise, sa posture correcte et sa hiérarchie. L'industrie du pouf poire mondial en découle intégralement. Le MoMA et le Centre Pompidou l'ont collectionné comme un jalon de l'anti-design italien. C'est mai 68 en version assise, ou plutôt affalée.",
  },
  {
    slug: "monobloc",
    maker: "Monde entier",
    name: "Monobloc",
    year: 1972,
    tagline: "La chaise la plus assise de l'humanité",
    description:
      "Un kilo de polypropylène injecté en une minute : la chaise monobloc, industrialisée dans les années 1970 notamment par le Français Henry Massonnet, est devenue l'objet manufacturé le plus répandu de la planète, des terrasses de PMU aux mariages de Lagos, des plages thaïlandaises aux cours de Bamako. Vendue parfois moins de trois euros, blanche le plus souvent, elle est le seul meuble véritablement universel, et le plus démocratique de l'histoire. Méprisée par le design officiel, elle fascine désormais les théoriciens qui y voient un « objet sans contexte ». Des milliards d'humains s'y sont assis. Aucune chaise de ce musée ne peut en dire autant.",
  },
  {
    slug: "wiggle",
    maker: "Frank Gehry",
    name: "Wiggle Side Chair",
    year: 1972,
    tagline: "Le carton ondulé devenu sculpture",
    description:
      "Avant les musées titanesques, Frank Gehry colle des dizaines de couches de carton ondulé en fibres croisées et découpe dedans un ruban serpentin : la Wiggle prouve que le matériau le plus pauvre du monde peut être structurel, sensuel et durable. La série « Easy Edges » devait démocratiser le meuble ; elle marchait si bien que Gehry l'arrêta, refusant de devenir designer de mobilier. Vitra la réédite depuis 1992. La densité du carton lui donne un toucher de velours et une solidité de béton. C'est l'architecture de Bilbao en germe, à l'échelle d'une chaise.",
  },
  {
    slug: "costes",
    maker: "Philippe Starck",
    name: "Costes",
    year: 1984,
    tagline: "Trois pieds pour ne pas faire trébucher les serveurs",
    description:
      "Dessinée pour le Café Costes de Paris, dont Starck signe tout le décor en 1984, la chaise éponyme n'a que trois pieds : « pour que les garçons de café trébuchent deux fois moins », plaisante le designer. Dossier arrondi en acajou moulé, assise de cuir, silhouette de smoking : elle lance à la fois la starisation de Starck et la mode mondiale du café d'auteur. Le Costes fermera, la chaise restera, produite par Driade et copiée dans les brasseries du monde entier. C'est le design français des années Mitterrand : brillant, médiatique, impertinent.",
  },
  {
    slug: "aeron",
    maker: "Herman Miller",
    name: "Aeron",
    year: 1994,
    tagline: "Le trône ergonomique de l'ère du bureau",
    description:
      "Dessinée par Don Chadwick et Bill Stumpf à partir d'études sur le vieillissement et la posture, l'Aeron de 1994 remplace le rembourrage par une membrane technique tendue, le Pellicle, qui ventile et répartit la pression : c'est la première chaise pensée en pure ingénierie du corps au travail. Star des startups de la bulle Internet (on mesurait la santé d'une société au nombre d'Aeron de ses bureaux), elle est entrée au MoMA avant même sa commercialisation. Trente ans après, elle reste la référence absolue du siège de bureau. C'est l'ergonomie devenue symbole de statut.",
  },
  {
    slug: "louis-ghost",
    maker: "Philippe Starck",
    name: "Louis Ghost",
    year: 2002,
    tagline: "Louis XVI en polycarbonate invisible",
    description:
      "Un médaillon Louis XVI moulé en polycarbonate transparent d'une seule pièce : la Louis Ghost de Starck pour Kartell est le mariage impertinent de Versailles et de l'injection plastique, le patrimoine français rendu littéralement invisible. Vendue à plus de deux millions d'exemplaires, c'est la chaise design la plus vendue du XXIe siècle. Elle a envahi les mariages, les boutiques et les salons haussmanniens qu'elle ponctue d'un clin d'œil fantôme. Empilable, incassable, indifférente à la pluie. C'est l'ironie postmoderne devenue produit de masse parfait.",
  },
]

export const chaises: Subject = {
  slug: "chaises",
  title: "Chaises",
  category: "Mobilier",
  intro:
    "Les chaises qui ont écrit l'histoire du design, exposées par ordre chronologique, du fauteuil des lettrés Ming à la Louis Ghost. Parcourez la collection, puis départagez les pièces en duel pour révéler votre goût.",
  itemNoun: "chaise",
  itemGender: "f",
  duelQuestion: "Laquelle préférez-vous ?",
  searchPlaceholder: "Chercher une chaise, un designer…",
  detailFit: "contain",
  plateAspect: "aspect-4/5",
  items,
}
