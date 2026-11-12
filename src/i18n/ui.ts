export const languages = {
  es: 'Español',
  en: 'English',
};

// Keep in sync with `i18n` in astro.config.mjs.
export const defaultLang = 'en';

export const ui = {
  es: {
    'a11y.skip': 'Saltar al contenido',
    'cv.download': 'Descargar CV',
    'footer.rights': 'Hecho con Astro.',
    'a11y.menu': 'Abrir o cerrar el menú',
    'a11y.theme': 'Cambiar entre tema claro y oscuro',
    'a11y.language': 'Idioma',
    'a11y.image.prev': 'Imagen anterior',
    'a11y.image.next': 'Imagen siguiente',
    'a11y.image.goto': 'Ir a la imagen',
    'a11y.image.close': 'Cerrar',
    'a11y.image.zoom': 'Ampliar imagen',
    'nav.profile': 'Sobre Mí',
    'nav.stack': 'Stack',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'site.title': 'David Garcia | Desarrollador de Software',
    'site.description': 'Portafolio de David Garcia, desarrollador de software especializado en backend con Java, Spring Boot, Python y Node.js.',
    'profile.role': 'Desarrollador de Software',
    'profile.stat.years': 'Años de experiencia',
    'profile.stat.projects': 'Proyectos',
    'profile.contact': 'Contactar',
    'profile.bio': 'Desarrollador de Software con +{years} años de experiencia en desarrollo backend con Java, Spring Boot, Python (FastAPI) y Node.js, construyendo APIs REST, integraciones entre sistemas y automatizaciones de procesos de negocio. Experiencia en arquitectura de microservicios, modernización de sistemas legados, soluciones multiempresa y desarrollo de módulos Odoo (versiones 14 a 18), complementada con React, TypeScript y Flutter. Enfocado en seguridad, principios SOLID y código mantenible, con experiencia en trabajo en equipo y comunicación directa con clientes.',
    'stack.title': 'Stack Tecnológico',
    'stack.kicker': 'Inventario',
    'experience.kicker': 'Registro de misiones',
    'education.kicker': 'Entrenamiento',
    'projects.kicker': 'Misiones completadas',
    'projects.title': 'Proyectos Destacados',
    'projects.all.title': 'Todos los Proyectos',
    'projects.filter.title': 'Filtrar por tecnología:',
    'projects.filter.all': 'Todos',
    'projects.more': 'Ver todos los proyectos ➔',
    'projects.back': 'Volver al inicio',
    'projects.link.code': 'Código ↗',
    'projects.link.demo': 'Demo ↗',
    'projects.link.app': 'App Móvil ↗',
    'projects.private': 'Proyecto Privado',
    'experience.title': 'Experiencia Profesional',
    'experience.present': 'Actualidad',
    'education.title': 'Educación',
    'education.uni.degree': 'Ingeniero en Tecnologías de la Información y Comunicaciones',
    'education.uni.name': 'Universidad Laica Eloy Alfaro de Manabí',
    'education.uni.date': '2018 - 2024',
  },
  en: {
    'a11y.skip': 'Skip to content',
    'cv.download': 'Download CV',
    'footer.rights': 'Built with Astro.',
    'a11y.menu': 'Open or close the menu',
    'a11y.theme': 'Switch between light and dark theme',
    'a11y.language': 'Language',
    'a11y.image.prev': 'Previous image',
    'a11y.image.next': 'Next image',
    'a11y.image.goto': 'Go to image',
    'a11y.image.close': 'Close',
    'a11y.image.zoom': 'Enlarge image',
    'nav.profile': 'About Me',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'site.title': 'David Garcia | Software Developer',
    'site.description': 'Portfolio of David Garcia, a software developer specializing in backend with Java, Spring Boot, Python and Node.js.',
    'profile.role': 'Software Developer',
    'profile.stat.years': 'Years of experience',
    'profile.stat.projects': 'Projects',
    'profile.contact': 'Get in touch',
    'profile.bio': 'Software Developer with {years}+ years of backend experience in Java, Spring Boot, Python (FastAPI) and Node.js, building REST APIs, system integrations and business process automation. Experienced in microservices architecture, legacy system modernization, multi-tenant solutions and Odoo module development (versions 14 to 18), complemented by React, TypeScript and Flutter. Focused on security, SOLID principles and maintainable code, with experience in teamwork and direct client communication.',
    'stack.title': 'Tech Stack',
    'stack.kicker': 'Inventory',
    'experience.kicker': 'Quest log',
    'education.kicker': 'Training',
    'projects.kicker': 'Completed quests',
    'projects.title': 'Featured Projects',
    'projects.all.title': 'All Projects',
    'projects.filter.title': 'Filter by technology:',
    'projects.filter.all': 'All',
    'projects.more': 'View all projects ➔',
    'projects.back': 'Back to Home',
    'projects.link.code': 'Code ↗',
    'projects.link.demo': 'Demo ↗',
    'projects.link.app': 'Mobile App ↗',
    'projects.private': 'Private Project',
    'experience.title': 'Professional Experience',
    'experience.present': 'Present',
    'education.title': 'Education',
    'education.uni.degree': 'Information and Communications Technology Engineer',
    'education.uni.name': 'Universidad Laica Eloy Alfaro de Manabí',
    'education.uni.date': '2018 - 2024',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];

/** Narrow `Astro.currentLocale` (a plain string) to a supported language. */
export function toLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/** `getStaticPaths` result for pages under `src/pages/[lang]/`. */
export function getLangStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

/** Format a `YYYY-MM` string as e.g. "Junio 2024" / "June 2024". */
export function formatYearMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  const name = new Intl.DateTimeFormat(lang, { month: 'long', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)));
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${year}`;
}
