import React from "react";
import Skill from "./Skill";
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
import styles from "../styles/Home.module.css";

const Skills = () => {
  const technologies = [
    {
      id: "html",
      name: "HTML5",
      info: "HTML",
      icon: <DiHtml5 />,
      proficiency: "50%",
    },
    {
      id: "css",
      name: "CSS3",
      info: "CSS",
      icon: <DiCss3 />,
      proficiency: "50%",
    },
    {
      id: "js",
      name: "JavaScript",
      info: "Javascript",
      icon: <DiJsBadge />,
      proficiency: "50%",
    },
    {
      id: "node",
      name: "Node.js",
      info: "NodeJS",
      icon: <DiNodejsSmall />,
      proficiency: "50%",
    },
    {
      id: "mysql",
      name: "MySQL",
      info: "MySQL",
      icon: <DiMysql />,
      proficiency: "50%",
    },
    {
      id: "react",
      name: "React",
      info: "ReactJS",
      icon: <DiReact />,
      proficiency: "50%",
    },
    {
      id: "php",
      name: "PHP",
      info: "PHP",
      icon: <DiPhp />,
      proficiency: "50%",
    },
    {
      id: "nextjs",
      name: "NextJS",
      info: "NextJS",
      icon: <TbBrandNextjs />,
      proficiency: "50%",
    },
  ];

  return (
    <div className={styles.skills}>
      <h2>Tecnologias</h2>
      <h3>Passe o mouse sobre uma tecnologia para a proficiência atual</h3>
      <div className={styles.skills__container}>
        <div className={styles.skills__techs}>
          {technologies.map((tecnology) => (
            <Skill
              proficiency={tecnology.proficiency}
              icon={tecnology.icon}
              name={tecnology.name}
              key={tecnology.name}
              id={tecnology.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
