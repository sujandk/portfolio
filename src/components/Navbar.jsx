import { React, useState } from "react";
import { AnimatePresence, motion, useAnimation, useInView, useTransform } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Links } from "./Links";
import Logo from "../assets/logo.png";
import { FlipLink } from "./Links";
import { useEffect, useRef } from "react";

const navLinks = [
  { title: "About", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Experience", href: "/" },
  { title: "Contact", href: "/" },
];

const Navbar = ({scrollYProgress}) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const scale=useTransform(scrollYProgress,[0,1],[1,0.8])
  const rotate=useTransform(scrollYProgress,[0,1],[0,-5])

  const navControls = useAnimation();
  const headerControls = useAnimation();
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const isNavInView = useInView(navRef, { once: true });
  const isHeaderInView = useInView(headerRef, { once: true });

  useEffect(() => {
    if (isNavInView) {
      navControls.start("visible");
    }
    if (isHeaderInView) {
      headerControls.start("visible");
    }
  }, [isNavInView, isHeaderInView, navControls, headerControls]);

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <motion.header style={{scale,rotate}} id="navbar" className="sticky top-0 bg-neutral-900  h-screen w-full text-center p-4 lg:p-8 xl">
        <div className="container">
          <nav className="flex justify-between items-center py-8 lg:py-6 container m-auto w-full px-10">
            <div className="flex items-center text-white">
              <img src={Logo} alt="" className="w-20" />
            </div>

            <motion.div
              ref={navRef}
              initial="hidden"
              animate={navControls}
              variants={revealVariants}
              className="lg:flex hidden gap-12 text-white font-customNeue"
            >
              <Links />
            </motion.div>

            <div
              className="cursor-pointer lg:hidden text-md text-black"
              onClick={toggleMenu}
            >
              <CiMenuFries className="text-2xl xl:text-3xl text-white" />
            </div>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mobscreen fixed left-0 top-0 w-full h-screen origin-top text-black p-10"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-end">
                    <p
                      className="cursor-pointer text-md text-black font-customDraper"
                      onClick={toggleMenu}
                    >
                      <IoIosClose className="text-5xl" />
                    </p>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center items-center gap-10"
                  >
                    {navLinks.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="overflow-hidden font-customNeue text-[30px]"
                        >
                          <MobileNavLink
                            key={index}
                            title={link.title}
                            href={link.href}
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll Reveal for Header Text */}
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={revealVariants}
            className="header__text w-full h-[calc(100vh-164px)] flex justify-center items-center"
          >
            <h1 className="text-white leading-none text-[24px] sm:text-4xl md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[68px] md:leading-none w-full">
              <span className="text-[24px] sm:text-4xl md:text-[40px] lg:text-[36px] xl:text-[50px] 2xl:text-[60px]">
                Hello I'm Sujan
              </span>
              <br />
              <span className="2xl:text-[72px]">Code, Break, Repeat</span>
            </h1>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl uppercase text-black"
    >
      <FlipLink href={href}>{title}</FlipLink>
    </motion.div>
  );
};
