import React from 'react';

function Home() {
  return (
    <div className="home">
      
      <h1>Discover Your Dream Career</h1>
     
      <p >Find the perfect career path for you with our personalized guidance and resources.</p>
      <button onClick={() => window.location.href = '/Dashboard'}>Get Started</button>
    </div>
  );
}

export default Home;
