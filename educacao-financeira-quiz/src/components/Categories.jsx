import React from "react";
import Card from "./Card";
import "./Categories.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Categories = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const choseCategory = (category) => {
    dispatch({
      type: "CHOSE_CATEGORY",
      payload: { category },
    });

    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <Card>
      <h2>Escolha uma dificuldade</h2>
      <p className="paragraph">
        As perguntas serão referentes a dificuldade escolhida
      </p>

      <div className="categories">
        {quizState.questions.map((question, key) => (
          <button
            className="categorySingle"
            onClick={() => choseCategory(question.category)}
            key={key}
          >
            {question.category}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default Categories;