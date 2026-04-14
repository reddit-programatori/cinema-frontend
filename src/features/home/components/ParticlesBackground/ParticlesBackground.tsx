"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      options={{
        background: {
          color: { value: "transparent" },
        },
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 160,
            density: { enable: true },
          },
          color: { value: "#ffffff" },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            outModes: "out",
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
};
