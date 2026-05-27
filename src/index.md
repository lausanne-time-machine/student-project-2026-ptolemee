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
.obs-container ul, .obs-container ol {
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

<h1>La Pontaise et Prélaz : <br/>Analyser Lausanne sous le prisme du quartier</h1>

<p>Ce site présente notre projet de recherche mené dans le cadre du cours <em>Histoire Urbaine Digitale - Lausanne Time Machine (2025-2026)</em> à l’EPFL.</p>

<p>Notre travail propose d'étudier la construction, l'identité et les limites des quartiers de Lausanne à travers deux cas d'étude contrastés : la Pontaise et Prélaz, sur une période charnière allant de 1870 à 1945.</p>

<h2>Question de recherche</h2>

<p>À travers cette analyse comparative, nous cherchons à répondre aux questions suivantes :</p>

<ul>
<li><strong>Évolution comparée :</strong> Comment les quartiers de la Pontaise et de Prélaz se distinguent-ils entre eux par leur évolution géographique et sociale entre 1870 et 1945 ?</li>
<li><strong>La notion de « quartier » :</strong> La dénomination de quartier est-elle pertinente pour ces espaces périphériques en pleine mutation ?</li>
<li><strong>Marqueurs :</strong> Quels marqueurs physiques (infrastructures, institutions) ou sociaux (commerces, associations) permettent de les distinguer ? Existe-t-il des sous-quartiers (comme les cités ouvrières), voire des méta-quartiers ?</li>
</ul>

<h2>Deux trajectoires urbaines (1870-1945)</h2>

<p>Notre étude s'appuie sur deux dynamiques distinctes qui illustrent la diversité du développement lausannois :</p>

<div class="obs-grid">
<div class="obs-card theme-pontaise">
<h3>La Pontaise (Les hauts de Lausanne)</h3>
<p>Un développement impulsé par des choix institutionnels et militaires (la Caserne, le Stand de tir) ainsi que par l'installation d'infrastructures parfois rejetées par le centre-ville (les abattoirs, la prison du Bois-Mermet).</p>
<p>C'est un espace où les contraintes administratives font naître, par réaction, une véritable conscience et solidarité de quartier.</p>
</div>

<div class="obs-card theme-prelaz">
<h3>Prélaz (Les bas de Lausanne)</h3>
<p>Une urbanisation dictée par la topographie de la basse vallée du Flon et façonnée par l'industrialisation (dépôt des tramways, gare de marchandises CFF, usine de biscuits).</p>
<p>Ce secteur ouvrier voit se développer des réponses concrètes à la précarité et à la salubrité, notamment à travers le prisme de l'hygiénisme (le collège moderne de Prélaz, les jardins familiaux de Prélaz-Cottages).</p>
</div>
</div>

<h2>Méthodologie et Sources</h2>

<p>Pour mener à bien cette analyse historique et géographique, nous croisons différentes sources issues des archives lausannoises :</p>

<ul>
<li>Des données topographiques et toponymiques extraites des cartes historiques pour suivre l'évolution du bâti et des infrastructures.</li>
<li>Des données administratives extraites des annuaires pour suivre l'évolution socio-professionnelle au sein des quartiers.</li>
<li>Des articles de presse d'époque (notamment <em>la Gazette de Lausanne</em>) pour documenter la vie quotidienne, les tensions locales et les dynamiques sociales.</li>
<li>Des documents iconographiques historiques (photographies, plans de situation) pour illustrer les rues de l'époque.</li>
</ul>

<h2>Structure du site</h2>

<p>Notre site se structure en quatre "quartiers" :</p>

<ol>
<li>Une narration rappelant l'histoire de la Pontaise et Prélaz, basée sur la presse ;</li>
<li>Une visualisation de l'iconographie de l'époque pour la Pontaise et Prélaz ;</li>
<li>Une visualisation dynamique des cartes et l'évolution des toponymies ;</li>
<li>Une navigation interactive basée sur l'évolution du bâti et des métiers.</li>
</ol>


<div class="obs-img-container">
<img src="site-lausanne/images/QuartierPontaise.jpg" class="obs-img" alt="Vue de la caserne" />
<span class="obs-caption">Vue de la caserne de la Pontaise</span>
</div>

</div>