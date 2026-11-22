# Adam's portfolio

React and Vite portfolio with a Three.js driving playground.

## Development

```sh
npm ci
npm run dev
```

## Checks

```sh
npm test
npm run build
```

## GitHub Pages

Live site: https://adam12bT.github.io/portfolio/

Source is maintained on the `port` branch. Commit and push source changes, then publish:

```sh
git push origin port
npm run deploy
```

`deploy` builds automatically through `predeploy`, then publishes `dist/` to `gh-pages`.
GitHub repository Settings > Pages should use the `gh-pages` branch, root directory.

Vite uses `/` during development and `/portfolio/` in production.
Load public models with `${import.meta.env.BASE_URL}car/car.glb` (and equivalent paths),
so the published URL includes the repository prefix. Keep GLTF texture and buffer paths
relative to their GLTF file. Generated output and dependencies stay out of Git.
