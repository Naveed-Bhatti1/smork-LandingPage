import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Working from "@/components/Working";

export const metadata = {
  title: "AI Project Management Tool - Smork",
  description:
    "Discover Smork, the AI-powered project management tool designed to streamline your workflow, enhance collaboration, and boost productivity. Experience intelligent task management and seamless team coordination with Smork.",
};

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
