import React from "react";
// icons
import { TbMapPin2 } from "react-icons/tb";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="section flex flex-1 flex-col" id="contact">
      {/* projects */}
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[100%] lg:w-[50%] flex flex-col"
          >
            <h4 className="text-2xl font-primary uppercase text-accent font-medium mb-2 tracking-wide">
              Contact
            </h4>
            <h2 className="text-[30px] lg:text-[50px] text-text font-secondary font-bold leading-none mb-12">
              Don't be shy! Hit me up!
            </h2>
            {/* Contact icon */}
            <div className="flex flex-row items-center gap-6 mb-4">
              <span className="w-12 h-12 bg-accent/20 flex justify-center items-center rounded-full">
                <AiOutlineMail className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold font-tertiary">Mail</h3>
                <a href="mailto:tranquangtri2002@gmail.com">
                  tranquangtri2002@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6 mb-4">
              <span className="w-12 h-12 bg-accent/20 flex justify-center items-center rounded-full">
                <AiOutlinePhone className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold font-tertiary">Phone</h3>
                <a href="tel:+84839682239">(+84) 83 968 2239</a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6 mb-4">
              <span className="w-12 h-12 bg-accent/20 flex justify-center items-center rounded-full">
                <TbMapPin2 className="w-8 h-8" />
              </span>
              <div>
                <h3 className="font-semibold font-tertiary">Location</h3>
                <a
                  href="https://maps.app.goo.gl/KLUASFQuDcpPLi4t8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ho Chi Minh City, Vietnam
                </a>
              </div>
            </div>
            <div className="flex text-text text-[2rem] mt-4 gap-x-8 max-w-max mx-auto lg:mx-0 text-center lg:text-left">
              <span className="w-12 h-12 flex justify-center items-center">
                <a href="https://github.com/WangTris" target="blank">
                  <FaGithub />
                </a>
              </span>
              <span className="w-12 h-12 flex justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/quang-tr%C3%AD-tr%E1%BA%A7n-21740020a/"
                  target="blank"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="w-12 h-12 flex justify-center items-center">
                <a
                  href="https://www.facebook.com/tranquangtri0412"
                  target="blank"
                >
                  <FaFacebook />
                </a>
              </span>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            action=""
            className="w-[100%] lg:w-[50%] flex-1 border border-text rounded-2xl flex flex-col pb-[4.5rem] p-6 items-start"
          >
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b py-4 outline-none w-full placeholder:text-text focus:border-text transition-all"
            />
            <input
              type="text"
              placeholder="Your email"
              className="bg-transparent border-b py-4 outline-none w-full placeholder:text-text focus:border-text transition-all"
            />
            <textarea
              placeholder="Your message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-text focus:border-text transition-all resize-none mb-12"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
