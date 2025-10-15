// import React from 'react'

import { motion } from "framer-motion";

function SectionTwo() {
  return (
    <div className="text-white py-[20%] font-sans px-5 lg:px-[8%] lg:py-[5%]">
    {/* Header Animation */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-[40px] font-bold md:text-[60px] lg:text-[40px]">
        OUR LATEST PROJECTS
        <hr className="border-[3px] border-primaryColor w-[25%] lg:w-[15%] mt-5" />
      </h1>
      
    </motion.div>
  
    {/* Grid Container */}
    <div className="mt-[15%] flex flex-col gap-[30px] lg:mt-[5%] lg:grid lg:grid-cols-2 lg:gap-[100px]">
      {/* Project Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[10px]"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="hover:shadow-lg hover:shadow-primaryColor h-[400px] w-full object-cover rounded-lg transition-shadow duration-300 cursor-pointer"
          src="/project2.jpg"
          alt=""
        />
        <div>
          <h2 className="text-[25px] md:text-[35px]">ELIT EIUSMOD TEMPOR</h2>
          <h3 className="md:text-[30px] lg:text-[24px]">
            IRURE DOLOR VOLUPATE
          </h3>
        </div>
        <p className="font-light text-justify text-[16px] md:text-[25px] lg:text-[20px] leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, quos error voluptates soluta iste velit illum aliquam
          maiores at! Explicabo provident laudantium corrupti quasi assumenda
          temporibus iure, dolores repellendus neque?
        </p>
      </motion.div>
  
      {/* Project Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[15px]"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="hover:shadow-lg hover:shadow-primaryColor h-[400px] w-full object-cover rounded-lg transition-shadow duration-300 cursor-pointer"
          src="/project1.jpg"
          alt=""
        />
        <div className="">
          <h2 className="text-[25px] md:text-[35px]">ELIT EIUSMOD TEMPOR</h2>
          <h3 className="md:text-[30px] lg:text-[24px]">
            IRURE DOLOR VOLUPATE
          </h3>
        </div>
        <p className="font-light text-justify text-[16px] md:text-[25px] lg:text-[20px] leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, quos error voluptates soluta iste velit illum aliquam
          maiores at! Explicabo provident laudantium corrupti quasi assumenda
          temporibus iure, dolores repellendus neque?
        </p>
      </motion.div>
  
      {/* Project Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[15px]"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="hover:shadow-lg hover:shadow-primaryColor h-[400px] w-full object-cover rounded-lg transition-shadow duration-300 cursor-pointer"
          src="/project3.jpg"
          alt=""
        />
        <div>
          <h2 className="text-[25px] md:text-[35px]">ELIT EIUSMOD TEMPOR</h2>
          <h3 className="md:text-[30px] lg:text-[24px]">
            IRURE DOLOR VOLUPATE
          </h3>
        </div>
        <p className="font-light text-justify text-[16px] md:text-[25px] lg:text-[20px] leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, quos error voluptates soluta iste velit illum aliquam
          maiores at! Explicabo provident laudantium corrupti quasi assumenda
          temporibus iure, dolores repellendus neque?
        </p>
      </motion.div>
  
      {/* Project Card 4 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[15px]"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="hover:shadow-lg hover:shadow-primaryColor h-[400px] w-full object-cover rounded-lg transition-shadow duration-300 cursor-pointer"
          src="/project4.jpg"
          alt=""
        />
        <div>
          <h2 className="text-[25px] md:text-[35px]">ELIT EIUSMOD TEMPOR</h2>
          <h3 className="md:text-[30px] lg:text-[24px]">
            IRURE DOLOR VOLUPATE
          </h3>
        </div>
        <p className="font-light text-justify text-[16px] md:text-[25px] lg:text-[20px] leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, quos error voluptates soluta iste velit illum aliquam
          maiores at! Explicabo provident laudantium corrupti quasi assumenda
          temporibus iure, dolores repellendus neque?
        </p>
      </motion.div>
    </div>
  </div>
  );
}

export default SectionTwo;
