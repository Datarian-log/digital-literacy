import { DOMAIN_LABELS, type AssessmentResult, type StudentLevel } from '../types';

// Replace this URL with your deployed Google Apps Script web app URL.
// See /google-apps-script.js for the script to deploy.
const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL as string | undefined;

interface ResultPayload {
  type: 'result';
  timestamp: string;
  studentLevel: StudentLevel;
  overallPercentage: number;
  overallLevel: string;
  domains: Record<string, { percentage: number; level: string }>;
}

interface SurveyPayload {
  type: 'survey';
  timestamp: string;
  studentLevel: StudentLevel;
  selectedWorkshops: string[];
  preferredTime: string;
  comments: string;
}

export async function submitResults(
  result: AssessmentResult,
  studentLevel: StudentLevel,
): Promise<boolean> {
  if (!SHEETS_URL) {
    console.warn('VITE_GOOGLE_SHEETS_URL is not set — skipping result submission.');
    return false;
  }

  const payload: ResultPayload = {
    type: 'result',
    timestamp: result.completedAt,
    studentLevel,
    overallPercentage: result.overallPercentage,
    overallLevel: result.overallLevel,
    domains: Object.fromEntries(
      result.domainScores.map(s => [
        DOMAIN_LABELS[s.domain],
        { percentage: s.percentage, level: s.level },
      ]),
    ),
  };

  try {
    await fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error('Failed to submit results:', err);
    return false;
  }
}

export async function submitSurvey(
  studentLevel: StudentLevel,
  selectedWorkshops: string[],
  preferredTime: string,
  comments: string,
): Promise<boolean> {
  if (!SHEETS_URL) {
    console.warn('VITE_GOOGLE_SHEETS_URL is not set — skipping survey submission.');
    return false;
  }

  const payload: SurveyPayload = {
    type: 'survey',
    timestamp: new Date().toISOString(),
    studentLevel,
    selectedWorkshops,
    preferredTime,
    comments,
  };

  try {
    await fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error('Failed to submit survey:', err);
    return false;
  }
}
