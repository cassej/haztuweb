'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 hero-gradient" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
                {t('hero.headline')}
              </h1>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
                {t('hero.subheadline')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/50762334663"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--whatsapp)] px-8 py-4 text-base font-medium text-white shadow-lg shadow-whatsapp-20 transition-all hover:shadow-xl hover:shadow-whatsapp-30 hover:brightness-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                </svg>
                <span>{t('hero.cta')}</span>
              </a>
              <span className="text-sm text-[var(--muted-foreground)]">{t('hero.phone')}</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass)] shadow-accent-5 backdrop-blur-sm">
              <Image
                src="/images/hero-glass-ui.jpg"
                alt="Glass UI interface"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[oklch(0.98_0.002_240_/_0.2)] to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] px-5 py-3 shadow-lg backdrop-blur-xl">
              <p className="text-xs font-medium text-[var(--muted-foreground)]">{t('hero.location')}</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center lg:mt-24">
          <a href="#services" className="flex flex-col items-center gap-2 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]" aria-label="Scroll to services">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
