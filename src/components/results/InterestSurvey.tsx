import { useState } from 'react';
import { Check, Send, ClipboardCheck, MessageSquare, Users, Monitor, BookOpen, FolderOpen } from 'lucide-react';
import { DOMAIN_LABELS, type WorkshopOption } from '../../types';
import { workshopOptions } from '../../data/recommendations';
import { useAssessment } from '../../context/AssessmentContext';
import { submitSurvey } from '../../utils/sheets';

const FORMAT_ICONS: Record<string, typeof Users> = {
  'In-person Workshop': Users,
  'Online Seminar': Monitor,
  'Self-paced Course': BookOpen,
  'Group Project': FolderOpen,
};

const FORMAT_COLORS: Record<string, string> = {
  'In-person Workshop': 'bg-orange-100 text-orange-700',
  'Online Seminar': 'bg-blue-100 text-blue-700',
  'Self-paced Course': 'bg-purple-100 text-purple-700',
  'Group Project': 'bg-emerald-100 text-emerald-700',
};

const PREFERRED_TIMES = [
  'Weekday mornings',
  'Weekday afternoons',
  'Weekday evenings',
  'Weekends',
  'No preference',
];

export default function InterestSurvey() {
  const { state } = useAssessment();
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([]);
  const [preferredTime, setPreferredTime] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleWorkshop = (id: string) => {
    setSelectedWorkshops(prev =>
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id],
    );
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const workshopTitles = selectedWorkshops.map(id => {
      const ws = workshopOptions.find(w => w.id === id);
      return ws ? ws.title : id;
    });
    await submitSurvey(state.studentLevel, workshopTitles, preferredTime, comments);
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center no-print">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <ClipboardCheck className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Your interest has been recorded. The library team will use this to plan upcoming programs.
          {selectedWorkshops.length > 0 && (
            <> You expressed interest in <strong>{selectedWorkshops.length}</strong> program{selectedWorkshops.length > 1 ? 's' : ''}.</>
          )}
        </p>
      </div>
    );
  }

  // Group workshops by domain
  const grouped = workshopOptions.reduce<Record<string, WorkshopOption[]>>((acc, ws) => {
    const key = DOMAIN_LABELS[ws.domain];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ws);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 no-print">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        Which programs interest you?
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Help us plan future workshops and courses. Select any programs you'd like to attend.
      </p>

      <div className="space-y-5">
        {Object.entries(grouped).map(([domainLabel, workshops]) => (
          <div key={domainLabel}>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {domainLabel}
            </h4>
            <div className="space-y-2">
              {workshops.map(ws => {
                const isSelected = selectedWorkshops.includes(ws.id);
                const FormatIcon = FORMAT_ICONS[ws.format] || Users;
                return (
                  <button
                    key={ws.id}
                    type="button"
                    onClick={() => toggleWorkshop(ws.id)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-primary bg-blue-50/50'
                        : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                          isSelected ? 'border-primary bg-primary' : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium text-gray-900">{ws.title}</span>
                          <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${FORMAT_COLORS[ws.format]}`}>
                            <FormatIcon className="w-3 h-3" />
                            {ws.format}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{ws.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Preferred time */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Preferred time</h4>
        <div className="flex flex-wrap gap-2">
          {PREFERRED_TIMES.map(time => (
            <button
              key={time}
              type="button"
              onClick={() => setPreferredTime(prev => prev === time ? '' : time)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
                preferredTime === time
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div className="mt-5">
        <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5" />
          Additional comments (optional)
        </h4>
        <textarea
          value={comments}
          onChange={e => setComments(e.target.value)}
          placeholder="Any topics you'd like covered, scheduling preferences, or other feedback..."
          className="w-full p-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          rows={3}
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={submitting || (selectedWorkshops.length === 0 && !preferredTime && !comments)}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
        {submitting ? 'Submitting...' : 'Submit My Interests'}
      </button>
    </div>
  );
}
