// import React from 'react'

import Marquee from "react-fast-marquee";

function SectionOne() {
  return (
    <Marquee className="bg-white py-8">
    <div className="flex items-center gap-[80px] md:gap-[100px] lg:gap-[150px]">
      <img
        className="h-[80px] w-auto object-contain md:h-[100px] lg:h-[120px]"
        src="/sotab_logo.png"
        alt="logo"
      />
      <img
        className="h-[80px] w-auto object-contain md:h-[100px] lg:h-[120px]"
        src="/sotab_logo.png"
        alt="logo"
      />
      <img
        className="h-[80px] w-auto object-contain md:h-[100px] lg:h-[120px]"
        src="/sotab_logo.png"
        alt="logo"
      />
      <img
        className="h-[80px] w-auto object-contain md:h-[100px] lg:h-[120px]"
        src="/sotab_logo.png"
        alt="logo"
      />
      <img
        className="h-[80px] w-auto object-contain md:h-[100px] lg:h-[120px]"
        src="/sotab_logo.png"
        alt="logo"
      />
    </div>
  </Marquee>
  );
}

export default SectionOne;
