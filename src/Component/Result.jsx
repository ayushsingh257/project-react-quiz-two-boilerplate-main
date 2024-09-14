// Result.jsx

import React from 'react';
import './Result.css'; // Import Result-specific CSS file

const Result = () => {
  return (
    <div className="result-container">
      <h2 className="result-header">Result</h2>
      <div className="result-content">
        <p>You need more practice</p>
        <p className="score">Your Score is 20%</p>
        <div className="result-info">
          <p>Total number of questions - 15</p>
          <p>No of attempted questions - 9</p>
          <p>Number of correct answers - 3</p>
          <p>No. of wrong answers - 6</p>
        </div>
      </div>
    </div>
  );
}

export default Result;
