import React from 'react';

function Quiz() {
  return (
    <div className="quiz">
      <h2>Choose Your Quiz</h2>
      <ul>
        <li>Personality Quiz</li>
        <li>Skills Quiz</li>
        <li>Interest Quiz</li>
      </ul>
      <form id="quizForm">
        
        <div class="question">
              <label for="subject">1. What school subject do you find easiest to understand?</label>
              <select id="subject" name="subject">
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="literature">Literature</option>
                  <option value="social-studies">Social Studies</option>
                  <option value="art-pe">Art or Physical Education</option>
              </select>
          </div>
  
          <div class="question">
              <label for="activity">2. Which activity do you enjoy the most?</label>
              <select id="activity" name="activity">
                  <option value="puzzles">Solving puzzles or math problems</option>
                  <option value="experiments">Conducting experiments or research</option>
                  <option value="reading-writing">Reading and writing</option>
                  <option value="debate">Debating and discussing social issues</option>
                  <option value="creating">Drawing, painting, or creating things</option>
              </select>
          </div>
  
          <div class="question">
              <label for="problemSolving">3. How do you approach problem-solving?</label>
              <select id="problemSolving" name="problemSolving">
                  <option value="analyze">By analyzing data and patterns</option>
                  <option value="experiment">By experimenting and testing ideas</option>
                  <option value="discuss">By discussing it with others</option>
                  <option value="creativity">By thinking creatively</option>
                  <option value="organize">By organizing and listing options</option>
              </select>
          </div>
  
          <button type="button" onclick="submitQuiz()">Submit</button>
      </form>
  
      <div id="result"></div>
  
      </div>
  );
      function submitQuiz() {
      // Collect user responses
      const subject = document.getElementById('subject').value;
      const activity = document.getElementById('activity').value;
      const problemSolving = document.getElementById('problemSolving').value;

      // Analyze responses and provide career suggestions
      let resultText = '';
      if (subject === 'math' && activity === 'puzzles' && problemSolving === 'analyze') {
          resultText = 'You might excel in fields like Engineering, Data Science, or Computer Science!';
      } else if (subject === 'science' && activity === 'experiments' && problemSolving === 'experiment') {
          resultText = 'Consider careers in Medicine, Research, or Environmental Science!';
      } else if (subject === 'literature' && activity === 'reading-writing' && problemSolving === 'creativity') {
          resultText = 'You could thrive in careers like Writing, Journalism, or the Arts!';
      } else if (subject === 'social-studies' && activity === 'debate' && problemSolving === 'discuss') {
          resultText = 'You might enjoy Public Service, Law, or Education!';
      } else if (subject === 'art-pe' && activity === 'creating' && problemSolving === 'organize') {
          resultText = 'Consider careers in Design, Architecture, or Skilled Trades!';
      } else {
          resultText = 'Based on your responses, you have a range of potential career paths. Explore your interests further!';
      }

      // Display result
      const resultDiv = document.getElementById('result');
      resultDiv.innerText = resultText;
      resultDiv.style.display = 'block';
  
   <div>
      <button onClick={() => window.location.href = '/QuizResult'}>Quiz Result</button>
    </div>
  };
}

export default Quiz;
