import React from "react";

const Header = () => {
  const onButtonClick = () => {
    const pdfUrl = "/resume/resume.pdf";
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
        <div className="flex items-center justify-between">
          <span className="uppercasef align-bottom font-primary text-[30px] font-semibold text-text">
            welcome to my website
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
