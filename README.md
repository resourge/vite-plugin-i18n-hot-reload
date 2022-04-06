# vite-plugin-i18n-hot-reload

[![npm](https://www.npmjs.com/package/vite-plugin-i18n-hot-reload)](https://www.npmjs.com/package/vite-plugin-i18n-hot-reload)
[![GitHub license](https://img.shields.io/github/license/gxmari007/vite-plugin-eslint)](https://github.com/jdaoliveiraprograming/vite-plugin-i18n-hot-reload/blob/master/LICENSE)

I18n hot reload plugin for vite.

## Install

```
npm i vite-plugin-i18n-hot-reload --save-dev
# or
yarn add vite-plugin-i18n-hot-reload --dev
```

## Usage

```js
import { defineConfig } from 'vite';
import I18nHotReload from 'vite-plugin-i18n-hot-reload';

export default defineConfig({
	plugins: [
		I18nHotReload({
			folder: 'public/locales'
		})
	],
});
```

## Options

### `folder`

- Type: `string`

Locales folder

## License

MIT