import React from "react";
import Axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useState, useEffect } from "react";

import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(1);

  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setProjectsList(response.data);
      //console.log(response.data)
    });
  });

  const nextSlide = () => {
    if (sliderIndex !== projectsList.length) {
      setSliderIndex(sliderIndex + 1);
    } else {
      if (sliderIndex === projectsList.length) {
        setSliderIndex(1);
      }
    }
  };

  const prevSlide = () => {
    if (sliderIndex !== 1) {
      setSliderIndex(sliderIndex - 1);
    } else if (sliderIndex === 1) {
      setSliderIndex(projectsList.length);
    }
  };

  return (
    <section className="projects__container">
      <h2>Projetos </h2>
      <div className="projects__data">
        <div onClick={prevSlide} className="slideBtn">
          <BsArrowLeftCircle />
        </div>

        {projectsList.map((project, key) => (
          <div
            className={
              sliderIndex === key + 1 ? "projects__single" : "project__active"
            }
            key={key}
          >
            <h3>{project._projectName}</h3>
            <a
              className="projects__link"
              href={project._projectURL}
            >{`<source code />`}</a>
          </div>
        ))}

        <div onClick={nextSlide} className="slideBtn">
          <BsArrowRightCircle />
        </div>
      </div>

      <div className="all__projects__link">
        <a
          href="https://github.com/lipearaujo?tab=repositories"
          className="btn"
        >
          Ver Todos os Projetos
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
