import React from "react";
import styles from "../styles/Home.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ black }) => {
  
  return (
    <header className={black ? styles.black : styles.header}>
      <div className={styles.header}>
        <Link to="hero" smooth={true} duration={500} activeClass={styles.active}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} >
          Sobre
        </Link>
        <Link to="skills" smooth={true} duration={500} >
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} >
          Projetos
        </Link>
        <Link to="contact" smooth={true} duration={500} >
          Contato
        </Link>
      </div>
    </header>
  );
};

export default Header;
