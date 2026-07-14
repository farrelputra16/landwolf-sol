"use client";

import { useEffect, useRef } from "react";

function createParticles(container: HTMLElement) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 4 + Math.random() * 6 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.width = p.style.height = 2 + Math.random() * 4 + "px";
    container.appendChild(p);
  }
}

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current) {
      createParticles(particlesRef.current);
    }
  }, []);

  const copyCA = async () => {
    const ca = "0x67466be17df832165f8c80a5a120ccc652bd7e69";
    try {
      await navigator.clipboard.writeText(ca);
    } catch {
      // fallback
    }
  };

  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/img/2.jpg">
        <source src="/img/bg1.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-particles" ref={particlesRef} />

      <div className="hero-content">
        <div className="hero-badge">
          ⚡ Now Live on <span>Robinhood Chain</span>
        </div>

        <h1>Landwolf</h1>

        <p>
          Half man, half wolf. All party. The alpha of Boy&apos;s Club has
          arrived on Robinhood Chain. No taxes. Pure vibes.
        </p>

        <div className="hero-buttons">
          <a href="#" className="btn btn-primary">
            🔥 Buy $WOLF
          </a>
          <a href="#" className="btn btn-secondary">
            📊 Chart
          </a>
          <a href="#" className="btn btn-secondary">
            🔄 Swap
          </a>
        </div>

        <div className="hero-socials">
          <a href="#" aria-label="Telegram">
            ✈
          </a>
          <a href="#" aria-label="Twitter">
            𝕏
          </a>
          <a href="#" aria-label="Dextools">
            📈
          </a>
          <a href="#" aria-label="CoinGecko">
            🦎
          </a>
        </div>

        <button className="hero-ca" onClick={copyCA}>
          <span>CA: 0x6746...7E69</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem" }}>
            📋
          </span>
        </button>
      </div>

      <div className="hero-scroll">⌄</div>
    </section>
  );
}
