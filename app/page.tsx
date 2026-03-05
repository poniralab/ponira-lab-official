"use client";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Labs from "@/app/components/Labs";
import Showcase from "@/app/components/Showcase";
import CrossLab from "@/app/components/CrossLab";
import Founders from "@/app/components/Founders";
import Footer from "@/app/components/Footer";
import Grainient from "../Grainient";
import SectionReveal from "./components/Sectionreveal";
import ViewportBlur from "./components/ViewportBlur";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>
      <ViewportBlur />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="labs">
          <SectionReveal>
            <Labs />
          </SectionReveal>
        </div>
        <div id="showcase">
          <SectionReveal exitAt={0.92}>
            <Showcase />
          </SectionReveal>
        </div>
        <div id="pacotes">
          <SectionReveal exitAt={0.92}>
            <CrossLab />
          </SectionReveal>
        </div>
        <div id="founders">
          <SectionReveal exitAt={0.88}>
            <Founders />
          </SectionReveal>
        </div>
        <div id="footer">
          <SectionReveal exitAt={0.88}>
            <Footer />
          </SectionReveal>
        </div>
      </div>
    </main>
  );
}
