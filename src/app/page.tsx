import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Agents } from "@/components/Agents";
import { DemoVideos } from "@/components/DemoVideos";
import { ProductOffers } from "@/components/ProductOffers";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-shell">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Agents />
        <ProductOffers />
        <DemoVideos />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
