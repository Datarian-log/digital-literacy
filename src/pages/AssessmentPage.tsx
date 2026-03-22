import { useNavigate } from 'react-router-dom';
import { useCallback, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import ProgressBar from '../components/assessment/ProgressBar';
import QuestionCard from '../components/assessment/QuestionCard';
import DomainIntro from '../components/assessment/DomainIntro';

const AUTO_ADVANCE_DELAY = 400; // ms

export default function AssessmentPage() {
  const navigate = useNavigate();
  const {
    state,
    dispatch,
    currentQuestion,
    totalQuestions,
    progress,
    isFirstQuestion,
    isLastQuestion,
    allQuestions,
  } = useAssessment();

  const [mcqSelections, setMcqSelections] = useState<Record<string, string>>({});
  const advanceTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const currentAnswer = state.answers.find(a => a.questionId === currentQuestion.id);

  const showDomainIntro = useMemo(() => {
    if (state.currentQuestionIndex === 0) return true;
    const prevQuestion = allQuestions[state.currentQuestionIndex - 1];
    return prevQuestion.domain !== currentQuestion.domain;
  }, [state.currentQuestionIndex, currentQuestion.domain, allQuestions]);

  const advanceToNext = useCallback(() => {
    if (isLastQuestion) {
      dispatch({ type: 'CALCULATE_RESULTS' });
      navigate('/results');
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  }, [isLastQuestion, dispatch, navigate]);

  const handleAnswer = (value: number, optionId?: string) => {
    dispatch({ type: 'SET_ANSWER', payload: { questionId: currentQuestion.id, value } });
    if (optionId) {
      setMcqSelections(prev => ({ ...prev, [currentQuestion.id]: optionId }));
    }

    // Auto-advance after a short delay so the user sees their selection
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(advanceToNext, AUTO_ADVANCE_DELAY);
  };

  const handlePrev = () => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    dispatch({ type: 'PREV_QUESTION' });
  };

  const answerForCard = currentAnswer
    ? {
        value: currentAnswer.value,
        selectedOptionId: mcqSelections[currentQuestion.id],
      }
    : undefined;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <ProgressBar
        current={state.currentQuestionIndex + 1}
        total={totalQuestions}
        domain={currentQuestion.domain}
        progress={progress}
      />

      {showDomainIntro && <DomainIntro domain={currentQuestion.domain} />}

      <QuestionCard
        question={currentQuestion}
        studentLevel={state.studentLevel}
        answer={answerForCard}
        onAnswer={handleAnswer}
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={isFirstQuestion}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={() => {
            if (advanceTimer.current) clearTimeout(advanceTimer.current);
            advanceToNext();
          }}
          disabled={!currentAnswer}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLastQuestion ? (
            <>
              View Results
              <CheckCircle className="w-4 h-4" />
            </>
          ) : (
            <>
              Next
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
