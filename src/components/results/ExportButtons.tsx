import { Download, Printer } from 'lucide-react';
import { exportToPdf } from '../../utils/pdf';
import { useState } from 'react';

interface ExportButtonsProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

export default function ExportButtons({ targetRef }: ExportButtonsProps) {
  const [exporting, setExporting] = useState(false);

  const handlePdf = async () => {
    if (!targetRef.current) return;
    setExporting(true);
    try {
      await exportToPdf(targetRef.current);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="flex gap-3 justify-center no-print">
      <button
        onClick={handlePdf}
        disabled={exporting}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer"
      >
        <Download className="w-4 h-4" />
        {exporting ? 'Saving...' : 'Save as PDF'}
      </button>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <Printer className="w-4 h-4" />
        Print
      </button>
    </div>
  );
}
