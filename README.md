# Personal Portfolio Website — Shuvo Roy Dipon

**Batch 10 · Module 27 Assignment** — a responsive, interactive personal portfolio built with **React + Vite**.

Live portfolio: https://sterlingpharmatech.com

## About

I am Shuvo Roy Dipon, a Full Stack Web Developer working with Python, Django, React & AI. This single-page portfolio introduces me, shows my skills with progress bars, displays my projects from a data array, and lets visitors contact me through a validated form.

## Features

**Required sections**
- **Navbar** — logo, Home / About / Skills / Projects / Contact links, mobile hamburger menu, smooth scrolling
- **Home / Hero** — name, title, intro, CSS avatar with initials, **Download CV** (real PDF in `public/Dipon-CV.pdf`) and **View Projects** buttons
- **About Me** — description, educational background, career goals, profile information card
- **Skills** — cards with progress bars (HTML, CSS, JavaScript, React.js, Tailwind CSS, Python, Django, Git & GitHub)
- **Projects** — 6 projects stored in an array (`src/data/projects.js`) and rendered with `.map()`; each card has a visual, title, description, tech badges, Live Demo and GitHub buttons
- **Contact** — form (Name, Email, Subject, Message) with `useState`, `onSubmit` handling, required-field validation with error messages, and a success message after a valid submission
- **Footer** — name, social links (GitHub, LinkedIn, Facebook), copyright

**Additional features — all 5 implemented**
1. ✅ Dark / Light mode toggle (saved in `localStorage`)
2. ✅ Project filtering by technology (All, React, JavaScript, HTML, CSS, Tailwind CSS)
3. ✅ Fully mobile responsive (mobile, tablet, desktop)
4. ✅ Scroll-to-top button (appears after scrolling)
5. ✅ Dynamic navbar — active section highlighted while scrolling (IntersectionObserver)

## Tech Used

- React (functional components only)
- Vite
- Plain CSS with CSS variables (theme-aware, no CSS framework needed at runtime)
- JavaScript (ES6+)

## How to Run

> ⚠️ The zip contains a project folder inside it. First go **into the inner `personal-portfolio` folder** (where `package.json` is), then run the commands.

```bash
cd personal-portfolio
npm install
npm run dev
```

Then open the local address Vite shows (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

## Folder Structure

```
personal-portfolio/
├── public/
│   └── Dipon-CV.pdf          # Downloadable CV used by the hero button
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive navbar + theme toggle + active link
│   │   ├── Hero.jsx          # Home / hero section
│   │   ├── About.jsx         # About me + profile information
│   │   ├── Skills.jsx        # Skill cards with progress bars
│   │   ├── Projects.jsx      # Project filtering + grid
│   │   ├── ProjectCard.jsx   # Single project card
│   │   ├── Contact.jsx       # Contact form with validation
│   │   ├── Footer.jsx        # Footer + social links
│   │   └── ScrollToTop.jsx   # Scroll-to-top button
│   ├── data/
│   │   ├── projects.js       # Projects array (rendered with .map())
│   │   └── skills.js         # Skills array with levels
│   ├── App.jsx               # Main app + theme state
│   ├── App.css               # Component styles (uses CSS variables)
│   ├── index.css             # Theme variables + base styles
│   └── main.jsx              # Entry point
├── index.html
├── package.json
└── README.md
```

## Submission Notes

**GitHub upload (from VS Code / terminal, inside the `personal-portfolio` folder):**

```bash
git init
git add .
git commit -m "Personal Portfolio Website - Batch 10 Module 27"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

**Deploy a live link (Vercel):**

1. Go to vercel.com → Add New → Project → import this GitHub repository.
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
3. Deploy — you get a live URL to submit. (Netlify works the same way: build `npm run build`, publish directory `dist`.)
