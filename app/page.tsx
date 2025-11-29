import Image from "next/image";
import Hero from "./content/hero-section/Hero";
import Service from "./content/service-section/Service";
import About from "./content/about-section/About";
import SotabCounts from "./content/counts/SotabCounts";
import Why from "./content/why-Us/Why";
import Dedication from "./content/dedication/Dedication";
import Forward from "./content/looking-forward/Forward";
import LastSection from "./content/last-section/LastSection";
import FloatingAdvertSystem from "./content/floatingAdvertSystem/FloatingAdvert";

export default function Home() {
  return (
    <main className="text-white ">
      <Hero />
      <Service />
      <About />
      <SotabCounts />
      <Why />
      <LastSection />
      <Dedication />
      <Forward />
    </main>
  );
}
