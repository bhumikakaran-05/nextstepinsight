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
import Explore from './pages/Explore';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';



function App() {
  return (
    <Router>

     <Navbar />
    <main>
      <Routes>
      <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={   <Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizResult" element={<QuizResult />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/careerSuggestions" element={<CareerSuggestions />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Profile"
          element={
         <Profile /> 
          }
          />
      </Routes>
      </main>
    </Router>
  );
}
// auth.currentUser ? <Profile /> : <Navigate to="/login" />
export default App;
