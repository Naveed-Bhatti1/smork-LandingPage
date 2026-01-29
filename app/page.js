
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Working from "@/components/Working";


export default function Home() {
  return (
    <main className="min-h-[90vh]">
      <Hero />
      <Features />
      <Benefits />
      <Working />
      <Pricing />
      <CTA />
    </main>
  );
}
