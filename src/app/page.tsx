"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AmbientOrbs from "@/components/AmbientOrbs";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import PhantomBuy from "@/components/PhantomBuy";
import Tokenomics from "@/components/Tokenomics";
import Gallery from "@/components/Gallery";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import BuyModal from "@/components/BuyModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AmbientOrbs />
      <ScrollProgress />
      <Nav onBuyClick={() => setModalOpen(true)} />
      <Hero onBuyClick={() => setModalOpen(true)} />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <HowToBuy />
      </ScrollReveal>
      <ScrollReveal>
        <PhantomBuy />
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
      <BuyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
