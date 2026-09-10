// ============================================================
// portfolioData.js — Centralized configuration for Tushar Vashishth's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Tushar Vashishth",
  firstName: "Tushar",
  brandName: "Tushar Vashishth",
  title: "AI/ML Engineer",
  location: "Bengaluru, India",
  phone: "+91 95481-89388",
  emails: {
    primary: "tusharvashishth469@gmail.com",
  },
  summary:
    "AI/ML Engineer focused on building practical AI solutions using Python, LLMs, RAG, and NLP. I enjoy taking ideas from a problem to a working solution — from development and integration to deployment.",
  resumeUrl: "/Tushar_Vashishth_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/vashishthtushar",
  linkedin: "https://www.linkedin.com/in/tushar-vashishth-2ai/",
};

export const heroContent = {
  greeting: "Hi, I'm Tushar",
  titleHighlight: "AI/ML Engineer",
  subtitle:
    "I design and ship production-grade AI systems — LLM pipelines, RAG, and machine learning models — turning ambiguous problems into deployed solutions that scale.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:tusharvashishth469@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Tushar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Tushar_Vashishth_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Tushar Vashishth</span>, an AI/ML Engineer building production-oriented AI/GenAI solutions — from LLM-powered pipelines and RAG systems to backend services that ship them.`,
  techStack: ["Python", "Django", "FastAPI", "PyTorch", "TensorFlow", "LangChain", "Hugging Face", "Docker"],
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
    confidential: true,
    confidentialNote: "Built at AiDOOS — proprietary; code and live demo are confidential.",
  },
  {
    id: "story-point-prediction",
    number: "02",
    badge: null,
    title: "Story Point Prediction — ML-Based Task Effort Estimator",
    description:
      "A machine learning pipeline that predicts story-point effort for engineering tasks from historical project data, built to help teams estimate task effort before work begins. Covers the full lifecycle in-house — data collection and scraping, cleaning and preprocessing, feature engineering, and model training and evaluation with XGBoost.",
    techTags: ["Python", "XGBoost", "Feature Engineering", "Web Scraping", "Pandas"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
    confidential: true,
    confidentialNote: "Built at AiDOOS — proprietary; code and live demo are confidential.",
  },
  {
    id: "lithosense",
    number: "03",
    badge: null,
    title: "LithoSense — Explainable AI Tool for Gallstone Risk Prediction",
    description:
      "An end-to-end XGBoost ML pipeline for gallstone risk prediction, covering preprocessing, feature engineering, training, and evaluation. Implements SHAP-based explainability for global and patient-level insights into model predictions, wraps the prediction model with FastAPI, and deploys the application through Streamlit with a Hugging Face LLM API integration for automated clinical insights.",
    techTags: ["Python", "XGBoost", "Scikit-learn", "SHAP", "FastAPI", "Streamlit", "Hugging Face"],
    links: {
      github: "https://github.com/vashishthtushar/LithoSense",
      demo: "https://lithosense-8heftpobxfzrovbte2nf5u.streamlit.app/",
    },
    isFlagship: false,
  },
  {
    id: "careguard",
    number: "04",
    badge: null,
    title: "CareGuard — Agentic Clinical Risk Co-Pilot",
    description:
      "An agentic clinical risk co-pilot that grounds every assessment in both a trained XGBoost + SHAP model and a curated clinical guideline corpus via hybrid retrieval, orchestrated by a 3-role LangGraph agent pipeline with human-approval gating before anything is released. Built end-to-end — containerized, observable, and tested — around a Retrieval, Agents, Models, Proof (R.A.M.P.) framework.",
    techTags: ["Python", "LangGraph", "FastAPI", "XGBoost", "SHAP", "Qdrant", "Docker"],
    links: {
      github: "https://github.com/vashishthtushar/careguard",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "audit-grade-rag",
    number: "05",
    badge: null,
    title: "Audit-Grade RAG — Traceable Credit Decision Support",
    description:
      "A credit-decision support system where every claim is traceable and every decision reconstructable: hybrid RAG with cross-encoder reranking, a calibrated risk model that explains its score as adverse-action reason codes, an independent verifier that strips uncited claims before release, and a hash-chained, tamper-evident audit ledger. Blocks 34/34 adversarial prompt-injection attempts in evaluation.",
    techTags: ["Python", "RAG", "Cross-Encoder Reranking", "SHAP", "Docker"],
    links: {
      github: "https://github.com/vashishthtushar/audit-grade-rag",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "telecom-troubleshooting-rag",
    number: "06",
    badge: null,
    title: "Telecom Troubleshooting RAG Pipeline",
    description:
      "A production-shaped RAG pipeline over telecom network troubleshooting documentation — structured ingestion with metadata enrichment, three chunking strategies, instruction-aware BGE embeddings, hybrid dense + BM25 retrieval with cross-encoder re-ranking, and a 30-query evaluation set backed by 116 passing tests.",
    techTags: ["Python", "RAG", "ChromaDB", "BM25", "BGE Embeddings", "Docker"],
    links: {
      github: "https://github.com/vashishthtushar/Telecom-Troubleshooting-RAG",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "churn-app",
    number: "07",
    badge: null,
    title: "Churn App — Prediction Dashboard, Agent & RAG Assistant",
    description:
      "Three systems built on one telecom churn dataset: an interactive Streamlit dashboard that scores and visualizes churn probability, an autonomous LangGraph ML-analyst agent that plans, models, and reports on its own, and a RAG \"proof envelope\" support assistant that never answers without grounded citations.",
    techTags: ["Python", "Streamlit", "LangGraph", "RAG", "Scikit-learn"],
    links: {
      github: "https://github.com/vashishthtushar/Churn_app",
      demo: "https://churnapp-kdqdhkxsgsnksuedzyehcv.streamlit.app/",
    },
    isFlagship: false,
  },
  {
    id: "hotel-booking-cms",
    number: "08",
    badge: null,
    title: "Hotel Booking CMS — Booking Site with a Live-Editable Admin Dashboard",
    description:
      "A full-stack booking site and content-managed platform for small hotels and guest houses, built for Hotel Bhavana Bhawan in Mathura-Vrindavan. Pairs a public marketing and booking-inquiry site with an admin CMS dashboard that lets the owner update room types, pricing, amenities, nearby attractions, and guest reviews — changes go live instantly, with no code changes or redeploys required.",
    techTags: ["React", "Admin CMS", "REST API", "AWS S3", "CloudFront"],
    links: {
      github: null,
      demo: "https://d31axs1ulsuhdh.cloudfront.net/",
    },
    isFlagship: false,
  },
];

export const blog = {
  badge: "Writing",
  heading: "From the Blog",
  description: "Notes on AI engineering, RAG systems, and things I've learned building in production.",
  posts: [
    {
      title: "AI Solved the Problem Perfectly. There Was Just One Problem.",
      excerpt:
        "It wasn't the problem we actually had — a look at why solving something well doesn't matter if it's the wrong thing to solve.",
      platform: "dev.to",
      url: "https://dev.to/tushar_vashishth_45ef7ac3/ai-solved-the-problem-perfectly-there-was-just-one-problem-4f48",
      date: "Sep 8, 2026",
    },
    {
      title: "From Learning the Stack to Understanding the System",
      excerpt:
        "Why AI-native development demands a different way of thinking about technology — what actually changes when you move from learning tools to understanding systems.",
      platform: "dev.to",
      url: "https://dev.to/tushar_vashishth_45ef7ac3/from-learning-the-stack-to-understanding-the-system-2jn5",
      date: "Aug 25, 2026",
    },
    {
      title: "Most RAG Problems Don't Start With the LLM",
      excerpt:
        "If you've worked with RAG, you've seen it: the answer is wrong, so you swap the model — except the model was rarely the problem in the first place.",
      platform: "dev.to",
      url: "https://dev.to/tushar_vashishth_45ef7ac3/most-rag-problems-dont-start-with-the-llm-5hi2",
      date: "Aug 21, 2026",
    },
  ],
};

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
  taglines: ["AI/ML Engineering & GenAI", "Python · LLMs · RAG", "Backend & ML Systems"],
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
