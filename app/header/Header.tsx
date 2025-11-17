"use client";
import { CloseCircleOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBlog,
  FaCogs,
  FaInfoCircle,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./header.css";
import Link from "next/link";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSideBar = () => {
    setNavOpen(true);
  };

  const closeSideBAr = () => {
    setNavOpen(false);
  };
  return (
    <>
      <div
        className={`z-50 flex justify-between items-center bg-white h-[70px] md:h-20 px-[5%] lg:h-20 sticky top-0 transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <Link href="/">
          {" "}
          <Image
            className="SotabLogo"
            src="/SotabLTD.PNG"
            alt="Sotab logo"
            width={100}
            height={20}
            priority
          />
        </Link>
        <div className="md:hidden">
          {" "}
          <MenuUnfoldOutlined
            onClick={openSideBar}
            className=" text-black text-2xl flex justify-center items-center"
          />
        </div>

        {/* -=======Desktop Menu======== */}
        <ul className=" hidden text-black md:flex md:gap-6 lg:gap-9 lg:text-[16px]">
          <li className="flex items-center ">
            <Link
              href="/"
              className="hover:scale-110 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center ">
            <Link
              href="/pages/aboutUs"
              className="hover:scale-110 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              About
            </Link>
          </li>
          <li className="flex items-center ">
            <Link
              href="/pages/our-services"
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Services
            </Link>
          </li>
          <li className="flex items-center ">
            <Link
              href="/pages/why-us"
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Why Us
            </Link>
          </li>
          <li className="flex items-center ">
            <Link
              href="/pages/blog"
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Blog
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/pages/contact-us"
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Contact
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/pages/gallery"
              className="hover:scale-125 hover:text-[#3C467B] transition-transform duration-200 inline-block"
            >
              Gallery
            </Link>
          </li>
        </ul>
        <div className="items-center gap-5 hidden md:flex text-[25px] text-[#282b53]">
          <a
            href="https://www.instagram.com/sotab_continental_ltd?igsh=MWF5d3MwamYyN216ZQ=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sotab-realestate-limited-realestate-oil-and-gas-company-179931386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* <RiTwitterXLine />
          <FaFacebook /> */}
        </div>
      </div>

      {/* ====Mobile Menu==== */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="p-5 flex flex-col justify-between bg- bg-[#282b53] h-screen fixed top-0 left-0 w-full z-50"
        >
          <div>
            <div className="flex justify-between items-center px-[5%] py-[5%]">
              <Link href="/">
                {" "}
                <Image
                  onClick={closeSideBAr}
                  className=""
                  src="/menu_logo.JPG"
                  alt="Sotab logo"
                  width={120}
                  height={20}
                  priority
                />
              </Link>
              <div className="text-white">
                {" "}
                <CloseCircleOutlined
                  onClick={closeSideBAr}
                  className="text-[35px]"
                />
              </div>
            </div>

            <div className="mt-[10%] text-white w-[90%] mx-auto flex flex-col gap-10 text-xl">
              <Link
                href="/pages/aboutUs"
                className="flex items-center gap-[15px]"
              >
                <FaInfoCircle />
                <p className="" onClick={closeSideBAr}>
                  About
                </p>
              </Link>
              <Link
                href="/pages/our-services"
                className="flex items-center gap-[15px]"
              >
                <FaCogs />
                <p className="" onClick={closeSideBAr}>
                  Services
                </p>
              </Link>
              <Link
                href="/pages/why-us"
                className="flex items-center gap-[15px]"
              >
                <FaCircleQuestion />
                <p className="" onClick={closeSideBAr}>
                  Why Us
                </p>
              </Link>
              <Link href="/pages/blog" className="flex items-center gap-[15px]">
                <FaBlog />
                <p className="" onClick={closeSideBAr}>
                  Blog
                </p>
              </Link>
              <Link
                href="/pages/contact-us"
                className="flex items-center gap-[15px]"
              >
                <MdOutlineContactPhone />
                <p className="" onClick={closeSideBAr}>
                  Contact
                </p>
              </Link>
              <Link
                href="/pages/gallery"
                className="flex items-center gap-[15px]"
              >
                <MdOutlineContactPhone />
                <p className="" onClick={closeSideBAr}>
                  Gallery
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
