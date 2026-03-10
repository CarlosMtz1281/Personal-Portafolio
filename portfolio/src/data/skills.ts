export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C++", "JavaScript", "Python", "TypeScript", "Swift", "HTML/CSS", "Bash"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "React Native", "Node.js", "Flask", "Swift UI"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "Firebase", "MS SQL"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Docker", "AWS", "Git", "Linux", "CI/CD", "Google Cloud"],
  },
];
