import { CONFIG, formatCA } from "@/lib/config";
import SvgLogo from "./SvgLogo";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <SvgLogo size={40} />
              <span className="nav-logo-text">LANDWOLF</span>
            </div>
            <p>
              Half man, half wolf. All party. The original Boy&apos;s Club alpha
              on {CONFIG.chainName}.
            </p>
          </div>

          <div className="footer-col">
            <h5>Links</h5>
            <a href="#about">About</a>
            <a href="#how">How to Buy</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className="footer-col">
            <h5>Tools</h5>
            <a href={CONFIG.swapUrl}>Swap</a>
            <a href={CONFIG.chartUrl}>Chart</a>
            <a href="#">Bridge</a>
            <a href="#">Earn</a>
          </div>

          <div className="footer-col">
            <h5>Community</h5>
            <a href={CONFIG.socials.telegram}>Telegram</a>
            <a href={CONFIG.socials.twitter}>Twitter / X</a>
            <a href={CONFIG.socials.coingecko}>CoinGecko</a>
            <a href={CONFIG.socials.coinmarketcap}>CoinMarketCap</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            CA: {formatCA(CONFIG.contractAddress)} — © 2026 Landwolf. All rights
            reserved. 🐺
          </p>
          <div className="footer-socials">
            <a href={CONFIG.socials.telegram} aria-label="Telegram">
              <SocialIcon icon="telegram" size={14} />
            </a>
            <a href={CONFIG.socials.twitter} aria-label="Twitter">
              <SocialIcon icon="twitter" size={14} />
            </a>
            <a href={CONFIG.socials.coingecko} aria-label="CoinGecko">
              <SocialIcon icon="gecko" size={14} />
            </a>
            <a href={CONFIG.socials.coinmarketcap} aria-label="CoinMarketCap">
              <SocialIcon icon="cmc" size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
