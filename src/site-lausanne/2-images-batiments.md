## Iconographie

```js
const container = display(document.createElement("div"));
container.style = "height: 700px; margin: 0.5rem 0; border: 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;";

const iframe = document.createElement("iframe");
iframe.style = "width: 100%; height: 100%; border: 0; display: block;";
iframe.setAttribute("title", "Carte Iconographie");
iframe.setAttribute("loading", "lazy");

const rawHtml = await FileAttachment("icono_site.html").text();
const sampleImageUrl = await FileAttachment("icono/pontaise_143682.jpg").url();
const sampleBaseUrl = new URL(".", sampleImageUrl).href;
const html = rawHtml.replace(
  /(icono|lausanne_images_mhl_assets)\/([^"'?#\s]+)/g,
  (_, __, filename) => `${sampleBaseUrl}${filename}`
);
iframe.srcdoc = html;
container.appendChild(iframe);

invalidation.then(() => {
  iframe.remove();
});
```