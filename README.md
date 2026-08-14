# Jenny — Front-End Web Developer Portfolio

The personal portfolio of **Jenny**, a Front-End Web Developer. This site presents my skills, real projects and professional profile — including the **Jay Enterprise** flagship project, project documentation, CV, GitHub and LinkedIn.

Built with **React + Vite + Tailwind CSS**.

## Sections

- **Home** — hero with professional statement, GitHub and email
- **About** — short introduction and development focus
- **What I Build** — e-commerce platforms, dashboards, responsive websites and interactive web applications
- **Skills** — front-end, application development, database/backend services, tools and currently-learning topics
- **Projects** — flagship Jay Enterprise, featured projects, more projects and front-end explorations, with working category filters
- **Project Documentation** — structured documentation for major projects (overview, problem, objectives, target users, features, technologies, role, process, challenges, solutions, lessons)
- **Development Journey** — from HTML/CSS/JavaScript to database-connected applications
- **How I Build** — the development process
- **My Professional Profile** — connects CV, LinkedIn, GitHub, portfolio and project documentation
- **Why Work With Me** — personal strengths
- **Contact** — form and direct channels

## Getting Started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/    Reusable UI (Navbar, Footer, Modal, ProjectCard, CaseStudyContent, ...)
  sections/      Page sections (Hero, About, Projects, Documentation, Contact, ...)
  data/          All content: profile, projects, case study and documentation
public/
  projects/      Project screenshot placeholders (replace with real captures)
  favicon.svg
  og-cover.svg
```

## Customising Content

All content lives in `src/data/portfolio.js`:

| Field | Purpose |
| --- | --- |
| `PROFILE.linkedin` | Your LinkedIn URL — add it to activate the LinkedIn button |
| `PROFILE.cvUrl` | Path to your CV file, e.g. `/cv/Jenny_CV.pdf` — add it to activate the CV buttons |
| `PROFILE.github` | GitHub profile URL |
| `PROJECTS` / `SMALL_PROJECTS` | Project cards shown in the Projects section |
| `DOCUMENTATION` | Content of the Project Documentation section |
| `JAY_ENTERPRISE_CASE_STUDY` | Jay Enterprise case study content |

### Adding your CV

Place your PDF at `public/cv/Jenny_CV.pdf` and set `PROFILE.cvUrl: '/cv/Jenny_CV.pdf'`. The **View CV** and **Download CV** buttons in the Professional Profile section will activate automatically.

### Project screenshots

The `public/projects/` images are clean placeholders. Replace each file with a real screenshot (16:9) of the corresponding project. Regenerate placeholders with `node scripts/generate-placeholders.mjs`.

## Security

- No API keys or secrets are stored in this repository.
- Never add `.env` files or credentials to the codebase.

## Author

**Jenny** — Front-End Web Developer