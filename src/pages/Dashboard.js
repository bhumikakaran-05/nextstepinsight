import React from 'react';
import { useNavigate } from "react-router-dom";

function Dashboard() {
 const navigate = useNavigate();
  function handleClick() {
    navigate("/Quiz");
  }
  return (
    <div class="dashboard-container">
        <h1>Explore Your Career Path</h1>
        <p>Choose a category below to explore career options based on your interests or
            academic stream.</p>

        {/* <!-- Options --> */}
        <div class="career-category">
            <div class="career-card">
                <h3><a href="quiz.html"> Quiz </a></h3>
                <p>Explore which careers suites you.</p>
                <button onClick={handleClick}>  Take quiz</button>
            </div>

            {/* <!-- Commerce Stream --> */}
            <div class="career-card">
                <h3><a href="career.html">Interest Wise</a></h3>
                <p>Explore careers according to your interest.</p>
                <a href="career.html">Learn More</a>
            </div>

            <div class="career-card">
                <h3><a href="stream.html"> Streams Wise </a></h3>
                <p>Explore careers according to your Streams.</p>
                <a href="stream.html">Learn More</a>
            </div>




        </div>
    </div>

    // <div className="dashboard" >

    //   <h2>👉🏻 Your personalized  Dashboard👈🏻</h2>
    //   <br></br>
    //   <p>🤔 Wondering what are Careers after 10th and 12th ?</p>
    //   <p>What career to choose from 3 main Stream Arts , commerce , Science ?  what may aline to your interest ?</p>   
    //   <p>Don't know what are Careers in this streams?🙁</p>
    //   <br></br>
    //   <p>✨Here we are for you ! Take a step to explore careers   : </p>
      
    //   <div>
    //   <br></br>
    //     <h3>Career Suggestions</h3>
    //     <p>Click "careers" button  provided below ! 👇🏻 To see career suggestions.😊 </p>
    //     <button onClick={() => window.location.href = '/CareerSuggestions'}>Careers</button>
    //     <br></br>
    //     <p>Review your saved career suggestions and explore new options based on your preferences.</p>
    //   </div>
    //   <div>
    //     <br></br>
      
    //     <h3>Career Resources</h3>
    //     <p>Relevant information , guidance and videos to learn about different career paths.</p>
    //     <br></br>
    //     <br></br>

    //     <h3>Explore More:</h3>
    //     <p>😇Visit Explore Page for more general guidance and information</p>
    //     <button onClick={() => window.location.href = '/Explore'}>Explore</button>
    //     <br></br>
    //     <br></br>
// {/* 
//         <div>
//       <h3>Take Quizzes</h3>
//         <button onClick={() => window.location.href = '/Quiz'}>Take Quiz</button>
//         <p>Explore quizzes to gain insights into your personality, skills, and interests.</p>
//       </div> */}
//     //     <p> 💬  Have any issue / Query ? </p>
//     //     <p>Contact us : 🌐 www.NextStepInsight.in</p>
//     //     <p>Email us : 📩 NextStepInsight@gmail.com</p>
//     //     </div>
//     // </div>
  );
}

export default Dashboard;