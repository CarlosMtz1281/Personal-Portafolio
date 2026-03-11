"use client";

import { AnimatedSection } from "./AnimatedSection";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ name: skill, category: cat.name }))
  );

  // Two rows with offset for visual interest
  const row1 = [...allSkills, ...allSkills];
  const row2 = [...allSkills.slice(Math.floor(allSkills.length / 2)), ...allSkills, ...allSkills.slice(0, Math.floor(allSkills.length / 2))];

  const categoryColors: Record<string, string> = {
    "Languages": "text-[#00d9ff]/70 border-[#00d9ff]/15 bg-[#00d9ff]/5",
    "Frameworks & Libraries": "text-violet-400/70 border-violet-500/15 bg-violet-500/5",
    "Databases": "text-emerald-400/70 border-emerald-500/15 bg-emerald-500/5",
    "Tools & Platforms": "text-amber-400/70 border-amber-500/15 bg-amber-500/5",
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[#00d9ff] text-sm font-mono tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-4">
            Technologies I work with
          </h2>
          <p className="text-zinc-500 text-sm mb-12">
            Hover to pause
          </p>
        </AnimatedSection>

        {/* Marquee rows */}
        <AnimatedSection delay={0.1}>
          <div className="marquee-wrapper overflow-hidden space-y-3 -mx-6 px-0">
            {/* Row 1 — scrolls left */}
            <div className="flex">
              <div className="marquee-track flex gap-3 animate-marquee whitespace-nowrap">
                {row1.map((skill, i) => (
                  <span
                    key={`r1-${i}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono flex-shrink-0 ${
                      categoryColors[skill.category] ??
                      "text-zinc-400/70 border-zinc-700 bg-zinc-800/30"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="flex">
              <div className="marquee-track flex gap-3 animate-marquee-reverse whitespace-nowrap">
                {row2.map((skill, i) => (
                  <span
                    key={`r2-${i}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono flex-shrink-0 ${
                      categoryColors[skill.category] ??
                      "text-zinc-400/70 border-zinc-700 bg-zinc-800/30"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Category legend */}
        <AnimatedSection delay={0.2} className="mt-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {skillCategories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <span
                  className={`inline-flex px-3 py-1 rounded-full border text-xs font-mono ${categoryColors[cat.name]}`}
                >
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
