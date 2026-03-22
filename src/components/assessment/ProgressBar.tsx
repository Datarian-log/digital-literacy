import { DOMAIN_LABELS, type Domain } from '../../types';

interface ProgressBarProps {
  current: number;
  total: number;
  domain: Domain;
  progress: number;
}

export default function ProgressBar({ current, total, domain, progress }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-primary">
          {DOMAIN_LABELS[domain]}
        </span>
        <span className="text-sm text-gray-500">
          {current} / {total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
