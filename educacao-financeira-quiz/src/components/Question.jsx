import React from "react";
import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import Card from "./Card";
import Options from "./Options";
import "./Question.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [displayBasic, setDisplayBasic] = useState(false);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelecOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { correctAnswer: currentQuestion.correctAnswer, option },
    });

    if (option !== currentQuestion.correctAnswer) {
      setDisplayBasic(!displayBasic);
    }
  };

  const onHide = () => {
    setDisplayBasic(false);
  };

  const renderFooter = () => {
    return (
      <div>
        <Button
          label="Ok"
          icon="pi pi-check"
          onClick={() => onHide(displayBasic)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="questions">
      <Card>
        <p>
          Pergunta {quizState.currentQuestion + 1} de{" "}
          {quizState.questions.length}
        </p>

        <h2>{currentQuestion.questionText}</h2>

        <div className="options">
          {currentQuestion.answers.map((option) => (
            <>
              <Options
                option={option}
                key={option}
                correctAnswer={currentQuestion.correctAnswer}
                selectOption={() => onSelecOption(option)}
              />

              <Dialog
                visible={displayBasic}
                style={{ width: "50vw" }}
                footer={renderFooter(displayBasic)}
                onHide={() => onHide(displayBasic)}
              >
                <p className="feedback">{currentQuestion.feedbackText}</p>
              </Dialog>
            </>
          ))}
        </div>

        {quizState.answerSelected && (
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
          </button>
        )}
      </Card>
    </div>
  );
};

export default Question;
