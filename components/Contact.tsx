"use client";

import { motion } from "framer-motion";

// components/Contact.tsx


import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 space-y-6 bg-gray-100">
      <h2 className="text-4xl font-semibold text-gray-900">Let's Work Together</h2>
      <p className="text-gray-700 max-w-lg">
        Interested in collaborating or just want to say hi? Reach out!
      </p>

      {/* Icon Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://github.com/NorbertoBaster"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-600 transition"
        >
          <FaGithub size={32} />
        </a>

        <a
          href="https://www.linkedin.com/in/norberto-baster-frontend/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 transition"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
}
