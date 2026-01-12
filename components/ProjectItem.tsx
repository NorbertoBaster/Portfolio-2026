"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function ProjectItem({ project }: any) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      className="min-w-[320px] max-w-[360px]"
    >
      <h3 className="text-2xl tracking-tight mb-2">
        {project.title}
      </h3>

      <p className="text-neutral-400 leading-relaxed">
        {project.description}
      </p>

      <Magnetic>
  <a
    href={project.link}
    className="inline-block mt-6 text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition"
  >
    View →
  </a>
</Magnetic>
    </motion.article>
  );
}
