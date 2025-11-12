"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiCoins, GiReceiveMoney } from "react-icons/gi";

function Service() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="grid grid-cols-2 gap-5 px-3 mt-[-15%] pb-[20%] md:mt-[-7%] md:gap-9 md:px-8 lg:grid-cols-4 lg:mt-[-4%] lg:px-[8%]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={card}
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
        className="z-50 bg-white h-45 p-5 flex flex-col justify-center items-center text-[#282b53dc] rounded-md gap-[15px]"
      >
        <GiReceiveMoney className="text-7xl" />
        <p className="md:text-2xl lg:text-xl">Buying services</p>
      </motion.div>

      <motion.div
        variants={card}
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
        className="z-50 bg-white h-45 p-5 flex flex-col justify-center items-center text-[#282b53dc] rounded-md gap-[15px]"
      >
        <BsCart4 className="text-7xl" />
        <p className="md:text-2xl lg:text-xl">Selling services</p>
      </motion.div>

      <motion.div
        variants={card}
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
        className="z-50 bg-white h-45 p-5 flex flex-col justify-center items-center text-[#282b53dc] rounded-md gap-[15px]"
      >
        <FaBuilding className="text-6xl" />
        <p className="text-center md:text-2xl lg:text-xl">
          Property management
        </p>
      </motion.div>

      <motion.div
        variants={card}
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
        className="z-50 bg-white h-45 p-5 flex flex-col justify-center items-center text-[#282b53dc] rounded-md gap-[15px]"
      >
        <GiCoins className="text-7xl" />
        <p className="text-center md:text-2xl lg:text-xl">
          Investment consulting
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Service;
