export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-bg">
        <img src="/img/bg5.png" alt="" aria-hidden="true" loading="lazy" className="bg-animate-3" />
        <div
          className="section-bg-overlay"
          style={{
            background: "linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(74,222,128,0.06) 40%, rgba(167,139,250,0.04) 70%, transparent 100%)",
          }}
        />
      </div>
      <div className="container">
        <div className="section-label">✦ About</div>
        <div className="about-grid">
          <div className="about-text">
            <h3>The Freakin&apos; Alpha</h3>
            <p>
              Half man, half wolf. <strong>LANDWOLF</strong>, a Matt Furie
              creation unlike any that came before. He&apos;s just a cool dude
              who loves to hang out with his friends, eat pizza, and play video
              games. Watch out for the full moon: that&apos;s when Landwolf
              transforms into a party animal.
            </p>
            <p>
              Featured on the first page of the iconic comic series{" "}
              <em>&quot;Boy&apos;s Club&quot;</em> alongside Pepe, Andy, and
              Brett. Now he&apos;s taking over Robinhood Chain.
            </p>
            <div className="about-highlight">
              🐺 $WOLF — The Original Alpha on RH Chain
            </div>
          </div>
          <div className="about-image">
            <img
              src="/img/photo_6244586014496199191_y.jpg"
              alt="Landwolf Character"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
