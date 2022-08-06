import React from "react";
import pdf from "../pdfs/Currículo.pdf";
import "./About.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiPhp } from "react-icons/di";

const About = () => {
    return (
        <div className="about">
            <div className="cards">
                <div className="card-single">
                    <details open>
                        <summary>Sobre mim</summary>
                        <p>Olá, me chamo Filipe e atualmente estou no 10° período de Engenharia de Computação pela Universidade Federal da Grande Dourados - UFGD.</p>
                        <p>Na faculdade, descobri a minha paixão por programação e desde então venho me aperfeiçoando nas novas tecnolgias focando em Desenvolvimento Web Full Stack.</p>
                        <p>No momento estou estudando sobre ReactJS e NodeJS</p> 
                    </details>
                </div>

                <div className="card-single">
                    <details>
                        <summary>Competências</summary>
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