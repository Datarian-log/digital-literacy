import type { McqOption } from '../../types';

interface MultipleChoiceProps {
  options: McqOption[];
  selectedId?: string;
  onSelect: (option: McqOption) => void;
}

export default function MultipleChoice({ options, selectedId, onSelect }: MultipleChoiceProps) {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {options.map((option) => {
        const isSelected = selectedId === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            className={`w-full text-left py-4 px-5 rounded-xl border-2 transition-all cursor-pointer
              ${isSelected
                ? 'border-primary bg-blue-50 text-gray-900'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
          >
            <span className="text-sm leading-relaxed">{option.text}</span>
          </button>
        );
      })}
    </div>
  );
}
