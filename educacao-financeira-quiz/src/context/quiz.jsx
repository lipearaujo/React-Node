//React Context is a way to manage state globally.
import { createContext, useReducer } from "react";
import React from "react";
import questions from "../data/questions";

const STAGES = ["Start", "ChoseCategory", "Playing", "EndGame"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "CHOSE_CATEGORY":
      let chosenCategory = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload.category) {
          console.log(question);
          chosenCategory = question.arrayQuestions;
          console.log(chosenCategory);
        }
      });

      return {
        ...state,
        questions: chosenCategory,
        gameStage: STAGES[2],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
      };

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const answer = action.payload.correctAnswer;
      const option = action.payload.option;
      let correct = 0;

      if (answer === option) correct = 1;

      return {
        ...state,
        score: state.score + correct,
        answerSelected: option,
      };

    case "NEW_GAME":
      return initialState;

    default:
      return state;
  }
};

//To create context, you must Import createContext and initialize it:
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  //Next we'll use the Context Provider to wrap the components that need the state Context.
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
