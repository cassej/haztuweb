'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    titleKey: 'services.web.title' as const,
    descKey: 'services.web.desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    titleKey: 'services.business.title' as const,
    descKey: 'services.business.desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01"/>
        <path d="M16 6h.01"/>
        <path d="M12 6h.01"/>
        <path d="M12 10h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 10h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 10h.01"/>
        <path d="M8 14h.01"/>
      </svg>
    ),
  },
  {
    titleKey: 'services.custom.title' as const,
    descKey: 'services.custom.desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"/>
        <path d="m6 8-4 4 4 4"/>
        <path d="m14.5 4-5 16"/>
      </svg>
    ),
  },
  {
    titleKey: 'services.maps.title' as const,
    descKey: 'services.maps.desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-8 backdrop-blur-sm transition-all hover:border-[var(--border)] hover:shadow-lg hover:shadow-accent-5"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--secondary)] transition-colors group-hover:bg-[var(--accent)]/10">
                <div className="text-[var(--foreground)]">
                  {service.icon}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                {t(service.titleKey)}
              </h3>
              <p className="text-pretty leading-relaxed text-[var(--muted-foreground)]">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
