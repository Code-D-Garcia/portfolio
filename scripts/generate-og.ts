/**
 * Generates the social preview images (Open Graph) in public/og/<lang>.jpg.
 * Run with `pnpm og` after changing the name, role or photo. Not part of the
 * build, so the images are committed like any other static asset.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';
import { languages, ui, type Lang } from '../src/i18n/ui.ts';

const WIDTH = 1200;
const HEIGHT = 630;
const NAME = 'David Garcia';
const STACK = 'Java · Spring Boot · Node.js · PostgreSQL';

const root = new URL('../', import.meta.url);
const fontFile = (weight: number) =>
	readFile(new URL(`node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`, root));

const [regular, bold, photo] = await Promise.all([
	fontFile(400),
	fontFile(700),
	sharp(fileURLToPath(new URL('src/assets/photo.webp', root))).resize(360, 360).png().toBuffer(),
]);
const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra = {}): Node => ({
	type,
	props: { style, children, ...extra },
});

function card(lang: Lang): Node {
	const role = ui[lang]['profile.role'];
	return h('div', {
		width: WIDTH,
		height: HEIGHT,
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '80px 96px',
		backgroundColor: '#161616',
		color: '#fafafa',
		fontFamily: 'Inter',
	}, [
		h('div', { display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }, [
			h('div', { fontSize: 30, color: '#50fa7b', marginBottom: 24 }, '> code-d-garcia'),
			h('div', { fontSize: 84, fontWeight: 700, lineHeight: 1.05 }, NAME),
			h('div', { fontSize: 44, color: '#a1a1aa', marginTop: 16 }, role),
			h('div', { width: 120, height: 6, backgroundColor: '#bd93f9', borderRadius: 3, margin: '40px 0 28px' }),
			h('div', { fontSize: 28, color: '#8be9fd' }, STACK),
		]),
		h('img', { width: 320, height: 320, flexShrink: 0, marginLeft: 48, borderRadius: 160, border: '6px solid #27272a' }, undefined, {
			src: photoSrc,
			width: 320,
			height: 320,
		}),
	]);
}

const outDir = new URL('public/og/', root);
await mkdir(outDir, { recursive: true });

for (const lang of Object.keys(languages) as Lang[]) {
	const svg = await satori(card(lang) as never, {
		width: WIDTH,
		height: HEIGHT,
		fonts: [
			{ name: 'Inter', data: regular, weight: 400, style: 'normal' },
			{ name: 'Inter', data: bold, weight: 700, style: 'normal' },
		],
	});
	const jpg = await sharp(Buffer.from(svg)).jpeg({ quality: 85, mozjpeg: true }).toBuffer();
	await writeFile(new URL(`${lang}.jpg`, outDir), jpg);
	console.log(`public/og/${lang}.jpg (${Math.round(jpg.length / 1024)} KB)`);
}
