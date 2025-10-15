// import React from 'react'
import { motion } from "framer-motion";
import { FaChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa6";

function Services() {
  return (
    <div className="bg-white py-[20%] lg:py-[5%] px-5">
      <div className="grid gap-[30px] md:grid-cols-4 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-5 bg-gradient-to-b from-[#3C467B] to-black text-black py-[10%] px-6 rounded-lg shadow-lg h-full flex flex-col justify-center"
        >
          <h1 className="text-white">SERVICES</h1>
          <p className="text-white/90 font-bold text-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            voluptates?
          </p>
        </motion.div>

        {[FaChessKnight, FaChessRook, FaChessBishop].map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.7,
              delay: index * 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="shadow-primaryColor shadow-lg py-[10%] hover:scale-105 transition-transform duration-300 flex flex-col gap-[10px] px-5 rounded-lg h-full"
          >
            <Icon className="text-primaryColor h-[80px] w-full" />
            <p className="text-[24px] font-extrabold text-center">
              Lorem ipsum
            </p>
            <p className="text-[16px] text-center leading-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              possimus ipsam, temporibus fugit voluptatibus officiis
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
