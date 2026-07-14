import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import Tokenomics from "@/components/Tokenomics";
import Gallery from "@/components/Gallery";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <HowToBuy />
      </ScrollReveal>
      <ScrollReveal>
        <Tokenomics />
      </ScrollReveal>
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal>
        <Community />
      </ScrollReveal>
      <Footer />
    </>
  );
}
