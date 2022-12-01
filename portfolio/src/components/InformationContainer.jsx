import React from "react";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="info__container">
      <div className="info__card">
        <AiFillPhone id="phone__icon" />
        <div>
          <h3>Telefone</h3>
          <p>(67)0000-0000</p>
        </div>
      </div>
      <div className="info__card">
        <AiOutlineMail id="email__icon" />
        <div>
          <h3>E-mail</h3>
          <p>filipecensi@hotmail.com</p>
        </div>
      </div>
      <div className="info__card">
        <AiFillEnvironment id="pin__icon" />
        <div>
          <h3>Localização</h3>
          <p>Dourados / MS</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
