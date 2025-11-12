"use client";
import {
  BookOutlined,
  CloseCircleOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  PropertySafetyOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import "./header.css"

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const openSideBar = () => {
    setNavOpen(true);
  };

  const closeSideBAr = () => {
    setNavOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-white h-[70px] md:h-20 px-[5%] lg:h-[90px]">
        <Image
          className="SotabLogo"
          src="/SotabLTD.PNG"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="md:hidden">
          {" "}
          <MenuUnfoldOutlined
            onClick={openSideBar}
            className=" text-black text-2xl flex justify-center items-center"
          />
        </div>

        {/* -=======Desktop Menu======== */}
        <ul className=" hidden text-black md:flex md:gap-6 ">
          <li className="flex items-center lg:text-[18px]">
            <a
              href=""
              className="hover:scale-110 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Home
            </a>
          </li>
          <li className="flex items-center lg:text-[18px]">
            <a
              href=""
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              About
            </a>
          </li>
          <li className="flex items-center lg:text-[18px]">
            <a
              href=""
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Property
            </a>
          </li>
          <li className="flex items-center lg:text-[18px]">
            <a
              href=""
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Services
            </a>
          </li>
          <li className="flex items-center lg:text-[18px]">
            <a
              href=""
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Gallery
            </a>
          </li>
        </ul>
        <div className="items-center gap-[15px] hidden md:flex">
          <FaInstagram />
          <RiTwitterXLine />
          <FaFacebook />
        </div>
      </div>


      {/* ====Mobile Menu==== */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="p-5 flex flex-col justify-between bg-black h-screen fixed top-0 left-0 w-full z-50"
        >
          <div>
            <div className="flex justify-between items-center px-[5%] py-[5%]">
              <a href="/">
                <img className="w-[120px]" src="/logo2.png" alt="logo" />
              </a>
              <CloseCircleOutlined
                onClick={closeSideBAr}
                className="text-white text-[35px]"
              />
            </div>

            <ul className="mt-[10%] text-white w-[90%] mx-auto flex flex-col gap-[40px]">
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[24px] gap-[10px]"
              >
                <HomeOutlined className="text-[#3C467B]" />
                <a href="#about">Home</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[24px] gap-[10px]"
              >
                <BookOutlined className="text-[#3C467B]" />
                <a href="#services">About</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[24px] gap-[10px]"
              >
                <PropertySafetyOutlined className="text-[#3C467B]" />
                <a href="#faq">Property</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[24px] gap-[10px]"
              >
                <MdOutlineMiscellaneousServices className="text-[#3C467B]" />
                <a href="#faq">Services</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[24px] gap-[10px]"
              >
                <GrGallery className="text-[#3C467B]" />
                <a href="#faq">Gallery</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[24px] gap-[10px]"
              >
                <PhoneOutlined className="text-[#3C467B]" />
                <a href="#faq">Contact</a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
