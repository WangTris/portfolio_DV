import React from "react";
// useState
import { useState } from "react";
// icons
import { PiDotOutlineBold } from "react-icons/pi";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// constants
import workData from "../constants.json";
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaSass,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";

const Work = () => {
  const [active, setActive] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="section flex flex-1 flex-col" id="work">
      {/* title */}
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-[3rem] lg:text-[4rem] mb-20 items-center font-primary font-bold uppercase text-text"
      >
        Experiences
      </motion.h2>
      <div className="container mx-auto">
        {/* desc */}
        <div className="flex flex-col lg:flex-row m-0">
          <div className="flex flex-col">
            {workData.experiences.map((item, index) => (
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                key={index}
                className={
                  index === active
                    ? "h-[3rem] w-auto lg:w-[16rem] flex justify-center items-center bg-accent text-primary font-bold rounded-lg cursor-pointer"
                    : "h-[3rem] w-auto lg:w-[16rem] flex justify-center items-center bg-primary text-accent font-bold rounded-lg cursor-pointer"
                }
                onClick={() => setActive(index)}
              >
                {item.company}
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col w-auto lg:w-[100vh] rounded-lg bg-accent/10"
          >
            <h1 className="relative leading-10 text-text font-tertiary font-bold text-[20px] ml-5">
              {workData.experiences[active].position}{" "}
              <a
                className="text-accent"
                href={workData.experiences[active].link}
                target="_blank"
                rel="noreferrer"
              >
                @ {workData.experiences[active].company}
              </a>
            </h1>
            <p className="font-secondary font-bold uppercase mb-2 ml-5 text-[20px]">
              {workData.experiences[active].duration}
            </p>
            {workData.experiences[active].decs.map((item, index) => (
              <p key={index} className="flex items-center py-1 text-[20px]">
                <span className="hidden sm:inline-block">
                  <PiDotOutlineBold />
                </span>
                {item}
              </p>
            ))}
          </motion.div>
        </div>
        {/* SKills */}
        <hr class="h-px my-8 bg-gray-400 border-0 "></hr>
        <Carousel
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
          itemClass="carousel-item-padding-40-px flex justify-center items-center"
          className="mx-auto text-text font-secondary font-semibold"
        >
          <div className="flex flex-col items-center">
            <FaReact className="text-[80px] mb-2" />
            <h3 className="text-3xl">React</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-[80px] mb-2" />
            <h3 className="text-3xl">NodeJS</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-[80px] mb-2" />
            <h3 className="text-3xl">HTML5</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaSass className="text-[80px] mb-2" />
            <h3 className="text-3xl">SASS</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaFigma className="text-[80px] mb-2" />
            <h3 className="text-3xl">Figma</h3>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-[80px] mb-2" />
            <h3 className="text-3xl">Javascript</h3>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-[80px] mb-2" />
            <h3 className="text-3xl">Tailwind</h3>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-[80px] mb-2" />
            <h3 className="text-3xl">MongoDB</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaJava className="text-[80px] mb-2" />
            <h3 className="text-3xl">Java</h3>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Work;
