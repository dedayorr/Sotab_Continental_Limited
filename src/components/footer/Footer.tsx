// import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-primaryColor text-white px-[5%] py-[5%] lg:px-[8%] lg:py-[2%]">
      <div className="flex flex-col gap-[15px] lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:flex-1 lg:max-w-[33%]">
          <img
            className="w-[40%] md:w-[30%] my-5"
            src="/sotab_logo.png"
            alt="logo"
          />
          <p className="text-[14px] opacity-80 tracking-[1px] text-justify font-sans font-light lg:font-extralight md:text-[18px] lg:text-[16px] leading-5 lg:leading-9">
            Discover your dream property with confidence. SOTAB connects you to
            premium homes, apartments, and investments designed to fit your
            lifestyle and budget.
          </p>
        </div>

        <div className=" lg:pt-[3%] flex flex-col gap-[15px]">
          <p className="font-bold mb-2 lg:text-[20px]">Contact Us</p>
          <div className="flex gap-[5px] ">
            <MdLocalPhone />
            <p className="font-light">Phone : +234 910 324 9394</p>
          </div>
          <div className="flex gap-[5px] ">
            <IoMailSharp />
            <p className="font-light">Mail : example@yahoo.com</p>
          </div>
          <div className="flex gap-[5px]">
            <FaLocationDot />
            <p className="font-light">Address : xxx, suite xx, xxxx, Nigeria</p>
          </div>
        </div>

        <div className="lg:flex-1 lg:max-w-[33%] text-[14px] lg:pt-[3%]">
          <hr className="md:hidden mb-3 " />
          © 2024 Sotab Continental Limited.
          All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
