"use client";
import React from "react";
import { Home, Award, TrendingUp, Star } from "lucide-react";

function LastSection() {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #282b53 0%, #1f3693 50%, #282b53 100%)",
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

      <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find your dream property today!
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Exclusive listings. Premium locations. Expert guidance at every
              step.
            </p>

            <button
              className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: "#771933" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#5a1326")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#771933")
              }
            >
              Contact Us
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "#1f3693" }}
                  >
                    Featured Property
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: "#771933" }}
                  >
                    New
                  </span>
                </div>

                <h2
                  className="text-2xl md:text-3xl font-bold leading-tight"
                  style={{ color: "#282b53" }}
                >
                  Luxury waterfront estate in prime location
                </h2>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div
                    className="aspect-square rounded-lg shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #1f3693 0%, #282b53 100%)",
                    }}
                  ></div>
                  <div
                    className="aspect-square rounded-lg shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #771933 0%, #282b53 100%)",
                    }}
                  ></div>
                  <div
                    className="aspect-square rounded-lg shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #282b53 0%, #1f3693 100%)",
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" style={{ color: "#1f3693" }} />
                    <span className="text-sm text-gray-600">3,500 sq ft</span>
                  </div>
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#771933" }}
                  >
                    $2.5M
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#1f3693" }}
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Market Growth
                  </div>
                  <div
                    className="text-lg font-bold"
                    style={{ color: "#282b53" }}
                  >
                    +15% YoY
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "#771933" }}
                ></div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#282b53" }}
                  >
                    Expert Agent
                  </div>
                  <div className="text-xs text-gray-500">Ready to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20">
          <div className="flex items-center gap-4 text-white">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#771933" }}
            >
              <Home className="w-8 h-8" />
            </div>
            <div>
              <div className="font-bold text-sm">Verified</div>
              <div className="text-blue-200 text-sm">Listings</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#1f3693" }}
            >
              <Award className="w-8 h-8" />
            </div>
            <div>
              <div className="font-bold text-sm">Premium</div>
              <div className="text-blue-200 text-sm">Properties</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#282b53" }}
            >
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <div className="font-bold text-sm">Market</div>
              <div className="text-blue-200 text-sm">Leaders</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#771933" }}
            >
              <Star className="w-8 h-8" />
            </div>
            <div>
              <div className="font-bold text-sm">Top Rated</div>
              <div className="text-blue-200 text-sm">Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastSection;
