"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Why() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black px-5 py-[10%] lg:py-[7%] flex flex-col gap-10 md:px-[5%] lg:px-[8%]"
    >
      <div className="flex flex-col items-center gap-10 md:flex-row-reverse lg:gap-[5%]">
        <motion.div
          variants={slideLeft}
          className="w-full lg:w-1/2 text-white flex flex-col gap-5"
        >
          <p className="font-bold text-[30px] text-[#f5f5f5]">WHY US</p>
          <hr className="border-[3px] border-[#282b53] w-[20%] lg:w-[10%] mt-2" />

          <p className="lg:text-[20px] leading-relaxed text-justify mt-5">
            We see enormous potential in Africa&apos;s real estate and energy
            sectors, and we&apos;re proud to be part of this exciting story of
            growth. For us, every project is a chance to create sustainable
            solutions, empower communities, and help shape a brighter future for
            generations to come.
          </p>

          <p className="lg:text-[20px] leading-relaxed text-justify">
            The future at Sotab Continental Ltd is bold and full of
            possibilities. As we expand our reach, explore new technologies, and
            invest in people, our goal remains the same: to build a company that
            reflects innovation, excellence, and heart.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={slideRight}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <Image
            src="/Hero_Three.jpeg"
            alt="sotabImage"
            width={1200}
            height={800}
            className="object-cover w-full h-[250px] md:h-[300px] lg:h-[400px] "
          />
        </motion.div>
      </div>

      <Link
        href="/pages/why-us"
        className="w-[60%] md:w-[40%] lg:w-[20%] mx-auto block"
      >
        <motion.button
          className="text-white px-8 py-4 rounded-lg text-lg w-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          style={{ backgroundColor: "#771933" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#5a1326")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#771933")
          }
        >
          Learn More...
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Why;
