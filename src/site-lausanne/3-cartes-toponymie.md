Au fur et à mesure que le temps avance, les cartes elles-mêmes se précisent et se peuplent de détails. Vous pouvez faire glisser le slider ci-dessous pour avancer dans le temps et voir les différentes représentations des quartiers évoluer, ainsi que leurs toponymies respectives s'étoffer.

```js
import * as d3 from "d3";
import d3Cloud from "d3-cloud";
import {svg} from "npm:htl";

console.log("libraries imported");

const years = [1871, 1890, 1900, 1903, 1910, 1912, 1925];
const places = ["Pontaise", "Prelaz"];

let toponyms = new Map([
    ["Pontaise", new Map()],
    ["Prelaz", new Map()]
]);

toponyms.get("Pontaise").set(1871, await FileAttachment("../data/TopoPontaise/Topo1871.txt").csv());
toponyms.get("Prelaz").set(1871, await FileAttachment("../data/TopoPrelaz/Topo1871.txt").csv());
toponyms.get("Pontaise").set(1890, await FileAttachment("../data/TopoPontaise/Topo1890.txt").csv());
toponyms.get("Prelaz").set(1890, await FileAttachment("../data/TopoPrelaz/Topo1890.txt").csv());
toponyms.get("Pontaise").set(1900, await FileAttachment("../data/TopoPontaise/Topo1900.txt").csv());
toponyms.get("Prelaz").set(1900, await FileAttachment("../data/TopoPrelaz/Topo1900.txt").csv());
toponyms.get("Pontaise").set(1903, await FileAttachment("../data/TopoPontaise/Topo1903.txt").csv());
toponyms.get("Prelaz").set(1903, await FileAttachment("../data/TopoPrelaz/Topo1903.txt").csv());
toponyms.get("Pontaise").set(1910, await FileAttachment("../data/TopoPontaise/Topo1910.txt").csv());
toponyms.get("Prelaz").set(1910, await FileAttachment("../data/TopoPrelaz/Topo1910.txt").csv());
toponyms.get("Pontaise").set(1912, await FileAttachment("../data/TopoPontaise/Topo1912.txt").csv());
toponyms.get("Prelaz").set(1912, await FileAttachment("../data/TopoPrelaz/Topo1912.txt").csv());
toponyms.get("Pontaise").set(1925, await FileAttachment("../data/TopoPontaise/Topo1925.txt").csv());
toponyms.get("Prelaz").set(1925, await FileAttachment("../data/TopoPrelaz/Topo1925.txt").csv());

console.log(toponyms);
let current_year = 1925;
let current_place = "Pontaise";

let current_words = toponyms.get(current_place).get(current_year);

console.log("Toponyms obtained");
```

```js
const lausanneLayers = [
  {label: "Lausanne Map (1871)",                     name: "lausanne-1871-spengler", year: 1871 },
  {label: "Lausanne Official Plan (1875)",           name: "lausanne-1875-decrousaz", year: 1875 },
  {label: "Lausanne City Directory (1880)",          name: "lausanne-1880-indicateur-wurster", year: 1880 },
  {label: "Lausanne Map (1890)",                     name: "lausanne-1890-lebet", year: 1890 },
  {label: "Lausanne Parcel Plan (1900)",             name: "lausanne-1900-payot", year: 1900 },
  {label: "Lausanne Tramway Plan (1903)",            name: "lausanne-1903-tramway-reber", year: 1903 },
  {label: "Lausanne Parcel Plan (1910)",             name: "lausanne-1910-payot", year: 1910 },
  {label: "Lausanne Official Plan (1913)",           name: "lausanne-1913-plan-officiel", year: 1913 },
  {label: "Lausanne Transports Map (1925)",          name: "lausanne-1925-transports", year: 1925 },
];

const mapYears = lausanneLayers.map(x => x.year);

function mapNameFromYear(year) {
    function nearestYear(years, year) {
        let nearestYear = 0;
        let nearestInterval = Infinity;
        for (let cy of years) {
            const currentInterval = Math.abs(year - cy);
            if (currentInterval < nearestInterval && year >= cy) {
                nearestInterval = currentInterval;
                nearestYear = cy;
            }
        }
        return nearestYear;
    }
    return lausanneLayers.find(x => x.year === nearestYear(mapYears, year));
}
```

<div id="pontaise-container">
    <p>Carte actuelle: <span id="pontaise-map-name"></span>
    <div id="pontaise-map"></div>
    <svg id="pontaise-wordcloud"></svg>
</div>

```js
const year = view(Inputs.range([1871, 1925], {label: "Year", step: 1, value: 1871}))
```

```js
const selectedLayer = mapNameFromYear(year);
```

<div id="prelaz-container">
    <div id="prelaz-map"></div>
    <svg id="prelaz-wordcloud"></svg>
</div>

```js
// Build the WMTS tile URL for a given layer name
function wmtsUrl(layerName) {
  return `https://geo-timemachine.epfl.ch/geoserver/gwc/service/wmts/rest/TimeMachine:${layerName}/{style}/{TileMatrixSet}/{TileMatrixSet}:{z}/{y}/{x}?format=image/png`;
}

// Create map with OSM base layer
const mapPontaiseDiv = document.getElementById("pontaise-map");
mapPontaiseDiv.style = "height: 500px; width: 70%; margin: 1em 0;";
const mapPrelazDiv = document.getElementById("prelaz-map");
mapPrelazDiv.style = "height: 500px; width: 70%; margin: 1em 0;";

const historicalMapPontaise = L.map(mapPontaiseDiv).setView([46.527978, 6.630435], 16);
const historicalMapPrelaz = L.map(mapPrelazDiv).setView([46.526414, 6.613091], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  opacity: 0.4
}).addTo(historicalMapPontaise);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  opacity: 0.4
}).addTo(historicalMapPrelaz);

invalidation.then(() => historicalMapPontaise.remove());
invalidation.then(() => historicalMapPrelaz.remove());
```

```js
// Reactively swap the historical tile layer whenever selectedLayer changes
{
  const tileLayerPontaise = L.tileLayer(wmtsUrl(selectedLayer.name), {
    style: "raster",
    TileMatrixSet: "EPSG:900913x2",
    tms: false,
    attribution: '&copy; <a href="https://www.epfl.ch/schools/cdh/time-machine-unit/">EPFL Time Machine Unit</a>'
  }).addTo(historicalMapPontaise);
  const tileLayerPrelaz = L.tileLayer(wmtsUrl(selectedLayer.name), {
    style: "raster",
    TileMatrixSet: "EPSG:900913x2",
    tms: false,
    attribution: '&copy; <a href="https://www.epfl.ch/schools/cdh/time-machine-unit/">EPFL Time Machine Unit</a>'
  }).addTo(historicalMapPrelaz);

  document.getElementById("pontaise-map-name").innerHTML = selectedLayer.label;

  // Remove this layer when selectedLayer changes (cell re-runs)
  invalidation.then(() => historicalMapPontaise.removeLayer(tileLayerPontaise));
  invalidation.then(() => historicalMapPrelaz.removeLayer(tileLayerPrelaz));
  console.log(year, ":", selectedLayer);
}
```

```js
let pontaiseSpace = d3.select("#pontaise-wordcloud")
    .attr("width", "40%")
    .attr("height", 500)
    .append("g");

pontaiseSpace.attr("transform", `translate(${pontaiseSpace.width/2},${pontaiseSpace.height/2})`);

let prelazSpace = d3.select("#prelaz-wordcloud")
    .attr("width", "40%")
    .attr("height", 500)
    .append("g");

prelazSpace.attr("transform", `translate(${prelazSpace.width/2},${prelazSpace.height/2})`);
```