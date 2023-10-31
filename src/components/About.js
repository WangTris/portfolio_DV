import React from "react";
//images
import dieuvan2 from "../assets/img/dieuvan2.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="section flex flex-1 flex-col" id="about">
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
      <div className="container mx-auto flex justify-center items-center flex-col ">
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
            className="flex-1 mb-8 max-w-2xl mx-auto lg:mx-0 font-secondary text-[20px]"
          >
            {/* text */}
            <h3 className="text-gradient text-[2rem] leading-[1] lg:text-[2rem]">
              There are no short cuts to any place worth going
            </h3>
            <p className="text-text mt-4">
              Greetings! I'm <b> Tran Quang Tri</b>, and I'm a final-year
              student at
              <b> International University (VNU-HCMC)</b> majoring in
              <b> Information Technology</b>. Here's a little glimpse into who I
              am:
              <ul>
                <li>
                  <b>- Aspirations:</b> My ultimate goal is to become a
                  proficient leader. I'm driven by the prospect of working on
                  both front-end and back-end technologies. Moreover, I also
                  have my sights set on higher education pursuing advanced
                  studies in the field of Information Technology.
                </li>
              </ul>
              <b>
                The journey is just as important as the destination, and I'm
                excited to see where it takes me.
              </b>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
