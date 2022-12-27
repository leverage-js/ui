# UI

## Development

### Package

```bash
dev/npm install
dev/npm run watch
```

`dev/npm run watch` builds the package every time you update any component.
And it copies `dist/*` to `demo/node_modules/@leverage-js/ui` to make demo
always have the current `ui`.

### Demo

```bash
cd demo
dev/npm install
dev/npm run publish-ui-assets
dev/npm serve
```

`dev/npm serve` launches the dev web server with hot module reload. Demo file
updates are instant, while `ui` updates may take a couple of seconds for a full
dev server restart.

### Export components

`index.js` contains all the exports. You put any new components or
component renames here.

## Publishing

### Version increment

Three commands for three kinds of increment:
- `dev/npm version patch` 0.0.1 -> 0.0.2
- `dev/npm version minor` 0.0.1 -> 0.1.0
- `dev/npm version major` 0.0.1 -> 1.0.0

It creates a git tag as well.

### Build

```bash
dev/npm build
```

For some reason, npm package publishing doesn't work with Docker npm.
Until we have a fix, you'd publish with local npm:
```bash
npm publish
```

## Installation

```bash
npm install @leverage-js/ui
```

`demo` directory has a reference app.

Notice the `publish-ui-assets`
npm command that copies the `ui` assets to `web/ui`. You need a similar
command for your app because some components expect their assets to be available
in `/ui` from a web root.
