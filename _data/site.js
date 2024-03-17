module.exports = {
  meta: {
    title: "My Blog",
    description: " Hello",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "lol",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "Sadasivan MJ",
    authorEmail: "sadasivanmj2003@gmail.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to my  blog",
    description: "Hi I am Sadasivan MJ, This is my first blog halloo "
  }
}