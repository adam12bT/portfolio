import {
  spring,
    java,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,

    figma,
    docker,
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
    sdl2,
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
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: java,
    },
    {
      title: "Spring-Boot Developer",
      icon:spring ,
    },
    {
      title: "Angular Developer",
      icon: angular,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
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
      name: "SDL2",
      icon: sdl2, 
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
      iconBg: "#383E56",
      date: "February 2023 - May 2023",
      points: [
        "Built a C-based game application using SDL2 with three levels and a final boss.",
        "Enhanced programming and game development skills through real-world application.",
      ],
    },
    {
      title: "Project - MEDTECH",
      company_name: "MEDTECH, Tunis",
      icon: med, // Placeholder for MEDTECH icon; replace with actual icon import
      iconBg: "#E6DEDD",
      date: "February 2024 - May 2024",
      points: [
        "Developed a fleet management system with Vue.js 3.",
        "Enabled users to select electric scooters, while administrators managed the fleet.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [

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
  
  export { services, technologies, experiences, testimonials, projects };