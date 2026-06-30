import chiroWeb from '../assets/captures/chiro_web.webp';
import groovyOverlay from '../assets/captures/groovy_overlay.webp';
import polmailResume from '../assets/captures/polmail/captura_resumen.webp';
import polmailConfig from '../assets/captures/polmail/captura_config.webp';
import polmailSnippes from '../assets/captures/polmail/captura_snippes.webp';
import polmailTickets from '../assets/captures/polmail/captura_tickets.webp';
import chiroResumen from '../assets/captures/chiro_resumen.webp';
import eternalResumen from '../assets/captures/espacio_compartido/eternal_resumen.webp';
import capturaLogin from '../assets/captures/espacio_compartido/captura_login.webp';
import capturaVideojuegos from '../assets/captures/espacio_compartido/captura_videojuegos.webp';
import modalMedia from '../assets/captures/espacio_compartido/modal_media.webp';

export const projectsData = [
	{
		id: 'eternal',
		stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "React", "TypeScript"],
		images: [eternalResumen, capturaLogin, capturaVideojuegos, modalMedia]
	},
	{
		id: 'polmail',
		stack: ["Node.js", "Express", "React", "JavaScript", "TypeScript", "DiscordJS", "PgSQL", "JWT"],
		images: [polmailResume, polmailConfig, polmailSnippes, polmailTickets]
	},
	{
		id: 'chiro',
		stack: ["Spring Boot", "PostgreSQL", "Spring Security", "Hibernate/Jpa", "Auth/JWT", "React"],
		link: "https://youtu.be/3fWum26r_Cc",
		repo: "https://github.com/Code-D-Garcia/personal-expenses-backend",
		images: [chiroResumen, chiroWeb],
		appLink: "https://youtube.com/shorts/L0jcoHum2SA"
	},
	{
		id: 'groovy',
		stack: ["Node.js", "ExpressJS", "WebSockets", "Chrome Extension", "JavaScript","HTML5","CSS3"],
		link: "https://youtu.be/kTuhsJCAX_E",
		repo: "https://github.com/Code-D-Garcia/groovy-overlay",
		image: groovyOverlay,
	}
];

