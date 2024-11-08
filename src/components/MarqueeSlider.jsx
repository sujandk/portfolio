import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiFramer } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const MarqueeSlider = () => {
  return (
    <div>
      <Marquee
        pauseOnHover={true}
        className="relative z-1 h-[64px] sm:h-[72px] lg:h-[90px]  text-black border-y border-black shadow-md slider xl:mt-[100px]"
        autoFill={true}
        speed={100}
        pause
      >
        <div className="flex gap-14 lg:gap-20 xl:gap-28 text-3xl md:text-[36px] lg:text-[42px] xl:text-5xl  justify-center items-center group mr-10 ">
          <span className="hidden md:block font-customDraper text-2xl border p-3 px-10 bg-red rounded-full border-black shadow-md bg-black text-white">
            Skills
          </span>
          <span className="">
            <FaHtml5 />
          </span>
          <span>
            <FaCss3Alt />
          </span>
          <span>
            <FaJs />
          </span>
          <span>
            <RiTailwindCssFill />
          </span>
          <span>
            <FaBootstrap />
          </span>
          <span>
            <FaSass />
          </span>
          <span>
            <DiNodejs />
          </span>
          <span>
            <RiNextjsFill />
          </span>
          <span>
            <FaPython />
          </span>
          <span>
            <SiMysql />
          </span>
          <span>
            <SiFramer className="mr-10" />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
