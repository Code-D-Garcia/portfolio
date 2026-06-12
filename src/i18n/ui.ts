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
    'profile.bio': 'Enfocado en Java y Spring Boot desarrollando API REST y aplicaciones orientadas a datos. Manejo de Hibernate/JPA con PostgreSQL y Spring Security. Desplegando aplicaciones con Docker y controlando las versiones con Git. Adicionalmente, complemento mi perfil con conocimiento y experiencia en Node.js/Express y React, así como Python para el desarrollo y personalización de módulos en Odoo, implementando funcionalidades e integraciones orientadas a procesos de negocio.',
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
    'profile.bio': 'I specialize in Java and Spring Boot, developing REST APIs and data-oriented applications. I am proficient in Hibernate/JPA with PostgreSQL and Spring Security. I deploy applications using Docker and manage versions with Git. Additionally, I complement my profile with knowledge and experience in Node.js/Express and React, as well as Python for the development and customization of Odoo modules, implementing functionalities and integrations oriented to business processes.',
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
