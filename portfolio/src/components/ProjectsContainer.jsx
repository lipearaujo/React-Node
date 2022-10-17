import React from "react";
import Projects from "../data/data";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";

import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [dot, setDot] = useState(1);

  const nextSlide = () => {
    if (sliderIndex !== Projects.length) {
      setSliderIndex(sliderIndex + 1);
      setDot(dot + 1);
    } else {
      if (sliderIndex === Projects.length) {
        setSliderIndex(1);
        setDot(1);
      }
    }
  };

  const prevSlide = () => {
    if (sliderIndex !== 1) {
      setSliderIndex(sliderIndex - 1);
      setDot(dot - 1);
    } else if (sliderIndex === 1) {
      setSliderIndex(Projects.length);
      setDot(Projects.length);
    }
  };

  return (
    <section className="projects__container">
      <h2>Projetos </h2>
      <div className="projects__data">
        <div onClick={prevSlide} className="slideBtn">
          <BsArrowLeftCircle />
        </div>

        {Projects.map((project, key) => (
          <>
            <div
              className={
                sliderIndex === key + 1
                  ? "projects__active"
                  : "projects__single"
              }
              key={key}
            >
              <h3>{project.title}</h3>
              <h4>{project.description}</h4>
              <a
                className="projects__link"
                href={project.url}
              >{`<source code />`}</a>
            </div>
          </>
        ))}

        <div onClick={nextSlide} className="slideBtn">
          <BsArrowRightCircle />
        </div>
      </div>

      <div className="dots">
        {Projects.map((project, key) => (
          <div className={dot === key + 1 ? "dots__active" : "dots__single"} key={key}></div>
        ))}
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
