import React, { useRef, useState } from "react";
// icons
import { TbMapPin2 } from "react-icons/tb";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// email
import emailjs from "@emailjs/browser";
// sweetalert2
import SweetAlert2 from "react-sweetalert2";

const Contact = () => {
  // SweetAlert2
  const [swalProps, setSwalProps] = useState({});

  // Send email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y52n5sd",
        "template_2g2y6i6",
        form.current,
        "tOaOobCfLPs96OjAz",
      )
      .then(
        (result) => {
          console.log("Send email successfully!");
          setSwalProps({
            show: true,
            title: "Success!",
            text: "Thank you for your message!",
          });
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section className="section flex flex-1 flex-col" id="contact">
      {/* projects */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex w-[100%] flex-col lg:w-[50%]"
          >
            <h4 className="mb-2 font-primary text-2xl font-medium uppercase tracking-wide text-accent">
              Contact
            </h4>
            <h2 className="mb-12 font-secondary text-[30px] font-bold leading-none text-text lg:text-[50px]">
              Don't be shy! Hit me up!
            </h2>
            {/* Contact icon */}
            <div className="mb-4 flex flex-row items-center gap-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <AiOutlineMail className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-tertiary font-semibold">Mail</h3>
                <a href="mailto:tranquangtri2002@gmail.com">
                  tranquangtri2002@gmail.com
                </a>
              </div>
            </div>
            <div className="mb-4 flex flex-row items-center gap-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <AiOutlinePhone className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-tertiary font-semibold">Phone</h3>
                <a href="tel:+84839682239">(+84) 83 968 2239</a>
              </div>
            </div>
            <div className="mb-4 flex flex-row items-center gap-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <TbMapPin2 className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-tertiary font-semibold">Location</h3>
                <a
                  href="https://maps.app.goo.gl/KLUASFQuDcpPLi4t8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ho Chi Minh City, Vietnam
                </a>
              </div>
            </div>
            <div className="mx-auto mt-4 flex max-w-max gap-x-8 text-center text-[2rem] text-text lg:mx-0 lg:text-left">
              <span className="flex h-12 w-12 items-center justify-center">
                <a href="https://github.com/WangTris" target="blank">
                  <FaGithub />
                </a>
              </span>
              <span className="flex h-12 w-12 items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/quang-tr%C3%AD-tr%E1%BA%A7n-21740020a/"
                  target="blank"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="flex h-12 w-12 items-center justify-center">
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
            ref={form}
            onSubmit={sendEmail}
            className="flex w-[100%] flex-1 flex-col items-start rounded-2xl border border-text p-6 pb-[4.5rem] lg:w-[50%]"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              className="w-full border-b bg-transparent py-4 outline-none transition-all placeholder:text-text focus:border-text"
              required
            />
            <input
              type="email"
              name="email_id"
              placeholder="Your email"
              className="w-full border-b bg-transparent py-4 outline-none transition-all placeholder:text-text focus:border-text"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="mb-12 w-full resize-none border-b bg-transparent py-12 outline-none transition-all placeholder:text-text focus:border-text"
              required
            ></textarea>
            <button className="btn btn-lg" type="submit" value="Send">
              Send message
            </button>
            <SweetAlert2 {...swalProps} />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
