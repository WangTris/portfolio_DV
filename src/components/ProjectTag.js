import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const selectedClass = isSelected
    ? "text-text border-text"
    : "text-accent border-accent";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${selectedClass} rounded-full border-2  px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
