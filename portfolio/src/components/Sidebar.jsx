import React from "react";
import Socials from "./Socials";
import InformationContainer from "./InformationContainer";
import AcademicContainer from "./AcademicContainer";

import { FaCloudDownloadAlt } from "react-icons/fa";
import Avatar from "../img/perfil-image.jpg";
import curriculo from "../documents/Currículo_Marcos_Filipe.pdf";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Filipe Araujo" />
      <p className="sidebar__title">Desenvolvedor</p>
      <Socials />
      <InformationContainer />
      <AcademicContainer />
      <a href={curriculo} className="sidebar__button__cv">
        <FaCloudDownloadAlt />
        <p>Download Currículo</p>
      </a>
    </aside>
  );
};

export default Sidebar;
