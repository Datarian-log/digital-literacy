import { DOMAIN_LABELS, Level, type DomainScore } from '../../types';

interface RadarChartPanelProps {
  scores: DomainScore[];
}

const BAR_COLOR: Record<Level, string> = {
  [Level.BEGINNER]: 'bg-red-500',
  [Level.INTERMEDIATE]: 'bg-amber-500',
  [Level.ADVANCED]: 'bg-green-500',
};

const LEVEL_DOT: Record<Level, string> = {
  [Level.BEGINNER]: 'bg-red-400',
  [Level.INTERMEDIATE]: 'bg-amber-400',
  [Level.ADVANCED]: 'bg-green-400',
};

export default function RadarChartPanel({ scores }: RadarChartPanelProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 print-break-avoid">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Results by Domain
      </h3>

      <div className="space-y-3">
        {scores.map(s => (
          <div key={s.domain}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${LEVEL_DOT[s.level]}`} />
                <span className="text-sm font-medium text-gray-700">
                  {DOMAIN_LABELS[s.domain]}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{s.percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${BAR_COLOR[s.level]}`}
                style={{ width: `${s.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
