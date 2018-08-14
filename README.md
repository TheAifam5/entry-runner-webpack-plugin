# Webpack Plugin for running entry in another process

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependencies][david-image]][david-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## Install

```bash
yarn add -D entry-runner-webpack-plugin
```

```bash
npm add --save-dev entry-runner-webpack-plugin
```

## Usage

### Javascript

```js
const EntryRunnerWebpackPlugin = require('entry-runner-webpack-plugin');
const path = require('path');

const baseDir = path.resolve(__dirname);

const config = {
  plugins: [
    new EntryRunnerWebpackPlugin(path.resolve(__dirname), 'main.js')
  ]
};
```

### TypeScript

```ts
import * as path from 'path';
import * as webpack from 'webpack';
import EntryRunnerWebpackPlugin from 'entry-runner-webpack-plugin';

const baseDir = path.resolve(__dirname);

const config: webpack.Configuration  = {
  plugins: [
    new EntryRunnerWebpackPlugin(path.resolve(__dirname), 'main.js')
  ]
};

export default config;
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/entry-runner-webpack-plugin.svg
[npm-url]: https://npmjs.org/package/entry-runner-webpack-plugin
[travis-image]: https://travis-ci.org/TheAifam5/entry-runner-webpack-plugin.svg?branch=master
[travis-url]: https://travis-ci.org/TheAifam5/entry-runner-webpack-plugin
[david-image]: https://david-dm.org/TheAifam5/entry-runner-webpack-plugin.svg
[david-url]: https://david-dm.org/TheAifam5/entry-runner-webpack-plugin
[coveralls-image]: https://img.shields.io/coveralls/TheAifam5/entry-runner-webpack-plugin/master.svg
[coveralls-url]: https://coveralls.io/r/TheAifam5/entry-runner-webpack-plugin?branch=master
