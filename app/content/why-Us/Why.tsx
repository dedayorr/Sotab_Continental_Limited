"use client"
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const slideIn: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Why() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black px-5 py-[15%] flex flex-col items-center gap-10 md:flex-row-reverse md:px-[5%] lg:px-[8%] lg:py-[7%]"
    >
      <motion.div
        variants={slideIn}
        className="flex flex-col gap-5 text-white md:w-1/2"
      >
        <p className="font-bold text-[30px] text-[#f5f5f5]">WHY US</p>
        <hr className="border-[3px] border-[#282b53] w-[20%] lg:w-[10%] mt-2" />

        <p className="lg:text-[20px] lg:leading-10 text-justify mt-5">
          We see enormous potential in Africa&apos;s real estate and energy
          sectors, and we&apos;re proud to be part of this exciting story of
          growth. For us, every project is a chance to create sustainable
          solutions, empower communities, and help shape a brighter future for
          generations to come.
        </p>

        <p className="lg:text-[20px] lg:leading-10 text-justify">
          The future at Sotab Continental Ltd is bold and full of possibilities.
          As we expand our reach, explore new technologies, and invest in
          people, our goal remains the same: to build a company that reflects
          innovation, excellence, and heart.
        </p>
      </motion.div>

      <motion.div
        variants={slideIn}
        className="md:w-1/2 flex justify-center items-center"
      >
        <Image
          className="object-cover h-[250px] md:h-[300px] lg:h-[400px] lg:w-full "
          src="/Hero_Three.jpeg"
          alt="sotabImage"
          width={500}
          height={500}
        />
      </motion.div>
    </motion.div>
  );
}

export default Why;
