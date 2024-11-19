import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import QuizResult from './pages/QuizResult';
import CareerSuggestions from './pages/CareerSuggestions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizResult" element={<QuizResult />} />
        <Route path="/careerSuggestions" element={<CareerSuggestions />} />
      </Routes>
    </Router>
  );
}

export default App;

