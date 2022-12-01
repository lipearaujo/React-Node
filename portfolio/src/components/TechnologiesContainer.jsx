import React from "react";

import { TbBrandNextjs } from "react-icons/tb";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPhp,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", info: "", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", info: "", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", info: "", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", info: "", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", info: "", icon: <DiMysql /> },
  { id: "react", name: "React", info: "", icon: <DiReact /> },
  { id: "php", name: "PHP", info: "", icon: <DiPhp /> },
  { id: "nextjs", name: "NextJS", info: "", icon: <TbBrandNextjs /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies__container">
      <h2>Tecnologias</h2>
      <div className="technologies__grid">
        {technologies.map((tech) => (
          <div className="technology__card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology__info">
              <h3>{tech.name}</h3>
              <p>{tech.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
