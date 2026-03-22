import { TrendingUp, TrendingDown, Target } from 'lucide-react';
import { DOMAIN_LABELS, Level, type DomainScore } from '../../types';

interface StrengthsAnalysisProps {
  scores: DomainScore[];
  overallPercentage: number;
}

const LEVEL_INSIGHTS: Record<Level, string> = {
  [Level.BEGINNER]: 'This is an area where focused learning will make a significant difference.',
  [Level.INTERMEDIATE]: 'You have a working foundation here — targeted practice will help you level up.',
  [Level.ADVANCED]: 'You demonstrate strong competency — consider sharing your knowledge with peers.',
};

export default function StrengthsAnalysis({ scores, overallPercentage }: StrengthsAnalysisProps) {
  const sorted = [...scores].sort((a, b) => b.percentage - a.percentage);
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];
  const gap = strongest.percentage - weakest.percentage;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 print-break-avoid">
      <h3 className="text-lg font-semibold text-gray-900 mb-5">Key Insights</h3>

      <div className="space-y-4">
        {/* Strongest area */}
        <div className="flex gap-3 p-4 bg-green-50 rounded-xl">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-700" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-green-800">
              Strongest: {DOMAIN_LABELS[strongest.domain]}
            </h4>
            <p className="text-sm text-green-700 mt-0.5">
              You scored {strongest.percentage}% ({strongest.level}). {LEVEL_INSIGHTS[strongest.level]}
            </p>
          </div>
        </div>

        {/* Weakest area */}
        {scores.length > 1 && (
          <div className="flex gap-3 p-4 bg-amber-50 rounded-xl">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-800">
                Needs Growth: {DOMAIN_LABELS[weakest.domain]}
              </h4>
              <p className="text-sm text-amber-700 mt-0.5">
                You scored {weakest.percentage}% ({weakest.level}). {LEVEL_INSIGHTS[weakest.level]}
              </p>
            </div>
          </div>
        )}

        {/* Balance analysis */}
        {scores.length > 1 && (
          <div className="flex gap-3 p-4 bg-blue-50 rounded-xl">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-800">Skill Balance</h4>
              <p className="text-sm text-blue-700 mt-0.5">
                {gap <= 15
                  ? `Your skills are well-balanced across domains (${gap}% gap). Your overall score of ${overallPercentage}% reflects consistent competency.`
                  : gap <= 30
                    ? `There is a moderate gap (${gap}%) between your strongest and weakest areas. Focusing on your weaker domains will improve your overall digital literacy.`
                    : `There is a significant gap (${gap}%) between your strongest and weakest areas. Prioritizing the recommended resources for your weaker areas will help you build a more balanced skill set.`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
