import { useState } from "react";
import ContactListMarquee from "./ContactListMarquee";

const ContactList = ({ contactData }) => {
  const [hoveredId, setHoveredId] = useState(null); 

  return (
    <div className="w-full relative ">
      <div className="border-t border-black">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="border-b border-black p-5 flex items-center justify-between relative " 
            onMouseEnter={() => setHoveredId(item.id)} 
            onMouseLeave={() => setHoveredId(null)} 
          >
            <div className=" flex items-center justify-between gap-8 container lg:px-16 ">
              <h3 className="font-customNeue uppercase text-[16px] lg:text-[20px] xl:text-[28px] ">{item.name}</h3>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <button className="transition-transform duration-500 xl:text-2xl">
                  {item.icon}
                </button>
              </a>
            </div>
            <div
              className={`absolute left-0 right-0 transition-all duration-1000 ease-in-out overflow-hidden ${hoveredId === item.id ? 'opacity-100 max-h-[100px]' : 'opacity-0 max-h-0'}`} 
            >
              <ContactListMarquee
                name={item.name}
                url={item.url}
                icon={item.icon}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
