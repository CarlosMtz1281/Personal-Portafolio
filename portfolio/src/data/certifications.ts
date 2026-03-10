export interface Certification {
  title: string;
  issuer: string;
  badge?: string; // path to badge image in /public/badges/
  date?: string;
  link?: string;
}

export const certifications: Certification[] = [
  // ── Networking ──
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    badge: "/certifications/CCNA1.png",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    badge: "/certifications/CCNA2.png",
  },
  // ── IBM ──
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    badge: "/certifications/cybersecurity-fundamentals.png",
  },
  {
    title: "Agile Explorer",
    issuer: "IBM",
    badge: "/certifications/agile-explorer.png",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    badge: "/certifications/AI_fundamentals.png",
  },
  // ── Coursera / University of Michigan ──
  {
    title: "Database Design with PostgreSQL",
    issuer: "University of Michigan",
  },
  {
    title: "Python and Data Structures",
    issuer: "University of Michigan",
  },
];
