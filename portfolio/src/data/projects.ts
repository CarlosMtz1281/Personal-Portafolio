export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
  gradient: string;
  date: string;
}

export const projects: Project[] = [
  {
    title: "Palestra",
    subtitle: "Marketplace & Web Conference for Education",
    description:
      "A web marketplace connecting students with teachers for online tutoring sessions, featuring real-time video calls via WebRTC and AI-powered lesson summaries using Google Cloud Speech-to-Text and Gemini.",
    tech: ["React", "Flask", "PostgreSQL", "WebRTC", "Google Cloud", "Gemini API"],
    gradient: "from-violet-100 to-indigo-100",
    date: "Sep 2024",
  },
  {
    title: "Caritas MTY Mi Salud",
    subtitle: "iOS Healthcare App",
    description:
      "An iOS application built with Swift UI for Caritas Monterrey, implementing an incentive system for healthcare initiatives with robust cybersecurity measures including encryption and salt-and-pepper hashing.",
    tech: ["Swift UI", "Python", "MS SQL", "Cybersecurity"],
    gradient: "from-rose-100 to-orange-100",
    date: "Oct 2024",
  },
  {
    title: "Green Water Tech",
    subtitle: "IoT Smart Irrigation System",
    description:
      "A web application that optimizes agricultural water consumption using IoT sensors built with ESP-32 microcontrollers. Integrates weather API data with real-time sensor readings to generate smart irrigation plans.",
    tech: ["Next.js", "Flask", "Firebase", "ESP-32", "IoT"],
    gradient: "from-emerald-100 to-green-100",
    date: "Nov 2024",
  },
  {
    title: "Ixpolin Education",
    subtitle: "AI-Enhanced Learning Platform",
    description:
      "A web application learning tool that simplifies education processes for any given course. Processes student submissions and provides AI-powered feedback using the Gemini API alongside custom algorithms.",
    tech: ["React", "Node.js", "PostgreSQL", "Gemini API"],
    gradient: "from-sky-100 to-cyan-100",
    date: "Oct 2024",
  },
  {
    title: "MedicFlow",
    subtitle: "AI-Powered Medical Care Platform",
    description:
      "A mobile and web application improving medical care with AI. Features speech recognition for doctor-patient interactions and LLM-powered text processing for medical record summarization.",
    tech: ["React Native", "Next.js", "AI/ML", "Speech Recognition"],
    gradient: "from-blue-100 to-violet-100",
    date: "Dec 2023",
  },
  {
    title: "KATCON Internal Tools",
    subtitle: "Enterprise Web Application",
    description:
      "An internal web application for an international automotive manufacturer, managing financial and manufacturing processes with full internationalization support for English, Spanish, and Chinese.",
    tech: ["React", "Next.js", "PostgreSQL", "AWS"],
    gradient: "from-amber-100 to-orange-100",
    date: "Oct 2023",
  },
];
