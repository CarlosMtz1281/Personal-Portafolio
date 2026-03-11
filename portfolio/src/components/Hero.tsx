"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dark cyan gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-[#00d9ff]/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-indigo-900/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#00d9ff]/4 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #00d9ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Text */}
        <div>
          {/* Availability badge with pulsing dot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-[#00d9ff] border border-[#00d9ff]/30 rounded-full bg-[#00d9ff]/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f0f0f5] mb-4"
          >
            Carlos{" "}
            <span className="gradient-text">Martinez</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg font-mono text-[#00d9ff]/70 mb-3"
          >
            Full-Stack Engineer · DevOps · AI
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base text-zinc-400 max-w-lg mb-8 leading-relaxed"
          >
            Building things that scale — from Monterrey to Uppsala and beyond.
            I turn complex ideas into fast, production-grade software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-[#00d9ff] text-[#0a0a0f] font-semibold rounded-full hover:bg-[#00d9ff]/90 transition-all duration-200 text-center shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-[#1e1e2e] text-zinc-300 font-medium rounded-full hover:border-[#00d9ff]/30 hover:text-[#00d9ff] transition-all duration-200 text-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Cyan glow ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#00d9ff]/30 via-indigo-500/20 to-violet-500/30 blur-xl opacity-80" />
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-[#00d9ff]/40 to-indigo-600/30 opacity-60" />
            <div className="relative rounded-2xl overflow-hidden w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[460px] shadow-2xl ring-1 ring-[#00d9ff]/20">
              <Image
                src="/profile.jpg"
                alt="Carlos Martinez"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[#1e1e2e] rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-[#00d9ff]/50 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
