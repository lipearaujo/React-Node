import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/Welcome";
import Categories from "./components/Categories";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  const [inputName, setInputName] = useState("");
  const [inputRga, setInputRga] = useState("");

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Educação Financeira</h1>
      {quizState.gameStage === "Start" && (
        <Welcome
          name={inputName}
          setName={setInputName}
          rga={inputRga}
          setRga={setInputRga}
        />
      )}
      {quizState.gameStage === "ChoseCategory" && <Categories />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "EndGame" && (
        <GameOver
          name={inputName}
          setName={setInputName}
          setRga={setInputRga}
        />
      )}
    </div>
  );
}

export default App;