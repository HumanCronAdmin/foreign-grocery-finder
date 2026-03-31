<p align="center">
  <img src="favicon.svg" width="80" height="80" alt="Foreign Grocery Finder">
</p>

<h1 align="center">Foreign Grocery Finder Japan</h1>

<p align="center">Find where to buy ingredients in Japan</p>

<p align="center">
  <a href="https://humancronadmin.github.io/foreign-grocery-finder/"><img src="https://img.shields.io/badge/Live_Demo-Visit-brightgreen" alt="Live Demo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT License"></a>
</p>

## Why this tool?

Information about where to find foreign ingredients in Japan is scattered across Reddit threads, blog posts, and old guides. Every time you need chickpeas or cheddar cheese, you start from scratch. This tool gives you one searchable place with real store data.

## Features

- **Fuzzy search** — typo-tolerant ingredient lookup powered by Fuse.js
- **Category filters** — browse by Canned Goods, Dairy, Spices, Baking, Sauces, Grains, and Snacks
- **Popular tags** — one-tap access to commonly searched items
- **Store details** — price ranges and notes for each chain
- **Mobile-first** — designed for on-the-go use at the store
- **Offline support** — works without internet via PWA

## How It Works

1. **Search** — type an ingredient name (English or Japanese)
2. **Browse results** — see which stores carry it with prices and notes
3. **Visit the store** — find it at Gyomu Super, Kaldi, Costco, Seijo Ishii, Don Quijote, or Amazon Japan

[Try it now](https://humancronadmin.github.io/foreign-grocery-finder/)

## Data Sources

All data sourced from official store websites (verified March 2026):

- [Gyomu Super](https://www.gyomusuper.jp/) — gyomusuper.jp
- [Kaldi](https://www.kaldi.co.jp/) — kaldi.co.jp
- [Costco Japan](https://www.costco.co.jp/) — costco.co.jp
- [Seijo Ishii](https://www.seijoishii.co.jp/) — seijoishii.co.jp
- [Don Quijote](https://www.donki.com/) — donki.com
- [Amazon Japan](https://www.amazon.co.jp/) — amazon.co.jp

## Privacy

All processing happens in your browser. No data is collected or sent to any server. PWA support enables full offline use.

## Contributing

1. Fork this repository
2. Add or update ingredient data in `js/data.js`
3. Submit a pull request

## License

[MIT](LICENSE)
