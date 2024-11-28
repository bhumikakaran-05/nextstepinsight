import React, { useState } from 'react';

function Quiz() {
  const [result, setResult] = useState('');

  const submitQuiz = () => {
    console.log("hi");
    const quizForm = document.forms['quizForm'];
        const resultDiv = document.getElementById('result');

        // Map career descriptions
        const careerDescriptions = {
            engineering: "Engineering: Explore opportunities in software, mechanical, or civil engineering.",
            creative: "Creative Arts: Ideal for careers in design, painting, or animation.",
            healthcare: "Healthcare: Perfect for medicine, therapy, or nursing roles.",
            farming: "Agriculture: Best suited for agritech and farming roles.",
            business: "Business: Thrive in marketing or management.",
            technology: "Technology: Build a career in AI, software, or cybersecurity.",
            environmental: "Environmental Science: Join efforts for a sustainable planet.",
            law: "Law: Navigate legal frameworks and justice.",
            education: "Education: Shape future minds.",
            marketing: "Marketing: Create impactful brand campaigns.",
            finance: "Finance: Excel in investments or accounting.",
            journalism: "Journalism: Share the world’s stories.",
            sports: "Sports: Engage in athlete management.",
            hospitality: "Hospitality: Perfect for event or travel management."
        };

        // Function to calculate and display the result
        function calculateResult() {
            const answers = {};
            const tally = {};

            // Collect answers
            for (let i = 1; i <= 11; i++) {
                const question = quizForm[`q${i}`];
                if (question) {
                    const selected = [...question].find(option => option.checked);
                    if (selected) {
                        const value = selected.value;
                        answers[`q${i}`] = value;
                        tally[value] = (tally[value] || 0) + 1;
                    }
                }
            }

            // Ensure all questions are answered
            if (Object.keys(answers).length < 11) {
                resultDiv.innerHTML = "<p style='color: red;'>Please answer all questions to see your result!</p>";
                return;
            }

            // Find the top career
            const topCareer = Object.keys(tally).reduce((a, b) => (tally[a] > tally[b] ? a : b));
            const careerDescription = careerDescriptions[topCareer];

            // Display the result
            resultDiv.innerHTML = `
                <h2>Your Career Match:</h2>
                <p>${careerDescription}</p>
                <a href='career.html'>Click to explore</a>
            `;
        }

        // Listen for the last question's input change
        const lastQuestionInputs = quizForm['q11'];
        [...lastQuestionInputs].forEach(input => {
            input.addEventListener('change', calculateResult);
        });
        calculateResult();


        // const themeToggle = document.getElementById('themeToggle');
        // const body = document.body;

        // themeToggle.addEventListener('click', () => {
        //     const isDark = body.dataset.theme === 'dark';
        //     body.dataset.theme = isDark ? 'light' : 'dark';
        //     themeToggle.textContent = isDark ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        // });
   
    // // Collect user responses
    // const subject = document.getElementById('subject').value;
    // const activity = document.getElementById('activity').value;
    // const problemSolving = document.getElementById('problemSolving').value;

    // // Analyze responses and provide career suggestions
    // let resultText = '';
    // if (subject === 'math' && activity === 'puzzles' && problemSolving === 'analyze') {
    //   resultText = 'You might excel in fields like Engineering, Data Science, or Computer Science!';
    // } else if (subject === 'science' && activity === 'experiments' && problemSolving === 'experiment') {
    //   resultText = 'Consider careers in Medicine, Research, or Environmental Science!';
    // } else if (subject === 'literature' && activity === 'reading-writing' && problemSolving === 'creativity') {
    //   resultText = 'You could thrive in careers like Writing, Journalism, or the Arts!';
    // } else if (subject === 'social-studies' && activity === 'debate' && problemSolving === 'discuss') {
    //   resultText = 'You might enjoy Public Service, Law, or Education!';
    // } else if (subject === 'art-pe' && activity === 'creating' && problemSolving === 'organize') {
    //   resultText = 'Consider careers in Design, Architecture, or Skilled Trades!';
    // } else {
    //   resultText = 'Based on your responses, you have a range of potential career paths. Explore your interests further!';
    // }

    // // Update the state with the result
    // setResult(resultText);
  };

  return (
    <div class="quiz-container">
    <h2>Discover Your Perfect Career Path</h2>
    <p>Answer the questions below to find a career that suits your interests and skills.</p>
    {/* //   <h2>Choose Your Quiz</h2>
    //   <ul>
    //     <li>Personality Quiz</li>
    //     <li>Skills Quiz</li>
    //     <li>Interest Quiz</li>
    //   </ul> */}
      <form id="quizForm">

      <div class="question">
                <h3>1. What activities do you enjoy the most?</h3>
                <div class="options">
                    <label><input type="radio" name="q1" value="engineering"/> Solving technical problems</label>
                    <label><input type="radio" name="q1" value="creative"/> Creating art or designs</label>
                    <label><input type="radio" name="q1" value="healthcare"/> Helping people with their health</label>
                    <label><input type="radio" name="q1" value="farming"/> Working outdoors with nature</label>
                </div>
            </div>
            <div class="question">
                <h3>2. Which subject interests you most?</h3>
                <div class="options">
                    <label><input type="radio" name="q2" value="science"/> Science</label>
                    <label><input type="radio" name="q2" value="business"/> Business Studies</label>
                    <label><input type="radio" name="q2" value="technology"/> Computer Science</label>
                    <label><input type="radio" name="q2" value="environmental"/> Environmental Studies</label>
                </div>
            </div>
            <div class="question">
                <h3>3. How do you prefer to work?</h3>
                <div class="options">
                    <label><input type="radio" name="q3" value="law"/> Analyzing and solving legal cases</label>
                    <label><input type="radio" name="q3" value="education"/> Teaching and guiding others</label>
                    <label><input type="radio" name="q3" value="renewable"/> Innovating for a sustainable future</label>
                    <label><input type="radio" name="q3" value="marketing"/> Creating strategies to promote products</label>
                </div>
            </div>
            
            <div class="question">
                <h3>4. Do you enjoy working with technology?</h3>
                <div class="options">
                    <label><input type="radio" name="q4" value="technology"/> Yes, I love working with gadgets and software</label>
                    <label><input type="radio" name="q4" value="science"/> Yes, especially experimenting and innovating</label>
                    <label><input type="radio" name="q4" value="business"/> No, I prefer managing or organizing</label>
                    <label><input type="radio" name="q4" value="law"/> No, I prefer tasks that involve critical thinking</label>
                </div>
            </div>
            <div class="question">
                <h3>5. How do you feel about working in a team?</h3>
                <div class="options">
                    <label><input type="radio" name="q5" value="education"/> I enjoy guiding and working collaboratively</label>
                    <label><input type="radio" name="q5" value="sports"/> I thrive in competitive, team-based environments</label>
                    <label><input type="radio" name="q5" value="journalism"/> I prefer working independently but sharing insights</label>
                    <label><input type="radio" name="q5" value="finance"/> I prefer structured and analytical teamwork</label>
                </div>
            </div>
            <div class="question">
                <h3>6. What kind of workplace inspires you?</h3>
                <div class="options">
                    <label><input type="radio" name="q6" value="farming"/> Outdoors with nature</label>
                    <label><input type="radio" name="q6" value="technology"/> Modern and innovative</label>
                    <label><input type="radio" name="q6" value="hospitality"/> Energetic and customer-focused</label>
                    <label><input type="radio" name="q6" value="creative"/> Artistic and collaborative</label>
                </div>
            </div>
            <div class="question">
                <h3>7. How do you approach problem-solving?</h3>
                <div class="options">
                    <label><input type="radio" name="q7" value="engineering"/> I break it into logical steps</label>
                    <label><input type="radio" name="q7" value="renewable"/> I think creatively for sustainable solutions</label>
                    <label><input type="radio" name="q7" value="law"/> I analyze facts and details</label>
                    <label><input type="radio" name="q7" value="marketing"/> I brainstorm innovative ideas</label>
                </div>
            </div>
            <div class="question">
                <h3>8. What motivates you most in a career?</h3>
                <div class="options">
                    <label><input type="radio" name="q8" value="finance"/> Financial growth</label>
                    <label><input type="radio" name="q8" value="healthcare"/> Helping others</label>
                    <label><input type="radio" name="q8" value="journalism"/> Telling impactful stories</label>
                    <label><input type="radio" name="q8" value="sports"/> Achieving goals and recognition</label>
                </div>
            </div>
            <div class="question">
                <h3>9. Which of these do you enjoy most?</h3>
                <div class="options">
                    <label><input type="radio" name="q9" value="business"/> Managing projects or businesses</label>
                    <label><input type="radio" name="q9" value="creative"/> Designing or crafting</label>
                    <label><input type="radio" name="q9" value="science"/> Conducting experiments</label>
                    <label><input type="radio" name="q9" value="hospitality"/> Organizing events or trips</label>
                </div>
            </div>
            <div class="question">
                <h3>10. How do you prefer to communicate?</h3>
                <div class="options">
                    <label><input type="radio" name="q10" value="education"/> By teaching and mentoring</label>
                    <label><input type="radio" name="q10" value="marketing"/> By creating convincing content</label>
                    <label><input type="radio" name="q10" value="journalism"/> By documenting and reporting</label>
                    <label><input type="radio" name="q10" value="technology"/> Through coding or technical explanations</label>
                </div>
            </div>
            <div class="question">
                <h3>11. What role fits your personality best?</h3>
                <div class="options">
                    <label><input type="radio" name="q11" value="leadership"/> Leader or decision-maker</label>
                    <label><input type="radio" name="q11" value="support"/> Supporter and collaborator</label>
                    <label><input type="radio" name="q11" value="innovator"/> Innovator and problem-solver</label>
                    <label><input type="radio" name="q11" value="creator"/> Creator and artist</label>
                </div>
            </div>

        {/* <div className="question">
          <label htmlFor="subject">1. What school subject do you find easiest to understand?</label>
          <select id="subject" name="subject">
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="literature">Literature</option>
            <option value="social-studies">Social Studies</option>
            <option value="art-pe">Art or Physical Education</option>
          </select>
        </div>

        <div className="question">
          <label htmlFor="activity">2. Which activity do you enjoy the most?</label>
          <select id="activity" name="activity">
            <option value="puzzles">Solving puzzles or math problems</option>
            <option value="experiments">Conducting experiments or research</option>
            <option value="reading-writing">Reading and writing</option>
            <option value="debate">Debating and discussing social issues</option>
            <option value="creating">Drawing, painting, or creating things</option>
          </select>
        </div>

        <div className="question">
          <label htmlFor="problemSolving">3. How do you approach problem-solving?</label>
          <select id="problemSolving" name="problemSolving">
            <option value="analyze">By analyzing data and patterns</option>
            <option value="experiment">By experimenting and testing ideas</option>
            <option value="discuss">By discussing it with others</option>
            <option value="creativity">By thinking creatively</option>
            <option value="organize">By organizing and listing options</option>
          </select>
        </div> */}

        <button type="button" onClick={submitQuiz}>
          Submit
        </button>
      </form>
      <div class="result" id="result"></div>
   
   </div>
  );
}

export default Quiz;
