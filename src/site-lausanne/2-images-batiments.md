<style>
/* Justification et élargissement global des textes pour occuper toute la largeur */
h1, h2, h3, h4, p, li, ul, ol {
max-width: none !important;
text-align: justify;
text-justify: inter-word;
-webkit-hyphens: auto;
-ms-hyphens: auto;
hyphens: auto;
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

.obs-container h1, 
.obs-container h2, 
.obs-container h3, 
.obs-container h4,
.timeline-card h4 {
font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
color: #1a1a1a !important;
letter-spacing: -0.01em;
}

</style>


# Iconographie

<div class="obs-container" lang="fr">

La carte montre les images géolocalisées dans les quartiers de Prélaz et la Pontaise. <br/>La source de l'iconographie de Lausanne est le Musée historique de Lausanne. 

```js
const container = display(document.createElement("div"));
container.style = "height: 700px; margin: 0.5rem 0; border: 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;";

const iframe = document.createElement("iframe");
iframe.style = "width: 100%; height: 100%; border: 0; display: block;";
iframe.setAttribute("title", "Carte Iconographie");
iframe.setAttribute("loading", "lazy");

const rawHtml = await FileAttachment("icono_site.html").text();
iframe.srcdoc = rawHtml;
container.appendChild(iframe);

invalidation.then(() => {
  iframe.remove();
});
```
</div>