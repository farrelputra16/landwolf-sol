import { CONFIG } from "@/lib/config";

const tickerItems = [
  { text: `${CONFIG.tokenName} ON ${CONFIG.chainName}`, green: false },
  { text: CONFIG.tokenSymbol, green: true },
  { text: "ZERO TAX", green: false },
  { text: "LP LOCKED", green: true },
  { text: "JOIN THE PACK", green: false },
  { text: "HALF MAN HALF WOLF", green: true },
  { text: "THE ALPHA OF BOY'S CLUB", green: false },
];

export default function Community() {
  return (
    <section id="community" className="community">
      <div className="container">
        <div className="section-label">✦ Community</div>
        <h2>
          Join the <span className="highlight">Wolfpack</span>
        </h2>
        <p>
          Yo, welcome to the pack. Get in here and see what all the howl&apos;s
          about!
        </p>
        <div className="community-buttons">
          <a
            href={CONFIG.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            ✈ Telegram
          </a>
          <a
            href={CONFIG.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            𝕏 Twitter / X
          </a>
          <a href="#" className="btn btn-secondary">
            🔥 Buy Now
          </a>
        </div>
      </div>

      <div className="ticker-wrap">
        <div className="ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className={item.green ? "green" : ""}>
              ✦ {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
