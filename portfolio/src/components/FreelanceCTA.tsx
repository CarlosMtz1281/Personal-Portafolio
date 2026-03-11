"use client";

import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function FreelanceCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00d9ff]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-indigo-900/20 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-[#00d9ff] text-sm font-mono tracking-widest uppercase mb-6">
            Freelance
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f0f0f5] mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            I help businesses and startups build custom software — from web
            applications and mobile apps to API integrations and AI-powered
            solutions.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-zinc-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Response &lt; 24h
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] inline-block" />
              Available now
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
              Remote worldwide
            </span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9ff] text-[#0a0a0f] font-semibold rounded-full hover:bg-[#00d9ff]/90 transition-all duration-200 group shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)] text-base"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
