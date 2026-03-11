"use client";

import { AnimatedSection } from "./AnimatedSection";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-[#00d9ff] text-sm font-mono tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-12">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00d9ff]/50 via-[#1e1e2e] to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.1}>
                <div className="relative pl-10">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-6 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${
                      i === 0
                        ? "border-[#00d9ff] bg-[#00d9ff]/10 shadow-[0_0_12px_rgba(0,217,255,0.4)]"
                        : "border-[#1e1e2e] bg-[#111118]"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        i === 0 ? "bg-[#00d9ff]" : "bg-zinc-600"
                      }`}
                    />
                  </div>

                  <div className="p-6 md:p-8 rounded-2xl glass hover:border-[#00d9ff]/20 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#f0f0f5] group-hover:text-[#00d9ff] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-[#00d9ff] text-sm font-medium font-mono">
                          {exp.company}
                        </p>
                        <p className="text-zinc-500 text-sm">{exp.description}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right flex-shrink-0">
                        <p className="text-zinc-400 text-sm font-mono">{exp.period}</p>
                        <p className="text-zinc-600 text-sm">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-zinc-400 text-sm flex gap-3 leading-relaxed"
                        >
                          <span className="text-[#00d9ff]/50 mt-2 flex-shrink-0">
                            <svg
                              width="6"
                              height="6"
                              viewBox="0 0 6 6"
                              fill="currentColor"
                            >
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-mono text-[#00d9ff]/70 bg-[#00d9ff]/5 border border-[#00d9ff]/15 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
