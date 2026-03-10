"use client";

import { AnimatedSection } from "./AnimatedSection";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-indigo-500 text-sm font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.1}>
              <div className="p-6 md:p-8 rounded-2xl glass hover:shadow-md transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-500 text-sm font-medium">
                      {exp.company}
                    </p>
                    <p className="text-zinc-500 text-sm">{exp.description}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right flex-shrink-0">
                    <p className="text-zinc-500 text-sm">{exp.period}</p>
                    <p className="text-zinc-400 text-sm">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-zinc-600 text-sm flex gap-3 leading-relaxed"
                    >
                      <span className="text-indigo-400 mt-2 flex-shrink-0">
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
                      className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200/60 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
