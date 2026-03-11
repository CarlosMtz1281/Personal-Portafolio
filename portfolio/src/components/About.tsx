"use client";

import { AnimatedSection } from "./AnimatedSection";
import { MapPin, GraduationCap, Trophy, Globe } from "lucide-react";

const funFacts = [
  { icon: "🏆", text: "ICPC Regional × 9" },
  { icon: "🌍", text: "Studied in Sweden" },
  { icon: "🗣️", text: "3 languages" },
  { icon: "🎓", text: "4.0 GPA" },
  { icon: "🚀", text: "MIT & HackMty hackathons" },
  { icon: "⚡", text: "Production Eng. @ Meta fellowship" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[#00d9ff] text-sm font-mono tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-12">
            Get to know me
          </h2>
        </AnimatedSection>

        {/* Fun facts strip */}
        <AnimatedSection delay={0.05} className="mb-6">
          <div className="flex flex-wrap gap-3">
            {funFacts.map((fact) => (
              <span
                key={fact.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111118] border border-[#1e1e2e] text-zinc-300 text-sm hover:border-[#00d9ff]/30 hover:text-[#00d9ff] transition-all duration-200"
              >
                <span>{fact.icon}</span>
                {fact.text}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bio card - spans 2 cols */}
          <AnimatedSection
            className="md:col-span-2 p-8 rounded-2xl glass"
            delay={0.1}
          >
            <p className="text-zinc-400 leading-relaxed">
              Computer Science student at Tec de Monterrey with a 4.0 GPA,
              graduating June 2026. I spent a semester at Uppsala University in
              Sweden studying advanced topics like Compiler Design and Parallel
              Programming. I&apos;ve competed in 9 ICPC programming contests and
              hackathons at MIT, Imperial College London, and HackMTY.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              I build custom software for businesses and startups — from
              full-stack web applications and mobile platforms to AI-powered
              solutions and IoT systems. Whether you need an MVP or a
              production-grade application, let&apos;s create something great.
            </p>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection className="p-6 rounded-2xl glass" delay={0.2}>
            <GraduationCap className="w-6 h-6 text-[#00d9ff] mb-4" />
            <h3 className="text-[#f0f0f5] font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#00d9ff]/30 pl-3">
                <p className="text-zinc-200 text-sm font-medium">
                  Tec de Monterrey
                </p>
                <p className="text-zinc-400 text-xs">
                  BS Computer Science — 4.0 GPA
                </p>
                <p className="text-zinc-500 text-xs font-mono">Aug 2022 — Jun 2026</p>
              </div>
              <div className="border-l-2 border-[#1e1e2e] pl-3">
                <p className="text-zinc-200 text-sm font-medium">
                  Uppsala University
                </p>
                <p className="text-zinc-400 text-xs">
                  International Exchange Program
                </p>
                <p className="text-zinc-500 text-xs font-mono">Aug 2024 — Jan 2026</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection className="p-6 rounded-2xl glass" delay={0.25}>
            <MapPin className="w-6 h-6 text-[#00d9ff] mb-4" />
            <h3 className="text-[#f0f0f5] font-semibold mb-2">Based in</h3>
            <p className="text-zinc-300">Monterrey, Mexico</p>
            <p className="text-zinc-500 text-sm mt-1">
              Open to remote &amp; worldwide
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection className="p-6 rounded-2xl glass" delay={0.3}>
            <Trophy className="w-6 h-6 text-[#00d9ff] mb-4" />
            <h3 className="text-[#f0f0f5] font-semibold mb-4">Highlights</h3>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-2xl font-bold text-[#00d9ff]">4.0</p>
                <p className="text-zinc-500 text-xs">GPA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00d9ff]">6+</p>
                <p className="text-zinc-500 text-xs">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00d9ff]">9</p>
                <p className="text-zinc-500 text-xs">ICPC</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection className="p-6 rounded-2xl glass" delay={0.35}>
            <Globe className="w-6 h-6 text-[#00d9ff] mb-4" />
            <h3 className="text-[#f0f0f5] font-semibold mb-3">Languages</h3>
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">Spanish</span>
                <span className="text-xs text-[#00d9ff] px-2 py-0.5 bg-[#00d9ff]/10 border border-[#00d9ff]/20 rounded-md font-mono">
                  Native
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">English</span>
                <span className="text-xs text-zinc-400 px-2 py-0.5 bg-[#1e1e2e] border border-[#2e2e3e] rounded-md font-mono">
                  C1 Proficient
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">French</span>
                <span className="text-xs text-zinc-400 px-2 py-0.5 bg-[#1e1e2e] border border-[#2e2e3e] rounded-md font-mono">
                  B1 Basic
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
