const LABELS = [
  'Strongly Disagree',
  'Disagree',
  'Neutral',
  'Agree',
  'Strongly Agree',
];

interface LikertScaleProps {
  value?: number;
  onChange: (value: number) => void;
}

export default function LikertScale({ value, onChange }: LikertScaleProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6">
      {LABELS.map((label, i) => {
        const score = i + 1;
        const isSelected = value === score;
        return (
          <button
            key={score}
            onClick={() => onChange(score)}
            className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer
              ${isSelected
                ? 'border-primary bg-blue-50 text-primary'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              }`}
          >
            <span className="block text-lg mb-1">{score}</span>
            <span className="block text-xs">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
