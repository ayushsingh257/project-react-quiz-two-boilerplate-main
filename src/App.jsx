import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Component/Home';
import Quiz from './Component/Quiz';
import Result from './Component/Result';
import './App.css'; // Import CSS file



const App = () => {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz/>} />
                                      
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
