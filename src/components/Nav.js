import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsEnvelope } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
// import { PiCertificate } from "react-icons/pi";

// link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-4">
      <div className="container mx-auto">
        {/* Nav inner */}
        <div className="bg-accent/15 mx-auto flex h-[86px] w-full max-w-[460px] items-center justify-between rounded-full border-2 border-text px-5 text-text backdrop-blur-2xl">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="flex h-[50px] w-[50px] cursor-pointer items-center p-4"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[50px] w-[50px] cursor-pointer items-center p-4"
          >
            <BiUser />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[50px] w-[50px] cursor-pointer items-center p-4"
          >
            <BsBriefcase />
          </Link>
          {/* <Link
            to="certificate"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer p-4 w-[50px] h-[50px] flex items-center"
          >
            <PiCertificate />
          </Link> */}
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[50px] w-[50px] cursor-pointer items-center p-4"
          >
            <AiOutlineProject />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[50px] w-[50px] cursor-pointer items-center p-4"
          >
            <BsEnvelope />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
