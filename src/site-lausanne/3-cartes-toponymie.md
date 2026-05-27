# Des cartes qui changent

Au fur et à mesure que le temps avance, les cartes elles-mêmes se précisent et se peuplent de détails. Vous pouvez faire glisser le slider ci-dessous pour avancer dans le temps et voir les différentes représentations des quartiers évoluer, ainsi que leurs toponymies respectives s'étoffer.

```js
import * as d3 from "d3";
import d3Cloud from "d3-cloud";
import {svg} from "npm:htl";

console.log("libraries imported");

const years = [1871, 1890, 1900, 1903, 1910, 1912, 1925, 1937];
const places = ["Pontaise", "Prelaz"];
let fill = d3.schemeCategory10;
let [cHeight, cWidth] = [400, document.getElementById("pontaise-container").offsetWidth];
const mapProportion = 0.6;
const widthSafeMargin = 0.90;
const [mapHeight, mapWidth] = [cHeight, mapProportion * cWidth * widthSafeMargin]
const [svgHeight, svgWidth] = [cHeight, (1 - mapProportion) * cWidth * widthSafeMargin];

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
toponyms.get("Pontaise").set(1912, await FileAttachment("../data/TopoPontaise/Topo1910.txt").csv()); //!
toponyms.get("Prelaz").set(1912, await FileAttachment("../data/TopoPrelaz/Topo1912.txt").csv());
toponyms.get("Pontaise").set(1925, await FileAttachment("../data/TopoPontaise/Topo1925.txt").csv());
toponyms.get("Prelaz").set(1925, await FileAttachment("../data/TopoPrelaz/Topo1925.txt").csv());
toponyms.get("Pontaise").set(1937, await FileAttachment("../data/TopoPontaise/TopoModerne.txt").csv());
toponyms.get("Prelaz").set(1937, await FileAttachment("../data/TopoPrelaz/TopoModerne.txt").csv());

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
  {label: "Lausanne Parcel Plan (1937)",             name: "lausanne-1937-cadastre", year: 1937},
];

const mapYears = lausanneLayers.map(x => x.year);

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

function mapNameFromYear(year) {
    return lausanneLayers.find(x => x.year === nearestYear(mapYears, year));
}
```

<style>
  .map, .wordcloud {
    display: inline-block;
  }

  .mapcloud-container {
    overflow: hidden;
    width: 100%;
  }

  form {
    width: 90% !important;
    flex-direction: row-reverse;
  }

  form > div {
    flex-direction: row-reverse;
  }

  :root {
    --input-width: 100% !important;
  }

  label {
    width: none;
    display: none;
  }

  input[type="number"] {
    max-width: 70px !important;
    margin-left: 10px;
    margin-right: 10px;
  }

  input[type="range"] {
  }
</style>

<div id="pontaise-container">
    <p>Carte actuelle: <span id="pontaise-map-name"></span>
    <div class="mapcloud-container">
      <div id="pontaise-map" class="map"></div>
      <svg id="pontaise-wordcloud" class="wordcloud"></svg>
    </div>
</div>

```js
const year = view(Inputs.range([1871, 1937], {label: "Année", step: 1, value: 1871}))
```

```js
const selectedLayer = mapNameFromYear(year);
```

<div id="prelaz-container">
  <div class="mapcloud-container">
    <div id="prelaz-map" class="map"></div>
    <svg id="prelaz-wordcloud" class="wordcloud"></svg>
  </div>
</div>

```js
// Build the WMTS tile URL for a given layer name
function wmtsUrl(layerName) {
  return `https://geo-timemachine.epfl.ch/geoserver/gwc/service/wmts/rest/TimeMachine:${layerName}/{style}/{TileMatrixSet}/{TileMatrixSet}:{z}/{y}/{x}?format=image/png`;
}

// Create map with OSM base layer
const mapPontaiseDiv = document.getElementById("pontaise-map");
mapPontaiseDiv.style = `height: ${mapHeight}px; width: ${mapWidth}px; margin: 1em 0;`;
const mapPrelazDiv = document.getElementById("prelaz-map");
mapPrelazDiv.style = `height: ${mapHeight}px; width: ${mapWidth}px; margin: 1em 0;`;

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
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g");

pontaiseSpace.attr("transform", `translate(${svgWidth/2},${svgHeight/2})`);

let prelazSpace = d3.select("#prelaz-wordcloud")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g");

prelazSpace.attr("transform", `translate(${svgWidth/2},${svgHeight/2})`);

function draw(words, svgSpace){
  console.log('must draw:', words)

  const cloud = svgSpace.selectAll("g text")
    .data(words, function(d) { return d.text; })

  //Entering words
  cloud.enter()
    .append("text")
    .style("font-family", "Impact")
    .style("fill", function(d, i) { return fill[i % 10]; })
    .attr("text-anchor", "middle")
    .style("font-size", function(d) { return d.size + "px"; })
    .attr("transform", function(d) {
      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function(d) { return d.text; })
    .on('click', (token) => {
      console.log('clicked', {token})
    });
  
  cloud.exit()
    .remove();
}

function drawPontaise(words) {
  draw(words, pontaiseSpace);
}

function drawPrelaz(words) {
  draw(words, prelazSpace);
}

function update(words, draw, elem) {
  console.log("Words set in cloud:", words);
  d3Cloud()
    .words(words)
    .size([svgWidth, svgHeight])
    .font('Impact')
    .rotate(0)
    .fontSize(function(d) { return d.sizeFactor * 5; })
    // .padding(function(d) { return d.sizeFactor * 2; })
    .on("end", draw)
    .start();
}

function updatePontaise(words) {
  update(words, drawPontaise, pontaiseSpace);
}

function updatePrelaz(words) {
  update(words, drawPrelaz, prelazSpace);
}

function selectSizeFactor(min, max, value) {
  let a = (max - min) / (10 - 1);
  if (a == 0)
    a = 1;
  const b = max - a * 10
  return Math.ceil(Math.log(3 * (value - b) / a + 1));
}

function prepareWords(words) {
  words = words.reduce(function(wordMap, word) {
      wordMap[word] = (wordMap[word] || 0) + 1
      return wordMap;
    }, {});
  
  const counters = Object.values(words);
  const max = Math.max(...counters);
  const min = Math.min(...counters);
  
  return Object.entries(words).map(([text, count]) => ({text: text, sizeFactor: Math.floor(selectSizeFactor(min, max, count) + 5 * Math.random())}))
}
```

```js
const current_words_pontaise = toponyms.get("Pontaise").get(nearestYear(years, year));
```

```js
const current_words_prelaz = toponyms.get("Prelaz").get(nearestYear(years, year));
```

```js
let split_words_pontaise = [].concat(...current_words_pontaise.map(x => x.place.split(" ")));

let split_words_prelaz = [].concat(...current_words_prelaz.map(x => x.place.split(" ")));

let preparedWordsPontaise = prepareWords(split_words_pontaise);
let preparedWordsPrelaz = prepareWords(split_words_prelaz);

updatePontaise(preparedWordsPontaise);
updatePrelaz(preparedWordsPrelaz);
```