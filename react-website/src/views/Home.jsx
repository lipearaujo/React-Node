import React from "react";
import './Home.css';
import { FaWhatsapp } from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp';

const Home = () => {
    const celNumber = '+5567 9977-3545';

    return (
        <div className="home">
            <div className="perfil-image">
                <img src="images/perfil-image.jpg" alt="" />
            </div>

            <div className="perfil-text">
                <div className="title">
                    <h1>Olá, eu sou o <span>Filipe</span></h1>
                    <h2>Sou Desenvolvedor Full Stack</h2>
                </div>

                <div className="perfil-infos">
                    <ul>
                        <li><span>🌎</span>Dourados, MS, Brasil</li>
                        <li><span>🎓</span>Estudante de Engenharia de Computação na UFGD</li>
                        <li><span>📧</span>filipecensi@hotmail.com</li>
                    </ul>
                </div>

                <div className="perfil-socials">
                    <a className="perfil-facebook" target="_blank" href="https://www.facebook.com/filipe.araujo.965"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a className="perfil-instagram " target="_blank" href="https://www.instagram.com/lipecensi/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a className="perfil-linkedin" target="_blank" href="https://www.linkedin.com/in/marcos-filipe-censi-de-araujo-337486136/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a className="perfil-github" target="_blank" href="https://github.com/lipearaujo"><i className="fa fa-github" aria-hidden="true"></i></a>     
                    <ReactWhatsapp number={ celNumber } message="Hello World!!!" className="perfil-whatsapp"><i><FaWhatsapp/></i></ReactWhatsapp>
                </div>
            </div>  
        </div>
    )
}

export default Home;  