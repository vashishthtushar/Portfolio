# Tushar Vashishth — Portfolio

A premium, animated single-page portfolio built with React, Vite, Tailwind CSS, Framer Motion, and AOS.

## Stack

- **React 19** + **Vite** — app shell and build tooling
- **Tailwind CSS v4** — styling
- **Framer Motion** — preloader and scroll-linked animations
- **AOS** — scroll-reveal animations
- **EmailJS** *(optional)* — the contact form falls back to a pre-filled `mailto:` link when EmailJS isn't configured

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

All personal content (name, bio, skills, projects, experience, education, certificates, and social links) lives in a single file: [`src/data/portfolioData.js`](src/data/portfolioData.js). Update it to change any content across the site without touching component code.

## Contact form

The contact form (`src/components/Contact.jsx`) opens the visitor's email client with a pre-filled message by default. To send real emails instead, create a free [EmailJS](https://www.emailjs.com/) account and set these environment variables (e.g. in a `.env.local` file, see `.gitignore`):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Deployment

Deployed on [Vercel](https://vercel.com):

- **Build command:** `npm run build`
- **Output directory:** `dist`
