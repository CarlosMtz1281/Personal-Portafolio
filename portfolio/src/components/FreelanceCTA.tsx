"use client";

import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function FreelanceCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-2xl" />
            <div className="relative m-[1px] bg-white rounded-[15px] p-10 md:p-16 text-center">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-100/50 rounded-full blur-[100px]" />

              <div className="relative">
                <p className="text-indigo-500 text-sm font-medium tracking-widest uppercase mb-4">
                  Freelance
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">Together</span>
                </h2>
                <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  I help businesses and startups build custom software — from
                  web applications and mobile apps to API integrations and
                  AI-powered solutions. Let&apos;s turn your idea into reality.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all duration-200 group"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
