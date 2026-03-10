export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "KATCON",
    role: "Software Engineer Intern",
    location: "Monterrey, Mexico",
    period: "Oct 2023 — Present",
    description: "International automotive part manufacturing company",
    bullets: [
      "Deployed a web app using React, Next.js and PostgreSQL, now used as an internal tool across teams",
      "Integrated AWS services for databases, authentication, and cloud storage",
      "Implemented internationalization routing supporting English, Spanish and Chinese",
      "Developed software solutions for financial and manufacturing processes, earning positive leadership feedback",
    ],
    tech: ["React", "Next.js", "PostgreSQL", "AWS"],
  },
  {
    company: "MLH x Meta",
    role: "Production Engineering Fellow",
    location: "Remote",
    period: "Jun 2024 — Sep 2024",
    description: "Major League Hacking Fellowship collaborating with Meta",
    bullets: [
      "Mentored by Production Engineers from Meta to configure and administrate Linux servers",
      "Implemented CI/CD pipelines with Python to automate testing and deployment",
      "Configured Docker containers and monitored server performance using htop and iostat",
    ],
    tech: ["Python", "Docker", "Linux", "CI/CD"],
  },
  {
    company: "MedicFlow",
    role: "Software Engineer",
    location: "Monterrey, Mexico",
    period: "Dec 2023 — Apr 2024",
    description: "Technology startup improving medical care with AI",
    bullets: [
      "Developed the mobile application with React Native and web companion with Next.js",
      "Led the development team and implemented SCRUM methodology to meet deadlines",
      "Integrated AI models for speech recognition and LLM-powered text processing",
    ],
    tech: ["React Native", "Next.js", "JavaScript", "AI/ML"],
  },
];
