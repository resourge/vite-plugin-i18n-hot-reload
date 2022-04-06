import { PluginOption } from 'vite';
import fs from 'fs';
import path from 'path';

export type I18nHotReloadConfig = {
	folder: string
}

export default function I18nHotReload(config: I18nHotReloadConfig): PluginOption {
	if (!fs.existsSync(path.resolve(process.cwd(), config.folder))) {
		throw new Error(`Folder ${config.folder} doesn't exist`)
	}
	return {
		name: 'i18n-hot-reload',
		enforce: 'post',
		// HMR
		handleHotUpdate({ file, server }) {
			if ( file.includes(config.folder) ) {
				server.ws.send({
					type: 'full-reload',

					path: file
				});
			}
		}
	}
}
