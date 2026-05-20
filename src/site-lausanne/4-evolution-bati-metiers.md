# Évolution du bâti et métiers

## Vue d'ensemble de l'évolution du bâti

Cette carte interactive présente l'évolution des bâtiments dans deux secteurs de Lausanne, Pontaise et Prélaz. Elle affiche les constructions qui intersectent les limites de chaque secteur.

---

## Carte Interactive 

```js
const container = display(document.createElement("div"));
container.style = "height: 700px; margin: 0.5rem 0; border: 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;";

const iframe = document.createElement("iframe");
iframe.style = "width: 100%; height: 100%; border: 0; display: block;";
iframe.setAttribute("title", "Building evolution map");
iframe.setAttribute("loading", "lazy");
iframe.srcdoc = await FileAttachment("bati_evo.html").text();
container.appendChild(iframe);

invalidation.then(() => {
  iframe.remove();
});
```

## Notes sur les données

- Tous les bâtiments sont représentés par leur emprise de 1945
- L'évolution historique peut être suivie à partir des données disponibles
- Les limites des secteurs correspondent aux divisions administratives officielles du secteur 1503 pour la pontaise et 301 et 304 pour la pontaise.
