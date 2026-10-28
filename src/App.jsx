import SiteHeader from "./components/layout/SiteHeader";
import Hero from "./components/sections/Hero";
import TrustedClients from "./components/sections/TrustedClients";
import ServicesSection from "./components/sections/ServicesSection";
import { useScrollEffects } from "./components/hooks/useScrollEffects";
import { useRef } from "react";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

function App() {
  const heroRef = useRef(null);
  useScrollEffects(heroRef);

  return (
    <main id="#home">
      <SiteHeader />
      <Hero ref={heroRef} />
      <TrustedClients />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
