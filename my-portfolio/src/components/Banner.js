import React from "react";
// images
// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiZalo, SiGmail } from "react-icons/si";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        {/* text */}
        <div>
          <h1 className="text-text">
            TRAN QUANG <span>TRI</span>
          </h1>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-text mr-4">I'm a </span>
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
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            laudantium veniam reprehenderit molestiae numquam architecto sed
            beatae blanditiis cupiditate odit.
          </p>
          {/* contact me */}
          <div>
            <button to="contact" className="btn btn-lg">
              Contact me
            </button>
          </div>
          {/* socials */}
          <div>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
        {/* image */}
        <div>image</div>
      </div>
    </section>
  );
};

export default Banner;
