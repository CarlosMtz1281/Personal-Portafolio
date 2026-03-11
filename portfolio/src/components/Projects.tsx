"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal card */}
      <motion.div
        className="relative z-10 bg-[#111118] border border-[#1e1e2e] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-[#1e1e2e] border border-[#2e2e3e] text-zinc-400 hover:text-[#f0f0f5] hover:bg-[#2e2e3e] transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Media */}
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
              <span className="text-9xl font-bold text-[#00d9ff]/5">
                {project.title.charAt(0)}
              </span>
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #00d9ff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          )}

          {/* Date badge */}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 text-xs text-zinc-300 bg-[#0a0a0f]/80 backdrop-blur-sm rounded-md border border-[#1e1e2e] font-mono">
              {project.date}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-[#f0f0f5] mb-1">
            {project.title}
          </h3>
          <p className="text-[#00d9ff] text-sm font-medium font-mono mb-4">
            {project.subtitle}
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {project.longDescription ?? project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-xs font-mono text-[#00d9ff]/70 bg-[#00d9ff]/5 border border-[#00d9ff]/15 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          {(project.github || project.live) && (
            <div className="flex gap-4 pt-4 border-t border-[#1e1e2e]">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#00d9ff] text-sm font-medium transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#00d9ff] text-sm font-medium transition-colors"
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

function ProjectCard({
  project,
  onClick,
  featured = false,
}: {
  project: Project;
  onClick: () => void;
  featured?: boolean;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={`group cursor-pointer rounded-2xl glass overflow-hidden hover:border-[#00d9ff]/20 hover:shadow-[0_0_30px_rgba(0,217,255,0.05)] transition-all duration-300 h-full flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d9ff] ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      {/* Media */}
      <div
        className={`bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0 ${
          featured ? "h-56 md:h-auto md:w-1/2" : "h-48"
        }`}
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
            <span className="text-7xl font-bold text-[#00d9ff]/5">
              {project.title.charAt(0)}
            </span>
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #00d9ff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>
        )}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <span className="px-2.5 py-1 text-xs text-zinc-300 bg-[#0a0a0f]/80 backdrop-blur-sm rounded-md border border-[#1e1e2e] font-mono">
            {project.date}
          </span>
        </div>
        {/* Expand icon on hover */}
        <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="p-1.5 rounded-md bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#1e1e2e]">
            <Maximize2 size={12} className="text-[#00d9ff]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {featured && (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00d9ff] mb-3 uppercase tracking-widest">
            <span className="w-1 h-1 rounded-full bg-[#00d9ff] inline-block" />
            Featured Project
          </span>
        )}
        <h3
          className={`font-semibold text-[#f0f0f5] mb-1 group-hover:text-[#00d9ff] transition-colors ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm font-mono mb-3">{project.subtitle}</p>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-xs font-mono text-[#00d9ff]/60 bg-[#00d9ff]/5 border border-[#00d9ff]/10 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.github || project.live) && (
          <div className="flex gap-3 mt-4 pt-4 border-t border-[#1e1e2e]">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-zinc-500 hover:text-[#00d9ff] text-sm transition-colors"
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
                className="text-zinc-500 hover:text-[#00d9ff] text-sm transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[#00d9ff] text-sm font-mono tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-12">
            Things I&apos;ve built
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {/* Featured project — full width */}
          <AnimatedSection delay={0.05}>
            <ProjectCard
              project={featured}
              onClick={() => setSelected(featured)}
              featured
            />
          </AnimatedSection>

          {/* Remaining projects — 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08 + 0.1}>
                <ProjectCard
                  project={project}
                  onClick={() => setSelected(project)}
                />
              </AnimatedSection>
            ))}
          </div>
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
