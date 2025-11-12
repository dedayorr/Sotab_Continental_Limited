import Image from "next/image";
import Hero from "./content/hero-section/Hero";

export default function Home() {
  return (
    <main className="text-white">
      {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
      <Hero />
    </main>
  );
}
