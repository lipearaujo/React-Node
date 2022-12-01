import React from "react";

import { FaCloudDownloadAlt } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre Mim</h2>

      <div className={styles.about__container}>
        <p className={styles.about__container__text}>
          Meu nome é Filipe e sou estudante de Engenharia de Computação pela
          Universidade Federal da Grande Dourados - UFGD. Comecei a programar na
          faculdade e logo de cara fiquei fascinado com a infinidade de coisas
          que eram possiveis de se fazer utilizando linguagens de programação e
          de quão poderosas elas eram. Em 2020 surgiu o interese pela área de
          Desenvolvimento Web e desde então venho me aperfeiçoando nessa área e
          conhecendo novas tecnologias. Possuo grande disposição para o
          aprendizado e aplicação de conhecimentos e habilidades no âmbito
          profissional, buscando evolução e crescimento constantemente.
        </p>
      </div>

      <a href='../CurrículoMarcosFilipe.pdf' className={styles.about__container__btn}>
        <FaCloudDownloadAlt />
        <p>Download Currículo</p>
      </a>
    </div>
  );
};

export default About;
