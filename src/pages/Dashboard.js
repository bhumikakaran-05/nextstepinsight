import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard" >
    
  
      <h2>Your Personalized Dashboard</h2>
      <br></br>
      <div>
      <h3>Take Quizzes</h3>
        <button onClick={() => window.location.href = '/Register'}>Take Quiz</button>
        <p>Explore quizzes to gain insights into your personality, skills, and interests.</p>
      </div>
      <div>
      <br></br>
        <h3>Career Suggestions</h3>
        <button onClick={() => window.location.href = '/CareerSuggestions'}>careers</button>
        <p>Review your saved career suggestions and explore new options based on your preferences.</p>
      </div>
      <div>
        <br></br>
      
        <h3>Career Resources</h3>
        <p>Access articles, guides, and videos to learn about different career paths.</p>

        <br></br>
        <p>have more Questions/doubts to ask?</p>
        </div>
    </div>
  );
}

export default Dashboard;
