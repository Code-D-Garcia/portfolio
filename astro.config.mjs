// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	i18n: {
		// Keep in sync with `languages` / `defaultLang` in src/i18n/ui.ts.
		locales: ['es', 'en'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
});
