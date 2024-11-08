import React from "react";
import { motion, useTransform } from "framer-motion";
import Pictureone from "../assets/pic-1.png";
import Picturetwo from "../assets/pic-2.png";
import { FlipLink } from "../components/Links";
import { GoArrowDown } from "react-icons/go";

const About = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.3 },
    }),
  };

  return (
    <motion.section
      style={{ scale, rotate }}
      id="about"
      className="relative mobscreen about about__container p-4 lg:px-16 md:py-8 lg:py-16"
    >
      <div className="container m-auto h-fit">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animation will play once when in view
          className="about__heading flex justify-between"
        >
          <motion.h3
            variants={fadeInUpVariants}
            custom={0.4}
            className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px]"
          >
            About Me
          </motion.h3>
          <button>
            <a
              href="src/assets/Resume_SUJAN DHAKAL.pdf"
              download="Resume_SUJAN DHAKAL.pdf"
              className="flex items-center gap-4 border-b border-black text-[18px] lg:text-[24px]"
            >
              <FlipLink className="text-lowercase">Resume</FlipLink>
              <GoArrowDown />
            </a>
          </button>
        </motion.div>

        <div className="about__grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-4 sm:mt-6 md:mt-10 lg:mt-16">
          <div className="flex flex-col md:flex-row md:border-y md:border-black">
            <motion.div
              className="md:w-6/12 lg:w-5/12 w-full flex justify-center items-center lg:py-8"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
            >
              <img
                src={Pictureone}
                alt="Sujan Dhakal"
                className="w-full object-cover h-full md:h-[260px] md:w-10/12"
              />
            </motion.div>
            <motion.div
              className="md:w-6/12 lg:w-7/12 md:flex md:justify-center md:items-center md:border-l border-black"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
            >
              <p className="text-[16px] sm:text-[20px] lg:text-[24px] md:p-10 w-full mt-4 md:mt-0">
                Hi there! I'm Sujan Dhakal, your not-so-average front-end
                developer. I have a “strong interest” in making websites look good
                and function—most of the time.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row md:border-y md:border-black">
            <motion.div
              className="md:w-6/12 lg:w-5/12 w-full flex justify-center items-center lg:py-8 md:order-2 md:border-l md:border-black"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
            >
              <img
                src={Picturetwo}
                alt="Sujan Dhakal"
                className="w-full h-full md:h-[260px] md:w-10/12 object-cover"
              />
            </motion.div>
            <motion.div
              className="md:w-6/12 lg:w-7/12 md:flex md:justify-center md:items-center"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={5}
            >
              <p className="text-[16px] sm:text-[20px] lg:text-[24px] md:p-10 w-full mt-4 md:mt-0">
                You’ll find my collection of work that showcases my knowledge and
                knack for creating digital experiences that might just work on
                the first try.
                <br />
                Enjoy your stay.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
