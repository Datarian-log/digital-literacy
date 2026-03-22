import { Domain, Level, type Recommendation, type WorkshopOption } from '../types';

export const recommendations: Recommendation[] = [
  // ========================================
  // Information Search & Evaluation
  // ========================================
  {
    domain: Domain.INFORMATION_SEARCH,
    level: Level.BEGINNER,
    title: 'Introduction to Information Search',
    description: 'Join the library\'s foundational workshop to learn search operators, filters, and basic search strategies. You will practice constructing effective queries and learn when to use different search tools.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Use Boolean operators (AND, OR, NOT) effectively',
      'Apply search filters for date, type, and domain',
      'Distinguish between general and academic search tools',
    ],
    estimatedTime: '2 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.INFORMATION_SEARCH,
    level: Level.BEGINNER,
    title: 'Media Literacy Basics',
    description: 'An introductory online course covering fake news detection and the fundamentals of source evaluation. Learn the SIFT method and practice evaluating real-world examples.',
    resourceType: 'Online Course',
    learningObjectives: [
      'Identify common characteristics of misinformation',
      'Apply the SIFT method (Stop, Investigate, Find, Trace)',
      'Evaluate source credibility using basic criteria',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.INFORMATION_SEARCH,
    level: Level.INTERMEDIATE,
    title: 'Advanced Search Strategies Guide',
    description: 'Deepen your skills with Boolean search, citation tracking, and fact-checking tool usage. This guide walks through real research scenarios to build practical expertise.',
    resourceType: 'Guide',
    learningObjectives: [
      'Construct multi-step search strategies for complex topics',
      'Use citation tracking to find related research',
      'Apply professional fact-checking tools and techniques',
    ],
    estimatedTime: '4 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.INFORMATION_SEARCH,
    level: Level.INTERMEDIATE,
    title: 'Critical Information Evaluation Workshop',
    description: 'Practice professional evaluation techniques including the CRAAP test and lateral reading. Work through case studies to build critical evaluation habits.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Apply the CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose)',
      'Practice lateral reading to verify claims quickly',
      'Evaluate sources across different media types',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.INFORMATION_SEARCH,
    level: Level.ADVANCED,
    title: 'Fact-Checking Project',
    description: 'Participate in a hands-on project where you systematically fact-check real news and information. Build a portfolio of verified investigations using professional methodologies.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Conduct systematic fact-checking investigations',
      'Use reverse image search and metadata analysis',
      'Document and present verification findings',
    ],
    estimatedTime: '6 hours',
    difficulty: 'Advanced',
  },
  {
    domain: Domain.INFORMATION_SEARCH,
    level: Level.ADVANCED,
    title: 'Advanced Information Literacy: OSINT',
    description: 'Learn advanced investigation techniques and digital verification methodologies using open-source intelligence. Explore tools used by professional journalists and researchers.',
    resourceType: 'Online Course',
    learningObjectives: [
      'Apply open-source intelligence (OSINT) techniques',
      'Use advanced digital verification tools',
      'Conduct comprehensive source investigations',
    ],
    estimatedTime: '8 hours',
    difficulty: 'Advanced',
  },

  // ========================================
  // AI Literacy
  // ========================================
  {
    domain: Domain.AI_LITERACY,
    level: Level.BEGINNER,
    title: 'Understanding Generative AI',
    description: 'An introductory course that explains the basic concepts and working principles of generative AI like ChatGPT and Claude. Learn what AI can and cannot do reliably.',
    resourceType: 'Online Course',
    learningObjectives: [
      'Explain how large language models generate text',
      'Identify common AI capabilities and limitations',
      'Recognize when AI-generated content may be unreliable',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.AI_LITERACY,
    level: Level.BEGINNER,
    title: 'Academic Ethics in the AI Era',
    description: 'A guide to the ethical standards and guidelines for using AI tools in academic assignments. Understand what constitutes appropriate vs. inappropriate AI use.',
    resourceType: 'Guide',
    learningObjectives: [
      'Understand your institution\'s AI usage policies',
      'Distinguish between acceptable and unacceptable AI assistance',
      'Properly disclose and cite AI tool usage in assignments',
    ],
    estimatedTime: '2 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.AI_LITERACY,
    level: Level.INTERMEDIATE,
    title: 'AI Tools Hands-On Workshop',
    description: 'Practice effective prompt writing techniques and methods for verifying AI-generated responses. Build a personal toolkit of prompt templates for academic tasks.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Write structured prompts with context, constraints, and format specifications',
      'Use follow-up prompts to refine and improve AI outputs',
      'Cross-verify AI-generated information with primary sources',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.AI_LITERACY,
    level: Level.INTERMEDIATE,
    title: 'AI and Critical Thinking',
    description: 'Learn to identify AI hallucinations, recognize bias, and cross-verify AI outputs. Develop a systematic approach to evaluating AI-generated content.',
    resourceType: 'Guide',
    learningObjectives: [
      'Identify common patterns of AI hallucination and fabrication',
      'Recognize potential biases in AI-generated content',
      'Apply a verification checklist for AI outputs',
    ],
    estimatedTime: '4 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.AI_LITERACY,
    level: Level.ADVANCED,
    title: 'Advanced AI for Research',
    description: 'Advanced techniques for using AI as a research tool: literature analysis, data processing, and code generation. Learn to integrate AI effectively into your research workflow.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Use AI for systematic literature screening and synthesis',
      'Apply AI-assisted data cleaning and analysis techniques',
      'Integrate AI tools into reproducible research workflows',
    ],
    estimatedTime: '6 hours',
    difficulty: 'Advanced',
  },
  {
    domain: Domain.AI_LITERACY,
    level: Level.ADVANCED,
    title: 'AI Ethics and Social Impact',
    description: 'An in-depth analysis of AI\'s societal impact, bias, and regulatory trends. Examine case studies of AI harms and develop frameworks for responsible AI use in research.',
    resourceType: 'Book',
    learningObjectives: [
      'Analyze real-world cases of AI bias and harm',
      'Evaluate the ethical implications of AI in your research field',
      'Apply responsible AI frameworks to academic work',
    ],
    estimatedTime: '10 hours',
    difficulty: 'Advanced',
  },

  // ========================================
  // Data Literacy
  // ========================================
  {
    domain: Domain.DATA_LITERACY,
    level: Level.BEGINNER,
    title: 'Fundamentals of Reading Data',
    description: 'Learn the basics of accurately reading and interpreting tables, graphs, and charts. Practice with real-world examples from news, reports, and academic papers.',
    resourceType: 'Online Course',
    learningObjectives: [
      'Read and interpret bar charts, line graphs, and pie charts',
      'Extract key findings from data tables',
      'Identify basic patterns and trends in data',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.DATA_LITERACY,
    level: Level.BEGINNER,
    title: 'Excel & Google Sheets Basics',
    description: 'Learn basic data organization and visualization techniques using spreadsheets. Build practical skills you can immediately apply to coursework.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Organize data in structured spreadsheet formats',
      'Create basic charts and visualizations',
      'Use formulas for sorting, filtering, and basic calculations',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.DATA_LITERACY,
    level: Level.INTERMEDIATE,
    title: 'Building Statistical Thinking',
    description: 'Explore key statistical concepts like sampling bias, correlation vs. causation, and statistical significance through real-world examples and interactive exercises.',
    resourceType: 'Online Course',
    learningObjectives: [
      'Distinguish between correlation and causation',
      'Identify sampling bias and its effects on results',
      'Interpret p-values and statistical significance correctly',
    ],
    estimatedTime: '5 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.DATA_LITERACY,
    level: Level.INTERMEDIATE,
    title: 'Critical Reading of Data Visualizations',
    description: 'A guide covering how to spot misleading graphs and apply principles of effective data visualization. Learn to be both a critical consumer and creator of data visuals.',
    resourceType: 'Guide',
    learningObjectives: [
      'Identify common data visualization tricks and distortions',
      'Apply principles of honest and effective visualization',
      'Critique data presentations in media and academic papers',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.DATA_LITERACY,
    level: Level.ADVANCED,
    title: 'Data Analysis Project',
    description: 'Work with real public datasets to practice data collection, cleaning, analysis, and visualization. Complete a capstone project with a publishable-quality analysis.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Clean and prepare messy real-world datasets',
      'Conduct exploratory data analysis and hypothesis testing',
      'Create publication-quality data visualizations',
    ],
    estimatedTime: '8 hours',
    difficulty: 'Advanced',
  },
  {
    domain: Domain.DATA_LITERACY,
    level: Level.ADVANCED,
    title: 'How to Lie with Statistics',
    description: 'A classic essential read for developing critical analysis skills around the misuse and distortion of statistics. Apply these insights to evaluate research claims.',
    resourceType: 'Book',
    learningObjectives: [
      'Recognize statistical manipulation techniques',
      'Evaluate research methodology for hidden biases',
      'Apply critical statistical thinking to academic reading',
    ],
    estimatedTime: '6 hours',
    difficulty: 'Advanced',
  },

  // ========================================
  // Academic Information Use
  // ========================================
  {
    domain: Domain.ACADEMIC_INFO,
    level: Level.BEGINNER,
    title: 'Getting Started with Academic Databases',
    description: 'Learn the basics of using major academic databases like JSTOR, PubMed, and Google Scholar. Get hands-on practice finding and accessing full-text articles.',
    resourceType: 'Database',
    learningObjectives: [
      'Navigate JSTOR, PubMed, and Google Scholar interfaces',
      'Use basic search features and filters in academic databases',
      'Access full-text articles through library subscriptions',
    ],
    estimatedTime: '2 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.ACADEMIC_INFO,
    level: Level.BEGINNER,
    title: 'Proper Citation and Reference Writing',
    description: 'A step-by-step guide on how to avoid plagiarism and create correct citations. Practice with real examples in APA, MLA, and Chicago styles.',
    resourceType: 'Guide',
    learningObjectives: [
      'Understand what constitutes plagiarism and how to avoid it',
      'Format in-text citations and reference lists correctly',
      'Use citation tools to manage references efficiently',
    ],
    estimatedTime: '3 hours',
    difficulty: 'Introductory',
  },
  {
    domain: Domain.ACADEMIC_INFO,
    level: Level.INTERMEDIATE,
    title: 'Research Ethics Fundamentals',
    description: 'Training covering types of research misconduct, protection of human subjects, and conflict of interest management. Essential for anyone conducting original research.',
    resourceType: 'Online Course',
    learningObjectives: [
      'Identify forms of research misconduct (fabrication, falsification, plagiarism)',
      'Understand IRB requirements for human subjects research',
      'Recognize and manage conflicts of interest',
    ],
    estimatedTime: '4 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.ACADEMIC_INFO,
    level: Level.INTERMEDIATE,
    title: 'Effective Literature Review Methods',
    description: 'Learn systematic review methodology and how to use reference management tools. Build skills for writing comprehensive and well-organized literature reviews.',
    resourceType: 'Workshop',
    learningObjectives: [
      'Develop a systematic approach to literature searching',
      'Use Zotero or Mendeley for reference management',
      'Synthesize findings across multiple sources effectively',
    ],
    estimatedTime: '4 hours',
    difficulty: 'Intermediate',
  },
  {
    domain: Domain.ACADEMIC_INFO,
    level: Level.ADVANCED,
    title: 'Scholarly Publishing and Open Access',
    description: 'Advanced study of the academic publishing process, open access policies, and preprint utilization. Prepare for submitting your own research to journals.',
    resourceType: 'Online Course',
    learningObjectives: [
      'Navigate the journal submission and peer review process',
      'Understand open access models and their implications',
      'Evaluate journal quality and avoid predatory publishers',
    ],
    estimatedTime: '5 hours',
    difficulty: 'Advanced',
  },
  {
    domain: Domain.ACADEMIC_INFO,
    level: Level.ADVANCED,
    title: 'Research Data Management and Sharing',
    description: 'Learn systematic research data management, FAIR principles, and data repository usage. Essential for meeting funding agency requirements and promoting reproducibility.',
    resourceType: 'Guide',
    learningObjectives: [
      'Create data management plans following FAIR principles',
      'Select appropriate data repositories for your field',
      'Prepare datasets for sharing and long-term preservation',
    ],
    estimatedTime: '4 hours',
    difficulty: 'Advanced',
  },
];

export function getRecommendations(domain: Domain, level: Level): Recommendation[] {
  return recommendations.filter(r => r.domain === domain && r.level === level);
}

// ========================================
// Workshop / Course Interest Options
// ========================================
export const workshopOptions: WorkshopOption[] = [
  {
    id: 'ws-1',
    title: 'Search Like a Pro: Boolean & Advanced Search',
    description: 'Hands-on practice with Boolean operators, database filters, and search strategy design.',
    domain: Domain.INFORMATION_SEARCH,
    format: 'In-person Workshop',
  },
  {
    id: 'ws-2',
    title: 'Spotting Fake News & Misinformation',
    description: 'Learn verification techniques used by professional fact-checkers.',
    domain: Domain.INFORMATION_SEARCH,
    format: 'Online Seminar',
  },
  {
    id: 'ws-3',
    title: 'AI Tools for Academic Work',
    description: 'Effective and ethical use of ChatGPT, Claude, and other AI tools for studying and research.',
    domain: Domain.AI_LITERACY,
    format: 'In-person Workshop',
  },
  {
    id: 'ws-4',
    title: 'Prompt Engineering Masterclass',
    description: 'Advanced prompting techniques: chain-of-thought, few-shot, and structured output design.',
    domain: Domain.AI_LITERACY,
    format: 'Online Seminar',
  },
  {
    id: 'ws-5',
    title: 'Data Visualization & Interpretation',
    description: 'Read, create, and critically evaluate charts and graphs using real-world datasets.',
    domain: Domain.DATA_LITERACY,
    format: 'In-person Workshop',
  },
  {
    id: 'ws-6',
    title: 'Statistics Without Fear',
    description: 'Build intuition for key statistical concepts through interactive exercises — no math prerequisites.',
    domain: Domain.DATA_LITERACY,
    format: 'Self-paced Course',
  },
  {
    id: 'ws-7',
    title: 'Citation & Reference Management',
    description: 'Master Zotero/Mendeley and learn proper citation practices for your field.',
    domain: Domain.ACADEMIC_INFO,
    format: 'In-person Workshop',
  },
  {
    id: 'ws-8',
    title: 'Writing a Literature Review',
    description: 'Step-by-step guidance on planning, searching, and writing a structured literature review.',
    domain: Domain.ACADEMIC_INFO,
    format: 'Group Project',
  },
  {
    id: 'ws-9',
    title: 'Research Ethics & Academic Integrity',
    description: 'Understanding plagiarism, research misconduct, and ethical AI use in academia.',
    domain: Domain.ACADEMIC_INFO,
    format: 'Online Seminar',
  },
  {
    id: 'ws-10',
    title: 'Excel & Google Sheets for Research',
    description: 'Data cleaning, pivot tables, and basic analysis techniques for coursework and research.',
    domain: Domain.DATA_LITERACY,
    format: 'Self-paced Course',
  },
];
