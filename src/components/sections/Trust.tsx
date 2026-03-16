'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const trustPoints = [
  {
    titleKey: 'trust.reliability.title' as const,
    descKey: 'trust.reliability.desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      </svg>
    ),
  },
  {
    titleKey: 'trust.clarity.title' as const,
    descKey: 'trust.clarity.desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    titleKey: 'trust.experience.title' as const,
    descKey: 'trust.experience.desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      </svg>
    ),
  },
];

export function Trust() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            {t('trust.title')}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
            {t('trust.subtitle')}
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-8 text-center backdrop-blur-sm transition-all hover:border-[var(--border)] hover:shadow-lg hover:shadow-accent-5"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)] transition-colors group-hover:bg-[var(--accent)]/10">
                <div className="text-[var(--foreground)]">
                  {point.icon}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                {t(point.titleKey)}
              </h3>
              <p className="text-pretty leading-relaxed text-[var(--muted-foreground)]">
                {t(point.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
