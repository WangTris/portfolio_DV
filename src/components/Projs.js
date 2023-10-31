import React, { useState } from "react";
// ProjectCard
import ProjectCard from "./ProjectCard";
// ProjectTag
import ProjectTag from "./ProjectTag";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "description",
    image: "../assets/projects/1.JPG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "description",
    image: "../assets/projects/1.JPG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "description",
    image: "../assets/projects/1.JPG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "description",
    image: "../assets/projects/1.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "description",
    image: "../assets/projects/1.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "description",
    image: "../assets/projects/1.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projs = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = (newTag) => {
    setSelectedTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(selectedTag);
  });

  return (
    <section className="flex flex-1 flex-col" id="projects">
      {/* title */}
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-[3rem] lg:text-[4rem] mt-8 text-center justify-between items-center font-primary font-bold uppercase text-text"
      >
        projects
      </motion.h2>
      <div className="text-text flex flex-row justify-center items-center gap-2 py-6">
        {/* Tag */}
        <ProjectTag
          onClick={handleTagClick}
          name="All"
          isSelected={selectedTag === "All"}
        />
        <ProjectTag
          onClick={handleTagClick}
          name="Web"
          isSelected={selectedTag === "Web"}
        />
      </div>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
        {/* projects */}
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projs;
