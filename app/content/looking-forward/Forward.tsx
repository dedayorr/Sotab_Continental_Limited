"use client";
import React from "react";
import "./forward.css";
import { motion } from "framer-motion";

function Forward() {
  return (
    <div className="forward relative">
      {" "}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 text-white tracking-widest px-[5%] flex flex-col gap-9 lg:gap-[60px]">
        <motion.h1
          className="text-center text-[16px] pt-[15%] md:pt-[10%] md:text-[40px] lg:pt-[5%] lg:text-[30px] lg:w-[70%] lg:mx-auto lg:text-center leading-10 lg:leading-14"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          The future at Sotab Continental Ltd is bold and full of possibilities.
          As we expand our reach, explore new technologies, and invest in
          people, our goal remains the same: to build a company that reflects
          innovation, excellence, and heart.
        </motion.h1>
      </div>
    </div>
  );
}

export default Forward;
