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
          <button className="btn" onClick={onBuyClick}>
            Buy {CONFIG.tokenSymbol}
          </button>
          <a href={CONFIG.chartUrl} className="btn">
            Chart
          </a>
          <a href={CONFIG.swapUrl} className="btn">
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
