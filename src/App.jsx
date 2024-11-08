import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { Links } from "./components/Links";
import Projects from "./Pages/Project/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact/Contact";
import Lenis from "lenis";
import Experience from "./Pages/Experience/Experience";
import { useScroll } from "framer-motion";
import AnimatedCursor from "react-animated-cursor"

const App = () => {


const containers = useRef();
const {scrollYProgress}=useScroll({
  target:containers,
  offset:["start start","end end"]
})

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);


  

  return (
    <>
      <div ref={containers} className="relative h-[190vh]  gap-0">
      <AnimatedCursor 
      innerSize={8}
      outerSize={14}
      color='128,128,120'
      outerAlpha={0.8}
      innerScale={.5}
      outerScale={5}
      hasBlendMode
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}/>
        <Navbar scrollYProgress={scrollYProgress}/>
        <About scrollYProgress={scrollYProgress}/>
        <Projects/>
<Experience/>
<Contact/>  
      </div>
    </>
  );
};

export default App;
