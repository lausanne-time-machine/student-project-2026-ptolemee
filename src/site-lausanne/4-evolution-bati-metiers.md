# Évolution du bâti et métiers

## Vue d'ensemble de l'évolution du bâti

Cette carte interactive présente l'évolution des bâtiments dans deux secteurs de Lausanne, Pontaise et Prélaz. Elle affiche les constructions qui intersectent les limites de chaque secteur.

### Légende de la carte

- **<span style="color:#1f77b4">■</span> Limite de Pontaise** - Contour continu de la zone de Pontaise
- **<span style="color:#9467bd">■</span> Limite de Prélaz** - Contour continu de la zone de Prélaz

Les bâtiments visibles correspondent aux constructions situées à l'intérieur des secteurs représentés. Les couleurs de la carte suivent celles utilisées dans l'HTML intégré.

---

## Interactive Map

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

---

## Secteur de Pontaise

**Localisation :** Partie centre-est du centre de Lausanne  
**Importance historique :** Secteur résidentiel et commercial important  

La carte permet d'observer la répartition des bâtiments et leurs transformations dans le secteur de Pontaise. Le contour coloré indique la zone étudiée.

---

## Secteur de Prélaz

**Localisation :** Partie ouest du centre de Lausanne  
**Importance historique :** Secteur résidentiel en développement et à usages mixtes

La carte permet d'observer la répartition des bâtiments et leurs transformations dans le secteur de Prélaz. Le contour coloré indique la zone étudiée.

---

## Notes sur les données

- Tous les bâtiments sont représentés par leur emprise actuelle
- L'évolution historique peut être suivie à partir des données disponibles
- Les limites des secteurs correspondent aux divisions administratives officielles
- Les couleurs de la carte proviennent de l'HTML intégré dans cette page
