import { Level, DOMAIN_LABELS, type DomainScore } from '../../types';

interface DomainScoreCardProps {
  score: DomainScore;
}

const LEVEL_BADGE: Record<Level, string> = {
  [Level.BEGINNER]: 'bg-red-100 text-red-700',
  [Level.INTERMEDIATE]: 'bg-amber-100 text-amber-700',
  [Level.ADVANCED]: 'bg-green-100 text-green-700',
};

const BAR_COLOR: Record<Level, string> = {
  [Level.BEGINNER]: 'bg-red-500',
  [Level.INTERMEDIATE]: 'bg-amber-500',
  [Level.ADVANCED]: 'bg-green-500',
};

export default function DomainScoreCard({ score }: DomainScoreCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 print-break-avoid">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900">
          {DOMAIN_LABELS[score.domain]}
        </h4>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${LEVEL_BADGE[score.level]}`}>
          {score.level}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${BAR_COLOR[score.level]}`}
          style={{ width: `${score.percentage}%` }}
        />
      </div>
      <p className="text-right text-sm font-medium text-gray-600">
        {score.percentage}%
      </p>
    </div>
  );
}
