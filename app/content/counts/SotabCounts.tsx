"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function SotabCounts() {
  const stats = [
    { value: 150, label: "Projects done" },
    { value: 10, label: "Years of Experience" },
    { value: 70, label: "Active Staff" },
    // { value: 1291, label: "# of Agents" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 my-[10%] lg:my-[5%] lg:gap-[10%]"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-[#282b53] text-[45px] font-bold">
            <CountUp
              end={stat.value}
              duration={3}
              separator=","
              suffix="+"
              enableScrollSpy
            />
          </h2>
          <p className="text-gray-500 text-[16px]">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SotabCounts;
