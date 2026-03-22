import { BookOpen, Monitor, FileText, Users, Database, Clock, BarChart2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { DOMAIN_LABELS, Level, type DomainScore, type Recommendation } from '../../types';
import { getRecommendations } from '../../data/recommendations';

interface RecommendationListProps {
  scores: DomainScore[];
}

const TYPE_ICONS: Record<string, typeof BookOpen> = {
  'Book': BookOpen,
  'Online Course': Monitor,
  'Guide': FileText,
  'Workshop': Users,
  'Database': Database,
};

const TYPE_COLORS: Record<string, string> = {
  'Book': 'bg-purple-100 text-purple-700',
  'Online Course': 'bg-blue-100 text-blue-700',
  'Guide': 'bg-emerald-100 text-emerald-700',
  'Workshop': 'bg-orange-100 text-orange-700',
  'Database': 'bg-cyan-100 text-cyan-700',
};

const DIFFICULTY_COLORS: Record<string, string> = {
  'Introductory': 'text-green-600',
  'Intermediate': 'text-amber-600',
  'Advanced': 'text-red-600',
};

const LEVEL_BADGE: Record<Level, string> = {
  [Level.BEGINNER]: 'bg-red-100 text-red-700',
  [Level.INTERMEDIATE]: 'bg-amber-100 text-amber-700',
  [Level.ADVANCED]: 'bg-green-100 text-green-700',
};

function RecommendationCard({ rec }: { rec: Recommendation }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = TYPE_ICONS[rec.resourceType] || FileText;

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setExpanded(e => !e)}
        className="w-full text-left p-4 flex gap-4 hover:bg-gray-50/50 transition-colors cursor-pointer"
      >
        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${TYPE_COLORS[rec.resourceType]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h5 className="font-medium text-gray-900 text-sm">{rec.title}</h5>
            <span className={`text-xs px-2 py-0.5 rounded-full ${TYPE_COLORS[rec.resourceType]}`}>
              {rec.resourceType}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{rec.description}</p>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {rec.estimatedTime}
            </span>
            <span className={`inline-flex items-center gap-1 ${DIFFICULTY_COLORS[rec.difficulty]}`}>
              <BarChart2 className="w-3 h-3" />
              {rec.difficulty}
            </span>
          </div>
        </div>
        <div className="shrink-0 text-gray-400 mt-1">
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 pt-0 ml-14">
          <div className="border-t border-gray-100 pt-3">
            <h6 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              What you'll learn
            </h6>
            <ul className="space-y-1.5">
              {rec.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RecommendationList({ scores }: RecommendationListProps) {
  const sortedScores = [...scores].sort((a, b) => a.percentage - b.percentage);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 print-break-avoid">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        Personalized Learning Path
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Resources are prioritized by your areas with the most room for growth. Expand each recommendation to see detailed learning objectives.
      </p>
      <div className="space-y-6">
        {sortedScores.map(score => {
          const recs = getRecommendations(score.domain, score.level);
          if (recs.length === 0) return null;
          return (
            <div key={score.domain}>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-sm font-semibold text-gray-700">
                  {DOMAIN_LABELS[score.domain]}
                </h4>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${LEVEL_BADGE[score.level]}`}>
                  {score.level}
                </span>
                <span className="text-xs text-gray-400">{score.percentage}%</span>
              </div>
              <div className="space-y-2">
                {recs.map(rec => (
                  <RecommendationCard key={rec.title} rec={rec} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
