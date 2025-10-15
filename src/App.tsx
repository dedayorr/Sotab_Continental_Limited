import {
  BookOutlined,
  CloseCircleOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  PropertySafetyOutlined,
} from "@ant-design/icons";
import "./App.css";
import MyCarousel from "./components/carousel/MyCarousel";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import WhyUs from "./components/whyUs/WhyUs";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const openSideBar = () => {
    setNavOpen(true);
  };

  const closeSideBAr = () => {
    setNavOpen(false);
  };
  return (
    <>
      <div className="">
        <MyCarousel />
        <div className="flex justify-between items-center absolute top-0 px-[5%] py-[5%] lg:py-[3%]">
          <img
            className="w-[30%] md:w-[15%]"
            src="/sotab_logo.png"
            alt="logo"
          />
          <MenuUnfoldOutlined
            onClick={openSideBar}
            className="md:hidden text-black text-2xl py-[5%] bg-white rounded-full w-[12%] h-[40px] flex justify-center items-center"
          />
          <ul className="bg-white hidden text-black md:flex py-5 px-7 rounded-full gap-[65px]">
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
          <li className="hidden md:flex items-center text-[20px] gap-[5%] ">
            {/* <a href="#faq"> */}
            <PhoneOutlined className=" text-white text-[50px]" />
            {/* </a> */}
          </li>
        </div>
      </div>
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
           <li onClick={closeSideBAr} className="flex items-center text-[24px] gap-[10px]">
             <HomeOutlined className="text-[#3C467B]" />
             <a href="#about">Home</a>
           </li>
           <li onClick={closeSideBAr} className="flex items-center text-[24px] gap-[10px]">
             <BookOutlined className="text-[#3C467B]" />
             <a href="#services">About</a>
           </li>
           <li onClick={closeSideBAr} className="flex items-center text-[24px] gap-[10px]">
             <PropertySafetyOutlined className="text-[#3C467B]" />
             <a href="#faq">Property</a>
           </li>
           <li onClick={closeSideBAr} className="flex items-center text-[24px] gap-[10px]">
             <MdOutlineMiscellaneousServices className="text-[#3C467B]" />
             <a href="#faq">Services</a>
           </li>
           <li onClick={closeSideBAr} className="flex items-center text-[24px] gap-[10px]">
             <GrGallery className="text-[#3C467B]" />
             <a href="#faq">Gallery</a>
           </li>
           <li onClick={closeSideBAr} className="flex items-center text-[24px] gap-[10px]">
             <PhoneOutlined className="text-[#3C467B]" />
             <a href="#faq">Contact</a>
           </li>
         </ul>
       </div>
     </motion.div>
      )}
      <SectionOne />
      <AboutUs />
      <Services />
      <SectionTwo />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
