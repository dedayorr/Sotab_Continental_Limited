"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function HeroCarousel() {
  return (
    <div className={`${styles.Hero} relative`}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-[660px] text-white tracking-widest px-[5%] flex flex-col gap-9 lg:gap-[60px]">
        <motion.h1
          className="text-center text-[28px] pt-[25%] md:pt-[10%] md:text-[40px] lg:pt-[6%] lg:text-[45px] lg:w-[70%] lg:mx-auto lg:text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Partner with{" "}
          <span className="font-extrabold text-[#1f3693]">
            SOTAB CONTINENTAL LIMITED
          </span>{" "}
          your trusted real estate partner
        </motion.h1>

        <motion.p
          className="md:text-[24px] lg:text-center text-[#1f3693] bg-[#ffffff71] p-[2%] lg:text-[20px] lg:w-[60%] lg:mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Property development, management, and investment opportunities across
          the continent.
        </motion.p>

        <motion.button
          className="text-white px-8 py-4 rounded-lg text-lg w-[60%] md:w-[40%] lg:w-[20%] mx-auto font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
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
      </div>
    </div>
  );
}
