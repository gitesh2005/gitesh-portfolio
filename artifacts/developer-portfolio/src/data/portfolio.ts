/**
 * EDITABLE PORTFOLIO CONFIG
 * Replace the placeholder identity, links, and milestones below.
 */
export const portfolio = {
  identity: {
    name: 'Gitesh',
    shortName: 'G',
    role: 'Computer Science Engineer',
    location: 'Palwal, Haryana',
    email: 'giteshsorout@gmail.com',
    phone: '+91 8307552640',
    availability: 'Open to entry-level roles',
    resumeUrl: '/resume/Gitesh_CSE_GLAU.pdf',
    intro: 'I build reliable software, ask better questions, and keep learning in public.',
    statement: 'A curious engineer at the beginning of a long, useful career in technology.',
  },
  social: {
    github: 'https://github.com/gitesh2005',
    linkedin: 'https://www.linkedin.com/in/gitesh-sorout-146697289/',
    leetcode: 'https://leetcode.com/u/chrishna_2005/',
    email: 'giteshsorout@gmail.com',
  },
  about: [
    'I am a Computer Science graduate who enjoys turning fuzzy problems into clear, maintainable systems. My strongest work sits at the intersection of thoughtful interfaces, dependable APIs, and the small details that make software easier to trust.',
    'I am early in my career, but serious about the craft: reading source code, documenting decisions, testing assumptions, and shipping things that people can actually use. I am currently looking for a team where I can contribute from day one and grow with good engineers.',
  ],
  focus: [
    { label: 'Foundation', value: 'Computer Science Engineering' },
    { label: 'Interests', value: 'Software development & problem solving' },
    { label: 'Learning loop', value: 'Build → measure → improve' },
  ],
  skills: [
    { group: 'Programming languages', items: ['Java', 'Python', 'JavaScript'] },
    { group: 'Web development', items: ['HTML', 'CSS', ,'Express.js', 'React', 'Node.js', 'REST APIs'] },
    { group: 'Databases', items: ['MySQL',  'MongoDB'] },
    { group: 'Tools & technologies', items: ['Git', 'GitHub', 'VS Code'] },
  ],
  projects: [
  {
    number: '01',
    title: 'AI Expense Tracker',
    category: 'Full-stack AI application',
    description: 'A full-stack expense tracker that removes manual data entry. Type, speak, or upload a UPI/payment screenshot, and AI auto-categorizes the expense, extracts the merchant and amount, and suggests where to cut back. Includes a category donut chart, Excel export, and monthly history with month-over-month change. The demo runs on a free-tier server, so the first load may take 30-60 seconds to wake up.',
    impact: 'Cuts manual entry to a single line, voice note, or screenshot upload, with AI handling categorization, OCR, and savings insights.',
    stack: ['React', 'Vite', 'Recharts', 'Axios', 'Spring Boot', 'MongoDB', 'Apache POI', 'Groq API', 'Docker', 'Render', 'Netlify'],
    image: '/images/image.png',
    accent: 'ink',
    live: 'https://ai-expense-tracker-frontend.netlify.app',
    source: 'https://github.com/gitesh2005/AI-Expense-Tracker',
  },
  {
    number: '02',
    title: 'Calories Burned Prediction App',
    category: 'Machine learning application',
    description: 'A machine learning web app that predicts calories burned from age, gender, weight, height, workout duration, and workout type. A Linear Regression model is trained on a cleaned gym members exercise dataset and served through an interactive Streamlit interface that returns an instant estimate.',
    impact: 'Turns raw gym and fitness data into an instant, personalized calorie estimate through a simple form-based interface.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Streamlit'],
    image: '/images/image copy.png',
    accent: 'teal',
    live: 'https://gitesh2005-calorie-burned-predicition-app-0wwpso.streamlit.app/',
    source: 'https://github.com/gitesh2005/calorie_burned_predicition',
  },
  {
  number: '03',
  title: 'Employee Payroll Management System',
  category: 'Full-stack web application',
  description: 'A full-stack web application to manage employee records, generate payroll, and calculate salaries. It has an interactive dashboard to add, view, and delete employees, automatic net salary calculation, a real-time payroll summary, backend validations, and a light/dark mode toggle, all connected through a REST API.',
  impact: 'Automates net salary calculation and payroll generation, replacing manual record keeping with one deployed app.',
  stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Render', 'Netlify'],
  image: '/images/screencapture-employee-payroll-managementsystem-netlify-app-2026-09-29-10_57_24.png',
  accent: 'copper',
  live: 'https://employee-payroll-managementsystem.netlify.app/',
  source: 'https://github.com/gitesh2005/Employee-PayRoll-System',
},
  ],
education: [
  {
    period: '2023 — 2027',
    degree: 'BTech — Computer Science Engineering',
    school: 'GLA University, Mathura',
    detail: 'Current CPI: 7.41',
  },
],
experience: [
  {
    period: 'June 2025 — August 2025',
    role: 'Machine Learning with Generative AI Intern',
    company: 'W3Grads',
    detail:
      'Worked on machine learning and Generative AI concepts through hands-on projects, explored data preprocessing and model development, experimented with AI-powered solutions, and gained practical experience in applying ML and GenAI techniques to real-world problems.',
  },
],
  certifications: [
  { title: 'SQL (Basic)', issuer: 'HackerRank', year: '2026', link: 'https://drive.google.com/file/d/1BHZIuQeCilOpLMIGUJ7u6l5oOCdsIOP9/view?usp=drivesdk' },
  { title: 'Java (Basic)', issuer: 'HackerRank', year: '2026', link: 'https://drive.google.com/file/d/1cfW4awY7fxAmpB77cLpfiwkPtuPiguGM/view?usp=drivesdk' },
  { title: 'Data Analyst in Power BI', issuer: 'DataCamp', year: '2025', link: 'https://drive.google.com/file/d/1DnFEsQyxhegYeL4fJpy-igsnV7M87VDc/view?usp=drivesdk' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte (Forage)', year: '2025', link: 'https://drive.google.com/file/d/1gOUbyoQ18S4Mgo80wNaVn-XpB05ZFCso/view?usp=drivesdk' },
  { title: 'Data Analytics and Visualization Job Simulation', issuer: 'Accenture (Forage)', year: '2024', link: 'https://drive.google.com/file/d/1zbVF0ofG0mfxnofRdqocMLORzm-aRNaE/view?usp=drivesdk' },
],
  achievements: [],
profiles: [
  {
    label: 'GitHub',
    value: 'Projects, experiments, and code',
    href: 'https://github.com/gitesh2005',
    stat: 'gitesh2005',
  },
  {
    label: 'LinkedIn',
    value: 'Professional profile and connections',
    href: 'https://www.linkedin.com/in/gitesh-sorout-146697289/',
    stat: 'Gitesh Sorout',
  },
  {
    label: 'LeetCode',
    value: 'Problem-solving and coding practice',
    href: 'https://leetcode.com/u/chrishna_2005/',
    stat: 'chrishna_2005',
  },
  {
    label: 'HackerRank',
    value: 'Coding practice and certifications',
    href: 'https://www.hackerrank.com/profile/_2315200012',
    stat: '_2315200012',
  },
],


} as const;

export type PortfolioProject = (typeof portfolio.projects)[number];