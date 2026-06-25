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
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'site.title': 'David Garcia | Desarrollador Backend',
    'site.description': 'Backend Portfolio of David Garcia',
    'profile.role': 'Desarrollador Backend',
    'profile.bio': 'Enfocado en Java y Spring Boot desarrollando API REST y aplicaciones orientadas a datos. Manejo de Hibernate/JPA con PostgreSQL y Spring Security. Desplegando aplicaciones con Docker y controlando las versiones con Git. Adicionalmente, complemento mi perfil con conocimiento y experiencia en Node.js/Express y React, así como Python para el desarrollo y personalización de módulos en Odoo, implementando funcionalidades e integraciones orientadas a procesos de negocio.',
    'stack.title': 'Stack Tecnológico',
    'projects.title': 'Proyectos Destacados',
    'projects.chiro.title': 'Chiro - Finanzas Personales',
    'projects.chiro.desc': 'Aplicación web para la gestión de finanzas personales, con funcionalidades de registro, consulta, actualización y eliminación de gastos e ingresos.',
    'projects.groovy.title': 'Groovy Overlay para OBS',
    'projects.groovy.desc': 'Sistema compuesto por una extensión de Chrome y un servidor Node.js que captura la canción actual del Media Request de StreamElements y la muestra en tiempo real en un overlay de OBS.',
    'projects.polmail.title': 'PolMail - Bot de Soporte',
    'projects.polmail.desc': 'Bot de soporte para Discord creado para la comunidad del Streamer Polispol1. Cuenta con un dashboard para el registro de tickets y la configuración del bot.',
    'projects.link.code': 'Código ↗',
    'projects.link.visit': 'Visitar ↗',
    'projects.link.app': 'App Móvil ↗',
    'experience.title': 'Experiencia Profesional',
    'experience.blueminds.role': 'Consultor / Desarrollador',
    'experience.blueminds.company': 'Blue Minds Spa',
    'experience.blueminds.date': 'Junio 2024 - Marzo 2026',
    'experience.blueminds.desc': 'Desarrollo y personalización de módulos para Odoo desde la versión V14 hasta la V18.',
    'experience.epam_iot.role': 'Desarrollador de software / IoT',
    'experience.epam_iot.company': 'EPAM',
    'experience.epam_iot.date': 'Septiembre 2023 - Febrero 2024',
    'experience.epam_iot.desc': 'Desarrollo de una plataforma de monitoreo ambiental basada en IoT, implementando APIs, procesamiento de datos y mecanismos de autenticación.',
    'experience.epam_backend.role': 'Desarrollador backend',
    'experience.epam_backend.company': 'EPAM',
    'experience.epam_backend.date': 'Noviembre 2022 - Febrero 2023',
    'experience.epam_backend.desc': 'Desarrollo y mantenimiento de un sistema de gestión interna, incluyendo módulos de usuarios e inventario, pruebas y soporte de aplicaciones.',
    'education.title': 'Educación',
    'education.uni.degree': 'Ingeniero en Tecnologías de la Información y Comunicaciones',
    'education.uni.name': 'Universidad Laica Eloy Alfaro de Manabí',
    'education.uni.date': '2018 - 2024',
  },
  en: {
    'nav.profile': 'About Me',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'site.title': 'David Garcia | Backend Developer',
    'site.description': 'Backend Portfolio of David Garcia',
    'profile.role': 'Backend Developer',
    'profile.bio': 'I specialize in Java and Spring Boot, developing REST APIs and data-oriented applications. Proficient in Hibernate/JPA with PostgreSQL and Spring Security. I deploy applications using Docker and manage versions with Git. Additionally, Complement my profile with knowledge and experience in Node.js/Express and React, as well as Python for the development and customization of Odoo modules, implementing functionalities and integrations oriented to business processes.',
    'stack.title': 'Tech Stack',
    'projects.title': 'Featured Projects',
    'projects.chiro.title': 'Chiro - Personal Finance',
    'projects.chiro.desc': 'Web application for personal finance management, featuring registration, query, update, and deletion of expenses and income.',
    'projects.groovy.title': 'Groovy Overlay for OBS',
    'projects.groovy.desc': 'System composed of a Chrome extension and a Node.js server that captures the current song from the StreamElements Media Request and displays it in real-time on an OBS overlay.',
    'projects.polmail.title': 'PolMail - Support Bot',
    'projects.polmail.desc': 'Discord support bot created for the community of Streamer Polispol1. It includes a dashboard for ticket registration and bot configuration.',
    'projects.link.code': 'Code ↗',
    'projects.link.visit': 'Visit ↗',
    'projects.link.app': 'Mobile App ↗',
    'experience.title': 'Professional Experience',
    'experience.blueminds.role': 'Consultor / Developer',
    'experience.blueminds.company': 'Blue Minds Spa',
    'experience.blueminds.date': 'June 2024 - March 2026',
    'experience.blueminds.desc': 'Development and customization of Odoo modules from version V14 to V18.',
    'experience.epam_iot.role': 'Software / IoT Developer',
    'experience.epam_iot.company': 'EPAM',
    'experience.epam_iot.date': 'September 2023 - February 2024',
    'experience.epam_iot.desc': 'Development of an IoT-based environmental monitoring platform, implementing APIs, data processing, and authentication mechanisms.',
    'experience.epam_backend.role': 'Backend Developer',
    'experience.epam_backend.company': 'EPAM',
    'experience.epam_backend.date': 'November 2022 - February 2023',
    'experience.epam_backend.desc': 'Development and maintenance of an internal management system, including user and inventory modules, testing, and application support.',
    'education.title': 'Education',
    'education.uni.degree': 'Information and Communications Technology Engineer',
    'education.uni.name': 'Universidad Laica Eloy Alfaro de Manabí',
    'education.uni.date': '2018 - 2024',
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
