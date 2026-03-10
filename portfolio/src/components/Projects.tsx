"use client";

import { AnimatedSection } from "./AnimatedSection";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-indigo-500 text-sm font-medium tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12">
            Things I&apos;ve built
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.08}>
              <div className="group rounded-2xl glass overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Media: Video / Image / Gradient Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {project.video ? (
                    <video
                      src={project.video}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-bold text-black/[0.05]">
                        {project.title.charAt(0)}
                      </span>
                      {/* Decorative dot pattern */}
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #6366f1 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 text-xs text-zinc-600 bg-white/80 backdrop-blur-sm rounded-md border border-zinc-200/60 font-medium">
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs text-zinc-600 bg-zinc-100 border border-zinc-200/60 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
