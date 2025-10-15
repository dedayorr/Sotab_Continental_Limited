// import React from 'react'

import Marquee from "react-fast-marquee";

function SectionOne() {
  return (
    <Marquee className="bg-white">
      <div className="flex  text-white font-extrabold font-sans py-5 gap-[5%] md:gap-[1%] lg:gap-[20%]">
        {" "}
        <img
          className="w-[100%] h-[70px] md:w-[45%] md:h-[100px] lg:h-[120px]"
          src="/sotab_logo.png"
          alt="logo"
        />
        <img
          className="w-[100%] h-[70px] md:w-[45%] md:h-[100px] lg:h-[120px]"
          src="/sotab_logo.png"
          alt="logo"
        />
        <img
          className="w-[100%] h-[70px] md:w-[45%] md:h-[100px] lg:h-[120px] hidden md:block"
          src="/sotab_logo.png"
          alt="logo"
        />
      </div>
    </Marquee>
  );
}

export default SectionOne;
