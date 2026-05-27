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


```js
const pontaise1885 = await FileAttachment("../data/GeoJsonPontaise/FinalPontaise1885.geojson").json();
const pontaise1901 = await FileAttachment("../data/GeoJsonPontaise/FinalPontaise1901.geojson").json();
const pontaise1923 = await FileAttachment("../data/GeoJsonPontaise/FinalPontaise1923.geojson").json();
const pontaise1951 = await FileAttachment("../data/GeoJsonPontaise/FinalPontaise1951.geojson").json();
const prelaz1885 = await FileAttachment("../data/GeoJsonPrelaz/FinalPrelaz1885.geojson").json();
const prelaz1901 = await FileAttachment("../data/GeoJsonPrelaz/FinalPrelaz1901.geojson").json();
const prelaz1923 = await FileAttachment("../data/GeoJsonPrelaz/FinalPrelaz1923.geojson").json();
const prelaz1951 = await FileAttachment("../data/GeoJsonPrelaz/FinalPrelaz1951.geojson").json();
```



---

## Secteur de Pontaise

**Localisation :** Partie centre-est du centre de Lausanne  
**Importance historique :** Secteur résidentiel et commercial important  

La carte permet d'observer la répartition des bâtiments et leurs transformations dans le secteur de Pontaise. Le contour coloré indique la zone étudiée.

---
```js
const selectedYear = view(Inputs.radio([1885, 1901, 1923, 1951], { label: "Choose year", value: 1885 }))
const style = document.createElement("style");
style.textContent = `
.leaflet-tooltip.circle-label {
  background: transparent;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin: 0;
  white-space: nowrap;
}
`;
document.head.appendChild(style);

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
document.head.appendChild(link);
```
---
```js

const container = display(document.createElement("div"));
container.style = `
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0;
`;

// Detail panel (left)
const detail = document.createElement("div");
detail.style = `
  flex: 0 0 25%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 600px;
  overflow-y: auto;
  background: #fff;
`;
detail.textContent = "Clicker sur un point pour voir plus de détails";

// Map (right)
const mapDiv = document.createElement("div");
mapDiv.style = `
  flex: 1;
  height: 600px;
  border-radius: 8px;
`;
container.appendChild(mapDiv);
container.appendChild(detail);




const yearToData1 = {
  1885: pontaise1885,
  1901: pontaise1901,
  1923: pontaise1923,
  1951: pontaise1951
}


const selectedData1 = yearToData1[Number(selectedYear)]




const map = L.map(mapDiv).setView([46.527975, 6.628901], 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(map);
L.geoJSON(selectedData1, {
  pointToLayer: (feature) => {
    const [a, b] = feature.geometry.coordinates;
    const marker = L.circleMarker([a, b], {
      radius: 6,
      fillColor: "#3182bd",
      color: "#000",
      weight: 0.5,
      fillOpacity: 0.7
    });
    const count = feature.properties.points?.length ?? 1;
    marker.bindTooltip(`${count}`, {
      permanent: true,
      direction: "center",
      className: "circle-label",
      offset: [0, 0]
    });
    
    marker.on("click", () => {
      const points = feature.properties.points || [];
      detail.innerHTML = `
        <strong> Nombre d'entrées: ${points.length ?? "n/a"}</strong><br/>
        <hr/>
        ${points
          .map(p => `
            <div style="margin-bottom:0.75rem;padding:0.5rem;border:1px solid #eee;border-radius:6px;">
              <div><strong>Address</strong>: ${p.address ?? "n/a"}</div>
              <div><strong>Nom</strong>: ${p.Nom ?? "n/a"}</div>
              <div><strong>Métier</strong>: ${p.Métier ?? "n/a"}</div>
              <div><strong>Classification</strong>: ${p.Classification ?? "n/a"}</div>
              <div><strong>LigneOriginal</strong>: ${p.LigneOriginal ?? "n/a"}</div>
            </div>
          `).join("")}
      `;
    });

    return marker;
  }
}).addTo(map);

invalidation.then(() => map.remove());
```

## Secteur de Prélaz

**Localisation :** Partie ouest du centre de Lausanne  
**Importance historique :** Secteur résidentiel en développement et à usages mixtes

La carte permet d'observer la répartition des bâtiments et leurs transformations dans le secteur de Prélaz. Le contour coloré indique la zone étudiée.

---
```js
const selectedYear2 = view(Inputs.radio([1885, 1901, 1923, 1951], { label: "Choose year", value: 1885 }))
```
```js
const container = display(document.createElement("div"));
container.style = `
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0;
`;

// Detail panel (left)
const detail = document.createElement("div");
detail.style = `
  flex: 0 0 25%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 600px;
  overflow-y: auto;
  background: #fff;
`;
detail.textContent = "Clicker sur un point pour voir plus de détails";

// Map (right)
const mapDiv = document.createElement("div");
mapDiv.style = `
  flex: 1;
  height: 600px;
  border-radius: 8px;
`;
container.appendChild(mapDiv);
container.appendChild(detail);



const yearToData2 = {
  1885: prelaz1885,
  1901: prelaz1901,
  1923: prelaz1923,
  1951: prelaz1951
}

const selectedData2 = yearToData2[Number(selectedYear2)]

const map = L.map(mapDiv).setView([46.527975, 6.628901], 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(map);
L.geoJSON(selectedData2, {
  pointToLayer: (feature) => {
    const [a, b] = feature.geometry.coordinates;
    const marker = L.circleMarker([a, b], {
      radius: 6,
      fillColor: "#3182bd",
      color: "#000",
      weight: 0.5,
      fillOpacity: 0.7
    });
    const count = feature.properties.points?.length ?? 1;
    marker.bindTooltip(`${count}`, {
      permanent: true,
      direction: "center",
      className: "circle-label",
      offset: [0, 0]
    });
    
    marker.on("click", () => {
      const points = feature.properties.points || [];
      detail.innerHTML = `
        <strong> Nombre d'entrées: ${points.length ?? "n/a"}</strong><br/>
        <hr/>
        ${points
          .map(p => `
            <div style="margin-bottom:0.75rem;padding:0.5rem;border:1px solid #eee;border-radius:6px;">
              <div><strong>Address</strong>: ${p.address ?? "n/a"}</div>
              <div><strong>Nom</strong>: ${p.Nom ?? "n/a"}</div>
              <div><strong>Métier</strong>: ${p.Métier ?? "n/a"}</div>
              <div><strong>Classification</strong>: ${p.Classification ?? "n/a"}</div>
              <div><strong>LigneOriginal</strong>: ${p.LigneOriginal ?? "n/a"}</div>
            </div>
          `).join("")}
      `;
    });

    return marker;
  }
}).addTo(map);

invalidation.then(() => map.remove());
```

## Notes sur les données

- Tous les bâtiments sont représentés par leur emprise actuelle
- L'évolution historique peut être suivie à partir des données disponibles
- Les limites des secteurs correspondent aux divisions administratives officielles
- Les couleurs de la carte proviennent de l'HTML intégré dans cette page
