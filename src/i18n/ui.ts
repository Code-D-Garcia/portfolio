export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.profile': 'Sobre Mí',
    'nav.stack': 'Stack',
    'nav.projects': 'Proyectos',
    'site.title': 'Portfolio',
    'site.description': 'Portfolio Personal',
    'profile.role': 'Desarrollador Backend',
    'profile.bio': 'Desarrollador Backend con experiencia en Java y Spring Boot, así como Node.js y Express. Conocimientos en diseño y desarrollo de APIs REST, persistencia de datos mediante Hibernate/JPA y PostgreSQL, gestión de contenedores con Docker y control de versiones con Git. Cuento además con conocimientos básicos de frontend utilizando HTML, JavaScript y React, lo que me permite comprender y colaborar en aplicaciones full stack.',
    'stack.title': 'Stack Tecnológico',
    'projects.title': 'Proyectos Destacados',
    'projects.chiro.title': 'Chiro - Finanzas Personales',
    'projects.chiro.desc': 'Aplicación web para la gestión de finanzas personales, con funcionalidades de registro, consulta, actualización y eliminación de gastos e ingresos.',
    'projects.link.code': 'Código',
    'projects.link.visit': 'Visitar ↗',
  },
  en: {
    'nav.profile': 'About Me',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'site.title': 'Portfolio',
    'site.description': 'Personal Portfolio',
    'profile.role': 'Backend Developer',
    'profile.bio': 'Backend Developer with experience in Java and Spring Boot, as well as Node.js and Express. Knowledgeable in designing and developing REST APIs, data persistence using Hibernate/JPA and PostgreSQL, container management with Docker, and version control with Git. I also have basic frontend knowledge using HTML, JavaScript, and React, which allows me to understand and collaborate on full stack applications.',
    'stack.title': 'Tech Stack',
    'projects.title': 'Featured Projects',
    'projects.chiro.title': 'Chiro - Personal Finance',
    'projects.chiro.desc': 'Web application for personal finance management, featuring registration, query, update, and deletion of expenses and income.',
    'projects.link.code': 'Code',
    'projects.link.visit': 'Visit ↗',
  },
} as const;

export type UIKeys = keyof typeof ui[typeof defaultLang];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
