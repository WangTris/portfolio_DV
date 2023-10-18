import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Projs = () => {
  return (
    <section className="section flex flex-1 flex-col" id="projects">
      {/* title */}
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-[3rem] lg:text-[4rem] mb-20 items-center font-primary font-bold uppercase text-text"
      >
        projects
      </motion.h2>
      {/* projects */}
      <div className="container mx-auto"></div>
    </section>
  );
};

export default Projs;
