import React from "react";
import { FcCheckmark } from "react-icons/fc";
import "../styles/components/skillscontainer.sass";

const SkilssContainer = () => {
  return (
    <section className="skills__container">
      <h2>Competências</h2>
      <div className="skills">
        <p>
          <i className="i-skills">
            <FcCheckmark />
          </i>
          Responsabilidade e autonomia para realização de trabalho remoto
        </p>
        <p>
          <i className="i-skills">
            <FcCheckmark />
          </i>
          Bom relacionamento interpessoal para trabalho em equipe
        </p>
        <p>
          <i className="i-skills">
            <FcCheckmark />
          </i>
          Capacidade de planejamento e organização para o cumprimento de prazos
        </p>
        <p>
          <i className="i-skills">
            <FcCheckmark />
          </i>
          Disposição para o aprendizado e aprimoramento contínuos
        </p>
      </div>
    </section>
  );
};

export default SkilssContainer;
