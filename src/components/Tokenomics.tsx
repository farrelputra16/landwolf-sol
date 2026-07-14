const stats = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Taxes", value: "0% / 0%", color: "var(--wolf-green)" },
  { label: "LP", value: "🔒 Locked" },
  { label: "Chain", value: "Robinhood", color: "var(--wolf-amber)" },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics">
      <div className="container">
        <div className="section-label" style={{ textAlign: "center" }}>
          ✦ Tokenomics
        </div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Pure Alpha Numbers
        </h2>
        <p
          className="section-desc"
          style={{ textAlign: "center", margin: "0 auto 16px" }}
        >
          No BS. No taxes. Just the wolf.
        </p>

        <div className="tokenomics-grid">
          {stats.map((s) => (
            <div className="tstat" key={s.label}>
              <div className="tstat-label">{s.label}</div>
              <div className="tstat-value" style={s.color ? { color: s.color } : undefined}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <p className="tokenomics-note">
          Contract:{" "}
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
            0x67466be17df832165f8c80a5a120ccc652bd7e69
          </span>{" "}
          — <a href="#">Verify on Explorer ↗</a>
        </p>
      </div>
    </section>
  );
}
