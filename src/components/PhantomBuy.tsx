"use client";

import { useState, useEffect } from "react";
import { CONFIG } from "@/lib/config";
import "@/lib/types";

export default function PhantomBuy() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const hasPhantom = !!window.phantom?.solana?.isPhantom || !!window.solana?.isPhantom;
    setInstalled(hasPhantom);
  }, []);

  const connect = async () => {
    try {
      const provider = window.phantom?.solana || window.solana;
      if (!provider) {
        window.open("https://phantom.app", "_blank");
        return;
      }
      const resp = await provider.connect();
      setWallet(resp.publicKey.toString());
    } catch {
      // user rejected
    }
  };

  const disconnect = async () => {
    try {
      const provider = window.phantom?.solana || window.solana;
      await provider?.disconnect();
      setWallet(null);
    } catch {
      // ignore
    }
  };

  const short = (pk: string) => `${pk.slice(0, 4)}...${pk.slice(-4)}`;

  return (
    <section className="phantom-section" id="buy">
      <div className="container">
        <div className="phantom-grid">
          <div className="phantom-left">
            <h3>
              Buy <span className="gradient-text-green">{CONFIG.tokenSymbol}</span> Instantly
            </h3>
            <p>
              Connect your Phantom wallet to buy {CONFIG.tokenName} on{" "}
              {CONFIG.chainName}. No KYC, no taxes, no BS. Just pure wolf energy.
            </p>

            {wallet ? (
              <>
                <div className="phantom-wallet-info">
                  <span className="wallet-dot" />
                  Connected: {short(wallet)}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button className="phantom-btn" onClick={onBuy}>
                    🔥 Buy {CONFIG.tokenSymbol}
                  </button>
                  <button className="phantom-btn phantom-btn-outline" onClick={disconnect}>
                    Disconnect
                  </button>
                </div>
              </>
            ) : (
              <button className="phantom-btn" onClick={connect}>
                {installed ? "🦊 Connect Phantom" : "⬇ Install Phantom"}
              </button>
            )}
          </div>

          <div className="phantom-right">
            <div className="phantom-phone">
              <div className="paw">🐺</div>
              <p>Landwolf</p>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4ade80, #f59e0b)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  zIndex: 1,
                }}
              >
                ✦
              </div>
              <p style={{ fontSize: "0.75rem", color: "#555" }}>
                {CONFIG.chainName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  async function onBuy() {
    const provider = window.phantom?.solana || window.solana;
    if (!provider || !wallet) return;
    // Placeholder: actual swap will be implemented at launch
    alert(`Buy ${CONFIG.tokenSymbol} on ${CONFIG.chainName} — coming soon! 🐺`);
  }
}
