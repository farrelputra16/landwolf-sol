"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";
import "@/lib/types";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function BuyModal({ open, onClose }: Props) {
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const connectPhantom = async () => {
    const provider = window.phantom?.solana || window.solana;
    if (!provider) {
      window.open("https://phantom.app", "_blank");
      return;
    }
    try {
      const resp = await provider.connect();
      setWallet(resp.publicKey.toString());
    } catch {
      // user rejected
    }
  };

  const short = (pk: string) => `${pk.slice(0, 4)}...${pk.slice(-4)}`;

  if (!open) return null;

  return (
    <div
      className={`modal-overlay${open ? " active" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-icon">🐺</div>
        <h3>Buy {CONFIG.tokenSymbol}</h3>
        <p>Connect your wallet to buy on {CONFIG.chainName}</p>

        {!wallet ? (
          <div className="wallet-option" onClick={connectPhantom}>
            <div className="wallet-icon-box" style={{ background: "linear-gradient(135deg, #ab9ff2, #7b5ce5)", color: "#fff" }}>
              P
            </div>
            <div className="wallet-option-info">
              <strong>Phantom</strong>
              <span>Solana & EVM chains</span>
            </div>
            <span className="arrow">→</span>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div className="phantom-wallet-info" style={{ justifyContent: "center", marginBottom: 16 }}>
              <span className="wallet-dot" />
              {short(wallet)}
            </div>
            <p style={{ fontSize: "0.82rem", color: "#666", marginBottom: 16 }}>
              CA: {CONFIG.contractAddress === "TBD" ? "Announcing at launch 🚀" : CONFIG.contractAddress}
            </p>
            <button className="btn" onClick={() => alert(`Buy flow coming at launch! 🐺`)}>
              Buy {CONFIG.tokenSymbol}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
