import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-text align-bottom font-primary font-semibold uppercasef text-[30px]">
            welcome to my portfolio
          </span>
          <button className="btn btn-sm">Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
