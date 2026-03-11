"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "carlosh.mtz@hotmail.com",
    href: "mailto:carlosh.mtz@hotmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "carlosmartinezrdz",
    href: "https://www.linkedin.com/in/carlosmartinezrdz",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "CarlosMtz1281",
    href: "https://github.com/CarlosMtz1281",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-[#00d9ff] text-sm font-mono tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-4">
            Get in touch
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-lg">
            Have a project in mind or want to discuss custom software?
            I&apos;d love to hear from you.
          </p>

          {/* Availability status */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-green-500/5 border border-green-500/20 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-green-400 text-sm font-mono">
              Currently available for new projects
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <AnimatedSection key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 p-5 rounded-2xl glass hover:border-[#00d9ff]/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.04)] transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d9ff]/5 border border-[#00d9ff]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d9ff]/10 transition-colors">
                  <link.icon className="w-5 h-5 text-[#00d9ff]/70" />
                </div>
                <div>
                  <p className="text-zinc-600 text-xs uppercase tracking-wide font-mono">
                    {link.label}
                  </p>
                  <p className="text-zinc-300 text-sm font-medium group-hover:text-[#00d9ff] transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
