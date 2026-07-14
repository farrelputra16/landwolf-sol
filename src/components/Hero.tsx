"use client";

import { useEffect, useRef } from "react";
import { CONFIG, formatCA } from "@/lib/config";
import SocialIcon from "./SocialIcon";
import ThreeBackground from "./ThreeBackground";

const particleColors = ["#4ade80", "#f472b6", "#22d3ee", "#a78bfa", "#f59e0b"];

function createParticles(container: HTMLElement) {
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 6 + Math.random() * 10 + "s";
    p.style.animationDelay = Math.random() * 12 + "s";
    p.style.width = p.style.height = 2 + Math.random() * 5 + "px";
    p.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
    p.style.boxShadow = `0 0 6px ${p.style.background}`;
    container.appendChild(p);
  }
}

const socialIcons = [
  { icon: "telegram" as const, label: "Telegram" },
  { icon: "twitter" as const, label: "Twitter" },
  { icon: "gecko" as const, label: "CoinGecko" },
  { icon: "cmc" as const, label: "CoinMarketCap" },
];

export default function Hero({ onBuyClick }: { onBuyClick?: () => void }) {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current && particlesRef.current.children.length === 0) {
      createParticles(particlesRef.current);
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/img/photo_6244586014496199191_y.jpg"
      >
        <source src="/img/bg1.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <ThreeBackground />
      <div className="hero-particles" ref={particlesRef} />

      <div className="hero-content">
        <div className="hero-badge">
          ⚡ Now Live on <span>{CONFIG.chainName}</span>
        </div>

        <div className="hero-logo-svg">
          <img src="/img/icon.png" alt="Landwolf" className="hero-icon" />
        </div>

        <h1>{CONFIG.tokenName}</h1>

        <p className="hero-sub">
          Half man, half wolf. All party. The alpha of Boy&apos;s Club has
          arrived on {CONFIG.chainName}. No taxes. Pure vibes.
        </p>

        <div className="hero-buttons">
          <button className="btn" onClick={onBuyClick}>
            Buy {CONFIG.tokenSymbol}
          </button>
          <a href={CONFIG.chartUrl} className="btn btn-cyan">
            Chart
          </a>
          <a href={CONFIG.swapUrl} className="btn btn-pink">
            Swap
          </a>
        </div>

        <div className="hero-socials">
          {socialIcons.map((s) => (
            <a key={s.icon} href="#" aria-label={s.label}>
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>

        <div className="hero-ca">
          CA: {formatCA(CONFIG.contractAddress)}
        </div>
      </div>

      <div className="hero-scroll">⌄</div>
    </section>
  );
}
