"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Lightbulb, ShieldCheck, Star, HeartHandshake } from "lucide-react";
const slideIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Dedication() {
  const dedicationItems = [
    {
      icon: <Lightbulb className="text-[#1f3693] w-12 h-12" />,
      title: "Innovation",
      text: "We embrace bold ideas and forward-thinking solutions.",
    },
    {
      icon: <ShieldCheck className="text-[#1f3693] w-12 h-12" />,
      title: "Integrity",
      text: "We believe in transparency, trust, and doing the right thing.",
    },
    {
      icon: <Star className="text-[#1f3693] w-12 h-12" />,
      title: "Excellence",
      text: "Every project we deliver meets the highest standards.",
    },
    {
      icon: <HeartHandshake className="text-[#1f3693] w-12 h-12" />,
      title: "Community Impact",
      text: "We measure success by the opportunities we create and the lives we touch.",
    },
  ];
  return (
    <motion.div
      variants={slideIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-5 py-[20%] text-[#282b53] lg:px-[8%] lg:py-[5%]"
    >
      <p className="font-bold text-[30px] text-[#282b53]">OUR DEDICATION</p>
      <hr className="border-[3px] border-[#282b53] w-[40%] lg:w-[10%] mt-2" />
      <p className="my-9 text-center font-semibold lg:text-xl">
        At Sotab, we&apos;re driven by a core set of values that shape every
        decision
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[5%]">
        {dedicationItems.map((item, index) => (
          <motion.div
            key={index}
            variants={slideIn}
            className="flex flex-col items-start bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-[#555]">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Dedication;
