import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import "../styles/components/informationcontainer.sass";

const AcademicContainer = () => {
  return (
    <section id="info__container">
      <div className="info__card">
        <HiAcademicCap id="academic__icon"/> 
        <div>
          <h3>Formação Acadêmica</h3>
          <p>Bacharelando Universidade Federal da Grande Dourados - UFGD</p>
        </div>
      </div>
    </section>
  );
};

export default AcademicContainer;
