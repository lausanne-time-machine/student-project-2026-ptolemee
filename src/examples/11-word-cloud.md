# Génération de Nuages de Mots
Chargement des données.
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

let width = 750;
let height = 500;
let fill = d3.schemeCategory10;
let result = svg`<svg width=${width} height=${height}></svg>`;

console.log("Svg space created");
console.log(d3Cloud);

let svgSpace = d3.select(result)
    .append("g")
    .attr("transform", `translate(${width/2},${height/2})`);

function draw(words){
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

function update(words) {
  console.log("Words set in cloud:", words);
  d3Cloud()
    .words(words)
    .size([width, height])
    .font('Impact')
    .rotate(0)
    .fontSize(function(d) { return d.sizeFactor * 15; })
    // .padding(function(d) { return d.sizeFactor * 2; })
    .on("end", draw)
    .start();
}

function selectSizeFactor(min, max, value) {
  let a = (max - min) / (10 - 1);
  if (a == 0)
    a = 1;
  const b = max - a * 10
  return (value - b) / a;
}

function prepareWords(words) {
  
  /*words = words.map(x => x.place)
    .reduce(function(wordMap, word) {
      wordMap[word] = (wordMap[word] || 0) + 1
      return wordMap;
    }, {});*/
  words = words.reduce(function(wordMap, word) {
      wordMap[word] = (wordMap[word] || 0) + 1
      return wordMap;
    }, {});
  
  const counters = Object.values(words);
  const max = Math.max(...counters);
  const min = Math.min(...counters);
  
  return Object.entries(words).map(([text, count]) => ({text: text, sizeFactor: Math.floor(selectSizeFactor(min, max, count) + 5 * Math.random())}))
}

console.log("words before splitting:", current_words);
current_words = [].concat(...current_words.map(x => x.place.split(" ")));
console.log("words after splitting:", current_words);
let preparedWords = prepareWords(current_words);
console.log("preparedWords:", preparedWords);
update(preparedWords);

display(result);
```