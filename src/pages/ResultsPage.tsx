import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import RadarChartPanel from '../components/results/RadarChartPanel';
import OverallLevel from '../components/results/OverallLevel';
import StrengthsAnalysis from '../components/results/StrengthsAnalysis';
import RecommendationList from '../components/results/RecommendationList';
import InterestSurvey from '../components/results/InterestSurvey';
import ExportButtons from '../components/results/ExportButtons';
import { submitResults } from '../utils/sheets';

export default function ResultsPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useAssessment();
  const resultRef = useRef<HTMLDivElement>(null);
  const submittedRef = useRef(false);

  // Auto-submit results to Google Sheets on first render
  useEffect(() => {
    if (state.result && !submittedRef.current) {
      submittedRef.current = true;
      submitResults(state.result, state.studentLevel);
    }
  }, [state.result, state.studentLevel]);

  if (!state.result) {
    navigate('/');
    return null;
  }

  const { domainScores, overallPercentage, overallLevel } = state.result;

  const handleRetry = () => {
    dispatch({ type: 'RESET' });
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8 no-print">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Results</h2>
        <p className="text-gray-500 text-sm">
          Review your digital literacy assessment results below
        </p>
      </div>

      <div ref={resultRef} className="space-y-6">
        <OverallLevel level={overallLevel} percentage={overallPercentage} />

        <RadarChartPanel scores={domainScores} />

        <StrengthsAnalysis scores={domainScores} overallPercentage={overallPercentage} />

        <RecommendationList scores={domainScores} />
      </div>

      <div className="mt-8 space-y-6">
        <InterestSurvey />

        <ExportButtons targetRef={resultRef} />
        <div className="text-center no-print">
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Take Again
          </button>
        </div>
      </div>
    </div>
  );
}
