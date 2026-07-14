"use client";

import { useEffect, useRef } from "react";
import { CONFIG, formatCA } from "@/lib/config";
import SvgLogo from "./SvgLogo";

function createParticles(container: HTMLElement) {
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 4 + Math.random() * 8 + "s";
    p.style.animationDelay = Math.random() * 10 + "s";
    p.style.width = p.style.height = 2 + Math.random() * 5 + "px";
    container.appendChild(p);
  }
}

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
      <div className="hero-particles" ref={particlesRef} />

      <div className="hero-content">
        <div className="hero-badge">
          ⚡ Now Live on <span>{CONFIG.chainName}</span>
        </div>

        <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>
          <SvgLogo size={80} />
        </div>

        <h1>{CONFIG.tokenName}</h1>

        <p className="hero-sub">
          Half man, half wolf. All party. The alpha of Boy&apos;s Club has
          arrived on {CONFIG.chainName}. No taxes. Pure vibes.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={onBuyClick}>
            🔥 Buy {CONFIG.tokenSymbol}
          </button>
          <a href={CONFIG.chartUrl} className="btn btn-secondary">
            📊 Chart
          </a>
          <a href={CONFIG.swapUrl} className="btn btn-secondary">
            🔄 Swap
          </a>
        </div>

        <div className="hero-socials">
          <a href={CONFIG.socials.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">✈</a>
          <a href={CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
          <a href={CONFIG.socials.coingecko} target="_blank" rel="noopener noreferrer" aria-label="CoinGecko">🦎</a>
          <a href={CONFIG.socials.coinmarketcap} target="_blank" rel="noopener noreferrer" aria-label="CoinMarketCap">📊</a>
        </div>

        <div className="hero-ca">
          CA: {formatCA(CONFIG.contractAddress)}
        </div>
      </div>

      <div className="hero-scroll">⌄</div>
    </section>
  );
}
