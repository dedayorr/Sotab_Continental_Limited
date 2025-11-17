"use client";
import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Sparkles,
  Phone,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Ad {
  id: number;
  image: string;
  alt: string;
  link?: string;
}

const advertisements: Ad[] = [
  {
    id: 1,
    image: "/Sotab_Advert3.png",
    alt: "Sotab Estate - Now Selling Premium Land",
    link: "/pages/contact-us",
  },
  {
    id: 2,
    image: "/Sotab_Advert.png",
    alt: "Sotab Estate - Exclusive Property Deals",
    link: "/pages/contact-us",
  },
  {
    id: 3,
    image: "/Sotab_Advert2.png",
    alt: "Sotab Estate - Prime Location Investment",
    link: "/pages/contact-us",
  },
];

function FloatingAdvertSystem() {
  const [showModal, setShowModal] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  //   const [hasSeenPopup, setHasSeenPopup] = useState(false);
  const [isIconPulsing, setIsIconPulsing] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show popup on first visit after 3 seconds
  useEffect(() => {
    if (!isMounted) return;

    const hasVisited = localStorage.getItem("sotab_advert_seen");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("sotab_advert_seen", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  // Auto-advance slides every 5 seconds when modal is open
  useEffect(() => {
    if (showModal && advertisements.length > 1) {
      const interval = setInterval(() => {
        setCurrentAdIndex((prev) => (prev + 1) % advertisements.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [showModal]);

  const openModal = () => {
    setShowModal(true);
    setIsIconPulsing(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goToNext = () => {
    setCurrentAdIndex((prev) => (prev + 1) % advertisements.length);
  };

  const goToPrevious = () => {
    setCurrentAdIndex((prev) =>
      prev === 0 ? advertisements.length - 1 : prev - 1
    );
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Floating Icon Button */}
      <div className="fixed right-6 bottom-90 z-50">
        <button
          onClick={openModal}
          className={`group relative bg-linear-to-br from-[#1f3693] to-[#771933] text-white rounded-full p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 ${
            isIconPulsing ? "animate-bounce" : ""
          }`}
          aria-label="View Special Offers"
        >
          <Megaphone className="w-8 h-8" />

          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            {advertisements.length}
          </span>

          {isIconPulsing && (
            <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-yellow-300 animate-ping" />
          )}

          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
              NOW SELLING! 🎉
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform animate-slideUp">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-white/95 hover:bg-red-500 text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {advertisements.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-[#1f3693] text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-[#1f3693] text-gray-800 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="relative w-full aspect-4/3 md:aspect-video">
              <Image
                src={advertisements[currentAdIndex].image}
                alt={advertisements[currentAdIndex].alt}
                fill
                className="object-contain bg-linear-to-br from-gray-50 to-gray-100"
                priority
              />

              {/* <div className="absolute top-4 left-4 bg-linear-to-r from-[#771933] to-[#1f3693] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-pulse">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wide">
                  Limited Offer
                </span>
              </div> */}
            </div>

            <div className="bg-linear-to-r from-[#282b53] via-[#1f3693] to-[#771933] p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-white text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-1">
                    Sotab Estate - Premium Properties
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Secure your dream property today!
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <Link href="tel:07047155693">
                    <button className="bg-white hover:bg-gray-100 text-[#1f3693] px-5 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      07047155693
                    </button>
                  </Link>
                  <Link href="tel:08104542063">
                    <button className="bg-white hover:bg-gray-100 text-[#1f3693] px-5 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      08104542063
                    </button>
                  </Link>

                  {/* <Link
                    href={
                      advertisements[currentAdIndex].link || "/pages/contact-us"
                    }
                  >
                    <button className="bg-[#771933] hover:bg-[#5a1326] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Learn More
                    </button>
                  </Link> */}
                </div>
              </div>

              {advertisements.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {advertisements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAdIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentAdIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
}

export default FloatingAdvertSystem;
