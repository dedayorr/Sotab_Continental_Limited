// import React from 'react'
import { Button } from "antd";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineFilterCenterFocus } from "react-icons/md";
import { GiCrystalGrowth } from "react-icons/gi";
import { RiQuestionAnswerFill } from "react-icons/ri";

function WhyUs() {
  return (
    <div className="bg-white px-5 py-[15%] lg:px-[8%] lg:py-[6%]">
      {" "}
      <h1 className="text-[40px] font-bold md:text-[60px] lg:text-[40px]">
        WHY US?
        <hr className="border-[3px] border-primaryColor w-[25%] lg:w-[5%] mt-5" />
      </h1>
      <div className="grid lg:grid-cols-2 gap-[20px] my-[15%] lg:my-[4%]">
        <div className="flex gap-[5%]">
          <div className="p-2 flex items-center justify-center h-[40px] w-[120px] border-2 border-primaryColor rounded-full overflow-hidden">
            <RiTeamLine className="text-[50px] text-primaryColor leading-none" />
          </div>
          <div>
            <h2 className="text-[20px] font-bold lg:text-[25px]">
              Lorem, ipsum.
            </h2>
            <p className="font-light text-justify text-[14px] leading-5 md:text-[25px] lg:text-[20px] lg:leading-8 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quos error voluptates soluta iste velit illum aliquam
              maiores at! Explicabo provident laudantium corrupti quasi
              assumenda temporibus iure, dolores repellendus neque?
            </p>
          </div>
        </div>
        <div className="flex gap-[5%]">
          <div className="p-2 flex items-center justify-center h-[40px] w-[120px] border-2 border-primaryColor rounded-full overflow-hidden">
            <MdOutlineFilterCenterFocus className="text-[50px] text-primaryColor leading-none" />
          </div>
          <div>
            <h2 className="text-[20px] font-bold lg:text-[25px]">
              Lorem, ipsum.
            </h2>
            <p className="font-light text-justify text-[14px] md:text-[25px] lg:text-[20px] leading-5 lg:leading-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quos error voluptates soluta iste velit illum aliquam
              maiores at! Explicabo provident laudantium corrupti quasi
              assumenda temporibus iure, dolores repellendus neque?
            </p>
          </div>
        </div>
        <div className="flex gap-[5%]">
          <div className="p-2 flex items-center justify-center h-[40px] w-[120px] border-2 border-primaryColor rounded-full overflow-hidden">
            <GiCrystalGrowth className="text-[50px] text-primaryColor leading-none" />
          </div>
          <div>
            <h2 className="text-[20px] font-bold lg:text-[25px]">
              Lorem, ipsum.
            </h2>
            <p className="font-light text-justify text-[14px] md:text-[25px] lg:text-[20px] leading-5 lg:leading-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quos error voluptates soluta iste velit illum aliquam
              maiores at! Explicabo provident laudantium corrupti quasi
              assumenda temporibus iure, dolores repellendus neque?
            </p>
          </div>
        </div>
        <div className="flex gap-[5%]">
          <div className="p-2 flex items-center justify-center h-[40px] w-[120px] border-2 border-primaryColor rounded-full overflow-hidden">
            <RiQuestionAnswerFill className="text-[50px] text-primaryColor leading-none" />
          </div>
          <div>
            <h2 className="text-[20px] font-bold lg:text-[25px]">
              Lorem, ipsum.
            </h2>
            <p className="font-light text-justify text-[14px] md:text-[25px] lg:text-[20px] leading-5 lg:leading-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quos error voluptates soluta iste velit illum aliquam
              maiores at! Explicabo provident laudantium corrupti quasi
              assumenda temporibus iure, dolores repellendus neque?
            </p>
          </div>
        </div>
      </div>
      <Button className="flex mx-auto shadow-2xl border-[#3C467B] bg-transparent border-[2px] text-primaryColor py-5 rounded-lg font-medium text-base tracking-wide hover:bg-primaryColor hover:border-[#3C467B] transition-all duration-300 hover:scale-[1.02] md:text-[20px] md:py-8 lg:px-[5%] lg:py-6 lg:text-[16px]">
        Learn More
      </Button>
    </div>
  );
}

export default WhyUs;
