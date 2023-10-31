import React from "react";
//images
import home from "../assets/img/home.JPG";
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
      className="min-h-[85vh] lg:min-h-[80vh] flex items-center"
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
              className="text-text text-[3rem] font-bold leading-[1] lg:text-[5rem]"
            >
              TRAN QUANG <span>TRI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-text mr-4">I'm a</span>
              <TypeAnimation
                sequence={[
                  `Front-end Developer`,
                  2000,
                  `Back-end Developer`,
                  2000,
                  `Full-stack Developer`,
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
              className="mb-4 max-w-2xl mx-auto lg:mx-0 font-secondary text-[20px]"
            >
              Hello, and welcome to my online portfolio. My name is
              <b> Tran Quang Tri</b>.
              <br />
              I've created this platform to showcase my work and share my
              journey as I continue to grow and learn in my field of study.
              Please feel free to explore the various projects, and don't
              hesitate to reach out if you have any questions or if you'd like
              to collaborate on a project.
            </motion.p>
            {/* contact me */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max items-center mb-4 lg:mb-8 mx-auto lg:mx-0 text-text text-[20px] gap-x-6"
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
            className="hidden lg:flex flex-1 max-w-[350px]"
          >
            <img className="rounded-lg lg:h-[428px]" src={home} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
