"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Content management system",
    description: "콘텐츠를 만든 사람들과 회사가 쓴 시스템",
    image: "/images/projects/cms.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 2,
  //   title: "Potography Portfolio Website",
  //   description: "Project 2 description",
  //   image: "/images/projects/2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 3,
  //   title: "E-commerce Application",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 4,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 6,
    title: "TV Shop",
    description: "사람들은 텔레비전에서 물건, 음식 등 구입한다.",
    image: "/images/projects/goodprice.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "TV Karaoke",
    description: "이용자들이 텔레비전을 보고 노래를 부른다.",
    image: "/images/projects/karaoke.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Package and Payment",
    description:
      "이용자들이 이번 달 사용을 볼 수 있다. 부가 서비스을 쓸 수 있다",
    image: "/images/projects/pay.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Weather",
    description: "현제 날씨, 다음 5일 날씨",
    image: "/images/projects/weather.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Horoscope",
    description: "Horoscope",
    image: "/images/projects/horoscope.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
