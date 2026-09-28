/**
 * EDITABLE PORTFOLIO CONFIG
 * Replace the placeholder identity, links, and milestones below.
 */
export const portfolio = {
  identity: {
    name: '[YOUR NAME]',
    shortName: 'YN',
    role: 'Computer Science Engineer',
    location: '[YOUR LOCATION]',
    email: '[YOUR EMAIL]',
    phone: '[YOUR PHONE]',
    availability: 'Open to entry-level roles',
    resumeUrl: '#contact',
    intro: 'I build reliable software, ask better questions, and keep learning in public.',
    statement: 'A curious engineer at the beginning of a long, useful career in technology.',
  },
  social: {
    github: '',
    linkedin: '',
    leetcode: '',
    email: '',
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
    { group: 'Programming languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C / C++'] },
    { group: 'Web development', items: ['HTML', 'CSS', 'React', 'Node.js', 'REST APIs'] },
    { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { group: 'Tools & technologies', items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Linux'] },
  ],
  projects: [
    {
      number: '01',
      title: 'Full-stack web application',
      category: 'Example project',
      description: 'A full-stack web application designed to solve a practical problem using a modern frontend, backend API, and database.',
      impact: 'Add a measurable result or learning here.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      accent: 'copper',
      live: '',
      source: '',
    },
    {
      number: '02',
      title: 'AI / ML project',
      category: 'Example project',
      description: 'A machine learning project demonstrating data preprocessing, model development, evaluation, and practical application.',
      impact: 'Add the outcome or evaluation metric here.',
      stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      accent: 'teal',
      live: '',
      source: '',
    },
    {
      number: '03',
      title: 'Developer utility application',
      category: 'Example project',
      description: 'A practical software project focused on improving productivity or automating a repetitive task.',
      impact: 'Add the time saved or workflow improved here.',
      stack: ['Python', 'JavaScript'],
      accent: 'ink',
      live: '',
      source: '',
    },
  ],
  education: [
    { period: '[YEAR] — [YEAR]', degree: '[YOUR DEGREE] — Computer Science Engineering', school: '[YOUR UNIVERSITY]', detail: 'Add relevant coursework, CGPA, or academic details here. Do not add grades or achievements until they are yours.' },
  ],
  experience: [
    { period: '[START DATE] — [END DATE]', role: 'Software Development Intern', company: '[COMPANY NAME]', detail: 'Add what you worked on, developed, collaborated on, and learned.' },
  ],
  certifications: [
    { title: '[CERTIFICATION NAME]', issuer: '[ISSUER]', year: '[YEAR]' },
  ],
  achievements: [
    '[Add a hackathon, coding achievement, workshop, course, or academic achievement here]',
  ],
  profiles: [
    { label: 'GitHub', value: 'Projects, experiments, and notes', href: '', stat: '[YOUR GITHUB]' },
    { label: 'LinkedIn', value: 'Professional story and conversations', href: '', stat: '[YOUR LINKEDIN]' },
    { label: 'LeetCode', value: 'Problem-solving practice', href: '', stat: '[YOUR LEETCODE]' },
    { label: 'HackerRank', value: 'Practice and certifications', href: '', stat: '[YOUR HACKERRANK]' },
    { label: 'CodeChef', value: 'Competitive programming', href: '', stat: '[YOUR CODECHEF]' },
    { label: 'GeeksforGeeks', value: 'Learning and problem solving', href: '', stat: '[YOUR GEEKSFORGEEKS]' },
  ],
} as const;

export type PortfolioProject = (typeof portfolio.projects)[number];