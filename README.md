[**Leer en Español 🇪🇸**](README.es.md)

# David Garcia - Personal Portfolio

This is the repository for the personal web portfolio of **David Garcia**, a Software Developer focused on backend. The site is built with [Astro](https://astro.build/) as a static site, in Spanish and English, and is published at **[codedgarcia.dev](https://www.codedgarcia.dev/)**.

## 🚀 Technologies & Stack

In this portfolio, I highlight my experience and knowledge in the following technology stack:

- **Backend:** Java, Spring Boot, Spring Security, Python, FastAPI, Node.js, Express, Odoo.
- **Frontend & Mobile:** React, TypeScript, JavaScript, Flutter.
- **Databases:** PostgreSQL, SQL, MongoDB.
- **Tools:** Docker, Linux, Git.

## 🧞 Development Commands

The project uses `pnpm` as its package manager. Run all commands from the project root:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs all necessary dependencies. |
| `pnpm dev` | Starts the local development server at `localhost:4321`. |
| `pnpm build` | Builds the production site to the `./dist/` directory. |
| `pnpm preview` | Previews the production build locally. |
| `pnpm check` | Type-checks the TypeScript code and content. |
| `pnpm og` | Regenerates the social preview images (`public/og/`). |

## 📁 Project Structure

```text
/
├── public/
│   ├── cv/              # Downloadable CV (david-garcia-cv.pdf).
│   └── og/              # Social preview images generated with `pnpm og`.
├── scripts/             # Script that generates the social preview images.
├── src/
│   ├── assets/          # Photo, stack icons and project screenshots.
│   ├── components/      # Sections (profile, stack, experience, projects...) and UI components.
│   ├── content/
│   │   ├── experience/  # One YAML file per job.
│   │   └── projects/    # One YAML file per project.
│   ├── data/            # Stack, social links and project filters.
│   ├── i18n/ui.ts       # Interface strings in Spanish and English.
│   ├── layouts/         # Base layout with SEO meta tags.
│   ├── pages/           # Per-language routes (/es/, /en/) and robots.txt.
│   └── content.config.ts # Schema that validates projects and experience.
└── astro.config.mjs     # Domain, languages and sitemap.
```

## ✏️ Updating the Content

- **Add a project:** create a file in `src/content/projects/` following the existing ones (title and description in both languages, stack, screenshots and optional `repo`, `demo` and `app` links). Screenshots go in `src/assets/captures/`. The `order` field sets the position; the home page shows the first 4.
- **Add a job:** create a file in `src/content/experience/` with dates as `YYYY-MM`. Omit `end` for a current position. The years of experience in the profile are computed from these files.
- **Update the CV:** replace `public/cv/david-garcia-cv.pdf`.
- **Change the role or photo:** then run `pnpm og` to regenerate the social preview images.

If a required field or a translation is missing, `pnpm build` fails and names the file to fix.

## 🔗 Links & Contact

- **Portfolio:** [codedgarcia.dev](https://www.codedgarcia.dev/)
- **GitHub:** [@Code-D-Garcia](https://github.com/Code-D-Garcia)
- **LinkedIn:** [David García](https://www.linkedin.com/in/david-garc%C3%ADa-ab354b313/)
