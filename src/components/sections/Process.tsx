'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  {
    titleKey: 'process.step1.title' as const,
    descKey: 'process.step1.desc' as const,
  },
  {
    titleKey: 'process.step2.title' as const,
    descKey: 'process.step2.desc' as const,
  },
  {
    titleKey: 'process.step3.title' as const,
    descKey: 'process.step3.desc' as const,
  },
  {
    titleKey: 'process.step4.title' as const,
    descKey: 'process.step4.desc' as const,
  },
];

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            {t('process.title')}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--border)] md:block" />

            <div className="flex flex-col gap-12">
              {steps.map((step, index) => (
                <div key={index} className="group flex gap-8">
                  {/* Step number - Desktop */}
                  <div className="relative hidden flex-shrink-0 md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--secondary)] text-sm font-semibold text-[var(--foreground)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-8 backdrop-blur-sm transition-all group-hover:border-[var(--border)] group-hover:shadow-lg group-hover:shadow-accent-5">
                    {/* Step number - Mobile */}
                    <div className="mb-2 text-xs font-medium text-[var(--accent)] md:hidden">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-pretty leading-relaxed text-[var(--muted-foreground)]">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
