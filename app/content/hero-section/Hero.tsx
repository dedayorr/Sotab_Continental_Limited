"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ChevronDown } from "lucide-react";

export default function HeroCarousel() {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
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
      onClick={scrollToNextSection}
      className="text-white p-4 rounded-full mx-auto transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
      style={{ backgroundColor: "#771933" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#5a1326")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#771933")
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      aria-label="Scroll down"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </motion.button>
      </div>
    </div>
  );
}
