import javaIcon from '../assets/icons/java.svg';
import springIcon from '../assets/icons/spring.svg';
import pythonIcon from '../assets/icons/python.svg';
import fastapiIcon from '../assets/icons/fastapi.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import reactIcon from '../assets/icons/react.svg';
import flutterIcon from '../assets/icons/flutter.svg';
import odooIcon from '../assets/icons/odoo.svg';
import postgresqlIcon from '../assets/icons/postgresql.svg';
import sqlIcon from '../assets/icons/sql.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';

// Order follows the CV headline: backend first, then frontend/mobile, then data.
export const stackData = [
	{ name: "Java", icon: javaIcon },
	{ name: "Spring Boot", icon: springIcon },
	{ name: "Python", icon: pythonIcon },
	{ name: "FastAPI", icon: fastapiIcon },
	{ name: "JavaScript", icon: javascriptIcon },
	{ name: "TypeScript", icon: typescriptIcon },
	{ name: "Node.js", icon: nodejsIcon },
	{ name: "React", icon: reactIcon },
	{ name: "Flutter", icon: flutterIcon },
	{ name: "Odoo", icon: odooIcon, hideName: true, iconWidth: "64px" },
	{ name: "PostgreSQL", icon: postgresqlIcon },
	{ name: "SQL", icon: sqlIcon },
	{ name: "MongoDB", icon: mongodbIcon },
];
