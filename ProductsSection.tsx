import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MarketsSection } from "./components/MarketsSection";
import { Navigation } from "./components/Navigation";
import { ProductsSection } from "./components/ProductsSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { useInitBackend } from "./hooks/useQueries";

function AppContent() {
  useInitBackend();

  useEffect(() => {
    // Set page meta
    document.title =
      "Anishwari Global Pvt. Ltd. — Where Quality Meets Commitment";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Anishwari Global Pvt. Ltd. — India's premium agro product exporter. Spices, rice, pulses, oilseeds, and fresh produce shipped to 50+ countries worldwide.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <MarketsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
