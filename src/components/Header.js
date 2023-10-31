import React from "react";

const Header = () => {
  const onButtonClick = () => {
    const pdfUrl = "../assets/resume/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume_TranQuangTri.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-text align-bottom font-primary font-semibold uppercasef text-[30px]">
            welcome to my portfolio
          </span>
          <button onClick={onButtonClick} className="btn btn-sm">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
