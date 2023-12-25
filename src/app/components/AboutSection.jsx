"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>Sequelize</li>
        <li>NextJS</li>
        <li>Java</li>
        <li>Springboot /JPA/</li>
        <li>Android</li>
        <li>MySQL, OracleDB, MongoDB, PostgreSQL</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Bio",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          2014 - 2018 - Completed the Bachelor`s Program in the Graduate School
          of Software at Mongolian University of Science and Technology
        </li>
        <li>
          2023 - 중앙대학교 한국어 교육원에서 한국어를 배우고 있다. /Topik 3/
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/me.jpg" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">자기 소개</h2>
          <p className="text-base lg:text-lg">
            나는 `빌렉바타르`이다. 96년에 태어났다. 2014년 `Mongolian University
            of Science and Technolog`에 입학하고 컴퓨터 과학을 전공했다.
            2018년에 졸업했다. 그다음에 `Unitel LLC`에 취칙하고 5년간 다니었다.
            그 동안 안드로이드 TV 애플리케이션, 웹사이트 프론트엔드, 백엔드에서
            경험했다. 취직하려고 한국에 2023년 3개월에 왔다. 그리고 취직하기
            위해서 한국어를 배우고 있다.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
