"use client";

import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#f9f9f9" },
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          color: { value: "#000000" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 0.5, direction: "none", outModes: "out" },
          links: { enable: true, distance: 100, color: "#000000", opacity: 0.1, width: 1 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, resize: true },
          modes: { grab: { distance: 120, links: { opacity: 0.2 } } },
        },
        detectRetina: true,
      }}
    />
  );
}
