"use client";

import { useEffect, useRef } from "react";
import { CONFIG, formatCA } from "@/lib/config";
import SvgLogo from "./SvgLogo";
import SocialIcon from "./SocialIcon";

function createParticles(container: HTMLElement) {
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 5 + Math.random() * 8 + "s";
    p.style.animationDelay = Math.random() * 10 + "s";
    p.style.width = p.style.height = 2 + Math.random() * 4 + "px";
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
      <div className="hero-particles" ref={particlesRef} />

      <div className="hero-content">
        <div className="hero-badge">
          ⚡ Now Live on <span>{CONFIG.chainName}</span>
        </div>

        <div className="hero-logo-svg">
          <SvgLogo size={72} />
        </div>

        <h1>{CONFIG.tokenName}</h1>

        <p className="hero-sub">
          Half man, half wolf. All party. The alpha of Boy&apos;s Club has
          arrived on {CONFIG.chainName}. No taxes. Pure vibes.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-green" onClick={onBuyClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 11.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" fill="currentColor" />
            </svg>
            Buy {CONFIG.tokenSymbol}
          </button>
          <a href={CONFIG.chartUrl} className="btn btn-purple">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM2 3v10h12V3H2zm2 2h8v6H4V5z" fill="currentColor" />
            </svg>
            Chart
          </a>
          <a href={CONFIG.swapUrl} className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4zm0 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1 3v6h2V5H5zm4 0v6h2V5H9z" fill="currentColor" />
            </svg>
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
