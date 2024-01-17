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
        className="mb-14 items-center font-primary text-[3rem] font-bold uppercase lg:text-[4rem]"
      >
        Cloudies <span className="text-accent">Story</span>
      </motion.h2>
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative hidden h-[20rem] w-[20rem] items-center justify-center rounded-full lg:flex"
          >
            <img src={dieuvan2} alt="" className="w-[90%] rounded-full" />
            <span className="absolute h-full w-full animate-spin-slow rounded-full border-b-4 border-t-4 border-accent"></span>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mx-auto mb-8 max-w-2xl flex-1 font-secondary text-[20px] lg:mx-0"
          >
            {/* text */}
            <h3 className="text-gradient text-[2rem] leading-[1] lg:text-[2rem]">
              There are no short cuts to any place worth going
            </h3>
            <p className="mt-4 text-text">
              "Hey Vân, I've been with you since those first days of your
              channel. It was your little tips and your approach to learning
              IELTS that sparked my own drive to reach my desired IELTS score.
              Can you believe it's already been two years? Your videos have
              always been a beacon of inspiration for me, especially as I
              started navigating university life (we're the same age, though I'm
              studying here in Vietnam). I get it, you're going through a big
              transition and feeling a bit lost right now. But you know what? I
              see you like a blank canvas, or a map yet to be drawn. It's a bit
              daunting, sure. Feeling lost is part of the journey 😯. But think
              of it this way - with a blank canvas, you've got the freedom to
              create any path you choose. It's all up to you. Everything's wide
              open, and the possibilities are limitless. Isn't that just
              amazing? Believe in yourself, Vân, and embrace life with all
              you've got 😊.{" "}
              <span className="block">
                Thanks for taking a moment to read this. You mean a lot to me."
              </span>
              <p className="text-right font-bold text-text">
                20th February 2023 at 23:21
              </p>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
