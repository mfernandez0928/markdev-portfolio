export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  clientWork?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Oma Suomi",
    description:
      "Offline-first Finnish learning PWA with a Finnish–English–Tagalog dictionary, A1–B1 grammar lessons, role-play situations and spaced-repetition review.",
    image: "/images/projects/oma-suomi.png",
    tags: ["React", "TypeScript", "Vite", "PWA"],
    liveUrl: "https://omasuomikieli.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/omasuomikieli",
    featured: true,
  },
  {
    title: "Gold Heist Academy",
    description:
      "Landing page and onboarding flow for trading coach Noel Orpineda: multi-step broker sign-up, lead capture to Google Sheets and instant email alerts.",
    image: "/images/projects/gold-heist.png",
    tags: ["TypeScript", "Tailwind CSS", "Google Apps Script"],
    liveUrl: "https://noel-orpineda.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/noel-orpineda",
    clientWork: true,
    featured: true,
  },
  {
    title: "Digital Sari-sari Store",
    description:
      "Mobile-first online store for a neighborhood sari-sari shop with product categories, cart, delivery ordering and customer accounts.",
    image: "/images/projects/digital-sari-sari.png",
    tags: ["React", "TypeScript", "Express", "Supabase"],
    liveUrl: "https://digitalsaristore.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/digitalsaristore",
    clientWork: true,
    featured: true,
  },
  {
    title: "Mabisa Basketball",
    description:
      "Community hub for weekly basketball runs: event countdown with slot registration and payment, player stats leaderboard, MVP awards and a social wall.",
    image: "/images/projects/mabisa-basketball.png",
    tags: ["React", "TypeScript", "Firebase", "Supabase"],
    liveUrl: "https://mabisa.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/mabisabasketball",
    clientWork: true,
  },
  {
    title: "Elderly Care System",
    description:
      "A centralized platform connecting elderly individuals with caregivers and family members.",
    image: "/images/projects/elderly-care.png",
    tags: ["React", "TypeScript", "Vite"],
    liveUrl: "https://elderly-care-system-zeta.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/Elderly-Care-System",
  },
  {
    title: "Lumina Resort",
    description:
      "Point-of-sale system for resorts with order taking, unified guest billing, real-time inventory and a sales dashboard.",
    image: "/images/projects/Lumina-dashboard.png",
    tags: ["React", "TypeScript", "Recharts"],
    liveUrl: "https://resort-pos.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/resort-pos",
  },
  {
    title: "Budget Tracker Pro",
    description:
      "Modern, responsive budget tracking app that helps users manage their finances.",
    image: "/images/projects/BudgetTrackerPro.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://budget-tracker-pro-one.vercel.app/dashboard",
    githubUrl: "https://github.com/mfernandez0928/budgetrackerpro",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio to showcase my skills and web projects.",
    image: "/images/projects/portfolio.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://markdev-portfolio.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/markdev-portfolio",
  },
  {
    title: "Jem Time Attendance App",
    description:
      "Full-stack app for employee attendance with authentication and admin dashboard.",
    image: "/images/projects/jem-attendance.png",
    tags: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Clinic Care System",
    description:
      "Responsive front-end for managing clinic appointments and services.",
    image: "/images/projects/clinic-care.png",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    githubUrl: "https://github.com/mfernandez0928/cliniccaresystem.github.io",
  },
  {
    title: "To-do List App",
    description:
      "A to-do list app that uses Google sign-in for authentication.",
    image: "/images/projects/to-do-list.png",
    tags: ["React", "Vite", "Firebase", "Google Sign-in"],
    liveUrl: "https://todolist-green-eight.vercel.app/",
    githubUrl: "https://github.com/mfernandez0928/todolist",
  },
  {
    title: "Funny Calculator",
    description:
      "A calculator that sometimes gives intentionally funny answers for entertainment.",
    image: "/images/projects/funny-calculator.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/mfernandez0928/funny-calculator",
  },
  {
    title: "My E-Calculator",
    description:
      "Functional calculator with clean UI built with vanilla web technologies.",
    image: "/images/projects/myecalculator.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://mfernandez0928.github.io/myecalculator/",
    githubUrl: "https://github.com/mfernandez0928/myecalculator",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
