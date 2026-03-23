export enum StudentLevel {
  UNDERGRADUATE = 'undergraduate',
  GRADUATE = 'graduate',
}

export const STUDENT_LEVEL_LABELS: Record<StudentLevel, string> = {
  [StudentLevel.UNDERGRADUATE]: 'Undergraduate',
  [StudentLevel.GRADUATE]: 'Graduate',
};

export enum Domain {
  INFORMATION_SEARCH = 'information_search',
  AI_LITERACY = 'ai_literacy',
  DATA_LITERACY = 'data_literacy',
  ACADEMIC_INFO = 'academic_info',
}

export const DOMAIN_LABELS: Record<Domain, string> = {
  [Domain.INFORMATION_SEARCH]: 'Information Search & Evaluation',
  [Domain.AI_LITERACY]: 'AI Literacy',
  [Domain.DATA_LITERACY]: 'Data Literacy',
  [Domain.ACADEMIC_INFO]: 'Academic Information Use',
};

export enum QuestionType {
  LIKERT = 'likert',
  MULTIPLE_CHOICE = 'mcq',
}

export enum Level {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export interface LikertQuestion {
  id: string;
  domain: Domain;
  type: QuestionType.LIKERT;
  text: string;
  graduateText?: string;
  reversed?: boolean;
  graduateOnly?: boolean;
}

export interface McqOption {
  id: string;
  text: string;
  points: number;
}

export interface McqQuestion {
  id: string;
  domain: Domain;
  type: QuestionType.MULTIPLE_CHOICE;
  text: string;
  graduateText?: string;
  scenario?: string;
  graduateScenario?: string;
  options: McqOption[];
  graduateOptions?: McqOption[];
  graduateOnly?: boolean;
}

export type Question = LikertQuestion | McqQuestion;

export interface Answer {
  questionId: string;
  value: number;
}

export interface DomainScore {
  domain: Domain;
  rawScore: number;
  maxScore: number;
  percentage: number;
  level: Level;
}

export interface AssessmentResult {
  domainScores: DomainScore[];
  overallPercentage: number;
  overallLevel: Level;
  completedAt: string;
}

/** Returns the text/scenario/options appropriate for the given student level. */
export function resolveQuestion(
  question: Question,
  studentLevel: StudentLevel,
): { text: string; scenario?: string; options?: McqOption[] } {
  const isGrad = studentLevel === StudentLevel.GRADUATE;
  const text = (isGrad && question.graduateText) || question.text;

  if (question.type === QuestionType.MULTIPLE_CHOICE) {
    const scenario = (isGrad && question.graduateScenario) || question.scenario;
    const options = (isGrad && question.graduateOptions) || question.options;
    return { text, scenario, options };
  }

  return { text };
}

export interface Recommendation {
  domain: Domain;
  level: Level;
  title: string;
  description: string;
  resourceType: 'Book' | 'Online Course' | 'Guide' | 'Workshop' | 'Database';
  learningObjectives: string[];
  estimatedTime: string;
  difficulty: 'Introductory' | 'Intermediate' | 'Advanced';
}

export interface WorkshopOption {
  id: string;
  title: string;
  description: string;
  domain: Domain;
  format: 'In-person Workshop' | 'Online Seminar' | 'Self-paced Course' | 'Group Project';
}
