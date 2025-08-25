import React from "react";
import { github } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";

const ProjectCard = ({
  name = "Untitled Project",
  description = "No description provided.",
  tags = [],
  image = "",
  source_code_link = "#",
}) => {
  return (
    <div
      className={`bg-gray-800 p-5 rounded-2xl w-full max-w-[360px] h-[500px] flex flex-col`}
      style={{ minWidth: 360, flex: "0 0 auto" }}
    >
      <div className="relative w-full h-[230px] flex-shrink-0">
        <img
          src={image || ""}
          alt={name + "_image"}
          className="w-full h-full object-cover rounded-2xl"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;charset=UTF-8,%3Csvg width='360' height='230' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='360' height='230' fill='%23222'/%3E%3Ctext x='50%' y='50%' fill='%23aaa' font-size='16' font-family='Arial' text-anchor='middle' dy='.3em'%3EImage not available%3C/text%3E%3C/svg%3E";
          }}
        />
        <div
          onClick={() => {
            if (source_code_link && source_code_link !== "#") {
              window.open(source_code_link, "_blank");
            }
          }}
          className="absolute top-3 right-3 bg-black bg-opacity-60 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
          aria-label="source code"
        >
          <img
            src={github}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>

      <div className="mt-5 flex-1 flex flex-col">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p
          className="mt-2 text-gray-300 text-[14px] flex-1 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {Array.isArray(tags) && tags.length > 0 ? (
          tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`
                inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium 
                border border-gray-600 hover:border-white transition-all duration-200
                hover:bg-white/10 cursor-pointer
                ${tag.color || "text-gray-400"}
              `}
            >
              #{tag.name}
            </p>
          ))
        ) : (
          <p className="text-[14px] text-gray-500">#no-tags</p>
        )}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div>
        <p className="text-sm text-gray-400">My work</p>
        <h2 className={`${styles.sectionHeadText} drop-shadow-[0_0_10px_#915EFF]`}>Projects.</h2>
      </div>

      <p className="mt-3 text-gray-300 max-w-3xl leading-[1.5]">
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className="mt-10 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {Array.isArray(projects) && projects.length > 0 ? (
    projects.map((project, index) => (  // ← Remove .slice(0, 9)
      <ProjectCard key={`project-${index}`} {...project} />
    ))
  ) : (
    <div className="w-full">
      <p className="text-white">No projects to display.</p>
    </div>
  )}
</div>
    </div>
  );
};

export default Works;