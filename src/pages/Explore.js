import React from 'react';
import '../App.css';

const Explore = () => {
  return (
    <div className="explore-container">
      <h1> 📍 More information for You :</h1>
      <br></br>

      {/* Stream Selection Section */}
      <section className="stream-selection">
        <h2> 🔵 Stream Selection: Science, Commerce, or Arts</h2>
        
        <h3>🔸 Science Stream</h3>
        <p>
          The Science stream is ideal for students who are interested in subjects like Physics, Chemistry, Biology, and Mathematics.
        </p>
        <ul>
          <li><strong>Career Options:</strong> Engineering (e.g., Mechanical, Computer Science, Civil), Medicine (MBBS, Nursing), Research, Space Science</li>
          <li><strong>Next Steps:</strong> Prepare for entrance exams like JEE (Engineering) or NEET (Medicine).</li>
        </ul>

        <h3>🔸Commerce Stream</h3>
        <p>
          The Commerce stream is perfect for students interested in Business Studies, Economics, Accountancy, and Mathematics.
        </p>
        <ul>
          <li><strong>Career Options:</strong> Business Management (MBA, BBA), Chartered Accountancy (CA), Law, Banking, Finance</li>
          <li><strong>Next Steps:</strong> Look into BBA, CA Foundation exams, and explore business internships.</li>
        </ul>

        <h3>🔸Arts Stream</h3>
        <p>
          The Arts stream offers a broad spectrum of subjects including Humanities, Social Sciences, Languages, and Fine Arts.
        </p>
        <ul>
          <li><strong>Career Options:</strong> Law, Journalism, Psychology, Fine Arts, Public Administration (IAS)</li>
          <li><strong>Next Steps:</strong> Consider exploring law entrance exams like CLAT or AILET, or pursue internships in the media. NIFT exam for fashion  designing.</li>
        </ul>
      </section>
      <br></br>

      {/* Emerging Careers Section */}
      <section className="emerging-careers">
        <h2>🔵 Emerging Careers & New-Age Professions</h2>
        
        <h3>🔸 Data Science & AI</h3>
        <p>
          A rapidly growing field that involves analyzing data, machine learning, and artificial intelligence.
        </p>
        <ul>
          <li><strong>Next Steps:</strong> Learn tools like Python, R, and machine learning frameworks. Check out online platforms like Coursera and Udacity.</li>
        </ul>

        <h3> 🔸 Digital Marketing</h3>
        <p>
          The digital world needs experts in SEO, content marketing, and social media strategies.
        </p>
        <ul>
          <li><strong>Next Steps:</strong> Gain experience through internships or courses. Platforms like Google Digital Garage offer free certifications.</li>
        </ul>

        <h3>🔸 Cybersecurity</h3>
        <p>
          As technology grows, so does the need for cybersecurity professionals who can protect digital assets.
        </p>
        <ul>
          <li><strong>Next Steps:</strong> Learn ethical hacking, network security, and pursue certifications like CEH (Certified Ethical Hacker).</li>
        </ul>
        <h3>🔸 Prompt Engineer</h3>
        <p>
          As new Tech develpos , Effectively using it is also crucial skill. artificial intelligence is Devloping for ease , fast and effeciency of us but very few have skills of giving accurate commands, prompt and get output as Required.
        </p>
        <ul>
          <li><strong>Next Steps:</strong> Learn , practice AI.  Check out online platforms like Coursera and Udacity.</li>
        </ul>
        <h3>🔸 Video Editor , Social Media related role </h3>
        <p>
          A rapidly growing field that involves analyzing data,video editing, content making , Teachnical editing  software knowledge , marketing startergy , communication skills.
        </p>
        <ul>
          <li><strong>Next Steps:</strong> Learn tools related to editing , explore softwares. Check out online platforms , youtube , try , connect to people , practice.</li>
        </ul>
      </section>
      <br></br>
      <br></br>

      {/* Next Steps Section */}
      <section className="next-steps">
        <h2> 🔵 Next Steps After 10th Grade</h2>
        
        <h3> 🔸Assess Your Interests and Skills 🎯</h3>
        <p>
          Take career aptitude tests to explore what fields match your skills and interests. Consider talking to career counselors to get personalized advice.
          Connect to students , seniors , professionals to gain insights and more knowledge , practical approach , their experiences.
                  <li>You can explore "Linkedin" platform to enter professional world , join communities , peer minded people and to be updated with it.</li>
        </p>

        <h3>🔸 Choosing a College/Institute 🏫 </h3>
        <p>
          Research colleges and universities based on the stream you choose. Factors like reputation,Naac grade , infrastructure, and placement opportunities should guide your decision.
        </p>

        <h3> 🔸 Internships & Volunteering📈</h3>
        <p>
          Getting early work experience through internships can provide valuable insights into your chosen career and build your resume.It gives ypu more understanding of actual work done in professional world , the real hassels and chance for improvements.
        </p>
      </section>
      <br></br>

      {/* Scholarships & Financial Aid Section */}
      <section className="scholarships">
        <h2>🔸 Scholarships & Financial Aid 💶 </h2>
        <p>
          Many scholarships and financial aid programs are available for students pursuing higher education. Look into government scholarships, private funding options, and college-specific scholarships. some are based on your marks ,Family-income , religion , caste and other criteria.
        </p>
      </section>
      <br></br>

      {/* Study Resources Section */}
      <section className="study-resources">
        <h2>🔸 Study Resources 📚 </h2>
        <p>
          To support your studies, use resources like online learning platforms, books, and practice materials. Websites like Khan Academy, Youtube, Udemy and Coursera offer free and paid courses in various subjects.
        </p>
      </section>
    </div>
  );
};

export default Explore;
