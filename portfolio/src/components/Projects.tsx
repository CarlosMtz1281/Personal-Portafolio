"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";
import { X } from "lucide-react";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal card */}
      <motion.div
        className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-white transition-colors shadow-sm"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Media — full size, no crop */}
        <div
          className={`relative w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          style={{ minHeight: "260px" }}
        >
          {project.video ? (
            <video
              src={project.video}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-auto max-h-[360px] object-contain"
            />
          ) : project.image ? (
            <div className="relative w-full" style={{ minHeight: "260px" }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center w-full py-16">
              <span className="text-9xl font-bold text-black/[0.05]">
                {project.title.charAt(0)}
              </span>
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

          {/* Date badge */}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 text-xs text-zinc-600 bg-white/80 backdrop-blur-sm rounded-md border border-zinc-200/60 font-medium">
              {project.date}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-zinc-900 mb-1">
            {project.title}
          </h3>
          <p className="text-indigo-500 text-sm font-medium mb-4">
            {project.subtitle}
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed mb-6">
            {project.longDescription ?? project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
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
            <div className="flex gap-4 pt-4 border-t border-zinc-100">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-indigo-600 text-sm font-medium transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-indigo-600 text-sm font-medium transition-colors"
                >
                  Live Demo →
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
                className="group cursor-pointer rounded-2xl glass overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
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
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-500 hover:text-indigo-600 text-sm transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}

                  {/* Click hint */}
                  <p className="mt-3 text-xs text-zinc-400 group-hover:text-indigo-400 transition-colors">
                    Click to expand
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
