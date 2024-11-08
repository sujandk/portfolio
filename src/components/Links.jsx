import React from "react";
import { motion } from "framer-motion";

export const Links = () => {
  return (
    <section className="flex gap-16">
      <FlipLink href="#about">About</FlipLink>
      <FlipLink href="#projects">Projects</FlipLink>
      <FlipLink href="#experience">Experience</FlipLink>
      <FlipLink href="#contact">Contact</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap lg:text-[20px] uppercase"
      style={{
        lineHeight: 1.5,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
