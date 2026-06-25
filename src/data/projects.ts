import chiroWeb from '../assets/captures/chiro_web.webp';
import groovyOverlay from '../assets/captures/groovy_overlay.webp';
import polmailResume from '../assets/captures/polmail/captura_resumen.webp';
import polmailConfig from '../assets/captures/polmail/captura_config.webp';
import polmailSnippes from '../assets/captures/polmail/captura_snippes.webp';
import polmailTickets from '../assets/captures/polmail/captura_tickets.webp';
import chiroResumen from '../assets/captures/chiro_resumen.webp';

export const projectsData = [
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

