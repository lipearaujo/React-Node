import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import './Options.css';

const Options = ({ option, correctAnswer, selectOption }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div
      className={` optionSingle ${
        quizState.answerSelected && option === correctAnswer ? "correct" : ""
      } ${
        quizState.answerSelected && option !== correctAnswer ? "wrong" : ""
      }`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;
