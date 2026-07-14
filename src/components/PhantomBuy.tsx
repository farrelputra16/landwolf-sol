"use client";

import { useState, useEffect } from "react";
import { CONFIG } from "@/lib/config";
import "@/lib/types";

declare global {
  interface Window {
    phantom?: {
      solana?: {
        isPhantom?: boolean;
        connect: () => Promise<{ publicKey: { toString: () => string } }>;
        disconnect: () => Promise<void>;
      };
    };
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<{ publicKey: { toString: () => string } }>;
      disconnect: () => Promise<void>;
    };
  }
}

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
                <div className="phantom-btn-wrap">
                  <button className="btn btn-green btn-small" onClick={onBuy}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 11.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" fill="currentColor" />
                    </svg>
                    Buy {CONFIG.tokenSymbol}
                  </button>
                  <button className="btn btn-outline btn-small" onClick={disconnect}>
                    Disconnect
                  </button>
                </div>
              </>
            ) : (
              <button className="btn btn-purple" onClick={connect}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zM7 11.5V9.5H4a.5.5 0 0 1 0-1h3V6.5a.5.5 0 0 1 1 0v2h3a.5.5 0 0 1 0 1H8v2a.5.5 0 0 1-1 0z" fill="currentColor" />
                </svg>
                {installed ? "Connect Phantom" : "Install Phantom"}
              </button>
            )}
          </div>

          <div className="phantom-right">
            <div className="phantom-phone">
              <div className="paw">🐺</div>
              <div className="phone-label">Landwolf</div>
              <div className="phone-badge">✦</div>
              <div className="phone-sub">{CONFIG.chainName}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  async function onBuy() {
    const provider = window.phantom?.solana || window.solana;
    if (!provider || !wallet) return;
    alert(`Buy ${CONFIG.tokenSymbol} on ${CONFIG.chainName} — coming soon! 🐺`);
  }
}
