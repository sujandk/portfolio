import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from "react-icons/go";
import ProjectCard from "./ProjectCard";
import MarqueeSlider from "../../components/MarqueeSlider";
import { motion, useScroll, useTransform } from "framer-motion";
import Musica from "../../assets/musica.jpg";
import Toxic from "../../assets/toxic.jpg";
import Nepal from "../../assets/nepal.jpg";
import Signa from "../../assets/signalink.jpg";
import Cozy from "../../assets/Cozy-mart.png"
import Minesweeper from "../../assets/Minesweeper.jpeg"

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const carouselY = useTransform(scrollYProgress, [0, 1], [50, -120]);
  const marqueeY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1,
    },
  };

  const projectData = [

    {
      id:1,
      image:Cozy,
      name:"Cozy Mart",
    icon: <GoArrowRight />,
    url:"https://react-cozymart.netlify.app/"
  
    },

    {
      id: 2,
      image: Minesweeper,
      name: "Minesweeper",
      icon: <GoArrowRight />,
      url: "https://github.com/sujandk/MinesweeperAI",
    },

    {
      id: 3,
      image: Nepal,
      name: "Discover Nepal",
      icon: <GoArrowRight />,
      url: "https://sujandk.github.io/project_brutus",
    },

    {
      id: 5,
      image: Musica,
      name: "Musica App",
      icon: <GoArrowRight />,
      url: "https://musica-ams.vercel.app/",
    },
    {
      id: 4,
      image: Toxic,
      name: "Toxic Comment Classifier",
      icon: <GoArrowRight />,
      url: "https://github.com/Ronas1zz4/Comment-ClassificationModel",
    },
   
   
 
  ];

  const project = projectData.map((item) => (
    <ProjectCard
      key={item.id}
      name={item.name}
      image={item.image}
      icon={item.icon}
      url={item.url}
    />
  ));

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="carousel-button-group flex justify-between w-full lg:px-16 px-4 container">
        <button
          className={`text-[12px] md:text-[16px] lg:py-3 hover:bg-black hover:text-white duration-500 px-5 mt-8 font-customDraper border border-black ${
            currentSlide === 0 ? "disabled" : ""
          }`}
          onClick={() => previous()}
          disabled={currentSlide === 0}
        >
          Back
        </button>
        <button
          className="text-[12px] md:text-[16px] py-3 px-5 border border-black font-customDraper mt-8 hover:bg-black hover:text-white duration-500"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="relative w-full my-4 lg:my-0"
    >
      <div>
        <motion.h3
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px] p-4 lg:px-16 md:py-8 lg:py-16 container"
        >
          Projects
        </motion.h3>

        <motion.div style={{ y: carouselY }} className="lg:mt-4 mt-4">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={false}
            infinite={true}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            autoPlaySpeed={3000}
            draggable={false}
            centerMode={false}
            dotListClass=""
            className=""
            focusOnSelect={false}
            itemClass=""
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable= {true}
          >
            {project}
          </Carousel>
        </motion.div>

        {/* Added margin to separate MarqueeSlider from Carousel */}
        <motion.div style={{ y: marqueeY }} className="mt-16 lg:mt-20 mb-4">
          <MarqueeSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
