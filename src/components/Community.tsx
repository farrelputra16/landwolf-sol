import { CONFIG } from "@/lib/config";
import SocialIcon from "./SocialIcon";

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
      <div className="section-bg">
        <img src="/img/bg4.png" alt="" aria-hidden="true" loading="lazy" className="bg-animate-3" />
        <div
          className="section-bg-overlay"
          style={{
            background: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(244,114,182,0.06) 40%, rgba(245,158,11,0.04) 70%, transparent 100%)",
          }}
        />
      </div>
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
            className="btn"
          >
            Telegram
          </a>
          <a
            href={CONFIG.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Twitter / X
          </a>
          <a href="#" className="btn">
            Buy Now
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
