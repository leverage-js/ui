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
dev/npm run serve
```

`dev/npm run serve` launches the dev web server with hot module reload. Demo file
updates are instant, while `ui` updates may take a couple of seconds for a full
dev server restart.

Latest demo is deployed on [ui.architechlabs.com](http://ui.architechlabs.com)
(test server):

```bash
deploy ui.architechlabs.com
```

### Export components

`index.js` contains all the exports. You put any new components or
component renames here.

## Publishing

### Version increment

Three commands for three kinds of increment:
- `npm version patch` 0.0.1 -> 0.0.2
- `npm version minor` 0.0.1 -> 0.1.0
- `npm version major` 0.0.1 -> 1.0.0

It creates a git tag as well. `dev/npm` fails to create a git tag in my env.

### Build

```bash
dev/npm run build
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

For sane `ui` error messages in app, you need a dev `ui` build:

```bash
dev/npm run build:dev
```

Then copy `dist/index.js` to `node_modules/@leverage-js/ui/dist` in app
and rebuild it. `ui` error messages should be fine now.
