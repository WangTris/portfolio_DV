import React from "react";
//images
import dieuvan2 from "../assets/dieuvan2.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto flex justify-center items-center flex-col ">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[3rem] lg:text-[4rem] mb-20 items-center font-primary font-bold uppercase"
        >
          About <span className="text-accent">me</span>
        </motion.h2>
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden relative w-[20rem] h-[20rem] lg:flex justify-center items-center rounded-full"
          >
            <img src={dieuvan2} alt="" className="w-[90%] rounded-full" />
            <span className="absolute w-full h-full rounded-full border-t-4 border-b-4 border-accent animate-spin-slow"></span>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 mb-8 max-w-2xl mx-auto lg:mx-0 text-center font-secondary text-[20px]"
          >
            {/* text */}
            <h3 className="text-gradient text-[2rem] leading-[1] lg:text-[3rem]">
              Luv U To The Moon And Back
            </h3>
            <p className="text-text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              autem deleniti voluptatibus praesentium quam et! Autem nemo
              temporibus totam maiores rem dolorem ipsum id pariatur dolor
              placeat soluta odio quae distinctio deserunt esse, nobis
              repudiandae, corporis laborum animi ut non?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
