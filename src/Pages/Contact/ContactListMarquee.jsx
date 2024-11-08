import React from "react";
import Marquee from "react-fast-marquee";

const ContactListMarquee = ({ name, url, icon }) => {
  return (
    <div className="flex border-y border-black p-5 bg-white  whitespace-nowrap">
      <Marquee
        autoFill
        speed={50} 
        gradient={false} 
      >
       <div className="flex gap-10 overflow-y-hidden ">
          <a href={url} target="_blank" className="">
            <h3 className="font-customNeue uppercase text-[16px] lg:text-[20px] xl:text-[28px]">{name}</h3>
          </a>
          <button className="mr-10 -rotate-45 duration-500 transition xl:text-2xl">{icon}</button>
        </div>
        
      </Marquee>
    </div>
  );
};

export default ContactListMarquee;
