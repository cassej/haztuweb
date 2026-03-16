'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-sm">
          <div className="flex flex-col items-center px-8 py-20 text-center md:px-16">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              {t('contact.subtitle')}
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/50762334663"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--whatsapp)] px-10 py-5 text-lg font-medium text-white shadow-lg shadow-whatsapp-20 transition-all hover:shadow-xl hover:shadow-whatsapp-30 hover:brightness-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
              </svg>
              <span>{t('contact.cta')}</span>
            </a>

            {/* Instagram Button */}
            <a
              href="https://instagram.com/haztuwebpty"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-8 py-4 text-base font-medium text-[var(--foreground)] transition-all hover:bg-[var(--muted)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>{t('contact.instagram')}</span>
            </a>

            {/* Contact Info */}
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
              {/* Phone */}
              <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+50762334663" className="text-sm transition-colors hover:text-[var(--foreground)]">
                  {t('contact.phone')}
                </a>
              </div>

              <div className="hidden h-4 w-px bg-[var(--border)] sm:block" />

              {/* Instagram Handle */}
              <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a href="https://instagram.com/haztuwebpty" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[var(--foreground)]">
                  @haztuwebpty
                </a>
              </div>

              <div className="hidden h-4 w-px bg-[var(--border)] sm:block" />

              {/* Location */}
              <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm">{t('contact.location')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
