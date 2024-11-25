import React, { useState } from 'react';

function Explore() {
  const careerOptions = [
    {
      id: 1,
      name: "Geologist",
      description: "Studies Earth's materials, processes, and history.",
      videoUrl: "https://www.youtube.com/embed/3dKvcdSRP6s?si=1iyUyce4OCneusPR",
      skills: ["Observation", "Data Analysis", "Problem-Solving"],
      category: "Science",
      subcategory: "Earth Sciences",
      additionalInfo1: "A Geologist uncovers Earth's secrets, exploring rocks, minerals, and natural processes.",
      additionalInfo2: "Imagine a Geologist as a treasure hunter, digging deep into Earth's layers.",
      additionalInfo3: "For example, studying soil composition to find potential sites for mining."
    },
    {
      id: 2,
      name: "Marine Biologist",
      description: "Studies marine organisms and ecosystems.",
      videoUrl: "https://www.youtube.com/embed/alrmw9k5x7s?si=xTJ5cBiITNd_juyh",
      skills: ["Observation", "Data Collection", "Problem-Solving"],
      category: "Science",
      subcategory: "Biology",
      additionalInfo1: "Marine Biologists explore life beneath oceans, studying marine animals and plants.",
      additionalInfo2: "Think of a Marine Biologist as an underwater scientist discovering new species and environments.",
      additionalInfo3: "For instance, researching coral reefs to understand their role in marine biodiversity."
    },
    {
      id: 3,
      name: "Environmental Scientist",
      description: "Works to protect the environment by analyzing ecological data.",
      videoUrl: "https://www.youtube.com/embed/OKxzx_q4yCM?si=lhVzBjMm8zDt1yNT",
      skills: ["Problem-Solving", "Data Analysis", "Research"],
      category: "Science",
      subcategory: "Environment",
      additionalInfo1: "Environmental Scientists study and address issues like pollution, climate change, and conservation.",
      additionalInfo2: "Imagine an Environmental Scientist as Earth's guardian, fighting to preserve its beauty.",
      additionalInfo3: "For example, assessing the impact of industrial waste on rivers and ecosystems."
    },
    {
      id: 4,
      name: "Interior Designer",
      description: "Plans and designs spaces to make them functional and aesthetically pleasing.",
      videoUrl: "https://www.youtube.com/embed/cqFI4btKywA?si=bmbbqscKkmgXrH5m",
      skills: ["Creativity", "Space Planning", "Project Management"],
      category: "Arts",
      additionalInfo1: "Interior Designers craft beautiful and functional living or working spaces tailored to clients' needs.",
      additionalInfo2: "Think of an Interior Designer as an artist who paints their canvas on walls, furniture, and layouts.",
      additionalInfo3: "For instance, designing a modern kitchen or revamping an office space for efficiency."
    },
    {
      id: 5,
      name: "Animator",
      description: "Creates moving images using digital tools for films, games, and advertisements.",
      videoUrl: "https://www.youtube.com/embed/4urMJTJk5Vc?si=y4Vm_8OJa9UPsIRn",
      skills: ["Animation Software", "Creativity", "Storytelling"],
      category: "Arts",
      additionalInfo1: "Animators breathe life into characters and stories through movement and design.",
      additionalInfo2: "Imagine an Animator as a magician making drawings come to life.",
      additionalInfo3: "For instance, animating a character for a movie like Toy Story."
    },
    {
      id: 6,
      name: "Social Worker",
      description: "Works to improve individuals' well-being and resolve social issues.",
      videoUrl: "https://www.youtube.com/embed/Q1MKnKoauNo?si=FEAG-o89BWO5wHIv",
      skills: ["Empathy", "Communication", "Problem-Solving"],
      category: "Arts",
      additionalInfo1: "Social Workers help individuals, families, or communities navigate challenges and improve their quality of life.",
      additionalInfo2: "Think of a Social Worker as a guide who supports people through difficult times.",
      additionalInfo3: "For example, helping vulnerable children find safe homes or advocating for mental health awareness."
    },
    {
      id: 7,
      name: "Stock Market Analyst",
      description: "Analyzes financial markets to predict stock performance.",
      videoUrl: "https://www.youtube.com/embed/PmwIjtVRC88?si=4FjNq8HcxFHJpvBs",
      skills: ["Data Analysis", "Market Research", "Risk Management"],
      category: "Commerce",
      additionalInfo1: "A Stock Market Analyst studies financial data to predict and guide investments.",
      additionalInfo2: "Think of a Stock Market Analyst as a detective uncovering trends in numbers and graphs.",
      additionalInfo3: "For example, advising investors on whether to buy or sell shares of a company."
    },
    {
      id: 8,
      name: "Banker",
      description: "Manages financial operations for banks, assisting individuals and businesses.",
      videoUrl: "https://www.youtube.com/embed/Y2aI4TnUpr8?si=7i1JXXOO054yZbK8",
      skills: ["Customer Service", "Finance Management", "Analytical Thinking"],
      category: "Commerce",
      additionalInfo1: "Bankers handle money-related services like loans, accounts, and investments for clients.",
      additionalInfo2: "Imagine a Banker as a reliable partner for managing financial needs.",
      additionalInfo3: "For example, helping a client secure a home loan or advising on fixed deposits."
    },
    {
      id: 9,
      name: "Marketing Manager",
      description: "Develops and executes strategies to promote products or services.",
      videoUrl: "https://www.youtube.com/embed/example_video_marketing_manager",
      skills: ["Creativity", "Market Research", "Leadership"],
      category: "Commerce",
      additionalInfo1: "Marketing Managers plan campaigns to boost brand visibility and sales.",
      additionalInfo2: "Think of a Marketing Manager as a storyteller who makes products irresistible.",
      additionalInfo3: "For instance, creating an ad campaign for a new smartphone launch."
    },

    {
  id: 10,
  name: "Chartered Accountant (CA)",
  description: "Manages financial records, audits, and tax compliance for individuals and organizations.",
  videoUrl: "https://www.youtube.com/embed/example_video_chartered_accountant",
  skills: ["Mathematics", "Analytical Thinking", "Problem-Solving"],
  category: "Commerce",
  additionalInfo1: "Chartered Accountants ensure financial transparency and advise on economic strategies.",
  additionalInfo2: "Think of a CA as a financial doctor diagnosing and fixing monetary issues.",
  additionalInfo3: "For example, preparing a company’s annual financial statement or filing complex tax returns."
},
   {
      id: 11,
      name: "Cost Accountant",
      description: "Focuses on calculating and managing the costs of production and operations for businesses.",
      videoUrl: "https://www.youtube.com/embed/0hWtmLgHN9Y?si=3fVa1nLSID6hYDq3",
      skills: ["Cost Management", "Budgeting", "Financial Analysis"],
      category: "Commerce",
      additionalInfo1: "A Cost Accountant helps companies understand the cost of making their products or services, enabling them to price competitively and manage expenses efficiently.",
      additionalInfo2: "Think of a Cost Accountant as a detective who uncovers where a company spends money and suggests ways to save without compromising quality.",
      additionalInfo3: "For example, a cost accountant might analyze the cost of materials and labor to suggest a more affordable supplier or better resource allocation."
    },
    {
      id: 12,
      name: "Human Resources Manager (HR Manager)",
      description: "Manages the workforce of an organization, handling recruitment, employee relations, and training.",
      videoUrl: "https://www.youtube.com/embed/FLMc5Vj-puQ?si=2aYsR-w0RrYSNZ8G",
      skills: ["Communication", "Conflict Resolution", "Leadership"],
      category: "Commerce",
      additionalInfo1: "An HR Manager ensures that a company has the right people working efficiently by managing hiring, employee benefits, and workplace culture.",
      additionalInfo2: "Think of an HR Manager as a coach who trains and supports a team to perform at their best while keeping everyone happy and motivated.",
      additionalInfo3: "For instance, an HR Manager might organize team-building activities or design policies to improve employee satisfaction and productivity."
    },
    {
      id: 13,
      name: "Entrepreneur",
      description: "Creates and manages businesses, identifying opportunities to solve problems and generate profit.",
      videoUrl: "https://www.youtube.com/embed/lJjILQu2xM8?si=z8cBOIJJRnecwiUS",
      skills: ["Problem-Solving", "Risk Management", "Creativity"],
      category: "Commerce",
      additionalInfo1: "An Entrepreneur identifies problems in the market and creates innovative solutions, turning them into profitable businesses.",
      additionalInfo2: "Think of an Entrepreneur as an inventor and businessperson who turns ideas into reality and builds organizations around them.",
      additionalInfo3: "For example, an entrepreneur might launch an eco-friendly packaging company to address plastic pollution."
    },
    {
      id: 14,
      name: "Stock Broker",
      description: "Buys and sells stocks and other securities on behalf of clients.",
      videoUrl: "https://www.youtube.com/embed/vO43mOfkozc?si=zUvkeE984u5BafnR",
      skills: ["Analytical Thinking", "Risk Assessment", "Networking"],
      category: "Commerce",
      additionalInfo1: "A Stock Broker acts as a middleman, helping clients invest in shares, bonds, and other financial products to grow their wealth.",
      additionalInfo2: "Think of a Stock Broker as a guide in a financial marketplace, helping people buy and sell investments smartly.",
      additionalInfo3: "For example, a stock broker might advise a client to invest in technology stocks based on market trends and research."
    },
    {
      id: 15,
      name: "Event Manager",
      description: "Plans and organizes events, ensuring everything runs smoothly from start to finish.",
      videoUrl: "https://www.youtube.com/embed/hUdD4sQFZ4M?si=2xoPs7L75cgP_Kad",
      skills: ["Organizational Skills", "Time Management", "Creativity"],
      category: "Commerce",
      additionalInfo1: "An Event Manager is responsible for organizing events like weddings, conferences, and concerts, ensuring every detail is handled flawlessly.",
      additionalInfo2: "Think of an Event Manager as the director of a movie, orchestrating various elements to create a perfect final product.",
      additionalInfo3: "For instance, an event manager might coordinate with caterers, decorators, and performers for a music festival."
    },
    {
      id: 16,
      name: "Retail Manager",
      description: "Oversees the operations of retail stores, ensuring customer satisfaction and smooth business processes.",
      videoUrl: "https://www.youtube.com/embed/9OiDNWR0GIE?si=S0lk_3u8EKzSZ4ne",
      skills: ["Customer Service", "Leadership", "Inventory Management"],
      category: "Commerce",
      additionalInfo1: "A Retail Manager ensures that a store runs efficiently by managing staff, inventory, and customer interactions.",
      additionalInfo2: "Think of a Retail Manager as the captain of a ship, steering the store towards success while keeping the crew (employees) and passengers (customers) happy.",
      additionalInfo3: "For example, a retail manager might train staff to improve customer service or arrange special promotions to boost sales."
    },
    {
      id: 17,
      name: "Bank Manager",
      description: "Manages the operations and staff of a bank branch while ensuring excellent customer service.",
      videoUrl: "https://www.youtube.com/embed/NJ1R2aaHUMY?si=SCKIBKLnYZYNeMlf",
      skills: ["Leadership", "Financial Management", "Problem-Solving"],
      category: "Commerce",
      additionalInfo1: "A Bank Manager oversees daily operations in a bank, ensuring customers are satisfied and the branch meets its financial goals.",
      additionalInfo2: "Think of a Bank Manager as a conductor of an orchestra, ensuring all sections work in harmony to create a great performance (smooth banking experience).",
      additionalInfo3: "For instance, a bank manager might resolve customer issues, manage loan approvals, or ensure staff are trained in the latest banking technology."
    },
    {
      id: 18,
      name: "Business Consultant",
      description: "Provides expert advice to businesses to improve efficiency, solve problems, and achieve goals.",
      videoUrl: "https://www.youtube.com/embed/qZNAdOHu2mY?si=feFv-CFBAB3ukh18",
      skills: ["Analytical Thinking", "Problem-Solving", "Communication"],
      category: "Commerce",
      additionalInfo1: "A Business Consultant analyzes an organization's operations and suggests strategies for improvement and growth.",
      additionalInfo2: "Think of a Business Consultant like a mechanic for companies, diagnosing and fixing issues to make them run better.",
      additionalInfo3: "For example, a consultant might help a company reduce production costs or create a strategy to enter a new market."
    },
    {
      id: 19,
      name: "Actuary",
      description: "Uses mathematics, statistics, and financial theory to assess and manage risks.",
      videoUrl: "https://www.youtube.com/embed/9CVRG7H7E0M?si=q3Ukms4G2tUXIWCH",
      skills: ["Mathematics", "Risk Management", "Problem-Solving"],
      category: "Commerce",
      additionalInfo1: "An Actuary evaluates financial risks using mathematical models, helping organizations make informed decisions.",
      additionalInfo2: "Think of an Actuary as a fortune teller for businesses, using data and numbers instead of a crystal ball to predict future risks.",
      additionalInfo3: "For example, an actuary might calculate the risk of insuring a new product or help design a pension plan."
    },
    {
      id: 20,
      name: "E-commerce Specialist",
      description: "Manages online sales platforms and strategies to boost business performance.",
      videoUrl: "https://www.youtube.com/embed/YoJwGgs05_o?si=dHWGwhYCER2JPV_q",
      skills: ["Digital Marketing", "SEO", "Data Analysis"],
      category: "Commerce",
      additionalInfo1: "An E-commerce Specialist ensures that an online store attracts customers, sells products, and operates efficiently.",
      additionalInfo2: "Think of an E-commerce Specialist as a shopkeeper for an online store, ensuring it looks good, works smoothly, and attracts buyers.",
      additionalInfo3: "For example, an e-commerce specialist might optimize a website’s layout to improve user experience or run ad campaigns to increase traffic."
    },
    
    {
      id: 21,
      name: "Journalist",
      description: "Investigates and reports news and stories to inform the public through various media platforms.",
      videoUrl: "https://www.youtube.com/embed/8S1B5L9FA4o?si=u5Y6F1prnxF7laBy",
      skills: ["Research", "Communication", "Storytelling"],
      category: "Arts",
      additionalInfo1: "A Journalist gathers information and creates reports or stories to educate and inform the public about events, issues, and trends.",
      additionalInfo2: "Think of a Journalist as a storyteller who uncovers the truth and shares it with the world, ensuring people stay informed about important topics.",
      additionalInfo3: "For example, a journalist might report on a local election, interviewing candidates and analyzing their policies."
    },
    {
      id: 22,
      name: "Graphic Designer",
      description: "Creates visual content using software tools to communicate ideas and captivate audiences.",
      videoUrl: "https://www.youtube.com/embed/vkSOIkNWCww?si=eL-0mDLjmwj_U09B",
      skills: ["Creativity", "Adobe Photoshop", "Attention to Detail"],
      category: "Arts",
      additionalInfo1: "A Graphic Designer combines art and technology to create designs for advertisements, websites, logos, and more.",
      additionalInfo2: "Think of a Graphic Designer as an artist who uses digital tools instead of paintbrushes to create visually stunning and functional artwork.",
      additionalInfo3: "For instance, a graphic designer might design a company logo or create visuals for a social media campaign."
    },
    {
      id: 23,
      name: "Psychologist",
      description: "Studies human behavior and mental processes, helping individuals improve their well-being.",
      videoUrl: "https://www.youtube.com/embed/U0OR7QTShyE?si=d-BNkdf1c9PE02pN",
      skills: ["Empathy", "Research", "Critical Thinking"],
      category: "Arts",
      additionalInfo1: "A Psychologist helps people understand their thoughts, emotions, and behavior to improve their mental health and relationships.",
      additionalInfo2: "Think of a Psychologist as a guide who helps people navigate through emotional challenges and find solutions to their problems.",
      additionalInfo3: "For example, a psychologist might counsel a person dealing with stress or anxiety, helping them develop coping mechanisms."
    },
    {
      id: 24,
      name: "Social Worker",
      description: "Supports individuals and communities by addressing social challenges and improving their quality of life.",
      videoUrl: "https://www.youtube.com/embed/Q1MKnKoauNo?si=89e8zAj-VVll2UIe",
      skills: ["Compassion", "Problem-Solving", "Community Engagement"],
      category: "Arts",
      additionalInfo1: "A Social Worker helps people overcome challenges like poverty, education, or health issues, aiming to improve their lives.",
      additionalInfo2: "Think of a Social Worker as a bridge connecting people in need with resources and support systems.",
      additionalInfo3: "For example, a social worker might help a child access education or assist a family in finding affordable housing."
    },
    {
      id: 25,
      name: "Lawyer",
      description: "Provides legal advice, represents clients in court, and ensures justice is served.",
      videoUrl: "https://www.youtube.com/embed/ELzx16Op28s?si=_guqoXvd7FdszAGm",
      skills: ["Legal Knowledge", "Public Speaking", "Analytical Thinking"],
      category: "Arts",
      additionalInfo1: "A Lawyer uses their knowledge of the law to represent clients, solve disputes, and ensure justice is upheld.",
      additionalInfo2: "Think of a Lawyer as a problem-solver who defends and fights for people’s rights and fairness.",
      additionalInfo3: "For example, a lawyer might represent a client in a criminal trial or draft contracts for a business deal."
    },
    {
      id: 26,
      name: "Teacher",
      description: "Educates and inspires students by sharing knowledge and guiding their learning journey.",
      videoUrl: "https://www.youtube.com/embed/pxJN7D91ezE?si=VKuFgjCCnjGDIF-G",
      skills: ["Communication", "Patience", "Leadership"],
      category: "Arts",
      category:"Commerce", 
      category: "Science",
      additionalInfo1: "A Teacher shapes young minds by delivering knowledge, encouraging curiosity, and building life skills.",
      additionalInfo2: "Think of a Teacher as a gardener nurturing young plants, helping them grow into strong and capable individuals.",
      additionalInfo3: "For instance, a teacher might design lessons to make history fun or provide extra help to students struggling with math."
    },
    {
      id: 27,
      name: "Content Writer",
      description: "Writes engaging and informative content for websites, blogs, or other media platforms.",
      videoUrl: "https://www.youtube.com/embed/fjn8VE84wKg?si=_sbyyRIjQLoW_fq5",
      skills: ["Creativity", "SEO Knowledge", "Research"],
      category: "Arts",
      additionalInfo1: "A Content Writer creates written material that educates, entertains, or informs readers, tailored to specific audiences.",
      additionalInfo2: "Think of a Content Writer as a chef who crafts delicious 'word dishes' to feed readers' minds and imaginations.",
      additionalInfo3: "For example, a content writer might write articles on travel destinations or create product descriptions for an e-commerce site."
    },
    {
      id: 28,
      name: "Fashion Designer",
      description: "Designs clothing, accessories, and footwear, blending creativity with functionality.",
      videoUrl: "https://www.youtube.com/embed/Xfgou9imKPQ?si=bt-p7jGHaANnEUv7",
      skills: ["Creativity", "Sketching", "Attention to Detail"],
      category: "Arts",
      additionalInfo1: "A Fashion Designer creates stylish and functional clothing, often setting trends in the industry.",
      additionalInfo2: "Think of a Fashion Designer as an artist who uses fabric as their canvas, crafting pieces that express individuality.",
      additionalInfo3: "For instance, a fashion designer might create a bridal gown or design costumes for a movie production."
    },
    {
      id: 29,
      name: "Animator",
      description: "Creates animated visual content for films, video games, or advertisements.",
      videoUrl: "https://www.youtube.com/embed/4urMJTJk5Vc?si=Q6q_L_WiUx3ABi1q",
      skills: ["Creativity", "3D Modeling", "Storyboarding"],
      category: "Arts",
      additionalInfo1: "An Animator brings characters and stories to life using drawings, 3D models, or computer software.",
      additionalInfo2: "Think of an Animator as a magician who gives movement and personality to illustrations or objects.",
      additionalInfo3: "For example, an animator might create the characters and scenes for a children’s cartoon or a video game."
    },
    {
      id: 30,
      name: "Photographer",
      description: "Captures moments and tells stories through compelling photographs.",
      videoUrl: "https://www.youtube.com/embed/A9_PAcP1ufc?si=qiv6D-yHhnNyHokQ",
      skills: ["Photography", "Editing", "Composition"],
      category: "Arts",
      additionalInfo1: "A Photographer uses their skills to capture the essence of moments, whether for art, journalism, or advertising.",
      additionalInfo2: "Think of a Photographer as a storyteller who uses a camera instead of words to narrate beautiful and impactful stories.",
      additionalInfo3: "For instance, a photographer might shoot a wedding album, document wildlife in a forest, or create images for a fashion magazine."
    },
    {
      id: 31,
      name: "Doctor",
      description: "Diagnoses and treats illnesses, ensuring the health and well-being of patients.",
      videoUrl: "https://www.youtube.com/embed/u1yqNwhS184?si=VyNckjVr_O4XfmoQ",
      skills: ["Medical Knowledge", "Empathy", "Problem-Solving"],
      category: "Science",
      additionalInfo1: "A Doctor works to diagnose, treat, and prevent illnesses, ensuring the physical and mental health of individuals.",
      additionalInfo2: "Think of a Doctor as a detective who finds the cause of health problems and prescribes solutions to restore wellness.",
      additionalInfo3: "For instance, a doctor might treat a patient with the flu or perform a surgery to fix a broken bone."
    },
    {
      id: 32,
      name: "Engineer",
      description: "Applies science and mathematics to design, build, and maintain systems and structures.",
      videoUrl: "https://www.youtube.com/embed/Rw9VI0Vhf0Q?si=CQVH5D8UGYKuFwKO",
      skills: ["Problem-Solving", "Technical Skills", "Creativity","Critical Thinking","Mathematical Proficiency"],
      category: "Science",
      additionalInfo1: "An Engineer uses technical knowledge to innovate and solve real-world problems in fields like construction, technology, or transportation.",
      additionalInfo2: "Think of an Engineer as a builder who uses tools like computers and blueprints to create machines, structures, or systems.",
      additionalInfo3: "For example, an engineer might design a bridge, develop a smartphone app, or improve car engines."
    
    },
    {
      id: 33,
      name: "Astronomer",
      description: "Studies celestial bodies and phenomena in the universe.",
      videoUrl: "https://www.youtube.com/embed/hcdTgcaLNLw?si=XNfuib0raySyK7o3",
      skills: ["Research", "Physics", "Analytical Thinking"],
      category: "Science",
      additionalInfo1: "An Astronomer explores the universe, studying stars, planets, and galaxies to understand how they work.",
      additionalInfo2: "Think of an Astronomer as an explorer, but instead of traveling, they observe space using telescopes and data analysis.",
      additionalInfo3: "For instance, an astronomer might study black holes or discover new planets in distant solar systems."
    },
    {
      id: 34,
      name: "Environmental Scientist",
      description: "Analyzes environmental problems and develops solutions to protect ecosystems.",
      videoUrl: "https://www.youtube.com/embed/kB0JA7jsqMw?si=WVJ9z4vlpZ0cYA_D",
      skills: ["Ecology", "Critical Thinking", "Research","Scientific Knowledge","Fieldwork Skills"],
      category: "Science",
      additionalInfo1: "An Environmental Scientist studies the environment to find ways to protect it from pollution and other threats.",
      additionalInfo2: "Think of an Environmental Scientist as a guardian of nature, working to keep air, water, and land clean and safe.",
      additionalInfo3: "For example, they might test water quality in rivers or develop strategies to combat climate change."
    },
    {
      id: 35,
      name: "Biotechnologist",
      description: "Uses living organisms to create products and improve health, agriculture, and the environment.",
      videoUrl: "https://www.youtube.com/embed/0yJPkn_nJK4?si=T326YqMyIz6e0MvZ",
      skills: ["Biology", "Problem-Solving", "Laboratory Skills"],
      category: "Science",
      additionalInfo1: "A Biotechnologist applies biological knowledge to create solutions in medicine, agriculture, and industry.",
      additionalInfo2: "Think of a Biotechnologist as a scientist who uses biology to invent new medicines, grow better crops, or clean up pollution.",
      additionalInfo3: "For instance, a biotechnologist might develop a vaccine or create genetically modified crops to increase food production."
    },
    {
      id: 36,
      name: "Pharmacist",
      description: "Prepares and dispenses medications, advising patients on their proper use.",
      videoUrl: "https://www.youtube.com/embed/23M4ZBMab60?si=MQbfKqW_deu35jhA",
      skills: ["Medical Knowledge", "Attention to Detail", "Customer Service", "Adaptability"],
      category: "Science",
      additionalInfo1: "A Pharmacist ensures that patients receive the right medicines and understand how to use them safely.",
      additionalInfo2: "Think of a Pharmacist as a trusted advisor who provides medicines and guidance for better health.",
      additionalInfo3: "For example, a pharmacist might prepare prescriptions, recommend over-the-counter medicines, or educate patients about side effects."
    },
    {
      id: 37,
      name: "Forensic Scientist",
      description: "Analyzes physical evidence from crime scenes to assist in solving cases.",
      videoUrl: "https://www.youtube.com/embed/10wDv5eJ7Ro?si=A7eY0eL8legt1l7Y",
      skills: ["Analytical Thinking", "Chemistry", "Attention to Detail", " Collaboration"],
      category: "Science",
      additionalInfo1: "A Forensic Scientist uses scientific techniques to analyze evidence and help law enforcement solve crimes.",
      additionalInfo2: "Think of a Forensic Scientist as a crime scene detective who uses lab tests and data to uncover the truth.",
      additionalInfo3: "For instance, they might analyze fingerprints, DNA, or substances found at a crime scene."
    },
    {
      id: 38,
      name: "Physicist",
      description: "Studies the laws of nature, exploring concepts like energy, matter, and the universe.",
      videoUrl: "https://www.youtube.com/embed/He0EyxmfE9g?si=Yww5740hG-fKqw9Y",
      skills: ["Mathematics", "Research", "Problem-Solving"],
      category: "Science",
      additionalInfo1: "A Physicist investigates how the universe works, discovering principles that govern everything from atoms to galaxies.",
      additionalInfo2: "Think of a Physicist as a curious mind who seeks to understand the mysteries of the universe through experiments and equations.",
      additionalInfo3: "For example, a physicist might study the properties of black holes or develop theories about quantum mechanics."
    },
    {
      id: 45,
      name: "Architecture Field",
      description: "create, design ,plans, designs, and oversees the construction of buildings ",
      videoUrl: "https://www.youtube.com/embed/example_video_content_writer",
      skills: ["creativity", "Problem Solving", "visualization", "Mathematical proificiency"],
      category: "Science",
      additionalInfo1: "Architecture is the art and science of designing and constructing buildings and other physical structures. It involves planning, designing, and overseeing the construction of spaces that are functional, safe, and aesthetically pleasing. Architects combine creativity with technical knowledge to create environments that enhance our lives." ,
      additionalInfo2: "Imagine you have the power to shape the world around you. As an architect, you design buildings and spaces that people use every day, from homes and offices to parks and museums. You create environments that are not only beautiful but also functional and sustainable, making a lasting impact on society.",
      additionalInfo3: "Consider the role of an architect. An architect designs a new school, ensuring it has enough classrooms, natural light, and safe materials. They work with engineers and builders to bring their vision to life, creating a space where students can learn and thrive. Every building you see around you was designed by an architect, making their work essential to our daily lives",
    },
    {
      id: 40,
      name: "Data Scientist",
      description: "Analyzes and interprets complex data to aid decision-making and solve real-world problems.",
      videoUrl: "https://www.youtube.com/embed/uIUvpJdYgSA?si=irC4c6g_xRMx6bjG",
      skills: ["Data Analysis", "Machine Learning", "Programming"],
      category: "Science",
      additionalInfo1: "A Data Scientist turns raw data into meaningful insights that help businesses and organizations make better decisions.",
      additionalInfo2: "Think of a Data Scientist as a modern detective who uses data and algorithms to uncover patterns and trends.",
      additionalInfo3: "For example, a data scientist might analyze customer data to predict future shopping trends or optimize business strategies."
    },
    {
      id: 41,
      name: "Mechanical Engineer",
      description: "Designs and manufactures mechanical systems and machines.",
      videoUrl: "https://www.youtube.com/embed/GB8jEPwFmq0?si=OMhTCCIeNLx5GFK7",
      skills: ["Problem-Solving", "Mathematics", "Technical Knowledge"],
      category: "Science",
      subcategory: "Engineering",
      additionalInfo1: "A Mechanical Engineer focuses on designing, analyzing, and maintaining mechanical systems used in industries like manufacturing, automotive, and aerospace.",
      additionalInfo2: "Think of a Mechanical Engineer as a creator of machines, from simple engines to complex robots.",
      additionalInfo3: "For example, a mechanical engineer might design a car engine or a robotic arm for production lines."
    },
    {
      id: 42,
      name: "Civil Engineer",
      description: "Plans, designs, and supervises the construction of infrastructure like roads, bridges, and buildings.",
      videoUrl: "https://www.youtube.com/embed/psJhGw9qhqs?si=557rWc3k_WamVcov",
      skills: ["Project Management", "Structural Analysis", "Teamwork"],
      category: "Science",
      subcategory: "Engineering",
      additionalInfo1: "A Civil Engineer focuses on creating and maintaining the infrastructure we use every day.",
      additionalInfo2: "Think of a Civil Engineer as a city builder, ensuring structures are safe, functional, and sustainable.",
      additionalInfo3: "For instance, they might design earthquake-resistant buildings or oversee road construction."
    },
    
    {
      id: 43,
      name: "Cardiologist",
      description: "Specializes in diagnosing and treating heart-related diseases.",
      videoUrl: "https://www.youtube.com/embed/bzW1ynK_J28?si=U6IQ1tm2WMftCUSs",
      skills: ["Critical Thinking", "Medical Knowledge", "Attention to Detail"],
      category: "Science",
      subcategory: "Medicine",
      additionalInfo1: "A Cardiologist focuses on the health of the heart and blood vessels, treating conditions like heart attacks and hypertension.",
      additionalInfo2: "Think of a Cardiologist as a heart doctor who helps keep the cardiovascular system running smoothly.",
      additionalInfo3: "For example, they might perform heart surgeries or recommend lifestyle changes to improve heart health."
    },
    {
      id: 44,
      name: "Pediatrician",
      description: "Provides medical care for infants, children, and adolescents.",
      videoUrl: "https://www.youtube.com/embed/YnbcVw9Zm20?si=J5wvVipmgef6f0hI",
      skills: ["Empathy", "Medical Knowledge", "Communication"],
      category: "Science",
      subcategory: "Medicine",
      additionalInfo1: "A Pediatrician focuses on the physical and mental well-being of children, ensuring their healthy growth and development.",
      additionalInfo2: "Think of a Pediatrician as a child’s doctor who provides care tailored to young patients.",
      additionalInfo3: "For instance, they might treat childhood illnesses like flu or guide parents on proper nutrition for their kids."
    },
    {
      id: 45,
      name: "Content Writer",
      description: "Creates engaging written material for websites, blogs, and social media.",
      videoUrl: "https://www.youtube.com/embed/example_video_content_writer",
      skills: ["Writing", "Research", "Creativity"],
      category: "Arts",
      additionalInfo1: "Content Writers craft written content that educates, entertains, or markets to audiences.",
      additionalInfo2: "Think of a Content Writer as a storyteller reaching audiences through words.",
      additionalInfo3: "For instance, writing a blog post on the latest technology trends or a captivating ad slogan."
    },
    {
      id: 46,
      name: "Software Engineer",
      description: "Develop and maintain software systems, applications, and platforms.",
      videoUrl: "https://www.youtube.com/embed/Fn1wRGMYbL0?si=yodgLVykjtZnDLAQ",
      skills: ["Programming", "Problem-Solving", "Software Development", "Algorithm Design", "Teamwork", "Communication"],
      category: "Science",
      additionalInfo1: "Software engineers design and develop software solutions to meet the needs of users. They work with a variety of programming languages, such as Java, Python, C++, and JavaScript, to create systems, applications, and websites.",
      additionalInfo2: "A software engineer must have strong problem-solving skills, a deep understanding of algorithms and data structures, and the ability to work in teams to deliver high-quality software. They also need to keep learning to stay up-to-date with new technologies and tools.",
      additionalInfo3: "Some software engineers specialize in areas like web development, mobile app development, or systems programming, while others focus on creating software tools, databases, or working on machine learning and AI projects."
    }
    
    
   
    




    // Add more career options here
  ];

  const [savedCareers, setSavedCareers] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState(null); // Track the selected career for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const handleSaveCareer = (id) => {
    setSavedCareers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((careerId) => careerId !== id);
      }
      return [...prev, id];
    });
  };

  const openModal = (career) => {
    setSelectedCareer(career);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCareer(null); // Reset selected career when closing
  };

  const categories = ["Science", "Commerce", "Arts"];// Define categories here

  return (
    <div className="explore">
      <h2 style={{textAlign: "center", fontSize:"revert"}}>Explore Career Options</h2>
      <p>Here's collective information for you !</p>    
       {categories.map((category) => (
        <div key={category} className="career-category">
          <h3 style={{textAlign: "center", fontSize:"xx-large" , backgroundColor:"AppWorkspace" , padding:"25px"}}>{category} Careers</h3>
          
          <div className="career-cards">
            {careerOptions
              .filter((career) => career.category === category)
              .map((career) => (
                <div key={career.id} className="career-card">
                  <iframe
                    width="100%"
                    height="200"
                    src={career.videoUrl}
                    title={career.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h3>{career.name}</h3>
                  <p>{career.description}</p>
                  <p>
                    <strong>Skills:</strong> {career.skills.join(", ")}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(career)}
                  > 
                    Know More
                  </button>
                  <button
                    onClick={() => handleSaveCareer(career.id)}
                    className="btn"
                    style={{
                      backgroundColor: savedCareers.includes(career.id)
                        ? "green"
                        : "gray",
                      color: "white",
                    }}
                  >
                    {savedCareers.includes(career.id) ? "Saved" : "Save"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Modal */}
{isModalOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h5 className="modal-title">{selectedCareer?.name}</h5>
        <button type="button" className="close" onClick={closeModal}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <h5>What is this Profession?</h5>
        <p>{selectedCareer?.additionalInfo1}</p>
        <h5>Think of this Profession like this:</h5>
        <p>{selectedCareer?.additionalInfo2}</p>
        <h5>Hands-on Example:</h5>
        <p>{selectedCareer?.additionalInfo3}</p>
        <h5>Skills Required:</h5>
        <ul>
          {selectedCareer?.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <iframe
          width="100%"
          height="200"
          //src={selectedCareer?.videoUrl}
          title={selectedCareer?.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="close">
        <button type="button" className="btn btn-secondary" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  </div>
)}

{/* saved career cards */}
<h3 style={{textAlign: "center", fontSize:"xx-large" , backgroundColor:"#f7f7f7" , padding:"25px"}}>📌 Your Saved Careers:</h3>
<div className="career-cards">
  {savedCareers.map((careerId) => {
    const career = careerOptions.find((c) => c.id === careerId);
    return (
      <div key={career.id} className="career-card">
        <iframe
          width="100%"
          height="200"
          src={career.videoUrl}
          title={career.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h3>{career.name}</h3>
        <p>{career.description}</p>
        <button className="btn" onClick={() => handleSaveCareer(career.id)}>
          Remove from Saved
        </button>
      </div>
    );
  })}
</div>
{/* list of save careers */}
<h3> 📌 Your Saved Careers:</h3>
      <ul>
        {savedCareers.map((careerId) => {
          const career = careerOptions.find((c) => c.id === careerId);
          return <li key={career.id}>{career.name}</li>;
        })}
      </ul>
    </div>
  );
} 

export default Explore;


