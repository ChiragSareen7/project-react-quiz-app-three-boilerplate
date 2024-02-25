import React, { useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import DarkMode from "./components/DarkMode";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="front">
      {!start && (
        <div className="info">
          <img src="public/download.png" height={150} width={200} alt="Logo" />
          <span>
            <h1 className="enter">Welcome to Quizeteria</h1>
          </span>
          <div>
            <h3 className="sharp">Sharpen your knowledge about react with Quizeteria </h3>
          </div>
        </div>
      )}
      <DarkMode />
      {!start && (
        <div className="quizInfo">
          <h4 className="rulesInfo">The following quiz contains questions related to React</h4>
          <ul >
            <li>There are 5 MCQ's type questions.</li>
            <li>Once attempted you can't re-attempt the question again.</li>
            <li>Score will be displayed once all the questions are attempted.</li>
            <li>There is no negative marking or time limit.</li>
          </ul>
        </div>
      )}
      {!start && (
        <div className="play">
          <button className="playButton" onClick={() => setStart(true)}>
            Start
          </button>
        </div>
      )}
      {start && <QuestionBox />}
    </div>
  );
}

export default App;
