import Card from "../components/Card"
import questions from "../questions";
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

const Questions = (props) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [displayBasic, setDisplayBasic] = useState(false);

    const onHide = () => {
        setDisplayBasic(false);
    }

    const renderFooter = () => {
        return (
            <div>
                <Button label="Ok" icon="pi pi-check" onClick={() => onHide(displayBasic)} autoFocus />
            </div>
        );
    }

    const respQuestion = (isCorrect) => {

        if( questionIndex < questions.length ) {
            if(isCorrect === true) {
                props.setScore(props.score + 100);
                setQuestionIndex((prevIndex) => prevIndex + 1);
            }

            if(isCorrect === false) {
                //alert(questions[questionIndex].answers[questionIndex].feedbackText);
                
               setDisplayBasic(!displayBasic);
            }

            if(questionIndex === (questions.length - 1)) {
                if(isCorrect === true) {
                    props.setShowQuestionPage(false)
                    props.setShowFinalPage(true)
                }
    
                if(isCorrect === false) {
                    //alert(questions[questionIndex].answers[questionIndex].feedbackText);
                    setDisplayBasic(!displayBasic);
                }
            }  
        } 
    }

    return (
        <Card>
            <h2 className="questionsBoxTitle">{ questions[questionIndex].questionText }</h2>

            <div className="answersBox">
                { questions[questionIndex].answers.map((answer, index) => (
                    <>
                        <div className="answersBoxSingle" key={index} onClick={() => respQuestion(answer.correctAnswer, index)}>
                            <p>{answer.answerText}</p>   
                        </div>  

                        <Dialog header="Resposta" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter(displayBasic)} onHide={() => onHide(displayBasic)}>
                            <p>{ questions[questionIndex].answers[index].feedbackText }</p>
                        </Dialog>                
                    </>
                ))}
                
            </div>

            <div className="questionNumber">
                <span>Questão {questionIndex + 1} / {questions.length} </span>    
            </div>
      
        </Card>
    )
}

export default Questions;