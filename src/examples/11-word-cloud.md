# Génération de Nuages de Mots
Chargement des données.
```js
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
1 + 1
```