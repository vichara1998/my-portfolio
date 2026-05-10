export const PERSONAL = {
  name: "Vichara Tharkana",
  initials: "VT",
  title: "Software Engineering Undergraduate",
  tagline: "Building the future,\none line of code at a time.",
  bio: "I'm a Software Engineering undergraduate at The Open University of Sri Lanka with a strong foundation in Java and backend development. I've built Android applications using Java and SQLite, developed web platforms with HTML, CSS, JavaScript, PHP, and MySQL, and gained hands-on experience with IoT systems. I'm a quick learner passionate about clean code, problem-solving, and applying modern Java technologies across diverse real-world projects. Actively seeking an internship to contribute to a fast-paced, collaborative team.",
  email: "tharkana98@gmail.com",
  phone: "+94 76 156 3214",
  location: "Bandarawela, Sri Lanka",
  availability: "Actively Seeking Internship Opportunities",
  photo: "../src/assets/profile.jpg",
  // resumeUrl:
  //   "https://drive.google.com/file/d/1eHqeKbNiDKFND9JOyaOM8_21mNP7WbBY/view?usp=sharing",
  resumeUrl: "/Vichara Tharkana_CV.pdf",
  socials: {
    github: "https://github.com/vichara1998",
    linkedin: "https://www.linkedin.com/in/vichara.tharkana",
    facebook: "https://www.facebook.com/vichara.tharkana",
  },
};

export const SKILLS = [
  {
    category: "Languages",
    icon: "⌨️",
    color: "electric",
    items: [
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 75 },
      { name: "PHP", level: 70 },
      { name: "HTML & CSS", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "🔧",
    color: "violet",
    items: [
      { name: "Android Studio", level: 78 },
      { name: "Spring Boot", level: 60 },
      { name: "React", level: 65 },
      { name: "Express.js", level: 65 },
      { name: "Git", level: 75 },
      { name: "MySQL / SQLite", level: 78 },
    ],
  },
  {
    category: "Core Concepts",
    icon: "🧠",
    color: "teal",
    items: [
      { name: "OOP Principles", level: 82 },
      { name: "RESTful APIs", level: 65 },
      { name: "Android Dev", level: 78 },
      { name: "Database Design", level: 75 },
      { name: "IoT Systems", level: 68 },
      { name: "Problem Solving", level: 85 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Vehicle Care System",
    description:
      "A web-based platform for vehicle maintenance services, enabling users to manage service bookings and vehicle records efficiently. Built as a collaborative group project with a full PHP/MySQL backend.",
    tech: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    image: null,
    color: "#38bdf8",
    emoji: "🚗",
    github: "https://github.com/vehicleCareSE/VCS_website_group_project.git",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Explore City Android App",
    description:
      "An interactive mobile application to assist users in exploring cities. Features an integrated compass and Google Maps navigation for enhanced real-time usability and location awareness.",
    tech: ["Android Studio", "Java", "SQLite", "Google Maps API"],
    image: null,
    color: "#a78bfa",
    emoji: "🗺️",
    github: "https://github.com/vicharanatharkana",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "IoT Soil Health Monitor",
    description:
      "An IoT-based solution for real-time soil health monitoring. Collects sensor data from Arduino hardware and visualizes it through a live web dashboard for agricultural insight.",
    tech: ["Express.js", "JavaScript", "HTML", "CSS", "Arduino"],
    image: null,
    color: "#2dd4bf",
    emoji: "🌱",
    github: "https://github.com/vicharanatharkana",
    demo: null,
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Seeking Software Engineering Internship",
    company: "Open to Opportunities",
    duration: "2025 — Present",
    location: "Sri Lanka (On-site / Remote)",
    type: "seeking",
    description:
      "Actively looking for an internship where I can apply my Java, Android, and web development skills in a real-world, collaborative environment.",
    highlights: [
      "Strong foundation in Java OOP and Android application development",
      "Experience building full-stack web projects with PHP, JavaScript, and MySQL",
      "Hands-on project work with IoT systems using Arduino and Express.js",
      "Quick learner with a passion for clean, maintainable code and teamwork",
    ],
    color: "#38bdf8",
  },
];

export const EDUCATION = {
  school: "The Open University of Sri Lanka",
  degree: "Bachelor of Software Engineering (Hons) — Undergraduate",
  graduation: "2021 – Present",
  gpa: 3.039,
  secondarySchool: "St. Joseph's College, Bandarawela",
  secondaryQual: "G.C.E. Advanced Level — Physical Science (3S's)",
  secondaryYear: "2017",
  relevant: [
    "Java Programming",
    "Android Application Development",
    "Database Management (MySQL / SQLite)",
    "Web Technologies (HTML, CSS, JS, PHP)",
    "Spring Boot & RESTful APIs",
    "Software Engineering Principles",
    "IoT Systems & Embedded Computing",
  ],
  activities: [
    "Advanced Java Certificate — University of Sabaragamuwa",
    "Certificate in English — University of Sabaragamuwa",
    "Languages: English, Sinhala",
  ],
};

export const SOFT_SKILLS = [
  "Problem Solving",
  "Teamwork",
  "Creativity",
  "Communication",
  "Leadership",
  "Adaptability",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
