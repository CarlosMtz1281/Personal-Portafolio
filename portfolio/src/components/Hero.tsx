"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Soft gradient background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-violet-100/60 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-sky-100/40 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-indigo-600 border border-indigo-200 rounded-full bg-indigo-50 mb-6">
              Available for Freelance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6"
          >
            Carlos{" "}
            <span className="gradient-text">Martinez</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-zinc-500 max-w-lg mb-8 leading-relaxed"
          >
            Full-stack developer building custom software solutions.{" "}
            I turn ideas into polished web and mobile experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all duration-200 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-zinc-300 text-zinc-700 font-medium rounded-full hover:bg-zinc-100 transition-all duration-200 text-center"
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
            {/* Decorative gradient glow behind photo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-200 via-violet-200 to-purple-200 rounded-3xl blur-2xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[460px] shadow-2xl ring-1 ring-black/5">
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
          className="w-5 h-8 border-2 border-zinc-300 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-zinc-400 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
