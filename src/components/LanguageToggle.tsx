import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../types/language';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'no', label: 'NO' },
  ];

  return (
    <div className="flex items-center gap-1 bg-neutral-light rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
            language === lang.code
              ? 'bg-primary text-white shadow-sm'
              : 'text-neutral-medium hover:text-neutral-dark'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;