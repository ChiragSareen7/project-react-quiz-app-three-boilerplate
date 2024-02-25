import questions from "../questions";
import React, { useEffect, useState } from "react";
import Result from "../components/Result";
import DarkMode from "./DarkMode";

export default function QuestionBox() {

const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [results, setResults] = useState(false);
  const [highlightedQuestion, setHighlightedQuestion] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 20);
      setCorrectAnswer(correctAnswer + 1);
    }
  
    if (question < questions.length - 1) {
      setQuestion(question + 1);
    }
  
    if (question === questions.length - 1) {
      setResults(true);
    }
  };
  
  const handlePlayAgain=()=>{
    setScore(0);
    setQuestion(0);
    setCorrectAnswer(0);
    setResults(false);
  }

  const handleHighlight = () => {
    if (!highlightedQuestion) {
      setHighlightedQuestion(true);
    }
  };
  
  const handleRemoveHighlight = () => {
    if (highlightedQuestion) {
      setHighlightedQuestion(false);
    }
  };
  return (
    <div>
    
    {results ? (
      <Result score={score} correctAnswer={correctAnswer} handlePlayAgain={handlePlayAgain} />
    ) : (
      <div className="functioning">
      <div className="header">
        <div id="head">
          <img src="public/download.png" alt="Logo" />
          <h4 className="heading">Quizeteria</h4>
        </div>
        
        </div>
        
        <div className="mainContainer">
          <div className="questionNumber">
            <span className="quesNumber">
              Question no. {question + 1} out of {questions.length} questions
            </span>
          </div>
          <div id="padding" className={highlightedQuestion ? "highlight" : "question"}>{questions[question].text}</div>
          <div className="answers-center">
            {questions[question].options.map((answer, i) => {
              return (
                <button className="answerButton"
                  key={i}
                  onClick={() => handleAnswer(answer.isCorrect)}
                >
                  {answer.text}
                </button>
              );
            })}
          </div>
          <div className="highlight" id="highColor">
          <button className="highButton" onClick={() => handleHighlight()}>Highlight Question</button>
          <button className="highButton" onClick={() => handleRemoveHighlight()}>Remove Highlight</button>
          </div>
          
        </div>
      </div>
    )}
    </div>
  )
}