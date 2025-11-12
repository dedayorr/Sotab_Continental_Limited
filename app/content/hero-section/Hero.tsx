"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR hydration mismatch

  const images = [
    "/Hero_One.jpeg",
    "/Hero_Two.jpeg",
    "/Hero_Three.jpeg",
    "/Hero_Four.jpeg",
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // effect="fade"
        loop
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Hero ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          Your Hero Title
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          Your compelling subtitle or description goes here
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors pointer-events-auto">
          Get Started
        </button>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
