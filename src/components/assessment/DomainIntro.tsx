import { Search, Bot, BarChart3, GraduationCap } from 'lucide-react';
import { Domain, DOMAIN_LABELS } from '../../types';

const DOMAIN_CONFIG: Record<Domain, { icon: typeof Search; description: string; color: string }> = {
  [Domain.INFORMATION_SEARCH]: {
    icon: Search,
    description: 'This section assesses your ability to search for information effectively, evaluate source credibility, and identify misinformation.',
    color: 'text-blue-600 bg-blue-100',
  },
  [Domain.AI_LITERACY]: {
    icon: Bot,
    description: 'This section assesses your understanding of generative AI, your ability to use it effectively, and your awareness of ethical usage.',
    color: 'text-purple-600 bg-purple-100',
  },
  [Domain.DATA_LITERACY]: {
    icon: BarChart3,
    description: 'This section assesses your ability to read and interpret data, and critically analyze visualizations.',
    color: 'text-green-600 bg-green-100',
  },
  [Domain.ACADEMIC_INFO]: {
    icon: GraduationCap,
    description: 'This section assesses your ability to use academic databases, cite sources properly, and practice research ethics.',
    color: 'text-amber-600 bg-amber-100',
  },
};

interface DomainIntroProps {
  domain: Domain;
}

export default function DomainIntro({ domain }: DomainIntroProps) {
  const config = DOMAIN_CONFIG[domain];
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 text-center">
      <div className={`inline-flex p-3 rounded-full ${config.color} mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {DOMAIN_LABELS[domain]}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {config.description}
      </p>
    </div>
  );
}
