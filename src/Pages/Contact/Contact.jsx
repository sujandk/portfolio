import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactList from "./ContactList";
import Footer from "../../components/Footer";
import { GoArrowRight } from "react-icons/go";

const Contact = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contactListY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contactData = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/sujandk",
      icon: <GoArrowRight />,
    },
    {
      id: 2,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sujan-dhakal10/",
      icon: <GoArrowRight />,
    },
    {
      id: 3,
      name: "Facebook",
      url: "https://www.facebook.com/sujan.dhakal.750",
      icon: <GoArrowRight />,
    },
    {
      id: 4,
      name: "Instagram",
      url: "https://www.instagram.com/sujan_iv/",
      icon: <GoArrowRight />,
    },
    {
      id: 5,
      name: "Email",
      url: "mailto:dhakalsu787@gmail.com",
      icon: <GoArrowRight />,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="w-full min-h-screen flex flex-col relative mobscreen"
    >
      <div className="flex-grow"> {/* Allow this div to grow and take available space */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: headingY }}
          className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[100px] p-4 lg:px-16 md:py-8 lg:py-16 container"
        >
          Contact
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: contactListY }}
          className="mt-4"
        >
          <ContactList contactData={contactData} />
        </motion.div>
      </div>
      <Footer /> {/* Footer stays below the content */}
    </motion.section>
  );
};

export default Contact;
