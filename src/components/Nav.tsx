"use client";

import { useState } from "react";
import SvgLogo from "./SvgLogo";

const links = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How to Buy" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#gallery", label: "Gallery" },
  { href: "#community", label: "Community" },
];

export default function Nav({ onBuyClick }: { onBuyClick?: () => void }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <nav>
      <a href="#" className="nav-logo">
        <SvgLogo />
        <span className="nav-logo-text">LANDWOLF</span>
      </a>
      <div className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleClick}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <button className="btn btn-small" onClick={onBuyClick}>
          Buy $WOLF
        </button>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
