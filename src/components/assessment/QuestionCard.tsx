import { QuestionType, type Question, type StudentLevel, resolveQuestion } from '../../types';
import LikertScale from './LikertScale';
import MultipleChoice from './MultipleChoice';

interface QuestionCardProps {
  question: Question;
  studentLevel: StudentLevel;
  answer?: { value: number; selectedOptionId?: string };
  onAnswer: (value: number, optionId?: string) => void;
}

export default function QuestionCard({ question, studentLevel, answer, onAnswer }: QuestionCardProps) {
  const resolved = resolveQuestion(question, studentLevel);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      {question.type === QuestionType.MULTIPLE_CHOICE && resolved.scenario && (
        <div className="bg-gray-50 rounded-xl p-4 mb-5 text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">Scenario: </span>
          {resolved.scenario}
        </div>
      )}

      <h3 className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">
        {resolved.text}
      </h3>

      {question.type === QuestionType.LIKERT ? (
        <LikertScale
          value={answer?.value}
          onChange={(v) => onAnswer(v)}
        />
      ) : (
        <MultipleChoice
          options={resolved.options!}
          selectedId={answer?.selectedOptionId}
          onSelect={(option) => onAnswer(option.points, option.id)}
        />
      )}
    </div>
  );
}
