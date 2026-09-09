// ============================================================
// portfolioData.js — Centralized configuration for Tushar Vashishth's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Tushar Vashishth",
  firstName: "Tushar",
  brandName: "Tushar Vashishth",
  title: "AI Engineer",
  location: "Bengaluru, India",
  phone: "+91 95481-89388",
  emails: {
    primary: "tusharvashishth469@gmail.com",
  },
  summary:
    "AI Engineer focused on building practical AI solutions using Python, LLMs, RAG, and NLP. I enjoy taking ideas from a problem to a working solution — from development and integration to deployment.",
  resumeUrl: "/Tushar_Vashishth_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/vashishthtushar",
  linkedin: "https://www.linkedin.com/in/tushar-vashishth-2ai/",
};

export const heroContent = {
  greeting: "Hi, I'm Tushar",
  titleHighlight: "AI Engineer",
  subtitle:
    "I build practical AI solutions using Python, LLMs, RAG, and NLP — from development and integration to deployment.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:tusharvashishth469@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Tushar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Tushar_Vashishth_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Tushar Vashishth</span>, an AI Engineer building production-oriented AI/GenAI solutions — from LLM-powered pipelines and RAG systems to backend services that ship them.`,
  techStack: ["Python", "LangChain", "FastAPI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into working AI systems",
  description:
    "I follow a structured, research-driven approach to turn ambiguous problems into deployed, production-ready AI solutions.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem, the data available, and the technical constraints to find the right approach — not just the trendiest one.",
    },
    {
      number: "02",
      title: "Design",
      text: "Designing the pipeline architecture — from data ingestion and retrieval strategy to model choice and API contracts — before writing production code.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building the backend, integrating LLM APIs and vector search, and training or fine-tuning models using Python, FastAPI, and modern ML tooling.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Shipping to production, monitoring model behavior, and iterating — including deployment and troubleshooting on Linux environments.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming & Backend",
      skills: ["Python", "FastAPI", "Django", "REST APIs", "Pandas", "NumPy", "System Design"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "LLMs",
        "Generative AI",
        "RAG",
        "NLP",
        "ML Algorithms",
        "Deep Learning / Neural Networks",
        "Embeddings & Vector DBs",
        "Knowledge Graphs",
        "Scikit-learn",
        "PyTorch",
        "TensorFlow",
      ],
    },
    {
      title: "Data & Tools",
      skills: [
        "Hugging Face",
        "LangChain",
        "Neo4j",
        "Docker",
        "Git & GitHub",
        "OpenCV",
        "OCR",
        "SHAP",
        "Deployment Tools",
      ],
    },
  ],
};

// Soft skills — from "Additional Capabilities" on resume
export const softSkillsList = [
  { name: "Product Positioning", icon: "🎯", desc: "Framing technical solutions in terms of the business problem they actually solve." },
  { name: "Market Research", icon: "🔍", desc: "Investigating the landscape before committing to an approach or architecture." },
  { name: "Customer Understanding", icon: "🧭", desc: "Grounding AI workflows in what the end user actually needs from the system." },
  { name: "Business Problem Analysis", icon: "🧩", desc: "Breaking down ambiguous business asks into concrete, solvable technical problems." },
  { name: "Technical Research", icon: "📚", desc: "Evaluating new models, frameworks, and techniques before adopting them in production." },
  { name: "Solution Thinking", icon: "💡", desc: "Moving from a stated problem to a working, deployable solution end-to-end." },
  { name: "Cross-functional Collaboration", icon: "🤝", desc: "Working across product, data, and engineering to ship AI features that stick." },
  { name: "Adaptability", icon: "🌟", desc: "Comfortable picking up new tools and frameworks as the AI stack keeps shifting." },
];

export const projects = [
  {
    id: "resume-intelligence",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AI-Powered Resume Intelligence & Talent Matching System",
    description:
      "An AI-powered pipeline that extracts and structures information from unstructured resumes using OCR, NLP, and LLM APIs, then uses RAG-based retrieval and semantic matching over embeddings and vector search to identify relevant talent against requirements. Designed and deployed as a scalable AI workflow capable of supporting millions of records/users, with automated processing and matching.",
    techTags: ["Python", "LLM APIs", "RAG", "Embeddings", "Vector Search", "OCR", "NLP"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "lithosense",
    number: "02",
    badge: null,
    title: "LithoSense — Explainable AI Tool for Gallstone Risk Prediction",
    description:
      "An end-to-end XGBoost ML pipeline for gallstone risk prediction, covering preprocessing, feature engineering, training, and evaluation. Implements SHAP-based explainability for global and patient-level insights into model predictions, wraps the prediction model with FastAPI, and deploys the application through Streamlit with a Hugging Face LLM API integration for automated clinical insights.",
    techTags: ["Python", "XGBoost", "Scikit-learn", "SHAP", "FastAPI", "Streamlit", "Hugging Face"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Minor in Data Science (AI & ML)",
      issuer: "CCE, IIT Mandi",
      icon: "🎓",
    },
    {
      name: "Full Stack Development",
      issuer: "Apna College",
      icon: "💻",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  badge: "Academic Background",
  heading: "Education",
  description: "A foundation spanning traditional computer science and specialized AI/ML training.",
  entries: [
    {
      degree: "Minor in Data Science (AI and ML)",
      institution: "Indian Institute of Technology Mandi",
      duration: "Jul 2024 – Dec 2025",
    },
    {
      degree: "Bachelor of Science",
      institution: "Dr. Bhimrao Ambedkar University, Agra",
      duration: "May 2019 – Sep 2023",
    },
  ],
};

// Professional experience — rendered by the Experience section
export const experienceList = [
  {
    organization: "AiDOOS",
    role: "AI Engineer",
    duration: "Feb 2026 – Present",
    location: "Bengaluru, India",
    skills: [
      "Production-oriented AI/GenAI solutions using LLM APIs, RAG, embeddings, and vector search",
      "Python backend services with FastAPI and Django, integrating REST APIs for AI-powered workflows",
      "End-to-end ML pipeline for effort prediction — scraping, cleaning, feature engineering, and XGBoost model training",
      "Model integration, deployment, and troubleshooting on Linux production environments",
      "Knowledge-graph and AI retrieval solutions using Neo4j to improve information retrieval and reasoning",
    ],
    tech: ["Python", "FastAPI", "Django", "LLM APIs", "RAG", "XGBoost", "Neo4j"],
  },
];

export const footerContent = {
  taglines: ["AI Engineering & GenAI", "Python · LLMs · RAG", "Backend & ML Systems"],
  credential: "Minor in DS (AI/ML) · IIT Mandi",
  copyright: `© ${new Date().getFullYear()} Tushar Vashishth | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
