import React from 'react';
import { auth} from "../firebase";

function Home() {
  const isauth = auth.currentUser;

  return (
    <div className="home">
      <h1>Discover Your Dream Career</h1>
      <p>🤔Wondering what are Careers options for you  ?</p>
      <p>🧐 Don't Know Where to Start Searching from ? Confuse ?🤕 No-one available to give guidance?</p>
      <br></br>
      <p>Don't Worry ! 😌Let's Take First Step in Searching Careers and Explore on way according to your interest.</p>
      <br></br>

      <p >✌🏻️Find the perfect career path for you with our personalized guidance and resources.</p>
      <button onClick={() => !isauth ? window.location.href = '/Login' :  window.location.href = '/Dashboard'}>Get Started</button>
    </div>
    
    );
    
}


export default Home;
