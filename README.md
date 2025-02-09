[![Netlify Status](https://api.netlify.com/api/v1/badges/a027c04c-d42a-42e3-8ef6-812e4e4bf2b4/deploy-status)](https://app.netlify.com/sites/danlevy/deploys)

# DanLevy.net

## TODO

- [x] Add comments
- [x] Fine tune: crank lighthouse score
- [x] Add Link to Category on Posts
- [ ] Stop using REM for layout (padding)
- [ ] Add highlight to apply to all posts from same category when hovering over a an `.article-card`.
- [ ] Add Mastodon & Bsky links to footer.
- [ ] Support disabling styles in `<Gist />` component.

- Add Scroll CSS Effects:
  - [ ] Adjust Quiz box-shadow using scroll position
  - [ ] Look into scroll snap for each quiz.

- [x] Update Quiz UI, 
  - [x] Make Question's Linkable
  - [x] Add `Group` to Question Title/Banner. Auto-count / number.
  - [x] Get rid of cliche icons abuse.
- [ ] Add/update ld+json / JSON-LD
- [ ] Add Quizzes to the Menu
- [ ] Publish next batch of quizzes
  - [x] Add `Group` to Question Title/Banner. Auto-count / number.
- [ ] Disable posthog locally
- [ ] Add Video page
- [x] Add search
- Publish:
  - [ ] Comments Component
  - [ ] Free local search
  - [ ] Newsletter

## Features

- [x] Add new nav
  - [ ] Add tags
  - [x] Add categories
  - [x] Add Popular/Related posts
- [x] Convert Quiz UI to MDX/Astro
- [x] Add favicon
- [x] Add social media meta tags
- [x] Add RSS feed
- [x] Add sitemap
- [x] Add smart 404 page
- [x] Add about page
- [x] Add OSS project list (in menu)
- [x] Add contact page
- [ ] Add Video page
- [ ] Add search
- [ ] Add newsletter

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## Helpers

Browser snippets to run in console to better understand the main factors in your generated site's size in bytes.

### Misc DOM Helpers

```js
const getAttrObject = el => Object.fromEntries(Object.values(el.attributes).map(attr => [attr.name, attr.value]));
```

### Analyze Size of Astro Sites

```js
Array.from(document.querySelectorAll('astro-island'))
.map(island => {
  var url = island.getAttribute('component-url');
  var size = island.outerHTML.length;
  return { url, size };
})
.sort((a, b) => b.size - a.size)
.map(island => `${island.url}: ${(island.size).toLocaleString()}`);
```

### Analyze Size of Key Elements

Get the size of the main elements in your site.

```js
var sections = Array.from(document.querySelectorAll('html, body, head, main, article, aside, nav, header, footer, style, script, astro-root, astro-island'))
.map(element => {
  var tag = element.tagName.toLowerCase();
  var size = element.outerHTML.length;
  return { tag, size, attrs: element.attributes };
})
var sectionSizes = Object.entries(sections.reduce((acc, {tag, size}) => {
  acc[tag] = acc[tag] == null ? size : acc[tag] + size;
  return acc;
}, {}))
.sort((a, b) => b.size - a.size)
// .map(element => `${element.tag}: ${(element.size).toLocaleString()}`);
console.table(sections);
console.table(sectionSizes);

```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
