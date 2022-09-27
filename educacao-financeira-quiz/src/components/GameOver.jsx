import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Card from "./Card";
import "./GameOver.css";

const GameOver = ({ name, setName, setRga }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  const playAgain = () => {
    dispatch({ type: "NEW_GAME" });
    setName("");
    setRga("");
  };

  return (
    <div className="game__over">
      <Card>
        <h2>
          Fim de Jogo<span> {name}</span> !
        </h2>
        <p>Pontuação: {quizState.score}</p>
        <p>
          Você acertou {quizState.score} de {quizState.questions.length}{" "}
          questões.
        </p>
        <button onClick={playAgain}>Jogar Novamente</button>
      </Card>
    </div>
  );
};

export default GameOver;
