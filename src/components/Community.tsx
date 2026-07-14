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
            className="btn btn-purple"
          >
            <SocialIcon icon="telegram" size={14} />
            Telegram
          </a>
          <a
            href={CONFIG.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <SocialIcon icon="twitter" size={14} />
            Twitter / X
          </a>
          <a href="#" className="btn btn-green">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 11.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" fill="currentColor" />
            </svg>
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
