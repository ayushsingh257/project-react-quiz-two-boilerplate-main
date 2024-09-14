import React, { useState } from 'react';
import './Quiz.css';
import questions from './questions.json';
import { Link, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuitModal, setShowQuitModal] = useState(false);

  const navigate = useNavigate()

  const redirectToResult =()=>{
    navigate("/result")
  }

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleQuit = () => {
    setShowQuitModal(true);
  };

  const confirmQuit = () => {
    redirectToResult(); // Redirect to the result page
  };

  const cancelQuit = () => {
    setShowQuitModal(false);
  };

  if (!questions || questions.length === 0 || !questions[currentQuestion]) {
    return <div>No questions available</div>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="question-header">
          <h2>{`Question ${currentQuestion + 1} of ${questions.length}`}</h2>
          <p>{questions[currentQuestion].question}</p>
        </div>
        <div className="question-options">
          <div className="option">
            <button className="option-button">{questions[currentQuestion].optionA}</button>
            <button className="option-button">{questions[currentQuestion].optionB}</button>
            <button className="option-button">{questions[currentQuestion].optionC}</button>
            <button className="option-button">{questions[currentQuestion].optionD}</button>
          </div>
        </div>
        <div className="control-buttons">
          <button className="previous-button" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
          <button className="next-button" onClick={handleNext} disabled={currentQuestion === questions.length - 1}>Next</button>
          <button className="quit-button" onClick={handleQuit}>Quit</button>
        </div>
      </div>
      {showQuitModal && (
        <div className="modal" id="quit-modal">
          <div className="modal-content">
            <p>Are you sure you want to quit the quiz?</p>
            <div>
              <button onClick={confirmQuit}>Yes</button>
              <button onClick={cancelQuit}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
