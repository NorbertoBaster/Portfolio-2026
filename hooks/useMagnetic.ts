"use client";

import { useRef, useEffect } from "react";

export default function useMagnetic() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleLeave = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(0px, 0px)`;
    };

    const btn = ref.current;
    btn?.addEventListener("mousemove", handleMove);
    btn?.addEventListener("mouseleave", handleLeave);

    return () => {
      btn?.removeEventListener("mousemove", handleMove);
      btn?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return ref;
}
