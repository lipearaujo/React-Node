import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Avatar from "../../public/images/perfil.png";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Olá, eu sou Filipe Araujo!", "Desenvolvedor Full-Stack."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={styles.hero}>
      <div className={styles.hero__avatar}>
        <Image
          className={styles.hero__img__avatar}
          src={Avatar}
          alt="Filipe Araujo"
          width={400}
          height={400}
          layout="responsive"
        />
      </div>

      <div className={styles.hero__text}>
        <h2>Engenheiro de Computação</h2>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#fff" />
        </h1>
        <div className={styles.hero__socials}>
          <a
            id={styles.linkedin}
            className={styles.hero__socials__btn}
            href="https://www.linkedin.com/in/marcos-filipe-censi-de-araujo-337486136/"
          >
            <FaLinkedinIn />
          </a>
          <a
            id={styles.github}
            className={styles.hero__socials__btn}
            href="https://github.com/lipearaujo"
          >
            <FaGithub />
          </a>
          <a
            id={styles.instagram}
            className={styles.hero__socials__btn}
            href="https://www.instagram.com/lipecensi/"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
