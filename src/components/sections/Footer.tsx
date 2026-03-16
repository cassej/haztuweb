'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--glass-border)] bg-[var(--glass)] shadow-sm backdrop-blur-md">
              <span className="text-xs font-medium text-[var(--muted-foreground)]">H</span>
            </div>
            <span className="text-sm font-medium tracking-wide text-[var(--muted-foreground)]">HazTuWeb</span>
          </div>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/haztuwebpty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Instagram</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-[var(--muted-foreground)]">
            © {currentYear} HazTuWeb. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
