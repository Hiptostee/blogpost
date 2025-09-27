// components/FantasyBackground.js
"use client";

import { useEffect, useState, useId, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";

export function FantasyBackground({ className }) {
  const [isParticlesReady, setIsParticlesReady] = useState(false);
  const particlesId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsParticlesReady(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fullScreen: { enable: false },
    particles: {
      number: { value: 250, density: { enable: true, value_area: 800 } },
      color: { value: "#FEE2E2" },
      shape: { type: "star" },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 2,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
      },
      links: { enable: false },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    detectRetina: true,
  };

  function FlyingWitch({ size, speed }) {
    const ref = useRef(null);

    useEffect(() => {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let dx = (Math.random() - 0.5) * speed;
      let dy = (Math.random() - 0.5) * speed;
      let facingRight = dx >= 0; // initial direction

      const el = ref.current;

      function animate() {
        x += dx;
        y += dy;

        // bounce off walls
        if (x <= 0 || x + size >= window.innerWidth) {
          dx *= -1;
          facingRight = dx > 0;
        }
        if (y <= 0 || y + size >= window.innerHeight) {
          dy *= -1;
        }

        if (el) {
          el.style.transform = `translate(${x}px, ${y}px) scaleX(${
            facingRight ? 1 : -1
          })`;
        }

        requestAnimationFrame(animate);
      }

      animate();
    }, [size, speed]);

    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          width: size,
          height: size,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/witch.svg"
          alt="Flying Witch (Art by pngimg.com)"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {isParticlesReady && (
        <Particles
          id={particlesId}
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}

      {Array.from({ length: 5 }).map((_, i) => (
        <FlyingWitch key={i} size={70 + i * 10} speed={2 + i} />
      ))}
    </div>
  );
}
