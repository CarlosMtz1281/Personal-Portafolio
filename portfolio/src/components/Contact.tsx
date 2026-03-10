"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

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
          <p className="text-indigo-500 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Get in touch
          </h2>
          <p className="text-zinc-500 text-lg mb-12 max-w-lg">
            Have a project in mind or want to discuss custom software?
            I&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <AnimatedSection key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={
                  link.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 p-5 rounded-2xl glass hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <link.icon className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-wide">
                    {link.label}
                  </p>
                  <p className="text-zinc-900 text-sm font-medium group-hover:text-indigo-600 transition-colors">
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
