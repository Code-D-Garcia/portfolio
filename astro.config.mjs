// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.codedgarcia.dev',
	i18n: {
		// Keep in sync with `languages` / `defaultLang` in src/i18n/ui.ts.
		locales: ['es', 'en'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// Only real pages; `/` is just a redirect to the default language.
			filter: (page) => /\/(es|en)\//.test(page),
			i18n: {
				defaultLocale: 'en',
				locales: { es: 'es', en: 'en' },
			},
		}),
	],
});
