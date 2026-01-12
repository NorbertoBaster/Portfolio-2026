"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-4">{project.description}</p>

      {/* Render Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-gray-500 group-hover:text-gray-900 transition"
      >
        View project →
      </a>
    </motion.div>
  );
}
