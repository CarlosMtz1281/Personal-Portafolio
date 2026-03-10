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
    // badge: "/badges/ccna1.png",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    // badge: "/badges/ccna2.png",
  },
  // ── IBM ──
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    // badge: "/badges/ibm-cybersecurity.png",
  },
  {
    title: "Agile Explorer",
    issuer: "IBM",
    // badge: "/badges/ibm-agile.png",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    // badge: "/badges/ibm-ai.png",
  },
  // ── Coursera / University of Michigan ──
  {
    title: "Database Design with PostgreSQL",
    issuer: "University of Michigan",
    // badge: "/badges/michigan-postgres.png",
  },
  {
    title: "Python and Data Structures",
    issuer: "University of Michigan",
    // badge: "/badges/michigan-python.png",
  },
  // Add more certifications here — just uncomment `badge` and drop images into /public/badges/
];
