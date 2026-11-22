import proposalCover from "../assets/projects/ai-proposal-platform.svg";
import pixelLandscape from "../assets/projects/pixel-landscape.png";
import knowledgeCover from "../assets/projects/talk-to-your-data.svg";
import pipelineCover from "../assets/projects/ml-pipeline.svg";
import aiEngineer from "../assets/specialties/ai-engineer.svg";
import llmRag from "../assets/specialties/llm-rag.svg";
import mlops from "../assets/specialties/mlops.svg";
import agenticAi from "../assets/specialties/agentic-ai.svg";
import wevioo from "../assets/company/wevioo.svg";
import theDot from "../assets/thedot.webp";
import {
  spring,
    java,
    javascript,
 
    reactjs,
    nodejs,

  cyss,
  med,
  pwc,

    threejs,
    angular,
    hunt,
    net,
    eco,
    pg,
    sql,
    py,
    c,
    vue,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    { title: "AI Engineer", icon: aiEngineer },
    { title: "LLM & RAG Engineer", icon: llmRag },
    { title: "MLOps Engineer", icon: mlops },
    { title: "Agentic AI Developer", icon: agenticAi },
  ];

  const technologies = [
 
    {
      name: "JavaScript",
      icon: javascript,
    },
 
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Node JS",
      icon: nodejs,
    },
 
    {
      name: "Three JS",
      icon: threejs,
    },
  
  

    {
      name: "Vue.js",
      icon: vue, 
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Spring Boot",
      icon: spring, 
    },
    {
      name: "Java",
      icon: java, 
    },
    {
      name: "PostgreSQL",
      icon: pg, 
    },
    {
      name: "MySQL",
      icon: sql, 
    },

 
    {
      name: "Python",
      icon: py,
    },
    {
      name: "C Programming",
      icon: c, 
    },




  ];
  
  const experiences = [
    {
      title: "AI Engineer Intern",
      company_name: "Wevioo, Tunis",
      icon: wevioo,
      iconBg: "#FFFFFF",
      iconClassName: "w-[88%] h-[88%]",
      date: "July 2026 - August 2026",
      points: [
        "Built a six-stage LangGraph/LangChain agentic pipeline that transforms tender documents into reviewed proposal drafts, covering verification, extraction, research, generation, security, and quality checks.",
        "Developed a RAG pipeline for internal PDF and DOCX documents using OCR, semantic chunking, embeddings, Qdrant/ChromaDB, and re-ranking.",
        "Integrated AnythingLLM, GPT Researcher, and LLM Guard for document retrieval, automated research, and LLM-safety checks.",
        "Implemented a documented FastAPI service with Celery/Redis background jobs and SSE streaming for live progress updates.",
      ],
    },
    {
      title: "Part-time Software Engineer",
      company_name: "The Dot, Tunis",
      icon: theDot,
      iconBg: "#E6DEDD",
      date: "April 2026 - June 2026",
      points: [
        "Delivered a team-adopted Streamlit application for CSV/XLSX cleaning and reporting, with interactive charts and Gemini-based analysis grounded in computed values.",
        "Replaced manual startup selection with configurable scoring and ranked Excel reports.",
        "Containerized and deployed two applications to Hugging Face Spaces through GitHub Actions CI/CD.",
      ],
    },
    {
      title: "MLOps Engineer Intern",
      company_name: "PwC (PricewaterhouseCoopers), Tunis",
      icon: pwc,
      iconBg: "#E6DEDD",
      date: "June 2025 - August 2025",
      points: [
        "Built a CrewAI/LangChain multi-agent pipeline using GPT-4o to process audio, image/OCR, and text inputs for training-data curation.",
        "Implemented a judge agent to filter generated outputs before fine-tuning.",
        "Fine-tuned Gemma 2B with LoRA, tracked experiments with MLflow, and versioned datasets with DVC.",
        "Reduced deployment time by nearly 60% through GitLab CI/CD automation and blue-green deployment.",
      ],
    },
    {
      title: "Intern - PwC",
      company_name: "PwC (PricewaterhouseCoopers), Tunis",
      icon: pwc, // Placeholder for PwC icon; replace with actual icon import
      iconBg: "#E6DEDD",
      date: "June 2024 - July 2024",
      points: [
        "Developed an internal social network using Angular, Spring Boot, and PostgreSQL.",
        "Enabled real-time communication and collaboration for employees, boosting team engagement.",
        "Enhanced problem-solving, time management, and web development skills through hands-on experience.",
      ],
    },
    
    {
      title: "Intern - CLINISYS",
      company_name: "CLINISYS (Hospital Management System), Sfax",
      icon: cyss, // Placeholder for CLINISYS icon; replace with actual icon import
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Created a website for managing post-operative patients using HTML, CSS, JavaScript, and Spring Boot.",
        "Provided features for patients to access receipts, track items, and view arrival and departure details.",
      ],
    },

    {
      title: "Project - MEDTECH",
      company_name: "MEDTECH, Tunis",
      icon: med,
      iconBg: "#E6DEDD",
      date: "February 2023 - May 2023",
      points: [
     "🏆Won 1st place award at MEDTECH for best student project.",

        "Built a C-based game application using SDL2 with three levels and a final boss.",
        "Enhanced programming and game development skills through real-world application.",
      ],
    },
    {
      title: "Project - MEDTECH",
      company_name: "MEDTECH, Tunis",
      icon: med, // Placeholder for MEDTECH icon; replace with actual icon import
      iconBg: "#383E56",
      date: "February 2024 - May 2024",
      points: [
        "Developed a fleet management system with Vue.js 3.",
        "Enabled users to select electric scooters, while administrators managed the fleet.",
      ],
    },
    {
      title: "Project - MEDTECH",
      company_name: "MEDTECH, Tunis",
      icon: med, // Placeholder for MEDTECH icon; replace with actual icon import
      iconBg: "#E6DEDD",
      date: "September 2024 - December 2024",
      points: [
        "Developed an eSports game management system with React and Express.",
        "Enabled administrators to manage players, teams, and matches.",
        "Integrated JWT authentication for secure, role-based access control.",
        "Implemented real-time updates for scores, player stats, and schedules.",
        "Utilized MongoDB for efficient data storage and retrieval."
      ],
      
    },
      {
      title: "Project - MEDTECH",
      company_name: "MEDTECH, Tunis",
      icon: med, // Placeholder for MEDTECH icon; replace with actual icon import
      iconBg: "#E6DEDD",
      date: "January 2025 - May 2025",
      points: [
    "Developed a smart marketplace platform enabling users to buy and sell products.",
    "Built the mobile application using React Native.",
    "Created the admin dashboard using React.",
    "Integrated Ollama Mistral AI, fine-tuned with the RAG method, to enhance recommendations and intelligent search.",
    "Implemented a custom blockchain system for secure transactions, based on Ethereum.",
      ],
      
    },


   
        
  ];
  
 
  const projects = [
    {
      name: "AI Proposal Platform",
      description: "Transforms tender documents into evidence-grounded proposal drafts using multi-agent workflows, RAG, document extraction, asynchronous workers, and live progress updates.",
      tags: [
        { name: "langgraph", color: "blue-text-gradient" },
        { name: "rag", color: "green-text-gradient" },
        { name: "fastapi", color: "pink-text-gradient" },
      ],
      image: proposalCover,
      image_alt: "Illustrated workflow from document extraction through retrieval, generation, and proposal review",
      source_code_link: "https://github.com/adam12bT/wevioo_ai_project",
    },
    {
      name: "Pixel-Art Landscape Generator",
      description: "A custom pixel-patch Transformer for 64-by-64 landscape generation, with a React studio, text-to-scene controls, a FastAPI backend, and MLflow/DVC for tracking and versioning.",
      tags: [
        { name: "pytorch", color: "blue-text-gradient" },
        { name: "transformer", color: "green-text-gradient" },
        { name: "mlops", color: "pink-text-gradient" },
      ],
      image: pixelLandscape,
      image_alt: "Generated pixel-art landscape example from the project's repository",
      image_style: { imageRendering: "pixelated", objectFit: "contain", background: "#17182d" },
      source_code_link: "https://github.com/adam12bT/deeplearning",
    },
    {
      name: "Talk to Your Data",
      description: "A document Q&A agent combining vector retrieval, web-search fallback, and sourced answers. Includes RAGAS evaluation, retrieval-drift tracking, and Streamlit and FastAPI interfaces.",
      tags: [
        { name: "langchain", color: "blue-text-gradient" },
        { name: "gemini", color: "green-text-gradient" },
        { name: "ragas", color: "pink-text-gradient" },
      ],
      image: knowledgeCover,
      image_alt: "Illustrated document retrieval and grounded answer workflow",
      source_code_link: "https://github.com/adam12bT/talk_to_ur_data",
    },
    {
      name: "End-to-End ML Pipeline",
      description: "A modular workflow for profiling and cleaning datasets, training and comparing ML models, and producing explanations and reports, with FastAPI services and CI/CD deployment configuration.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "fastapi", color: "green-text-gradient" },
        { name: "xgboost", color: "pink-text-gradient" },
      ],
      image: pipelineCover,
      image_alt: "Illustrated machine-learning pipeline with ingestion, cleaning, training, and explanation stages",
      source_code_link: "https://github.com/adam12bT/ml_pipeline",
    },

    {
      name: "Electric Scooter Fleet Management",
      description:
        "A Vue.js application for selecting electric scooters, with an admin interface for fleet management, enabling users and administrators to streamline fleet operations.",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: eco, // replace with your image variable
      source_code_link: "https://github.com/adam12bT/Ecoride",
    },
    {
      name: "Internal Social Network for PwC",
      description:
        "A real-time social networking platform for PwC employees, allowing for messaging, posting, and private communication, built with Angular, Spring Boot, and PostgreSQL.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: net, // replace with your image variable
      source_code_link: "https://github.com/adam12bT/PWC_Internship",
    },
    {
      name: "SDL2 Game Application",
      description:
        "A C-based game with three levels of increasing difficulty, where players progress through challenges to face a final boss, built using SDL2.",
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        },
        {
          name: "sdl2",
          color: "green-text-gradient",
        },
      ],
      image: hunt, // replace with your image variable
      source_code_link: "https://github.com/adam12bT/Treasure-Hunter",
    },
  ];
  
  export { services, technologies, experiences, projects };