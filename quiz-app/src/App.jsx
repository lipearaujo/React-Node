import './App.css';
import Login from "./pages/Login"
import Questions from './pages/Questions';
import Final from './pages/Final';
import { useState } from 'react';

function App() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const [userName, setUserName] = useState('');
  const [rga, setRga] = useState(0);
  const [score, setScore] = useState(0);
  
  return (
    <div className="App">
      {showLoginPage && ( 
        <Login 
          setShowLoginPage={ setShowLoginPage } 
          setShowQuestionPage={ setShowQuestionPage } 
          userName={ userName }
          setUserName={ setUserName }
          rga={ rga }
          setRga={ setRga }
        /> 
        )}

      {showQuestionPage && ( 
        <Questions
          setShowQuestionPage={ setShowQuestionPage }
          setShowFinalPage={ setShowFinalPage }
          score={ score }
          setScore={ setScore }
      /> 
      )}

      {showFinalPage && (
        <Final 
          setShowFinalPage={ setShowFinalPage } 
          setShowLoginPage={ setShowLoginPage }
          userName={ userName }
          setUserName={ setUserName }
          score={ score }
          setScore={ setScore }
          rga={ rga }
          setRga={ setRga }
        />
      )}
    </div>
  );
}

export default App;
