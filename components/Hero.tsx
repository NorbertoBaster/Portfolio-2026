"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-4xl px-6 mb-32 md:mb-44">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-indigo-600">Norberto Baster</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Front-end Developer | UI/UX Enthusiast | Next.js & TailwindCSS
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-2xl font-medium tracking-wide rounded-2xl transition"
          whileHover={{ scale: 1.05 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
