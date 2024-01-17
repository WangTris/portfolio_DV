import React from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="group relative h-52 rounded-t-xl md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-text bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          {/* Code Bracket Icon */}
          <a
            href={gitUrl}
            className="group/link relative mr-12 h-14 w-14 rounded-full border-2 border-accent hover:border-white"
          >
            <svg
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-center text-accent group-hover/link:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </a>
          {/* Eye Icon */}
          <a
            href={previewUrl}
            className="group/link relative h-14 w-14 rounded-full border-2 border-accent hover:border-white"
          >
            <svg
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-center text-accent group-hover/link:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="bg-textpy-6 mt-3 rounded-b-xl px-4 text-text">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-accent">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
