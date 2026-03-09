"use client";

import { AnimatedSection } from "./AnimatedSection";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-indigo-500 text-sm font-medium tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12">
            Technologies I work with
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 0.1}>
              <div className="p-6 rounded-2xl glass h-full">
                <h3 className="text-zinc-900 font-semibold mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm text-zinc-700 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 cursor-default"
                    >
                      {skill}
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
