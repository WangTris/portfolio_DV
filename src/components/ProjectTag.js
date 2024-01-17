import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const selectedClass = isSelected
    ? "text-text border-text"
    : "text-accent border-accent";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${selectedClass} cursor-pointer rounded-full  border-2 px-6 py-3 text-xl`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
