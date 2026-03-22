import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 no-print">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
        <BookOpen className="w-7 h-7 text-primary" />
        <Link to="/" className="text-lg font-semibold text-gray-900 no-underline">
          Digital Literacy Assessment
        </Link>
      </div>
    </header>
  );
}
