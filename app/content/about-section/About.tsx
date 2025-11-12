"use client";
import React from "react";
import Image from "next/image";
import "./about.css";
import { motion, Variants } from "framer-motion";

function About() {
  const slideIn: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={slideIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="text-[#282b53] px-5 text-justify flex flex-col gap-10 md:px-8 lg:px-[8%] lg:mb-[5%]"
    >
      <motion.div
        variants={slideIn}
        className="flex flex-col gap-5 items-center justify-center md:flex-row-reverse lg:gap-[8%]"
      >
        <div className="w-full lg:w-1/2 ">
          {" "}
          <Image
            className="object-cover jpeg_two h-[250px] md:h-[300px] lg:h-[400px] lg:w-full"
            src="/Hero_Two.jpeg"
            alt="sotabImage"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:text-[20px] lg:gap-8 lg:leading-10">
          <p className="">
            At Sotab Continental Ltd, we believe business is more than
            transactions. It&apos;s about building communities, creating
            opportunities, and shaping a better future.
          </p>
          <p>
            Founded with a passion for progress, Sotab has grown into a trusted
            name in real estate and energy solutions across Nigeria and Africa.
            Our mission is simple: to transform ideas into meaningful projects
            that improve lives, fuel growth, and inspire change.
          </p>
        </div>
      </motion.div>

      <motion.button
        variants={slideIn}
        className="bg-[#771933] w-[50%] py-[4%] text-white hover:bg-white hover:text-[#1f3693] md:text-[25px] md:py-[2%] md:w-[35%] lg:mx-auto lg:w-[20%] lg:text-[20px] lg:py-[1%] lg:hover:border"
      >
        Learn More...
      </motion.button>
    </motion.div>
  );
}

export default About;
