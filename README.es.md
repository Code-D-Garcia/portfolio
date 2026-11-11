[**Read in English**](README.md)

# David Garcia - Portafolio Personal

Este es el repositorio del portafolio web personal de **David Garcia**, Desarrollador de Software enfocado en backend. El sitio está construido con [Astro](https://astro.build/) como sitio estático, en español e inglés, y se publica en **[codedgarcia.dev](https://www.codedgarcia.dev/)**.

## 🚀 Tecnologías y Stack

En este portafolio destaco mi experiencia y conocimientos en el siguiente stack tecnológico:

- **Backend:** Java, Spring Boot, Spring Security, Python, FastAPI, Node.js, Express, Odoo.
- **Frontend y móvil:** React, TypeScript, JavaScript, Flutter.
- **Bases de datos:** PostgreSQL, SQL, MongoDB.
- **Herramientas:** Docker, Linux, Git.

## 🧞 Comandos de Desarrollo

El proyecto usa `pnpm` como gestor de dependencias. Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala todas las dependencias necesarias. |
| `pnpm dev` | Inicia el servidor de desarrollo local en `localhost:4321`. |
| `pnpm build` | Compila el sitio para producción en el directorio `./dist/`. |
| `pnpm preview` | Previsualiza la compilación de producción de forma local. |
| `pnpm check` | Comprueba los tipos de TypeScript y del contenido. |
| `pnpm og` | Regenera las imágenes de vista previa para redes sociales (`public/og/`). |

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── cv/              # CV descargable (david-garcia-cv.pdf).
│   └── og/              # Imágenes de vista previa generadas con `pnpm og`.
├── scripts/             # Script que genera las imágenes de vista previa.
├── src/
│   ├── assets/          # Foto, íconos del stack y capturas de los proyectos.
│   ├── components/      # Secciones (perfil, stack, experiencia, proyectos...) y componentes de UI.
│   ├── content/
│   │   ├── experience/  # Un archivo YAML por empleo.
│   │   └── projects/    # Un archivo YAML por proyecto.
│   ├── data/            # Stack, redes sociales y filtros de proyectos.
│   ├── i18n/ui.ts       # Textos de la interfaz en español e inglés.
│   ├── layouts/         # Layout base con metaetiquetas SEO.
│   ├── pages/           # Rutas por idioma (/es/, /en/) y robots.txt.
│   └── content.config.ts # Esquema que valida proyectos y experiencia.
└── astro.config.mjs     # Dominio, idiomas y sitemap.
```

## ✏️ Actualizar el Contenido

- **Añadir un proyecto:** crea un archivo en `src/content/projects/` siguiendo el formato de los existentes (título y descripción en ambos idiomas, stack, capturas y enlaces opcionales `repo`, `demo` y `app`). Las capturas van en `src/assets/captures/`. El campo `order` define la posición, y en la portada se muestran los 4 primeros.
- **Añadir un empleo:** crea un archivo en `src/content/experience/` con fechas en formato `AAAA-MM`. Si omites `end`, se muestra como empleo actual. Los años de experiencia del perfil se calculan a partir de estos archivos.
- **Actualizar el CV:** reemplaza `public/cv/david-garcia-cv.pdf`.
- **Cambiar el rol o la foto:** después ejecuta `pnpm og` para regenerar las imágenes de vista previa.

Si falta un campo obligatorio o una traducción, `pnpm build` falla indicando qué archivo corregir.

## 🔗 Enlaces y Contacto

- **Portafolio:** [codedgarcia.dev](https://www.codedgarcia.dev/)
- **GitHub:** [@Code-D-Garcia](https://github.com/Code-D-Garcia)
- **LinkedIn:** [David García](https://www.linkedin.com/in/david-garc%C3%ADa-ab354b313/)
