// ============================================================
// portfolioData.js — Re-exports content managed via the CMS (/admin).
// The actual data lives in JSON files under /content, editable
// through Decap CMS or by hand. This file just reshapes it into
// what the components expect.
// ============================================================

import personal from '../../content/personal.json';
import hero from '../../content/hero.json';
import about from '../../content/about.json';
import processContent from '../../content/process.json';
import technicalSkillsData from '../../content/technical-skills.json';
import softSkillsData from '../../content/soft-skills.json';
import projectsData from '../../content/projects.json';
import blogData from '../../content/blog.json';
import certificatesData from '../../content/certificates.json';
import educationData from '../../content/education.json';
import experienceData from '../../content/experience.json';
import footerData from '../../content/footer.json';

export const personalInfo = {
  name: personal.name,
  firstName: personal.firstName,
  brandName: personal.brandName,
  title: personal.title,
  location: personal.location,
  phone: personal.phone,
  emails: {
    primary: personal.email,
  },
  summary: personal.summary,
  resumeUrl: personal.resumeUrl,
};

export const socialLinks = {
  github: personal.github,
  linkedin: personal.linkedin,
};

export const heroContent = hero;

export const aboutContent = about;

export const skillsContent = processContent;

export const technicalSkills = technicalSkillsData;

export const softSkillsList = softSkillsData.items;

export const projects = projectsData.items;

export const blog = blogData;

export const certificates = certificatesData;

export const education = educationData;

export const experienceList = experienceData.items;

export const footerContent = {
  taglines: footerData.taglines,
  credential: footerData.credential,
  copyright: `© ${new Date().getFullYear()} ${footerData.copyrightName} | ${footerData.copyrightSuffix}`,
};

// EmailJS Configuration — env vars only, not CMS-managed.
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
