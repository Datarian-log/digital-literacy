import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bot, BarChart3, GraduationCap, ArrowRight, Clock, Check, BookOpen } from 'lucide-react';
import { Domain, DOMAIN_LABELS, StudentLevel, STUDENT_LEVEL_LABELS } from '../types';
import { useAssessment } from '../context/AssessmentContext';

const DOMAINS = [
  { domain: Domain.INFORMATION_SEARCH, icon: Search, color: 'text-blue-600 bg-blue-100' },
  { domain: Domain.AI_LITERACY, icon: Bot, color: 'text-purple-600 bg-purple-100' },
  { domain: Domain.DATA_LITERACY, icon: BarChart3, color: 'text-green-600 bg-green-100' },
  { domain: Domain.ACADEMIC_INFO, icon: GraduationCap, color: 'text-amber-600 bg-amber-100' },
];

const DOMAIN_DESCRIPTIONS: Record<Domain, string> = {
  [Domain.INFORMATION_SEARCH]: 'Search strategies, source evaluation, fake news detection',
  [Domain.AI_LITERACY]: 'Understanding & using AI tools, prompt writing, ethical use',
  [Domain.DATA_LITERACY]: 'Data interpretation, reading visualizations, statistical thinking',
  [Domain.ACADEMIC_INFO]: 'Academic DB search, citation & plagiarism, research ethics',
};

const ALL_DOMAINS = [Domain.INFORMATION_SEARCH, Domain.AI_LITERACY, Domain.DATA_LITERACY, Domain.ACADEMIC_INFO];

export default function LandingPage() {
  const navigate = useNavigate();
  const { dispatch } = useAssessment();
  const [studentLevel, setStudentLevel] = useState<StudentLevel>(StudentLevel.UNDERGRADUATE);
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>([...ALL_DOMAINS]);

  const toggleDomain = (domain: Domain) => {
    setSelectedDomains(prev =>
      prev.includes(domain) ? prev.filter(d => d !== domain) : [...prev, domain],
    );
  };

  const questionCount = selectedDomains.length * 6;
  const estimatedMinutes = selectedDomains.length <= 2 ? '5-8' : '10-15';

  const handleStart = () => {
    dispatch({ type: 'SET_STUDENT_LEVEL', payload: studentLevel });
    dispatch({ type: 'SET_SELECTED_DOMAINS', payload: selectedDomains });
    navigate('/assessment');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Digital Literacy<br />Self-Assessment
        </h1>
        <p className="text-gray-600 text-lg mb-2 leading-relaxed">
          Discover your digital competency level<br className="sm:hidden" />
          and get personalized learning recommendations.
        </p>
      </div>

      <div className="mb-8">
        <p className="text-sm font-medium text-gray-700 text-center mb-3">I am a:</p>
        <div className="flex justify-center gap-3">
          {([StudentLevel.UNDERGRADUATE, StudentLevel.GRADUATE] as const).map(level => (
            <button
              key={level}
              type="button"
              onClick={() => setStudentLevel(level)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all cursor-pointer ${
                studentLevel === level
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              {level === StudentLevel.UNDERGRADUATE ? (
                <BookOpen className="w-4 h-4" />
              ) : (
                <GraduationCap className="w-4 h-4" />
              )}
              {STUDENT_LEVEL_LABELS[level]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm font-medium text-gray-700 text-center mb-3">
          Select the domains you'd like to assess:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {DOMAINS.map(({ domain, icon: Icon, color }) => {
          const isSelected = selectedDomains.includes(domain);
          return (
            <button
              key={domain}
              type="button"
              onClick={() => toggleDomain(domain)}
              className={`rounded-2xl border-2 p-5 flex items-start gap-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-primary bg-blue-50/50'
                  : 'border-gray-200 bg-white opacity-60'
              }`}
            >
              <div className={`shrink-0 p-2.5 rounded-xl ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {DOMAIN_LABELS[domain]}
                </h3>
                <p className="text-sm text-gray-500">{DOMAIN_DESCRIPTIONS[domain]}</p>
              </div>
              <div
                className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${
                  isSelected ? 'border-primary bg-primary' : 'border-gray-300 bg-white'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4" />
          About {estimatedMinutes} minutes &middot; {questionCount} questions
        </div>
        <br />
        <button
          onClick={handleStart}
          disabled={selectedDomains.length === 0}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-2xl font-semibold text-base hover:bg-primary-dark transition-colors shadow-lg shadow-blue-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Start Assessment
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-gray-400 mt-4">
          Designed for undergraduate and graduate students.
        </p>
      </div>
    </div>
  );
}
