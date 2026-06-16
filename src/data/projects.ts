import chiroWeb from '../assets/captures/chiro_web.webp';
import groovyOverlay from '../assets/captures/groovy_overlay.webp';

export const projectsData = [
	{
		id: 'chiro',
		stack: ["Spring Boot", "PostgreSQL", "Spring Security", "Hibernate/Jpa", "Auth/JWT", "React"],
		link: "https://youtu.be/3fWum26r_Cc",
		repo: "https://github.com/Code-D-Garcia/personal-expenses-backend",
		image: chiroWeb,
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
