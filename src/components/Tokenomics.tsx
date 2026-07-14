import { CONFIG, formatCA } from "@/lib/config";

const stats = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Taxes", value: "0% / 0%" },
  { label: "LP", value: "🔒 Locked" },
  { label: "Chain", value: CONFIG.chainName },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="tokenomics">
      <div className="section-bg">
        <img src="/img/bg3.png" alt="" aria-hidden="true" loading="lazy" />
        <div
          className="section-bg-overlay"
          style={{
            background: "linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(244,114,182,0.06) 40%, rgba(34,211,238,0.06) 70%, transparent 100%)",
          }}
        />
      </div>
      <div className="container">
        <div className="section-label" style={{ textAlign: "center" }}>
          ✦ Tokenomics
        </div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Pure Alpha Numbers
        </h2>
        <p
          className="section-desc"
          style={{ textAlign: "center", margin: "0 auto 14px" }}
        >
          No BS. No taxes. Just the wolf.
        </p>

        <div className="tokenomics-grid">
          {stats.map((s) => (
            <div className="tstat" key={s.label}>
              <div className="tstat-label">{s.label}</div>
              <div className="tstat-value">{s.value}</div>
            </div>
          ))}
        </div>

        <p className="tokenomics-note">
          Contract:{" "}
          <span className="tstat-value mono">
            {formatCA(CONFIG.contractAddress)}
          </span>{" "}
          —{" "}
          {CONFIG.contractAddress === "TBD" ? (
            <span style={{ color: "var(--wolf-amber)" }}>
              Will be announced at launch 🚀
            </span>
          ) : (
            <a href={CONFIG.explorerUrl}>Verify on Explorer ↗</a>
          )}
        </p>
      </div>
    </section>
  );
}
