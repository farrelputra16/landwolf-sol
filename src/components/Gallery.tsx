"use client";

import { useState, useCallback } from "react";

const images = [
  { src: "/img/photo_6244586014496199191_y.jpg" },
  { src: "/img/photo_6244586014496199203_y.jpg" },
  { src: "/img/photo_6244586014496199194_y.jpg" },
  { src: "/img/photo_5093933579766533326_y.jpg" },
  { src: "/img/photo_6244586014496199196_y.jpg" },
  { src: "/img/2.jpg" },
  { src: "/img/3.jpg" },
  { src: "/img/photo_6244586014496199191_y.jpg" },
  { src: "/img/photo_6244586014496199196_y.jpg" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const close = useCallback(() => setLightbox(null), []);

  return (
    <section id="gallery" className="gallery">
      <div className="section-bg">
        <img src="/img/bg6.png" alt="" aria-hidden="true" loading="lazy" className="bg-animate" />
        <div
          className="section-bg-overlay"
          style={{
            background: "linear-gradient(135deg, rgba(244,114,182,0.08) 0%, rgba(167,139,250,0.06) 40%, rgba(74,222,128,0.04) 70%, transparent 100%)",
          }}
        />
      </div>
      <div className="container">
        <div className="gallery-header">
          <div className="section-label">✦ Gallery</div>
          <div className="gallery-header-inner">
            <div className="gallery-header-label">
              <div className="star-row">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} width="8" height="8" viewBox="0 0 9 9" fill="none">
                    <path d="M0 4.00276L0.472441 2.48619L3.2126 3.43094L4.06299 4.07735L3.77953 3.03315V0H5.26772V3.03315L4.96063 4.10221L5.7874 3.4558L8.55118 2.53591L9 4.02762L6.25984 4.97238L5.24409 5.0221L6.04724 5.61879L7.72441 8.08011L6.51968 9L4.8189 6.56354L4.48819 5.5442L4.13386 6.53867L2.43307 9L1.22835 8.08011L2.92913 5.61879L3.75591 4.99724L2.76378 4.94751L0 4.00276Z" fill="#888" />
                  </svg>
                ))}
              </div>
              <p>Pure badass art inspired by the legend himself</p>
            </div>
            <div className="gallery__title-image">
              <svg width="240" height="44" viewBox="0 0 240 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="Bebas Neue" fontSize="40" fill="url(#galleryGrad)" letterSpacing="6">WOLF VISION</text>
                <defs>
                  <linearGradient id="galleryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="gallery-header-label right">
              <div className="star-row" style={{ justifyContent: "flex-end" }}>
                {[...Array(4)].map((_, i) => (
                  <svg key={i} width="8" height="8" viewBox="0 0 9 9" fill="none">
                    <path d="M0 4.00276L0.472441 2.48619L3.2126 3.43094L4.06299 4.07735L3.77953 3.03315V0H5.26772V3.03315L4.96063 4.10221L5.7874 3.4558L8.55118 2.53591L9 4.02762L6.25984 4.97238L5.24409 5.0221L6.04724 5.61879L7.72441 8.08011L6.51968 9L4.8189 6.56354L4.48819 5.5442L4.13386 6.53867L2.43307 9L1.22835 8.08011L2.92913 5.61879L3.75591 4.99724L2.76378 4.94751L0 4.00276Z" fill="#888" />
                  </svg>
                ))}
              </div>
              <p>Get in here and see what all the howl&apos;s about!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightbox(img.src)}
          >
            <img src={img.src} alt="Landwolf Gallery" loading="lazy" />
          </div>
        ))}
      </div>

      <div
        className={`lightbox${lightbox ? " active" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        onKeyDown={(e) => { if (e.key === "Escape") close(); }}
        role="dialog"
        aria-modal="true"
      >
        <button className="lightbox-close" onClick={close}>✕</button>
        {lightbox && <img src={lightbox} alt="Expanded view" />}
      </div>
    </section>
  );
}
