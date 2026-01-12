"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-44 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <motion.h2
      className="text-4xl font-bold mb-10 text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      A Bit About Me
    </motion.h2>

    <motion.p
      className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      I’m a front-end developer focused on building{" "}
  <span className="italic text-gray-700">
    clean, thoughtful interfaces.
  </span>{" "}
  I care deeply about layout, typography, and subtle motion, and enjoy creating polished user experiences that feel intentional and refined.
    </motion.p>
  </div>
</section>
  );
}
