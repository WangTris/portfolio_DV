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

const Work = () => {
  const [active, setActive] = useState(0);
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
        <div className="flex flex-col lg:flex-row">
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
      </div>
    </section>
  );
};

export default Work;
