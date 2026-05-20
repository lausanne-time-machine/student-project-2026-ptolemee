<style>
/* Justification et élargissement global des textes pour occuper toute la largeur */
h1, h2, h3, h4, p, li {
max-width: none !important;
text-align: justify;
text-justify: inter-word;
}
/* Style global du conteneur */
.obs-container {
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
color: #24292e;
line-height: 1.6;
max-width: 1012px;
margin: 0 auto;
padding: 10px;
}
.obs-container h1 {
font-size: 2em;
border-bottom: 1px solid #eaecef;
padding-bottom: 0.3em;
margin-top: 24px;
margin-bottom: 16px;
font-weight: 600;
}
.obs-container h2 {
font-size: 1.5em;
border-bottom: 1px solid #eaecef;
padding-bottom: 0.3em;
margin-top: 32px;
margin-bottom: 16px;
font-weight: 600;
}
.obs-container h3 {
font-size: 1.25em;
margin-top: 24px;
margin-bottom: 12px;
font-weight: 600;
}
.obs-container h4 {
font-size: 1.1em;
margin-top: 20px;
margin-bottom: 8px;
font-weight: 600;
}
.obs-container ul {
padding-left: 20px;
margin-bottom: 16px;
}
.obs-container li {
margin-bottom: 8px;
}
.obs-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 24px;
margin: 20px 0;
}
.obs-card {
border: 1px solid #e1e4e8;
border-radius: 8px;
padding: 20px;
background: #fafbfc;
box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.theme-pontaise {
border-top: 4px solid #3182bd;
}
.theme-prelaz {
border-top: 4px solid #31a354;
}
.obs-img-container {
text-align: center;
margin: 20px 0;
}
.obs-img {
max-width: 100%;
height: auto;
border-radius: 4px;
}
.obs-caption {
font-size: 0.85em;
color: #555;
font-style: italic;
margin-top: 8px;
display: block;
text-align: center;
}
/* Conteneur flottant pour l'image verticale */
.obs-float-right {
float: right;
width: 300px;
margin: 0 0 20px 24px;
padding: 10px;
border: 1px solid #e1e4e8;
border-radius: 8px;
background: #fafbfc;
box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
/* Nettoyage des floats pour éviter les débordements sur les titres suivants */
.obs-clearfix::after {
content: "";
clear: both;
display: table;
}
@media (max-width: 768px) {
.obs-grid {
grid-template-columns: 1fr;
}
.obs-float-right {
float: none;
width: 100%;
margin: 20px 0;
padding: 0;
border: none;
background: none;
box-shadow: none;
}
}
</style>

<div class="obs-container">

<h1>La Pontaise et Prélaz : <br/>Les hauts et les bas de Lausanne</h1>

<h2>Résumé</h2>
<p>Situés respectivement sur le plateau nord et dans le fond de la vallée à l’ouest de Lausanne, les quartiers de la Pontaise et de Prélaz se sont chacun construits au gré des décisions politiques et industrielles, et témoignent de dynamiques de quartiers spécifiques et prononcées.</p>

<div class="obs-grid">
<div class="obs-card theme-pontaise">
<h3>La Pontaise</h3>
<p>La Pontaise s’est développée et construite à partir de choix institutionnels : l’emplacement de la caserne pour la première Division Fédérale en novembre 1878, au détriment de l’emplacement de la Cité, marque un tournant dans le rôle que jouera le quartier dans les décennies suivantes. L’Orphelinat (1873) son stand de tir (agrandi en 1881), ses abattoirs (1887), l’établissement de la prison du Bois-Mermet (1904-5) démontrent que la Pontaise s’est démarquée par des institutions rejetées par la ville.</p>
<p>Le climat du quartier, parfois conflictuel entre recrues militaires et habitants, tireurs et promeneurs, a été régulièrement polémique. Par l’entremise des Amis de la Pontaise, le quartier s’est régulièrement insurgé contre l’emplacement du stand de tir (bien que sécurisé en 1921, elle en demandera le déplacement en 1934 encore), contre les décisions des colonels de la caserne (la querelle autour de la sortie de quartier en 1901 en est un exemple).</p>
<div class="obs-img-container">
<img src="icono/pontaise_164370.jpg" class="obs-img" alt="Vue de la caserne" />
<span class="obs-caption">Vue de la caserne prise depuis le Signal de Sauvabelin 1890</span>
</div>
</div>

<div class="obs-card theme-prelaz">
<h3>Prélaz</h3>
<p>A Prélaz, en revanche, l’urbanisation a été dictée par la topographie et répond à une logique d’industrialisation de fond de vallée. C’est son emplacement stratégique, dans la basse vallée du Flon, qui en fait le lieu idéal pour installer la gare de marchandises CFF (si le lieu est décidé dès juillet 1878, il n’est effectif qu' en mai 1927).</p>
<p>Ce sont les tramways lausannois qui y installent leur dépôt en 1902 : le quartier se dote aussi d’une industrie de biscuits (Manufacture de Biscuits (1904-1910)) qui forment le caractère ouvrier et industriel du quartier. La chronique des faits divers est principalement dominée par des accidents de tramways (vélos ou piétons).</p>
<div class="obs-img-container">
<img src="images/CollègePrelaz.jpg" class="obs-img" alt="Collège de Prélaz" />
<span class="obs-caption">Collège de Prélaz</span>
</div>
</div>
</div>

<h2>L’évolution des quartiers</h2>
<p>Malgré leurs vocations différentes, les deux secteurs périphériques connaissent un développement similaire : morcellement des origines, l’émergence due à l’irruption de grandes infrastructures, période de tensions sociales et infrastructurelles, avant d’atteindre une phase de stabilisation.</p>

<h3>Les origines</h3>
<p>En 1870, la Pontaise est constituée de modestes maisons unifamiliales tandis que Prélaz se distingue par ses prés irrigués et ses domaines et campagnes patriciennes (<em>La campagne de Prélaz, Petit-Prélaz, Villa Prélaz</em>) qui vendent, de temps à autre, des fruits et du bétail. En 1873, l’orphelinat se déplace pour aller dans le quartier de la Pontaise.</p>
<h3>Les premiers bouleversements</h3>
<p>Ensuite, le quartier se transforme par l’établissement de la Caserne pour la Pontaise, et de la gare de fret CFF pour Prélaz.</p>

<ul>
<li><strong>À la Pontaise :</strong> La caserne est l’issue d’un long débat à Lausanne, qui préfère l’emplacement de la Cité à celui des hauts de Lausanne. Finalement, pour des raisons budgétaires (fr. 400’000) et de salubrité, ce sont les Plaines du Loup qui verront surgir de terre les bâtiments militaires. Le concours d’architecture est lancé en 1879 et la caserne inaugurée en grande pompe en avril 1882. Le Stand de tir est agrandi dans le même temps pour satisfaire les besoins d’une telle caserne fédérale.</li>
<li><strong>À Prélaz :</strong> Le projet de gare de marchandises CFF est reporté d’année en année avant de se concrétiser en mai 1927, après notamment réclamation des milieux industriels. La Manufacture de Biscuits (1904) et les canalisations (1908) viennent compléter l’image industrielle du quartier. Les Tramways Lausannois installent leurs dépôts et ateliers de réparation, accueillant 72 voitures, ateliers mécaniques et bureaux.</li>
</ul>

<div class="obs-img-container">
<img src="icono/pontaise_132602.jpg" class="obs-img" style="max-width: 700px;" alt="Vue aérienne de la Pontaise" />
<span class="obs-caption">Vue aérienne du haut des quartiers de la Pontaise 1914</span>
</div>

<h3>Une période de croissance et de tensions</h3>
<p>Après les premiers changements visuels des quartiers, la population augmente (la Pontaise passe de 1500 à 2300 habitants entre 1886 et 1896) et fait face aux premières tensions.</p>

<div class="obs-clearfix">
<div class="obs-float-right">
<img src="images/AffaireTenue.png" class="obs-img" alt="Extrait de la Gazette de Lausanne" />
<span class="obs-caption">Extrait de la Gazette de Lausanne - L'affaire de la tenue de sortie</span>
</div>

<h4>Tensions à la Pontaise : <br/>Eau, commerce et sécurité</h4>
<p>Plusieurs pénuries d’eau frappent le quartier de la Pontaise en 1887, notamment à cause de la présence simultanée des casernes et des abattoirs, particulièrement aquavores. Une intense activité commerciale se développe dans le quartier autour de la Caserne, profitant notamment des sorties de recrues, qui remplissent les cafés attenants.</p>
<p>Cette dépendance commerciale est particulièrement palpable en 1901 lorsque le Colonel Wassmer refuse aux militaires de sortir à midi sans leur tenue de sortie, les incitant à rester en caserne. Le quartier s’insurge, faisant parvenir une pétition au Conseil Fédéral. Selon la <em>Gazette de Lausanne</em> du 29 mai 1901, les commerçants de la Pontaise dépendent de ces pauses de midi, avant l’appel de deux heures. Cette contrainte réglementaire incitait les militaires à délaisser les abords de la caserne, au déplaisir des commerçants du quartier.</p>
<p>Le quartier voit ses rues nommées afin de mettre fin au “dédale” installé par l’aménagement chaotique progressif des rues. Le café de la Violette, dit de tempérance, vient s’installer non loin de la caserne pour combattre les dérives de l’alcool.</p>
<p>Le stand de tir pose également problème : un grave accident survient en 1912 où une manipulation dangereuse fait perdre la vie à un père de famille. Bien que le stand fût sécurisé en 1921 (murs en béton, cibles électriques), son emplacement continuera à faire débat.</p>
</div>
<div class="obs-clearfix">
<div class="obs-float-right">
<img src="images/NouveauPrelaz.jpg" class="obs-img" alt="Plan du nouveau quartier de Prélaz, 1913" />
<span class="obs-caption">Plan du nouveau quartier de Prélaz, 1913</span>
</div>

<h4>Tensions à Prélaz : <br/>Inondations, transports et hygiénisme</h4>
<p>A Prélaz, les inondations du Flon et de la Mèbre sont fréquentes et mettent en péril les cultures ouvrières (1910 et 1917) et on y déplore several accidents de la route entre des piétons, vélos et les multiples tramways sortant du dépôt.</p>
<p>Le collège de Prélaz, fini en 1908, est une prouesse pour l’époque : avec ses baies vitrées et son linoléum, l’établissement scolaire est à la pointe de la technologie hygiéniste. Malgré son coût (fr. 500’000), il a le rapport prix/classe le plus attractif de Lausanne.</p>
<p>Face à la population grandissante, la Société coopérative d’habitation fonde la cité ouvrière de <em>Prélaz-Cottages</em>, un sous-quartier qui se démarque par des maisons en terre cuite et ciment, dotées de jardins ouvriers. Standardisées, elles respectent des règles sanitaires afin d’assurer la salubrité des nouvelles habitations. L’hygiénisme est une réponse à la crise du logement ouvrier engendrée par l’industrialisation du quartier.</p>

<h3>Stabilisation, culture et religion</h3>
<p>Enfin, les deux quartiers vivent une phase de stabilisation, qui se constate par l’implantation d’édifices religieux. À la Pontaise voit le jour le <strong>Temple Saint-Luc</strong>, dont la construction en avril 1940 est l’aboutissement de décennies de discussions et recherches de fonds. À Prélaz, l'<strong>église Saint-Joseph</strong> est consacrée par l’évêque en juin 1936, tandis qu’une chapelle protestante (transférée de Bellevaux) complète le chapelet d’églises en 1940.</p>
<p>En parallèle, les activités sportives et culturelles se développent :</p>

<div class="obs-clearfix">
<div class="obs-float-right">
<img src="icono/pontaise_142852.jpg" class="obs-img" alt="Tram sur la rue de la Pontaise" />
<span class="obs-caption">Tram sur la rue de la Pontaise et l'avenue Druey 1900–1911</span>
</div>

<ul>
<li><strong>Chant et culture :</strong> La chorale de la Pontaise donne de nombreux concerts à travers la ville et participe aux défilés des 1er-août.</li>
<li><strong>Aviation :</strong> Profitant des étendues et esplanades autour du terrain militaire, la Pontaise devient le cadre de différents meetings d’aviation (1911, 1913 et 1924) sur les Plaines-du-Loup. Le quartier devient alors un “aérodrome” improvisé et l’on réorganise la circulation afin que les nombreux curieux puissent apercevoir les engins volants.</li>
<li><strong>Sport :</strong> Le développement des installations sportives de la Pontaise avec le stade de Montriond-Sports (futur Lausanne-Sport) dès 1912, complété par le Vélodrome en 1921-22, donne un dynamisme sportif au quartier. De nombreux événements déplacent la population dans les hauteurs de la cité, notamment le match Suisse-Tchécoslovaquie en mai 1929, qui attire 20’000 spectateurs, ou le triomphe de la Suisse face à la France en avril 1945 (25’000 spectateurs).</li>
</ul>

<div class="obs-grid">
<div class="obs-card" style="border:none; padding:0; background:none; box-shadow:none;">
<div class="obs-img-container">
<img src="icono/pontaise_98156.jpg" class="obs-img" alt="Match Tchécoslovaquie Suisse" />
<span class="obs-caption">Match Tchéco-Slovaquie Suisse 1926</span>
</div>
</div>
<div class="obs-card" style="border:none; padding:0; background:none; box-shadow:none;">
<div class="obs-img-container">
<img src="images/FranceSuisse.png" class="obs-img" alt="Match France Suisse 1945" />
<span class="obs-caption">Extrait de la Gazette de Lausanne du 9 avril 1945</span>
</div>
</div>
</div>

<h2>Être un quartier : quelques mots sur la vie à la Pontaise et Prélaz</h2>
<p>La sociabilité à la Pontaise et Prélaz se matérialise par différents lieux et caractéristiques. Les cafés, les associations, les rassemblements populaires et les lieux communs font vivre les différents quartiers en lui apportant vie et dynamisme.</p>

<div class="obs-grid">
<!-- Section Cafés -->
<div class="obs-card">
<h3>Les cafés</h3>
<p><strong>À la Pontaise :</strong> La présence de la caserne (inaugurée en 1892) engendre une économie liée à la boisson florissante et lucrative (<em>Café du Stand, la Brasserie du Mont-Blanc, le Café des Casernes, le Café des Lauriers</em> ou encore le <em>Café Nicollier</em>). Ces lieux de consommation sont aussi des espaces d’échange où l’on dépose des formulaires de référendum (notamment à la fin du XIXe siècle), où l’on tient des assemblées générales (comme les Libéraux dans les années 1910 et 1930) et des bureaux de vote.</p>
<p>Derrière ces échanges se cache néanmoins un cadre de violence : la Brasserie du Mont-Blanc est marquée par des rixes entre Vaudois et ouvriers italiens (1895), tandis que des bagarres entre ivrognes y sont fréquentes. En réponse à ce climat conflictuel, le <em>Café de la Violette</em> est fondé en 1904 par une société philanthropique. Ce restaurant "de tempérance" est soutenu par les officiers pour offrir aux recrues "des locaux propres, des journaux et des jeux de quilles" sans alcool.</p>
<p><strong>À Prélaz :</strong> On retrouve également quelques cafés servant de lieux de rencontre pour des assemblées ou les travailleurs de ce quartier industriel et ouvrier (<em>Café de Sébeillon, Café de Prélaz-Nouveau</em> ou encore le <em>Café au Poirier</em>).</p>
<div class="obs-img-container">
<img src="icono/pontaise_133948.jpg" class="obs-img" alt="Devant la caserne" />
<span class="obs-caption">Le jour du licenciement (devant la caserne 1900-1915)</span>
</div>
</div>

<!-- Section Associations -->
<div class="obs-card">
<h3>Les associations</h3>
<p>Les associations sont un liant important dans la vie de quartier.</p>
<p>Le quartier de la Pontaise peut se targuer d’avoir une chorale dès 1906. Composée de 16 chanteurs (puis 90), la <strong>Chorale de la Pontaise</strong> se produit régulièrement à Lausanne, où elle anime les banquets, les fêtes patriotiques, donne des concerts annuels au Casino de Montbenon ou au Comptoir Suisse, souvent suivis de bals et de tombolas (avec opérettes ou ballets). Elle est liée autour de la devise "Par le chant à l'amitié".</p>
<p>La Pontaise possède aussi une association liée au quartier, fondée en 1881 : <strong>"Les Amis de la Pontaise"</strong>. Elle construit en 1892 une table d’orientation près de la caserne. Elle comptera en 1920, plus de 350 membres avant de devenir, en 1934, la <em>Société de développement du Nord</em>. Sa sociabilité est culturelle et éducative : elle gère une bibliothèque populaire de 2000 volumes, offre une horloge électrique au quartier en 1928 et organise des conférences publiques sur l’hygiène sociale (notamment sur les "maladies secrètes" en 1919).</p>
<p>A Prélaz, on trouve une société similaire, la <strong>Société de développement de l’Ouest</strong>, dont le travail vise à améliorer la vie de quartier. En 1941, elle a notamment organisé un concours de jardins familiaux au Parc de Valency, alors que le parc était utilisé pour des cultures de pommes de terre dans le cadre du plan Wahlen.</p>
</div>

<!-- Section Rassemblements -->
<div class="obs-card">
<h3>Les rassemblements populaires</h3>
<p>Plusieurs fêtes rassemblent la population : c’est le cas notamment de la fête nationale du 1er août, des différentes kermesses et des représentations culturelles (théâtre, musique).</p>
<p>Les kermesses paroissiales vont de pair avec la construction des églises Saint-Joseph à Prélaz et du temple de Saint-Luc à la Pontaise. En septembre 1936 par exemple, la paroisse catholique Saint-Joseph organise à Prélaz une grande vente-kermesse sous les ombrages de son parc, avec jeux pour enfants, cantines couvertes et soupers chauds.</p>
<p>Du côté de la Pontaise, la fête nationale marque chaque année, le premier août, un événement majeur autour de la caserne. Sur l’esplanade attenante, la foule se réunit autour des fanfares militaires et de la Chorale de la Pontaise. Les conseillers d’État y font leurs discours, avant que la soirée ne s’achève par le traditionnel feu d’artifice, les retraites aux flambeaux et le cantique suisse.</p>
<p>Notons enfin la présence d’un théâtre en plein air à Prélaz en 1937, pour lequel une troupe de 200 comédiens et comédiennes montent la pièce <em>Jedermann</em> (Le Jeu de la mort de l’homme riche) dans le Parc de Prélaz. La troupe de Radio-théâtre diffuse la pièce de manière radiodiffusée.</p>
<div class="obs-img-container">
<img src="icono/pontaise_183572.jpg" class="obs-img" alt="Défilé 1920" />
<span class="obs-caption">Défilé 1920-1926</span>
</div>
</div>

<!-- Section Lieux Communs -->
<div class="obs-card">
<h3>Les lieux communs</h3>
<p>Plusieurs espaces extérieurs servent de lieux de rencontre et participent à la sociabilité du quartier.</p>
<p>La presse ne parle pas spécifiquement de places qui agiraient comme lieux de rassemblements, mais d’autres espaces jouent ce rôle. Exception faite de la <strong>Place de la Liberté</strong>, qui remplace le carrefour du Verger en 1898, une fois qu’on y a planté un arbre, servant de repère au quartier.</p>
<p>À la Pontaise, c’est l’esplanade militaire (<strong>Pré Noverraz</strong>), en face de la caserne qui sert de lieu de promenade pour les civils qui viennent écouter la fanfare. La proximité peut néanmoins créer des frictions entre la population civile et les militaires. En 1905, après des insultes proférées à l’égard de soldats, la garde est sommée de charger la foule à la baïonnette.</p>
<p>Le voisinage est parfois source de tensions au sein des ménages. En 1933, une affaire judiciaire éclate autour du meurtre de M. Gaudard par V. Longchamp. Cet incident dramatique est l’aboutissement d’une dispute entre voisines au sujet d’un trou dans un mur mitoyen pour accrocher une bicyclette.</p>
<p>À Prélaz, on pourra noter que les <strong>jardins ouvriers</strong> et les cours intérieures ont pu servir de lieux de sociabilisation. La cité coopérative de <em>Prélaz-Cottages</em>, créée en 1921 est l’occasion pour les locataires de se rencontrer car chacun a son jardin de 100 mètres carrés. Ils peuvent aussi bricoler dans les ateliers partagés du sous-sol.</p>
<div class="obs-img-container">
<img src="images/JardinsPrelaz.jpg" class="obs-img" alt="Jardins Prélaz" />
<span class="obs-caption">Jardins de Prélaz</span>
</div>

</div>
</div>
</div>

<style>
/* Style de la zone de défilement de la frise */
.timeline-scroll-container {
width: 100%;
overflow-x: auto;
white-space: nowrap;
margin: 40px 0;
padding: 20px 0;
background: #f8f9fa;
border: 1px solid #e1e4e8;
border-radius: 8px;
scroll-behavior: smooth;
}
/* Personnalisation de la barre de défilement */
.timeline-scroll-container::-webkit-scrollbar {
height: 8px;
}
.timeline-scroll-container::-webkit-scrollbar-track {
background: #f1f1f1;
border-radius: 4px;
}
.timeline-scroll-container::-webkit-scrollbar-thumb {
background: #ccc;
border-radius: 4px;
}
.timeline-scroll-container::-webkit-scrollbar-thumb:hover {
background: #999;
}
/* Légende de navigation */
.timeline-help-text {
font-size: 0.9em;
color: #666;
text-align: center;
margin-bottom: 10px;
font-style: italic;
}
/* Conteneur de la frise */
.timeline-track {
display: inline-flex;
position: relative;
padding: 20px 0;
min-width: 100%;
}
/* Ligne centrale de la frise */
.timeline-track::before {
content: "";
position: absolute;
top: 50%;
left: 0;
right: 0;
height: 4px;
background: #cbd5e0;
transform: translateY(-50%);
z-index: 1;
}
/* Colonne temporelle structurée en grille fixe pour un alignement parfait */
.timeline-column {
display: inline-grid;
grid-template-rows: 220px 60px 220px;
align-items: center;
justify-items: center;
width: 320px;
flex-shrink: 0;
position: relative;
white-space: normal;
}
/* Carte événement */
.timeline-card {
width: 280px;
background: #ffffff;
border: 1px solid #e2e8f0;
border-radius: 6px;
padding: 14px;
box-shadow: 0 4px 6px rgba(0,0,0,0.02);
transition: transform 0.2s ease, box-shadow 0.2s ease;
z-index: 2;
}
.timeline-card:hover {
transform: translateY(-3px);
box-shadow: 0 6px 12px rgba(0,0,0,0.05);
}
/* Alignement des cartes du haut vers le bas de leur cellule */
.timeline-card-top {
align-self: end;
margin-bottom: 10px;
border-top: 4px solid #3182bd; /* Bleu */
text-align: justify;
}
/* Alignement des cartes du bas vers le haut de leur cellule */
.timeline-card-bottom {
align-self: start;
margin-top: 10px;
border-bottom: 4px solid #31a354; /* Vert */
text-align: justify;
}
/* Indicateur d'absence d'événement */
.timeline-empty-card {
height: 1px;
width: 280px;
visibility: hidden;
}
/* Nœud central (Date au format pilule pour éviter les retours à la ligne) */
.timeline-node {
background: #2d3748;
color: #ffffff;
border-radius: 20px;
padding: 6px 16px;
font-weight: bold;
font-size: 0.85em;
z-index: 3;
box-shadow: 0 0 0 6px #ffffff, 0 4px 10px rgba(0,0,0,0.1);
display: inline-flex;
align-items: center;
justify-content: center;
white-space: nowrap;
height: 32px;
}
/* Contenu textuel interne des cartes */
.timeline-card h4 {
font-size: 0.95em;
margin: 0 0 8px 0;
font-weight: bold;
color: #1a202c;
}
.timeline-card p {
font-size: 0.85em;
margin: 0;
line-height: 1.4;
color: #4a5568;
}
</style>

<div class="timeline-help-text">
← Glissez horizontalement pour faire défiler la ligne temporelle entre les deux quartiers (1870 - 1945) →
</div>

<div class="timeline-scroll-container">
<div class="timeline-track">

<!-- 1873-1875 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1873-1875 :</strong> Construction de modestes maisons d'ouvriers unifamiliales et inauguration du nouvel Orphelinat cantonal.</p>
</div>
<div class="timeline-node">1873-1875</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1873-1875 :</strong> Zone agricole patricienne active (vente d'herbe et de bétail) et morcellement du domaine de Mme Muller.</p>
</div>
</div>

<!-- 1878-1882 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1878-1882 :</strong> Décision d'implanter la Caserne militaire (Plaines du Loup) et inauguration officielle en avril 1882.</p>
</div>
<div class="timeline-node">1878-1882</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1878 :</strong> Présentation du plan Laurent et Rossire visant le comblement de la vallée du Flon à des fins logistiques.</p>
</div>
</div>

<!-- 1887-1892 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1887-1892 :</strong> Conflits d'usage de l'eau (casernes vs nouveaux abattoirs) ; arrestation d'un faux-monnayeur derrière le stand de tir (1892).</p>
</div>
<div class="timeline-node">1887-1892</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1892 :</strong> La foudre frappe la propriété du député Fleury ; l'industrialisation démarre timidement dans le secteur.</p>
</div>
</div>

<!-- 1898-1902 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1898 :</strong> La municipalité s'organise et nomme officiellement les rues pour rationaliser le dédale du quartier.</p>
</div>
<div class="timeline-node">1898-1902</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1902 :</strong> Tournant majeur avec le transfert du dépôt principal et des ateliers de réparation des Tramways Lausannois (TL).</p>
</div>
</div>

<!-- 1901-1904 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1901 :</strong> Affaire Wassmer (interdiction des tenues de quartier) et décision de bâtir la prison du Bois-Mermet.</p>
</div>
<div class="timeline-node">1901-1904</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1904 :</strong> Implantation industrielle renforcée par l'arrivée de la Manufacture lausannoise de Biscuits.</p>
</div>
</div>

<!-- 1905-1908 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1905-1908 :</strong> Échauffourées militaires (1905) ; ouverture du café de tempérance sans alcool La Violette (1908).</p>
</div>
<div class="timeline-node">1905-1908</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1908 :</strong> Inauguration du Collège de Prélaz, modèle architectural hygiéniste (linoléum, vastes baies vitrées).</p>
</div>
</div>

<!-- 1910-1912 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1912 :</strong> Drame au stand de tir ; aménagement du terrain de Montriond-Sports (futur Lausanne-Sports) dans le quartier.</p>
</div>
<div class="timeline-node">1910-1912</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1910 :</strong> Crues violentes de la rivière du Flon et de la Mèbre, inondant et endommageant les cultures ouvrières.</p>
</div>
</div>

<!-- 1921 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1921 :</strong> Sécurisation physique du stand de tir à la suite des plaintes récurrentes de la population (murs de béton).</p>
</div>
<div class="timeline-node">1921</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1921 :</strong> Face à la crise du logement, création de la cité ouvrière coopérative standardisée de Prélaz-Cottages.</p>
</div>
</div>

<!-- 1926-1927 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1926 :</strong> Inauguration du Vélodrome de la Pontaise, renforçant l'influence et le pôle d'attraction sportive du quartier.</p>
</div>
<div class="timeline-node">1926-1927</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1927 :</strong> Fin du long chantier ferroviaire avec l'inauguration décisive de la Gare aux marchandises de Sébeillon/Prélaz.</p>
</div>
</div>

<!-- 1929-1933 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1929-1933 :</strong> Match international Suisse-Tchécoslovaquie (20'000 personnes) ; meurtre crapuleux à la suite d'une querelle de voisinage (1933).</p>
</div>
<div class="timeline-node">1929-1933</div>
<div class="timeline-card timeline-card-bottom">
<div class="timeline-empty-card"></div>
</div>
</div>

<!-- 1936-1940 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1940 :</strong> Point d'orgue de l'ancrage religieux avec l'inauguration du temple paroissial protestant de Saint-Luc.</p>
</div>
<div class="timeline-node">1936-1940</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1936-1940 :</strong> Consécration de l'église catholique Saint-Joseph (1936) ; transfert et réinstallation d'une chapelle en bois protestante (1940).</p>
</div>
</div>

<!-- 1943-1945 -->
<div class="timeline-column">
<div class="timeline-card timeline-card-top">
<h4>La Pontaise</h4>
<p><strong>1945 :</strong> Triomphe sportif du match Suisse-France devant plus de 25 000 spectateurs sur les hauts de la ville.</p>
</div>
<div class="timeline-node">1943-1945</div>
<div class="timeline-card timeline-card-bottom">
<h4>Prélaz</h4>
<p><strong>1939-1943 :</strong> Économie de guerre (rations) et hausse de la mortalité routière due à la cohabitation difficile tram/camion.</p>
</div>
</div>

</div>
</div>