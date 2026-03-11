"use client";

import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[#00d9ff] text-sm font-mono tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f5] mb-4">
            Badges &amp; Certifications
          </h2>
          <p className="text-zinc-500 mb-12 max-w-lg">
            Professional certifications and courses I&apos;ve completed.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.05}>
              <CertCard cert={cert} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: (typeof certifications)[number] }) {
  const inner = (
    <div className="flex flex-col items-center text-center p-5 rounded-2xl glass hover:border-[#00d9ff]/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.04)] transition-all duration-200 h-full group">
      {/* Badge image or fallback icon */}
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        {cert.badge ? (
          <Image
            src={cert.badge}
            alt={cert.title}
            width={80}
            height={80}
            className="object-contain group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-20 h-20 rounded-xl bg-[#00d9ff]/5 border border-[#00d9ff]/15 flex items-center justify-center group-hover:bg-[#00d9ff]/10 transition-colors">
            <Award className="w-8 h-8 text-[#00d9ff]/50" />
          </div>
        )}
      </div>

      <h3 className="text-sm font-semibold text-[#f0f0f5] leading-snug mb-1">
        {cert.title}
      </h3>
      <p className="text-xs text-zinc-500">{cert.issuer}</p>
      {cert.date && (
        <p className="text-[11px] text-zinc-600 mt-1 font-mono">{cert.date}</p>
      )}
    </div>
  );

  if (cert.link) {
    return (
      <a href={cert.link} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
}
