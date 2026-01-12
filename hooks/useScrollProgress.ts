"use client";

import { useEffect, useState } from "react";

export function useScrollProgress(maxScroll = 600) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const value = Math.min(window.scrollY / maxScroll, 1);
      setProgress(value);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxScroll]);

  return progress;
}
