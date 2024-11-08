import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import ExperinceList from "./ExperinceList";

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleYTransform = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const contentYTransform = useTransform(scrollYProgress, [0, 1], [50, -100]);

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex flex-col justify-center p-4 relative lg:px-16 w-full mobscreen"
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
    >
      <div className="relative container">
        <motion.div style={{ y: titleYTransform }} className="flex w-full">
          <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px] mt-10">
            Experience
          </h3>
        </motion.div>

        <motion.div style={{ y: contentYTransform }} className="relative">
          <ExperinceList />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
