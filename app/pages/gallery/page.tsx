"use client";
import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Camera,
  Video,
  Grid3x3,
  MapPin,
  Home,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    type: "image",
    src: "/hero_eleven.jpeg",
    alt: "Aerial masterplan view",
    category: "Masterplan",
    location: "Full Estate View",
  },
  {
    type: "image",
    src: "/hero_twelve.jpeg",
    alt: "Professional soccer pitch",
    category: "Amenities",
    location: "Sports Complex",
  },
  {
    type: "image",
    src: "/hero_13.jpeg",
    alt: "FIFA-standard football field",
    category: "Amenities",
    location: "Football Arena",
  },
  {
    type: "image",
    src: "/Hero_Nine.jpeg",
    alt: "Multi-sport basketball court",
    category: "Amenities",
    location: "Basketball Court",
  },
  {
    type: "image",
    src: "/Hero_Ten.jpeg",
    alt: "Grand estate entrance",
    category: "Entrance",
    location: "Main Gate",
  },
  {
    type: "image",
    src: "/Hero_One.jpeg",
    alt: "Luxury entrance detail",
    category: "Entrance",
    location: "Security Gate",
  },
  {
    type: "image",
    src: "/Hero_Two.jpeg",
    alt: "Estate entrance architecture",
    category: "Entrance",
    location: "Welcome Center",
  },
  {
    type: "image",
    src: "/Hero_Eight.jpeg",
    alt: "Contemporary 5-bedroom duplex",
    category: "Residences",
    location: "Villa Section A",
  },
  {
    type: "image",
    src: "/Hero_Six.jpeg",
    alt: "Modern luxury duplex exterior",
    category: "Residences",
    location: "Villa Section B",
  },
  {
    type: "image",
    src: "/Hero_Five.jpeg",
    alt: "Premium duplex architecture",
    category: "Residences",
    location: "Villa Section C",
  },
  //   { type: "image", src: "/api/placeholder/1920/1080", alt: "Tree-lined boulevard", category: "Infrastructure", location: "Main Boulevard" },
  {
    type: "image",
    src: "/Hero_Four.jpeg",
    alt: "Complete estate overview",
    category: "Masterplan",
    location: "Development Layout",
  },
  {
    type: "image",
    src: "/hero_14.jpeg",
    alt: "Premium sports facilities",
    category: "Amenities",
    location: "Recreation Area",
  },
  //   { type: "image", src: "/api/placeholder/1920/1080", alt: "Exclusive corner residence", category: "Residences", location: "Premium Plot" },
];

const categories = [
  "All",
  "Masterplan",
  "Residences",
  "Amenities",
  "Entrance",
  "Infrastructure",
];

function Galleries() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const filteredItems = galleryItems.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Header with Gradient */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #282b53 0%, #1f3693 50%, #771933 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-8 h-8 text-white" />
                <span className="text-white/80 uppercase tracking-wider text-sm font-semibold">
                  Visual Experience
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Explore Sotab Estate
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                Immerse yourself in the luxury and sophistication of Nigeria's premier residential development. 
                Every image tells a story of excellence.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <Grid3x3 className="w-5 h-5 text-white" />
                  <div className="text-white">
                    <div className="text-2xl font-bold">{galleryItems.length}</div>
                    <div className="text-sm text-blue-100">Photos & Videos</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <Home className="w-5 h-5 text-white" />
                  <div className="text-white">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-blue-100">Premium Units</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <MapPin className="w-5 h-5 text-white" />
                  <div className="text-white">
                    <div className="text-2xl font-bold">Prime</div>
                    <div className="text-sm text-blue-100">Location</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-all duration-500">
                <video
                  className="w-full h-full object-cover aspect-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/Sotab_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold" style={{ color: "#282b53" }}>
                    Live Preview
                  </span>
                </div>
              </div>

              {/* Floating Accent Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#771933" }}
                  >
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      HD Quality
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "#282b53" }}
                    >
                      4K Video
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#1f3693" }}
                  >
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Virtual Tour
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "#282b53" }}
                    >
                      360° View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? "text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={
                  filter === category
                    ? {
                        background:
                          "linear-gradient(135deg, #1f3693 0%, #771933 100%)",
                      }
                    : {}
                }
              >
                {category}
                {category === "All" && ` (${galleryItems.length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <Camera
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: "#1f3693" }}
            />
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#282b53" }}
            >
              No items found
            </h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden">
                  {/* <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  /> */}
                  <Image
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div
                    className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(119, 25, 51, 0.9)" }}
                  >
                    {item.category}
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <Maximize2
                      className="w-5 h-5"
                      style={{ color: "#1f3693" }}
                    />
                  </div>

                  {/* Video Play Icon */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/95 rounded-full p-5 group-hover:scale-110 transition-all duration-300 shadow-xl">
                        <Play
                          className="w-10 h-10"
                          style={{ color: "#771933" }}
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 group-hover:text-[#1f3693] transition-colors duration-300"
                    style={{ color: "#282b53" }}
                  >
                    {item.alt}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, #1f3693 0%, #771933 100%)",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div
        className="py-16 px-6 md:px-12"
        style={{
          background: "linear-gradient(135deg, #282b53 0%, #1f3693 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">5-Star</div>
            <div className="text-blue-100">Luxury Living</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Security</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
            <div className="text-blue-100">Premium Quality</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">World</div>
            <div className="text-blue-100">Class Amenities</div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 text-white hover:text-gray-300 transition-all z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 hover:scale-110"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div className="max-w-7xl max-h-[85vh] w-full px-20">
            <img
              src={filteredItems[currentIndex].src}
              alt={filteredItems[currentIndex].alt}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-6 text-white hover:text-gray-300 transition-all z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 hover:scale-110"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Info Panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="inline-block px-4 py-1 rounded-full text-sm font-bold text-white mb-3"
                    style={{ backgroundColor: "#771933" }}
                  >
                    {filteredItems[currentIndex].category}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {filteredItems[currentIndex].alt}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">
                      {filteredItems[currentIndex].location}
                    </span>
                  </div>
                </div>
                <div className="text-right text-white">
                  <div className="text-lg font-semibold text-gray-400">
                    {currentIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galleries;
