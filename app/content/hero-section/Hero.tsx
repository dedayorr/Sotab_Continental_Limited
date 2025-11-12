import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={`${styles.Hero} `}>
      <div className=" h-[660px] bg-black bg-opacity-40 py-[6%] text-white tracking-widest px-[5%] flex flex-col gap-5 md:py-0 lg:mt-0 lg:py-0 lg:gap-[25px]">
        <h1
          className={`pt-[25%] text-[37px] font-extrabold md:pt-[3%] md:text-[47px] lg:text-[70px] lg:w-[80%] lg:mx-auto lg:text-center lg:pt-[8%] `}
        >
          Refresh Your Life With{" "}
          <span className="text-[#823ec9]">Sparkling Clean</span> Solution In
          Your Space
        </h1>
        <p className="md:text-[24px] text-justify lg:text-center text-[#773bb8] bg-[#ffffffa0] p-[1%] lg:w-[80%] lg:mx-auto ">
          Crafting a spotless legacy in your home or office is not just our
          mission, it&apos;s our passion.
        </p>
        <button
          //   onClick={openModal}
          className="bg-[#823ec9] w-[60%] py-[4%] hover:bg-white hover:text-[#823ec9] md:text-[25px] md:w-[45%] lg:mx-auto lg:w-[25%] lg:py-[1%]"
        >
          Learn More...
        </button>
      </div>
    </div>
  );
}

export default Hero;
