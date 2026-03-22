import { createContext, useContext, useReducer, useMemo, type ReactNode } from 'react';
import { Domain, StudentLevel, type Answer, type AssessmentResult, type Question } from '../types';
import { questions } from '../data/questions';
import { calculateResults } from '../utils/scoring';

interface AssessmentState {
  studentLevel: StudentLevel;
  selectedDomains: Domain[];
  currentQuestionIndex: number;
  answers: Answer[];
  result: AssessmentResult | null;
}

type Action =
  | { type: 'SET_STUDENT_LEVEL'; payload: StudentLevel }
  | { type: 'SET_SELECTED_DOMAINS'; payload: Domain[] }
  | { type: 'SET_ANSWER'; payload: Answer }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'CALCULATE_RESULTS' }
  | { type: 'RESET' };

const initialState: AssessmentState = {
  studentLevel: StudentLevel.UNDERGRADUATE,
  selectedDomains: [],
  currentQuestionIndex: 0,
  answers: [],
  result: null,
};

function getFilteredQuestions(selectedDomains: Domain[]): Question[] {
  if (selectedDomains.length === 0) return questions;
  return questions.filter(q => selectedDomains.includes(q.domain));
}

function reducer(state: AssessmentState, action: Action): AssessmentState {
  const filtered = getFilteredQuestions(state.selectedDomains);

  switch (action.type) {
    case 'SET_STUDENT_LEVEL':
      return { ...state, studentLevel: action.payload };
    case 'SET_SELECTED_DOMAINS':
      return { ...state, selectedDomains: action.payload, currentQuestionIndex: 0, answers: [] };
    case 'SET_ANSWER': {
      const existing = state.answers.findIndex(
        a => a.questionId === action.payload.questionId,
      );
      const answers = [...state.answers];
      if (existing >= 0) {
        answers[existing] = action.payload;
      } else {
        answers.push(action.payload);
      }
      return { ...state, answers };
    }
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          filtered.length - 1,
        ),
      };
    case 'PREV_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      };
    case 'CALCULATE_RESULTS':
      return {
        ...state,
        result: calculateResults(state.answers, filtered),
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

interface AssessmentContextValue {
  state: AssessmentState;
  dispatch: React.Dispatch<Action>;
  currentQuestion: Question;
  totalQuestions: number;
  progress: number;
  currentAnswer: Answer | undefined;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
  allQuestions: Question[];
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    const filtered = getFilteredQuestions(state.selectedDomains);
    const currentQuestion = filtered[state.currentQuestionIndex];
    const currentAnswer = state.answers.find(
      a => a.questionId === currentQuestion?.id,
    );
    return {
      state,
      dispatch,
      currentQuestion,
      totalQuestions: filtered.length,
      progress: ((state.currentQuestionIndex + 1) / filtered.length) * 100,
      currentAnswer,
      isLastQuestion: state.currentQuestionIndex === filtered.length - 1,
      isFirstQuestion: state.currentQuestionIndex === 0,
      allQuestions: filtered,
    };
  }, [state]);

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error('useAssessment must be used within AssessmentProvider');
  return ctx;
}
