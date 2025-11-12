import Image from "next/image";
import Hero from "./content/hero-section/Hero";
import Service from "./content/service-section/Service";
import About from "./content/about-section/About";
import SotabCounts from "./content/counts/SotabCounts";
import Why from "./content/why-Us/Why";

export default function Home() {
  return (
    <main className="text-white ">
      <Hero />
      <Service/>
      <About/>
      <SotabCounts/>
      <Why/>
    </main>
  );
}
