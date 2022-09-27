import React from "react";
import Card from "./Card";
import welcomeImg from "../img/welcomeImg.svg";
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = ({ name, setName, rga, setRga }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  const startGame = () => {
    if (name.trim().length > 0 && rga.trim().length > 0) {
      dispatch({ type: "CHANGE_STATE" });
    } else {
      console.log("false");
    }
  };

  return (
    <div className="welcome">
      <h2>Seja bem-vindo ao Quiz sobre Educação Financeira</h2>
      <p>
        Por favor, insira seus dados e clique no botão<b> Iniciar</b> para
        começar:
      </p>
      <Card>
        <input
          type="text"
          className="input_name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="input_rga"
          placeholder="Digite seu RGA"
          value={rga}
          onChange={(e) => setRga(e.target.value)}
        />
      </Card>

      <button onClick={startGame}>Iniciar</button>
      <img src={welcomeImg} alt="" />
    </div>
  );
};

export default Welcome;
