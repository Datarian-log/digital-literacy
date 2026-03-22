import { Domain, QuestionType, type Question } from '../types';

export const questions: Question[] = [
  // ========================================
  // Domain 1: Information Search & Evaluation (6 questions)
  // ========================================
  {
    id: 'is-1',
    domain: Domain.INFORMATION_SEARCH,
    type: QuestionType.LIKERT,
    text: 'I can effectively use Boolean operators (AND, OR, NOT) in search engines to find the information I need.',
    graduateText: 'I can construct complex search strategies using Boolean operators, proximity searching, and field-specific queries across multiple academic databases.',
  },
  {
    id: 'is-2',
    domain: Domain.INFORMATION_SEARCH,
    type: QuestionType.LIKERT,
    text: 'I know the criteria for evaluating the credibility and reliability of information found online (e.g., checking the author, publication date, and whether sources are cited).',
    graduateText: 'I can critically appraise the methodology and validity of research sources, including assessing journal impact factors, author credentials, and potential conflicts of interest.',
  },
  {
    id: 'is-3',
    domain: Domain.INFORMATION_SEARCH,
    type: QuestionType.LIKERT,
    text: 'I know how to identify fake news or misinformation and actively practice verification methods (e.g., cross-checking multiple sources, using fact-checking sites like Snopes).',
    graduateText: 'I can identify misinformation in both popular media and academic publications, including predatory journals and retracted studies.',
  },
  {
    id: 'is-4',
    domain: Domain.INFORMATION_SEARCH,
    type: QuestionType.LIKERT,
    text: 'I can use advanced search filters such as date range, file type, and domain to refine search results.',
    graduateText: 'I can conduct systematic literature searches using discipline-specific databases (e.g., Scopus, Web of Science) with controlled vocabulary and citation tracking.',
  },
  {
    id: 'is-5',
    domain: Domain.INFORMATION_SEARCH,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'Which of the following is the most reliable source of information?',
    scenario: 'You are researching "the economic impact of climate change" for a university paper.',
    graduateText: 'Which source would be most appropriate for a literature review?',
    graduateScenario: 'You are writing a literature review on "the economic impact of climate change" for your thesis.',
    options: [
      { id: 'is-5-a', text: 'An opinion post about climate change on a personal blog', points: 1 },
      { id: 'is-5-b', text: 'An infographic widely shared on social media', points: 2 },
      { id: 'is-5-c', text: 'An official report published by the Environmental Protection Agency', points: 4 },
      { id: 'is-5-d', text: 'A peer-reviewed article published in the journal Nature', points: 5 },
    ],
    graduateOptions: [
      { id: 'is-5-a', text: 'A widely-cited government report from the EPA', points: 3 },
      { id: 'is-5-b', text: 'A peer-reviewed meta-analysis in a top-tier economics journal', points: 5 },
      { id: 'is-5-c', text: 'A recent conference proceeding from a reputable academic conference', points: 4 },
      { id: 'is-5-d', text: 'A chapter from an edited academic handbook on climate economics', points: 3 },
    ],
  },
  {
    id: 'is-6',
    domain: Domain.INFORMATION_SEARCH,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'What is the best indicator that this news article may contain misinformation?',
    scenario: 'You read an article titled "University researchers announce breakthrough," but the article contains no specific researcher names, no paper references, and no source links.',
    graduateText: 'What is the most significant red flag about this study?',
    graduateScenario: 'You find a journal article claiming a major breakthrough. The journal charges high publication fees, the editorial board is unclear, and the peer review turnaround was only 3 days.',
    options: [
      { id: 'is-6-a', text: 'The headline is too sensational', points: 2 },
      { id: 'is-6-b', text: 'There are no specific researcher names, paper details, or source links', points: 5 },
      { id: 'is-6-c', text: 'There are not many comments on the article', points: 1 },
      { id: 'is-6-d', text: 'The article does not include any photos', points: 1 },
    ],
    graduateOptions: [
      { id: 'is-6-a', text: 'The article charges publication fees', points: 2 },
      { id: 'is-6-b', text: 'The combination of unclear editorial board, high fees, and unrealistically fast peer review suggests a predatory journal', points: 5 },
      { id: 'is-6-c', text: 'The findings sound too good to be true', points: 3 },
      { id: 'is-6-d', text: 'You have not heard of this journal before', points: 2 },
    ],
  },

  // ========================================
  // Domain 2: AI Literacy (6 questions)
  // ========================================
  {
    id: 'ai-1',
    domain: Domain.AI_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I have a basic understanding of how generative AI tools like ChatGPT and Claude work (large language models).',
    graduateText: 'I understand the technical foundations of large language models, including their training process, capabilities, and inherent limitations such as hallucination and bias.',
  },
  {
    id: 'ai-2',
    domain: Domain.AI_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I can write effective prompts to get the desired results from AI tools (e.g., giving specific instructions, providing context, or asking for a particular format).',
    graduateText: 'I can design structured prompts using techniques like chain-of-thought, few-shot examples, and role assignment to accomplish complex research tasks with AI tools.',
  },
  {
    id: 'ai-3',
    domain: Domain.AI_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I can critically evaluate the accuracy of AI-generated information and identify hallucinations (i.e., when AI confidently generates false or fabricated information, such as fake citations).',
    graduateText: 'I can systematically verify AI-generated content against primary sources, identify fabricated citations, and assess when AI outputs may introduce bias into my research.',
  },
  {
    id: 'ai-4',
    domain: Domain.AI_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I understand the ethical guidelines for using AI tools in academic work (citation, disclosure, etc.).',
    graduateText: 'I am familiar with my institution\'s and my field\'s policies on AI use in research, including disclosure requirements for publications, grant applications, and IRB protocols.',
  },
  {
    id: 'ai-5',
    domain: Domain.AI_LITERACY,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'Which statement about using generative AI is most appropriate?',
    scenario: 'You plan to use ChatGPT as a supplementary tool while writing an academic essay.',
    graduateText: 'Which approach is most appropriate for using AI in this context?',
    graduateScenario: 'You are using an AI tool to help draft a section of your thesis literature review.',
    options: [
      { id: 'ai-5-a', text: 'Submitting AI-generated content directly saves time', points: 1 },
      { id: 'ai-5-b', text: 'AI responses are always accurate, so no additional verification is needed', points: 1 },
      { id: 'ai-5-c', text: 'Use AI for brainstorming and drafting, but fact-check and revise the output yourself', points: 5 },
      { id: 'ai-5-d', text: 'There is no need to disclose the use of AI', points: 1 },
    ],
    graduateOptions: [
      { id: 'ai-5-a', text: 'Use the AI draft as-is since it synthesizes sources efficiently', points: 1 },
      { id: 'ai-5-b', text: 'Use AI to identify themes and gaps, then write original analysis based on your own reading of the sources', points: 5 },
      { id: 'ai-5-c', text: 'Have the AI generate the review and cite it as an AI-generated source', points: 2 },
      { id: 'ai-5-d', text: 'Only use AI for grammar checking to avoid any ethical issues', points: 3 },
    ],
  },
  {
    id: 'ai-6',
    domain: Domain.AI_LITERACY,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'How would you improve the prompt to get a better result?',
    scenario: 'You asked an AI "Tell me about climate change" and received a very generic response.',
    graduateText: 'How would you improve the prompt for a more useful research output?',
    graduateScenario: 'You asked an AI "Summarize the literature on machine learning in healthcare" and received a superficial overview missing key methodological debates.',
    options: [
      { id: 'ai-6-a', text: 'Repeat the same question multiple times', points: 1 },
      { id: 'ai-6-b', text: 'Rewrite it as: "Explain the impact of climate change on agriculture in the US using post-2020 data, in under 300 words"', points: 5 },
      { id: 'ai-6-c', text: 'Switch to a different AI tool', points: 2 },
      { id: 'ai-6-d', text: 'Add a follow-up: "Tell me more details"', points: 3 },
    ],
    graduateOptions: [
      { id: 'ai-6-a', text: 'Ask the same question but in a different AI tool', points: 1 },
      { id: 'ai-6-b', text: 'Rewrite: "Identify key methodological debates in ML-based clinical decision support (2020-2025), focusing on validation approaches, bias concerns, and reproducibility. Cite specific landmark studies."', points: 5 },
      { id: 'ai-6-c', text: 'Follow up with "Be more detailed and academic"', points: 3 },
      { id: 'ai-6-d', text: 'Provide a list of specific papers and ask the AI to summarize those', points: 4 },
    ],
  },

  // ========================================
  // Domain 3: Data Literacy (6 questions)
  // ========================================
  {
    id: 'dl-1',
    domain: Domain.DATA_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I can accurately interpret data visualizations such as tables, graphs, and charts.',
    graduateText: 'I can interpret complex data visualizations including multi-variable plots, regression outputs, and statistical software results (e.g., SPSS, R, Python).',
  },
  {
    id: 'dl-2',
    domain: Domain.DATA_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I understand and can apply basic statistical concepts such as mean, median, and standard deviation.',
    graduateText: 'I understand advanced statistical concepts such as confidence intervals, p-values, effect sizes, and can assess the appropriateness of statistical methods used in research papers.',
  },
  {
    id: 'dl-3',
    domain: Domain.DATA_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I can critically assess data for potential bias or distortion (e.g., misleading graph scales, cherry-picked data, or unrepresentative samples).',
    graduateText: 'I can evaluate research methodology for threats to validity, including sampling bias, confounding variables, and inappropriate statistical analyses.',
  },
  {
    id: 'dl-4',
    domain: Domain.DATA_LITERACY,
    type: QuestionType.LIKERT,
    text: 'I can use spreadsheets (Excel, Google Sheets) to organize data and perform basic analysis.',
    graduateText: 'I can use data analysis tools (Excel, R, Python, or SPSS) to clean, transform, and analyze research data for my own studies.',
  },
  {
    id: 'dl-5',
    domain: Domain.DATA_LITERACY,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'What is the problem with this graph?',
    scenario: 'A news article claims "Product A sales surged" and shows a bar graph. However, the Y-axis starts at 950 instead of 0, showing changes between 950 and 1,000.',
    graduateText: 'What is the most critical flaw in how this data is presented?',
    graduateScenario: 'A research paper presents a bar chart showing "significant improvement" in test scores between control and treatment groups. The Y-axis ranges from 72 to 78, and no error bars or confidence intervals are shown.',
    options: [
      { id: 'dl-5-a', text: 'The graph colors are inappropriate', points: 1 },
      { id: 'dl-5-b', text: 'The X-axis labels are missing', points: 2 },
      { id: 'dl-5-c', text: 'The Y-axis does not start at 0, exaggerating the change', points: 5 },
      { id: 'dl-5-d', text: 'The bar widths are inconsistent', points: 2 },
    ],
    graduateOptions: [
      { id: 'dl-5-a', text: 'The sample size is probably too small', points: 2 },
      { id: 'dl-5-b', text: 'The truncated Y-axis and missing error bars make it impossible to judge practical or statistical significance', points: 5 },
      { id: 'dl-5-c', text: 'Bar charts are the wrong chart type for this data', points: 2 },
      { id: 'dl-5-d', text: 'The study should have used a pie chart instead', points: 1 },
    ],
  },
  {
    id: 'dl-6',
    domain: Domain.DATA_LITERACY,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'Which is the correct interpretation of this data?',
    scenario: 'A survey reports that "80% of college students have used AI tools." The survey sample consisted of 100 students from IT-related departments.',
    graduateText: 'What is the most significant methodological concern?',
    graduateScenario: 'A published study claims "a strong correlation (r = 0.85) between social media use and academic performance decline." The study surveyed 50 students from a single university, used self-reported data, and controlled for no confounding variables.',
    options: [
      { id: 'dl-6-a', text: 'Most college students are using AI', points: 1 },
      { id: 'dl-6-b', text: 'The sample is biased toward IT students, so the results cannot be generalized to all college students', points: 5 },
      { id: 'dl-6-c', text: '100 respondents is a sufficient sample size, so the results are reliable', points: 2 },
      { id: 'dl-6-d', text: 'Since AI usage is high, all departments need AI education', points: 2 },
    ],
    graduateOptions: [
      { id: 'dl-6-a', text: 'The correlation coefficient is high enough to confirm a causal relationship', points: 1 },
      { id: 'dl-6-b', text: 'Small non-representative sample, self-reported data, and no control for confounders make the causal claim unsupported', points: 5 },
      { id: 'dl-6-c', text: 'The study is fine since r = 0.85 indicates a very strong relationship', points: 2 },
      { id: 'dl-6-d', text: 'The main issue is that 50 students is too few for any statistical analysis', points: 3 },
    ],
  },

  // ========================================
  // Domain 4: Academic Information Use (6 questions)
  // ========================================
  {
    id: 'ac-1',
    domain: Domain.ACADEMIC_INFO,
    type: QuestionType.LIKERT,
    text: 'I can search for academic papers using databases such as JSTOR, PubMed, or Google Scholar.',
    graduateText: 'I can conduct comprehensive literature searches using discipline-specific databases, citation indexes, and reference management tools (e.g., Zotero, EndNote, Mendeley).',
  },
  {
    id: 'ac-2',
    domain: Domain.ACADEMIC_INFO,
    type: QuestionType.LIKERT,
    text: 'I understand the differences between citation styles (APA, MLA, Chicago) and can format references correctly.',
    graduateText: 'I can use my field\'s required citation style proficiently and manage large reference libraries using reference management software.',
  },
  {
    id: 'ac-3',
    domain: Domain.ACADEMIC_INFO,
    type: QuestionType.LIKERT,
    text: 'I understand different types of plagiarism (direct, self-plagiarism, mosaic) and know how to avoid them.',
    graduateText: 'I understand the nuances of academic integrity in publishing, including self-citation ethics, authorship conventions, and proper attribution of collaborative work.',
  },
  {
    id: 'ac-4',
    domain: Domain.ACADEMIC_INFO,
    type: QuestionType.LIKERT,
    text: 'I understand the basic principles of research ethics (e.g., not fabricating data, getting consent from research participants, properly crediting contributors).',
    graduateText: 'I am familiar with IRB/ethics review processes, responsible conduct of research (RCR) requirements, and data management mandates from funding agencies.',
  },
  {
    id: 'ac-5',
    domain: Domain.ACADEMIC_INFO,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'Which of the following is the correct way to cite a source?',
    scenario: 'You want to use the sentence "Digital literacy is an essential competency in modern society" from a 2023 paper by Dr. Smith in your report.',
    graduateText: 'What is the most appropriate way to handle this situation?',
    graduateScenario: 'You are writing a journal manuscript and want to reuse two paragraphs from your own previously published conference paper in the introduction section.',
    options: [
      { id: 'ac-5-a', text: 'Use the sentence as-is without citing the source', points: 1 },
      { id: 'ac-5-b', text: 'Slightly paraphrase the sentence and present it as your own idea', points: 1 },
      { id: 'ac-5-c', text: 'Use quotation marks, cite the author and year, and include it in the reference list', points: 5 },
      { id: 'ac-5-d', text: 'Just add a footnote with the URL', points: 2 },
    ],
    graduateOptions: [
      { id: 'ac-5-a', text: 'Since it is your own writing, you can reuse it freely', points: 1 },
      { id: 'ac-5-b', text: 'Rewrite the content substantially, cite your own prior work, and check the journal\'s self-plagiarism policy', points: 5 },
      { id: 'ac-5-c', text: 'Copy the paragraphs and add a citation to your conference paper', points: 3 },
      { id: 'ac-5-d', text: 'Ask your advisor if it is acceptable', points: 2 },
    ],
  },
  {
    id: 'ac-6',
    domain: Domain.ACADEMIC_INFO,
    type: QuestionType.MULTIPLE_CHOICE,
    text: 'What is the most appropriate action in this situation?',
    scenario: 'You searched for "artificial intelligence education" on Google Scholar and got over 2,000 results. You want to find case studies from universities within the last 5 years.',
    graduateText: 'What is the best approach to build a comprehensive literature base?',
    graduateScenario: 'You are starting a systematic literature review on "AI in higher education." Your initial search across Scopus, Web of Science, and ERIC returned over 5,000 results.',
    options: [
      { id: 'ac-6-a', text: 'Browse through the results one by one from the beginning', points: 1 },
      { id: 'ac-6-b', text: 'Narrow the search by adding date range (2021-2026), publication type, and additional keywords', points: 5 },
      { id: 'ac-6-c', text: 'Only check the top 10 results and use those', points: 2 },
      { id: 'ac-6-d', text: 'Change the search term to just "AI"', points: 1 },
    ],
    graduateOptions: [
      { id: 'ac-6-a', text: 'Read all 5,000 abstracts to ensure comprehensive coverage', points: 1 },
      { id: 'ac-6-b', text: 'Define inclusion/exclusion criteria, apply filters, use PRISMA guidelines, and document the screening process', points: 5 },
      { id: 'ac-6-c', text: 'Use the top-cited papers and their reference lists (snowball method) only', points: 3 },
      { id: 'ac-6-d', text: 'Limit to one database and take the first 100 results', points: 1 },
    ],
  },
];
