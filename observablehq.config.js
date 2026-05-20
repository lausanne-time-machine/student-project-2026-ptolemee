// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Quartiers de Lausanne",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "1 - Récits & Graphiques",
      pages: [
        { name: "Chronologie des Quartiers", path: "/site-lausanne/1-recits-graphiques" }
      ]
    },
    {
      name: "2 - Images & Bâtiments",
      pages: [
        { name: "Lausanne à Rebrousse-Temps",       path: "/site-lausanne/2-images-batiments" }
      ]
    },
    {
      name: "3 - Cartes & Toponymie",
      pages: [
        { name: "Des Cartes qui se Peuplent",       path: "/site-lausanne/3-cartes-toponymie" }
      ]
    },
    {
      name: "4 - Évolution du Bâti & Métiers",
      pages: [
        { name: "Un Soldat, une Veuve et un Mécano",       path: "/site-lausanne/4-evolution-bati-metiers" }
      ]
    },
    {
      name: "À Propos",
      pages: [
        { name: "Sources & Méthodologie",       path: "/site-lausanne/methodes-sources" },
        { name: "Qui Sommes-Nous?",       path: "/site-lausanne/a-propos" }
      ]
    },
    //{
      //name: "Obervable Tutorial",
      //pages: [
        //{ name: "Page Structure & Formatting", path: "/examples/01-page-structure" },
        //{ name: "Reactivity & Inputs",         path: "/examples/02-reactivity" },
        //{ name: "Loading Data & Tables",       path: "/examples/03-data-tables" },
        //{ name: "Charts with Plot",            path: "/examples/04-charts" },
        //{ name: "Interactive Maps (Leaflet)",  path: "/examples/05-maps-leaflet" },
        //{ name: "Historical Maps (GeoServer)", path: "/examples/06-maps-historical" },
        //{ name: "Analytical Maps (Plot)",      path: "/examples/07-maps-plot" },
        //{ name: "Processing Data Server-Side",           path: "/examples/08-data-loaders" },
        //{ name: "Venice 1740 Land Register (Python Loader)", path: "/examples/09-venice-landregister" },
        //{ name: "Cadastre Rénové (1888)",      path: "/examples/10-lausanne-cadastre-renove" },
        //{ name: "Word Clouds",      path: "/examples/11-word-cloud" },
      //]
    //}
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "light", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "2025-2026 / Built with Observable for the course <i>Histoire urbaine digitale: Lausanne Time Machine</i>.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
