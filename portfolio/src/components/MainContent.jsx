import React from "react";

import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkilssContainer from "./SkilssContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main__content">
      <AboutContainer />
      <SkilssContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};
export default MainContent;
