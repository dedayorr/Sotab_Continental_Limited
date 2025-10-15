// import React from "react";

import { Carousel } from "antd";
import "./MyCarousel.css";
import { useState } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

function MyCarousel() {
  const images = [
    "/realestate1.png",
    "/realestate2.png",
    "/realestate3.png",
    "/realestate4.jpg",
    "/realestate5.jpg",
    "/realestate6.jpg",
    "/realestate7.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Carousel
      effect="fade"
      autoplay
      autoplaySpeed={5000}
      speed={500}
      beforeChange={(_, next) => setActiveIndex(next)}
      dots={false}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="carousel-slide relative h-[500px] w-full overflow-hidden"
        >
          <img
            key={`${src}-${activeIndex === index}`}
            src={src}
            alt={`Slide ${index + 1}`}
            className="carousel-image absolute inset-0 h-full w-full object-cover animate-zoom-in"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute flex flex-col items-center justify-center text-white text-center gap-[30px] lg:gap-[10px] ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-[#0009] self-start mt-[30%] shape lg:mt-[13%]"
            >
              <p className="m-0 p-5 lg:p-10 leading-none text-[30px] font-bold font-sans md:text-[45px] lg:text-[45px]">
                Welcome to <span className="text-[#3C467B]">SOTAB</span>{" "}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
              className=" self-end bg-[#0009] w-[80%] px-[5%] pt-[6%] pb-[3%] shape_two md:pt-[8%] md:pb-[4%] lg:pt-[2%] lg:pb-[1%] lg:w-[60%] lg:px-[6%]"
            >
              <p className="text-[12px] opacity-80 tracking-[1px] text-justify font-sans font-light lg:font-extralight md:text-[18px] lg:text-[16px] leading-5 lg:leading-9">
                Discover your dream property with confidence.{" "}
                <span className="text-[#3C467B]">SOTAB</span> connects you to
                premium homes, apartments, and investments designed to fit your
                lifestyle and budget. Whether you're a first-time buyer,
                seasoned investor, or looking to upgrade, we provide verified
                listings, expert guidance, and seamless transactions that turn
                your property dreams into reality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.4 }}
              className="flex flex-col gap-[20px] w-[70%] lg:w-[60%] lg:flex-row lg:justify-center lg:items-center lg:my-5"
            >
              <Button className=" shadow-[0_10px_30px_rgba(0,0,0,0.1),0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_0_80px_rgba(60,70,123,1)] bg-[#3C467B] border-0 text-white py-5 rounded-lg font-medium text-base tracking-wide hover:bg-[#2d3560] transition-all duration-300 hover:scale-[1.02] lg:px-[13%] lg:py-6 md:text-[20px] md:py-8 lg:text-[16px]">
                Get Started
              </Button>
              <Button className="shadow-2xl border-[#3C467B] bg-transparent border-[2px] text-white py-5 rounded-lg font-medium text-base tracking-wide hover:bg-[#3C467B] hover:border-[#3C467B] transition-all duration-300 hover:scale-[1.02] md:text-[20px] md:py-8 lg:px-[13%] lg:py-6 lg:text-[16px]">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
