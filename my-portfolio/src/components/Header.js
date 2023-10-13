import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-[#1D1D1F]">TRAN QUANG TRI</span>
          <button className="btn btn-sm">Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
