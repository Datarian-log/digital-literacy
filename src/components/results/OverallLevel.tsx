import { Level } from '../../types';

interface OverallLevelProps {
  level: Level;
  percentage: number;
}

const LEVEL_STYLES: Record<Level, { bg: string; text: string; border: string }> = {
  [Level.BEGINNER]: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  [Level.INTERMEDIATE]: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  [Level.ADVANCED]: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
};

const LEVEL_DESCRIPTIONS: Record<Level, string> = {
  [Level.BEGINNER]: 'You need to build a stronger foundation in digital literacy. Consider joining the library\'s introductory programs.',
  [Level.INTERMEDIATE]: 'You have a solid baseline of digital literacy. Focus on strengthening your weaker areas to grow further.',
  [Level.ADVANCED]: 'You demonstrate a high level of digital literacy. Explore advanced courses to deepen your expertise.',
};

export default function OverallLevel({ level, percentage }: OverallLevelProps) {
  const styles = LEVEL_STYLES[level];

  return (
    <div className={`rounded-2xl border-2 ${styles.border} ${styles.bg} p-6 text-center print-break-avoid`}>
      <p className="text-sm text-gray-600 mb-1">Overall Assessment Result</p>
      <div className={`text-4xl font-bold ${styles.text} mb-2`}>
        {level}
      </div>
      <div className="text-2xl font-semibold text-gray-900 mb-3">
        {percentage} / 100
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {LEVEL_DESCRIPTIONS[level]}
      </p>
    </div>
  );
}
