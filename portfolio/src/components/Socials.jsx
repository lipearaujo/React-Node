import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socials.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/marcos-filipe-censi-de-araujo-337486136/'},
  { name: "github", icon: <FaGithub />, href: 'https://github.com/lipearaujo' },
  { name: "instagram", icon: <FaInstagram />, href: 'https://www.instagram.com/lipecensi/' },
];

const Socials = () => {
  return (
    <section id="socials">
      {socialNetworks.map((social) => (
        <a href={social.href} className="social__btn" id={social.name} key={social.name}>
          {social.icon}
        </a>
      ))}
    </section>
  );
};

export default Socials;
