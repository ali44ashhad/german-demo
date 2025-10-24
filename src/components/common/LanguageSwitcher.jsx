// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const langs = [
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh-CN', label: '中文' },
  { code: 'fr', label: 'Français' }
];

export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation();
  return (
    <select
      value={i18n.language}
      onChange={(e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        if (document && document.documentElement) document.documentElement.lang = lang;
      }}
      className={`rounded p-1 border bg-white text-sm ${className}`}
      aria-label="Select language"
    >
      {langs.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
    </select>
  );
}
