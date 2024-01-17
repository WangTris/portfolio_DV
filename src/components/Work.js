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
        className="mb-20 items-center font-primary text-[3rem] font-bold uppercase text-text lg:text-[4rem]"
      >
        Experiences
      </motion.h2>
      <div className="container mx-auto">
        {/* desc */}
        <div className="m-0 flex flex-col lg:flex-row">
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
                    ? "flex h-[3rem] w-auto cursor-pointer items-center justify-center rounded-lg bg-accent font-bold text-primary lg:w-[16rem]"
                    : "flex h-[3rem] w-auto cursor-pointer items-center justify-center rounded-lg bg-primary font-bold text-accent lg:w-[16rem]"
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
            className="flex w-auto flex-col rounded-lg bg-accent/10 lg:w-[100vh]"
          >
            <h1 className="relative ml-5 font-tertiary text-[20px] font-bold leading-10 text-text">
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
            <p className="mb-2 ml-5 font-secondary text-[20px] font-bold uppercase">
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
        <hr className="my-8 h-px border-0 bg-gray-400 "></hr>
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
          className="mx-auto font-secondary font-semibold text-text"
        >
          <div className="flex flex-col items-center">
            <FaReact className="mb-2 text-[80px]" />
            <h3 className="text-3xl">React</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="mb-2 text-[80px]" />
            <h3 className="text-3xl">NodeJS</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="mb-2 text-[80px]" />
            <h3 className="text-3xl">HTML5</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaSass className="mb-2 text-[80px]" />
            <h3 className="text-3xl">SASS</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaFigma className="mb-2 text-[80px]" />
            <h3 className="text-3xl">Figma</h3>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="mb-2 text-[80px]" />
            <h3 className="text-3xl">Javascript</h3>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="mb-2 text-[80px]" />
            <h3 className="text-3xl">Tailwind</h3>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="mb-2 text-[80px]" />
            <h3 className="text-3xl">MongoDB</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaJava className="mb-2 text-[80px]" />
            <h3 className="text-3xl">Java</h3>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Work;
