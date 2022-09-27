import React from "react";
import pdf from "../pdfs/Currículo Marcos Filipe.pdf";
import "./About.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import {FcCheckmark} from "react-icons/fc"

const About = () => {
    return (
        <div className="about">
            <div className="cards">
                <div className="card-single">
                    <details open>
                        <summary>Sobre mim</summary>
                        <div className="perfil-text">
                            <p>Olá, me chamo Filipe e sou estudante de Engenharia de Computação pela Universidade Federal da Grande Dourados - UFGD.</p>
                            <p>Tenho interesse pela área de Desenvolvimento Web e possuo grande disposição para o aprendizado e a aplicação de conhecimentos e habilidades interpessoais no âmbito profissional, buscando crescimento constante.</p>
                            <p>No momento estou estudando sobre ReactJS e NodeJS.</p>
                        </div>
                    </details>
                </div>

                <div className="card-single">
                    <details>
                        <summary>Competências</summary>
                        <div className="skills">
                            <span><i className="i-skills"><FcCheckmark /></i>Responsabilidade e autonomia para realização de trabalho remoto</span>
                            <span><i className="i-skills"><FcCheckmark /></i>Bom relacionamento interpessoal para trabalho em equipe</span>
                            <span><i className="i-skills"><FcCheckmark /></i>Capacidade de planejamento e organização para o cumprimento de prazos</span>
                            <span><i className="i-skills"><FcCheckmark /></i>Disposição para o aprendizado e aprimoramento contínuos</span>
                        </div>
                    </details>
                </div>

                <div className="card-single">
                    <details>
                        <summary>Conhecimentos</summary>
                        <div className="skills">
                            <span><i className="i-skills"><DiHtml5 /></i>HTML</span>
                            <span><i className="i-skills"><DiCss3 /></i>CSS</span>
                            <span><i className="i-skills"><DiJsBadge /></i>JavaScript</span>
                            <span><i className="i-skills"><DiPhp /></i>PHP</span>
                            <span><i className="i-skills"><DiMysql /></i>MySQL</span>  
                        </div>
                    </details>
                </div>
            </div>

            <div className="cv-pdf">
                <a class="link-pdf" href={pdf}>Currículo
                    <i><FaCloudDownloadAlt /></i>
                </a>
            </div>
        </div>
    )
}

export default About;