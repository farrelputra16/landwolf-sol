const steps = [
  {
    num: 1,
    title: "Get a Wallet",
    desc: "Download Robinhood Wallet or MetaMask and add Robinhood Chain network.",
  },
  {
    num: 2,
    title: "Fund It",
    desc: "Purchase ETH or USDC on an exchange and bridge to Robinhood Chain.",
  },
  {
    num: 3,
    title: "Swap for $WOLF",
    desc: "Use our built-in swap tool to exchange for Landwolf at the best rates.",
  },
  {
    num: 4,
    title: "HODL & Earn",
    desc: "Join the pack. Zero taxes. Stake and earn APR from swap fees.",
  },
];

export default function HowToBuy() {
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="how-header">
          <div className="section-label">✦ How to Buy</div>
          <h2 className="section-title">Join the Pack</h2>
          <p className="section-desc">
            Four simple steps to get your $WOLF tokens on Robinhood Chain.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step-card" key={s.num}>
              <div className="step-number">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
