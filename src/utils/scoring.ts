import {
  Domain,
  Level,
  QuestionType,
  type Answer,
  type AssessmentResult,
  type DomainScore,
  type LikertQuestion,
  type Question,
} from '../types';

export function determineLevel(percentage: number): Level {
  if (percentage >= 75) return Level.ADVANCED;
  if (percentage >= 45) return Level.INTERMEDIATE;
  return Level.BEGINNER;
}

export function calculateDomainScore(
  domain: Domain,
  answers: Answer[],
  questions: Question[],
): DomainScore {
  const domainQuestions = questions.filter(q => q.domain === domain);
  const maxScore = domainQuestions.length * 5;
  const rawScore = domainQuestions.reduce((sum, q) => {
    const answer = answers.find(a => a.questionId === q.id);
    if (!answer) return sum;
    if (q.type === QuestionType.LIKERT && (q as LikertQuestion).reversed) {
      return sum + (6 - answer.value);
    }
    return sum + answer.value;
  }, 0);

  const percentage = Math.round((rawScore / maxScore) * 100);
  return { domain, rawScore, maxScore, percentage, level: determineLevel(percentage) };
}

export function calculateResults(
  answers: Answer[],
  questions: Question[],
): AssessmentResult {
  const domains = [...new Set(questions.map(q => q.domain))];
  const domainScores = domains.map(d => calculateDomainScore(d, answers, questions));
  const overallPercentage = Math.round(
    domainScores.reduce((sum, s) => sum + s.percentage, 0) / domainScores.length,
  );

  return {
    domainScores,
    overallPercentage,
    overallLevel: determineLevel(overallPercentage),
    completedAt: new Date().toISOString(),
  };
}
