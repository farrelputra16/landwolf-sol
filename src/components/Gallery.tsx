"use client";

import { useState, useCallback } from "react";

const images = [
  { src: "/img/photo_6244586014496199191_y.jpg", className: "" },
  { src: "/img/photo_6244586014496199194_y.jpg", className: "tall" },
  { src: "/img/photo_6244586014496199196_y.jpg", className: "" },
  { src: "/img/photo_6244586014496199203_y.jpg", className: "" },
  { src: "/img/photo_5093933579766533326_y.jpg", className: "" },
  { src: "/img/2.jpg", className: "" },
  { src: "/img/3.jpg", className: "wide" },
  { src: "/img/photo_6244586014496199196_y.jpg", className: "" },
  { src: "/img/photo_6244586014496199191_y.jpg", className: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const close = useCallback(() => setLightbox(null), []);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <div className="section-label">✦ Gallery</div>
          <h2 className="section-title">Wolf Vision</h2>
          <p className="section-desc">
            Pure badass art inspired by the legend himself.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item${img.className ? " " + img.className : ""}`}
              onClick={() => setLightbox(img.src)}
            >
              <img src={img.src} alt="Landwolf Gallery" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`lightbox${lightbox ? " active" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        role="dialog"
        aria-modal="true"
      >
        <span className="lightbox-close" onClick={close} role="button" tabIndex={0}>
          ✕
        </span>
        {lightbox && <img src={lightbox} alt="Expanded view" />}
      </div>
    </section>
  );
}
