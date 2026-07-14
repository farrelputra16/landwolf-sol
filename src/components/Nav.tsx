"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How to Buy" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#gallery", label: "Gallery" },
  { href: "#community", label: "Community" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav>
      <div className="nav-logo">✦ LANDWOLF</div>
      <div className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleClick}>
            {l.label}
          </a>
        ))}
        <a href="#" className="nav-cta" onClick={handleClick}>
          Buy $WOLF
        </a>
      </div>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
