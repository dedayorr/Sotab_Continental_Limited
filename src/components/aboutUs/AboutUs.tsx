// import React from 'react'

import { Button } from "antd";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="px-5 text-white my-[15%] lg:px-[8%] lg:my-[8%]">
      {" "}
      <h1 className="text-[40px] font-bold md:text-[60px] lg:text-[40px]">
        ABOUT
        <hr className="border-[3px] border-primaryColor w-[25%] lg:w-[5%] mt-5" />
      </h1>
      
      <div>
        <div className="lg:flex lg:gap-[30px]">
          <div className="w-full lg:w-1/2">
            {" "}
            <p className="font-light text-justify text-[16px] md:text-[25px] lg:text-[20px] leading-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quos error voluptates soluta iste velit illum aliquam
              maiores at! Explicabo provident laudantium corrupti quasi
              assumenda temporibus iure, dolores repellendus neque?
            </p>
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.3, delay: 0.5 }}
              className="lg:hidden my-2"
              src="/About.jpg"
              alt=""
            />
            <p className="font-light text-justify text-[16px] md:text-[25px] lg:text-[20px] leading-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quos error voluptates soluta iste velit illum aliquam
              maiores at! Explicabo provident laudantium corrupti quasi
              assumenda temporibus iure, dolores repellendus neque?
            </p>
            <Button className="shadow-2xl border-[#3C467B] bg-transparent border-[2px] text-white py-5 rounded-lg font-medium text-base tracking-wide hover:bg-[#3C467B] hover:border-[#3C467B] transition-all duration-300 hover:scale-[1.02] md:text-[20px] md:py-8 lg:px-[5%] lg:py-6 lg:text-[16px]">
              Learn More
            </Button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="hidden lg:block w-full h-auto rounded-md object-cover"
              src="/About.jpg"
              alt="About us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
