import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Quiz App</h1>
      </div>
      <Link to="/quiz" className="play-button">Play</Link>
    </div>
  );
}

export default Home;
