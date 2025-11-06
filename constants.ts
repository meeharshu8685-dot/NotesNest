import { type Semester, type ResourceCategory } from './types';

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    title: 'Semester 1',
    color: 'bg-sky-100',
    subjects: [
      { id: 's1-cs101', name: 'Intro to Programming', description: 'Fundamentals of programming using Python.', term: 1, links: { weekNotes: 'https://drive.google.com/drive/folders/1nu5Yez3BseLuiYHcbfKBWzY-hpF1x5gR?usp=drive_link', fullNotes: 'https://drive.google.com/file/d/1rLTgU08_QOFqgYgICw_YEbK7bcYXVop3/view?usp=drive_link', books: 'https://drive.google.com/drive/folders/1TUvVs9PZcTHBMgbi0LVmu2q-3qwRma7j?usp=drive_link', more: 'https://drive.google.com/drive/folders/1CKKrkWzkHpv9Lq6aHeYZATpv1NVgCRuH?usp=drive_link' } },
      { id: 's1-en101', name: 'Writing Practice', description: 'Developing fundamental writing skills for academic and professional contexts.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's1-ma102', name: 'Discrete Mathematics', description: 'Introduction to logic, sets, functions, and graph theory.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's1-ee101', name: 'Basic Electronics', description: 'Introduction to electronic circuits and devices.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's1-cs102', name: 'Intro to Computing Systems', description: 'Understanding computer architecture and systems programming.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's1-ma103', name: 'Linear Algebra and its Applications', description: 'Study of vector spaces, matrices, and linear transformations.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
    ],
  },
  {
    id: 2,
    title: 'Semester 2',
    color: 'bg-emerald-100',
    subjects: [
      { id: 's2-cs201', name: 'Data Structures', description: 'Arrays, linked lists, trees, and graphs.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's2-ma201', name: 'Calculus II', description: 'Sequences, series, and advanced integration.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's2-ee201', name: 'Circuit Theory', description: 'Analysis of electrical circuits.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's2-en201', name: 'Technical Communication', description: 'Effective professional writing and presentation.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
    ],
  },
  {
    id: 3,
    title: 'Semester 3',
    color: 'bg-rose-100',
    subjects: [
      { id: 's3-cs301', name: 'Algorithms', description: 'Algorithm design and complexity analysis.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's3-cs302', name: 'Operating Systems', description: 'Core concepts of modern operating systems.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's3-db301', name: 'Database Systems', description: 'Relational database design and SQL.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's3-se301', name: 'Software Engineering', description: 'Software development life cycle models.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
    ],
  },
    {
    id: 4,
    title: 'Semester 4',
    color: 'bg-amber-100',
    subjects: [
      { id: 's4-cn401', name: 'Computer Networks', description: 'Protocols and architecture of computer networks.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's4-ai401', name: 'Artificial Intelligence', description: 'Introduction to AI concepts and techniques.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's4-ml401', name: 'Machine Learning', description: 'Foundational machine learning algorithms.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's4-cd401', name: 'Compiler Design', description: 'Principles of compiler construction.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
    ],
  },
  {
    id: 5,
    title: 'Semester 5',
    color: 'bg-violet-100',
    subjects: [
      { id: 's5-wd501', name: 'Web Development', description: 'Full-stack web application development.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's5-ma501', name: 'Mobile App Development', description: 'Building applications for iOS and Android.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's5-cc501', name: 'Cloud Computing', description: 'Fundamentals of cloud services and architecture.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's5-is501', name: 'Information Security', description: 'Principles of cybersecurity and data protection.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
    ],
  },
  {
    id: 6,
    title: 'Semester 6',
    color: 'bg-fuchsia-100',
    subjects: [
      { id: 's6-ds601', name: 'Distributed Systems', description: 'Concepts of distributed computing systems.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's6-cp601', name: 'Capstone Project', description: 'A culminating project demonstrating skills.', term: 1, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's6-nlp601', name: 'Natural Language Processing', description: 'Teaching computers to understand human language.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
      { id: 's6-cg601', name: 'Computer Graphics', description: 'Rendering 2D and 3D graphics.', term: 2, links: { weekNotes: '#', fullNotes: '#', books: '#', more: '#' } },
    ],
  },
];

export const RESOURCES: ResourceCategory[] = [
  {
    category: 'YouTube Playlists',
    items: [
      { name: 'CS50\'s Intro to Computer Science', url: 'https://www.youtube.com/playlist?list=PLhQjrBD2T3828ZVbK0OC1TBY4U2g-rO5O', description: 'Harvard\'s acclaimed introductory CS course.' },
      { name: 'MIT 6.006 Intro to Algorithms', url: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp', description: 'In-depth lectures on algorithms and data structures.' },
      { name: '3Blue1Brown: Essence of Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', description: 'Intuitive, visual explanations of linear algebra concepts.' },
    ],
  },
  {
    category: 'Free eBooks & Documentation',
    items: [
      { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/', description: 'A modern introduction to programming.' },
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'The ultimate resource for web technologies.' },
      { name: 'React.dev', url: 'https://react.dev/', description: 'The official documentation for React.' },
    ],
  },
  {
    category: 'Online Tools & Compilers',
    items: [
      { name: 'Compiler Explorer', url: 'https://godbolt.org/', description: 'See what your code does at the assembly level.' },
      { name: 'CodePen', url: 'https://codepen.io/', description: 'An online community for testing and showcasing front-end code.' },
      { name: 'Excalidraw', url: 'https://excalidraw.com/', description: 'A virtual whiteboard for sketching diagrams.' },
    ],
  },
];