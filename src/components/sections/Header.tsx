'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services', labelKey: 'nav.services' as const },
    { href: '#process', labelKey: 'nav.process' as const },
    { href: '#about', labelKey: 'nav.about' as const },
    { href: '#contact', labelKey: 'nav.contact' as const },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex items-center justify-between rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] px-6 py-3 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] shadow-sm backdrop-blur-md">
              <span className="text-sm font-medium text-[var(--muted-foreground)]">H</span>
            </div>
            <span className="text-base font-medium tracking-wide text-[var(--muted-foreground)]">HazTuWeb</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Location */}
            <div className="hidden items-center gap-1 text-xs text-[var(--muted-foreground)] sm:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{t('nav.location')}</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-0.5">
              <button
                onClick={() => setLang('es')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  lang === 'es'
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  lang === 'en'
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
