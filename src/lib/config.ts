export const CONFIG = {
  contractAddress: "TBD",
  contractDisplay: "TBD...TBD",
  explorerUrl: "#",
  chainName: "Robinhood Chain",
  tokenSymbol: "$WOLF",
  tokenName: "Landwolf",
  swapUrl: "#",
  chartUrl: "#",
  socials: {
    telegram: "#",
    twitter: "#",
    coingecko: "#",
    coinmarketcap: "#",
  },
};

export function formatCA(ca: string): string {
  if (ca === "TBD" || ca.length < 10) return "TBD...TBD";
  return `${ca.slice(0, 6)}...${ca.slice(-4)}`;
}
