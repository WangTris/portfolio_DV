import React from "react";
//images
import home from "../assets/img/dieuvan.jpg";
//import dieuvan from "../assets/dieuvan.jpg";
// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// link
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="flex min-h-[85vh] items-center lg:min-h-[80vh]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[3rem] font-bold uppercase leading-[1] text-text lg:text-[5rem]"
            >
              nguyen dieu <span className="text-accent">van</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[60px]"
            >
              <span className="mr-4 text-text">She's a</span>
              <TypeAnimation
                sequence={[
                  `Youtuber`,
                  2000,
                  `Content Creator`,
                  2000,
                  `Influencer`,
                  2000,
                ]}
                wrapper="span"
                className="text-accent"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-4 max-w-2xl font-secondary text-[20px] lg:mx-0"
            >
              Hello, and welcome. My name is
              <b> Tran Quang Tri</b>.
              <br />
              I've created this platform to showcase my work and share my
              journey as I continue to grow and learn in my field of study -
              Information Technology.
              <br />
              Moreover, I want to express my love to her - Nguyen Dieu Van. She
              is my light in the darkest day and my motivation to keep moving
              forward.
            </motion.p>
            {/* contact me */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-4 flex max-w-max items-center gap-x-6 text-[20px] text-text lg:mx-0 lg:mb-8"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button to="contact" className="btn btn-lg">
                  Contact me
                </button>
              </Link>
              {/* socials */}
              <a href="https://github.com/WangTris" target="blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/quang-tr%C3%AD-tr%E1%BA%A7n-21740020a/"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/tranquangtri0412"
                target="blank"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden max-w-[350px] flex-1 lg:flex"
          >
            <img className="rounded-lg lg:h-[428px]" src={home} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
