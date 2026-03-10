export interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image?: string;
  video?: string;
  github?: string;
  live?: string;
  gradient: string;
  date: string;
}

export const projects: Project[] = [
  {
    title: "PathExplorer",
    subtitle: "Full-Stack Platform with Scalable Infrastructure",
    description:
      "Built a DevOps pipeline, scalable data pipeline, and a fast Next.js frontend backed by Redis for lightning-fast access. Focused on collaboration, system design, and building with quality from day one through thorough QA testing.",
    longDescription:
      "PathExplorer is a full-stack career-path platform designed to handle production-level scale from day one. The infrastructure was built with a complete CI/CD pipeline using GitHub Actions, containerized services with Docker, and automated deployments. The data pipeline ingests and transforms large datasets using scheduled jobs, while Redis acts as a caching layer to ensure sub-100ms response times for the most frequently accessed resources. The Next.js frontend was architected with server-side rendering for SEO, dynamic routing, and optimistic UI updates. The QA process included unit tests, integration tests, and end-to-end tests with Playwright, achieving over 80% code coverage before any feature shipped to production.",
    tech: ["Next.js", "Redis", "DevOps", "CI/CD", "Data Pipelines", "QA"],
    video: "/projects/devops-pipeline.mp4",
    gradient: "from-indigo-100 to-purple-100",
    date: "2025",
  },
  {
    title: "Palestra",
    subtitle: "Marketplace & Web Conference for Education",
    description:
      "A web marketplace connecting students with teachers for online tutoring sessions, featuring real-time video calls via WebRTC and AI-powered lesson summaries using Google Cloud Speech-to-Text and Gemini.",
    longDescription:
      "Palestra is an education marketplace that bridges the gap between students seeking tutoring and experienced teachers. The platform supports session discovery, booking, and real-time payment processing. Live tutoring sessions are powered by a custom WebRTC implementation that handles peer-to-peer video/audio negotiation with a STUN/TURN fallback for NAT traversal. After each session, the platform automatically transcribes the audio using Google Cloud Speech-to-Text and feeds the transcript to Gemini to generate a structured lesson summary with key concepts, exercises, and suggested follow-up topics. The backend is a Flask REST API backed by PostgreSQL with full-text search for finding teachers by subject and availability.",
    tech: ["React", "Flask", "PostgreSQL", "WebRTC", "Google Cloud", "Gemini API"],
    video: "/projects/Palestra.mp4",
    gradient: "from-violet-100 to-indigo-100",
    date: "Sep 2024",
  },
  {
    title: "Caritas MTY Mi Salud",
    subtitle: "iOS Healthcare App",
    description:
      "An iOS application built with Swift UI for Caritas Monterrey, implementing an incentive system for healthcare initiatives with robust cybersecurity measures including encryption and salt-and-pepper hashing.",
    longDescription:
      "Mi Salud is a native iOS application developed for Caritas Monterrey to encourage community members to participate in preventive healthcare programs. Users earn points for attending checkups, completing health surveys, and following treatment plans, which can be redeemed for rewards. The app integrates with an MS SQL Server backend via a secure Python REST API. Security was a top priority: all sensitive data at rest uses AES-256 encryption, and passwords are stored using bcrypt with unique salts and a shared pepper stored in environment variables, making rainbow-table and database-dump attacks infeasible. The SwiftUI interface follows Apple's Human Interface Guidelines and supports both light and dark mode.",
    tech: ["Swift UI", "Python", "MS SQL", "Cybersecurity"],
    gradient: "from-rose-100 to-orange-100",
    date: "Oct 2024",
  },
  {
    title: "Ixpolin Education",
    subtitle: "AI-Enhanced Learning Platform",
    description:
      "A web application learning tool that simplifies education processes for any given course. Processes student submissions and provides AI-powered feedback using the Gemini API alongside custom algorithms.",
    longDescription:
      "Ixpolin is a learning management system designed to reduce the grading burden on instructors while giving students faster, more actionable feedback. Instructors create assignments with rubrics, and students submit their work through the platform. A Node.js processing pipeline sends submissions to Gemini with the rubric as context, generating detailed feedback for each criterion alongside a suggested score. A custom scoring algorithm then normalizes AI scores against historical class performance to reduce bias. The React frontend provides a real-time dashboard for instructors to review, override, and publish AI-generated grades, and students receive notifications with full explanations for their scores.",
    tech: ["React", "Node.js", "PostgreSQL", "Gemini API"],
    gradient: "from-sky-100 to-cyan-100",
    date: "May 2024",
  },
  {
    title: "Green Water Tech",
    subtitle: "IoT Smart Irrigation System",
    description:
      "A web application that optimizes agricultural water consumption using IoT sensors built with ESP-32 microcontrollers. Integrates weather API data with real-time sensor readings to generate smart irrigation plans.",
    longDescription:
      "Green Water Tech addresses water waste in agriculture by combining IoT sensor data with external weather forecasts to make irrigation decisions. ESP-32 microcontrollers deployed in the field continuously report soil moisture, temperature, and humidity readings to Firebase Realtime Database over Wi-Fi. The Next.js dashboard polls these readings and cross-references them with a third-party weather API to predict upcoming rainfall. A custom algorithm calculates whether irrigation is needed, how much water to apply, and at what time — automatically sending commands back to the ESP-32 to actuate the valves. The system reduced estimated water usage by 30% in pilot testing compared to timer-based irrigation.",
    tech: ["Next.js", "Flask", "Firebase", "ESP-32", "IoT"],
    gradient: "from-emerald-100 to-green-100",
    date: "Nov 2023",
  },
  {
    title: "Financial AI Advisor",
    subtitle: "Investment Assistant for Banorte — HackMty 2023",
    description:
      "A web app built for Banorte that helps inexperienced investors make informed decisions using AI-powered portfolio recommendations and custom algorithms.",
    longDescription:
      "Financial AI Advisor was developed during HackMty 2023 for Banorte, one of Mexico's largest banks. The goal was to lower the barrier of entry for first-time investors by guiding them through a simple onboarding flow that captures their financial goals, risk tolerance, and available capital. The React frontend communicates with a Node.js backend that processes the user's profile through a combination of an external AI API and proprietary scoring algorithms to match them with the most suitable investment portfolios from Banorte's catalog. The recommendation engine weighs factors like liquidity needs, expected return, and volatility to generate a ranked list of options with plain-language explanations — making investment decisions accessible to people with no prior financial knowledge.",
    tech: ["React", "Node.js", "AI API"],
    gradient: "from-amber-100 to-yellow-100",
    date: "Sep 2023",
  },
  

];
