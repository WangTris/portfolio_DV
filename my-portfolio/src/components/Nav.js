import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsEnvelope } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";

// link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* Nav inner */}
        <div className="w-full bg-[#8E8E8F]/75 h-[86px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-white">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[20px] h-[50px] flex items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[20px] h-[50px] flex items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[20px] h-[50px] flex items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="certificate"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[20px] h-[50px] flex items-center"
          >
            <PiCertificate />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[20px] h-[50px] flex items-center"
          >
            <GoProject />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[20px] h-[50px] flex items-center"
          >
            <BsEnvelope />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
