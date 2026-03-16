export const translations = {
  // Navigation
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.process": { es: "Proceso", en: "Process" },
  "nav.about": { es: "Nosotros", en: "About" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.location": { es: "Panamá", en: "Panama" },

  // Hero Section
  "hero.headline": { 
    es: "Creamos sitios web que impulsan tu negocio", 
    en: "We build websites that grow your business" 
  },
  "hero.subheadline": { 
    es: "Sitios web de cualquier complejidad. Desde una presencia digital simple hasta proyectos avanzados a medida.", 
    en: "Websites of any complexity. From simple digital presence to advanced custom projects." 
  },
  "hero.cta": { es: "Escríbenos por WhatsApp", en: "Contact us on WhatsApp" },
  "hero.location": { es: "Ciudad de Panamá, Panamá", en: "Panama City, Panama" },
  "hero.phone": { es: "+507 6233 4663", en: "+507 6233 4663" },

  // Services Section
  "services.title": { es: "Nuestros servicios", en: "Our services" },
  "services.subtitle": { 
    es: "Soluciones web claras y efectivas para cada necesidad.", 
    en: "Clear and effective web solutions for every need." 
  },
  "services.web.title": { es: "Sitios web", en: "Websites" },
  "services.web.desc": { 
    es: "Desde sitios informativos hasta plataformas complejas. Cada proyecto se adapta a lo que tu negocio necesita.", 
    en: "From informational sites to complex platforms. Each project adapts to what your business needs." 
  },
  "services.business.title": { es: "Sitios empresariales", en: "Business sites" },
  "services.business.desc": { 
    es: "Presencia profesional en línea para tu empresa. Diseño limpio, contenido claro, resultados reales.", 
    en: "Professional online presence for your company. Clean design, clear content, real results." 
  },
  "services.custom.title": { es: "Proyectos a medida", en: "Custom projects" },
  "services.custom.desc": { 
    es: "Soluciones avanzadas para necesidades específicas. Funcionalidad, rendimiento y escalabilidad.", 
    en: "Advanced solutions for specific needs. Functionality, performance, and scalability." 
  },
  "services.maps.title": { es: "Google Maps", en: "Google Maps" },
  "services.maps.desc": { 
    es: "Registro y optimización de tu negocio en Google Maps. Que tus clientes te encuentren fácilmente.", 
    en: "Registration and optimization of your business on Google Maps. Let your customers find you easily." 
  },

  // Process Section
  "process.title": { es: "Cómo trabajamos", en: "How we work" },
  "process.subtitle": { es: "Un proceso simple y transparente.", en: "A simple and transparent process." },
  "process.step1.title": { es: "Conversación", en: "Conversation" },
  "process.step1.desc": { 
    es: "Nos cuentas qué necesitas. Escuchamos y entendemos tu proyecto.", 
    en: "You tell us what you need. We listen and understand your project." 
  },
  "process.step2.title": { es: "Propuesta", en: "Proposal" },
  "process.step2.desc": { 
    es: "Te presentamos un plan claro con alcance, tiempos y costos definidos.", 
    en: "We present a clear plan with defined scope, timelines, and costs." 
  },
  "process.step3.title": { es: "Desarrollo", en: "Development" },
  "process.step3.desc": { 
    es: "Construimos tu sitio web. Te mantenemos informado en cada paso.", 
    en: "We build your website. We keep you informed at every step." 
  },
  "process.step4.title": { es: "Entrega", en: "Delivery" },
  "process.step4.desc": { 
    es: "Tu sitio web listo y funcionando. Con soporte para que todo siga bien.", 
    en: "Your website ready and running. With support to keep everything on track." 
  },

  // Trust/About Section
  "trust.title": { es: "Por qué trabajar con nosotros", en: "Why work with us" },
  "trust.subtitle": { 
    es: "Nos enfocamos en hacer las cosas bien, con claridad y profesionalismo.", 
    en: "We focus on doing things right, with clarity and professionalism." 
  },
  "trust.reliability.title": { es: "Confiabilidad", en: "Reliability" },
  "trust.reliability.desc": { 
    es: "Cumplimos lo que prometemos. Plazos claros, comunicación constante.", 
    en: "We deliver what we promise. Clear deadlines, constant communication." 
  },
  "trust.clarity.title": { es: "Claridad", en: "Clarity" },
  "trust.clarity.desc": { 
    es: "Sin letra pequeña, sin sorpresas. Sabes exactamente lo que obtienes.", 
    en: "No fine print, no surprises. You know exactly what you get." 
  },
  "trust.experience.title": { es: "Experiencia", en: "Experience" },
  "trust.experience.desc": { 
    es: "Conocimiento técnico real aplicado a cada proyecto con atención al detalle.", 
    en: "Real technical expertise applied to every project with attention to detail." 
  },

  // Contact Section
  "contact.title": { es: "Hablemos de tu proyecto", en: "Let's talk about your project" },
  "contact.subtitle": { 
    es: "Estamos en Panamá y listos para ayudarte. Escríbenos, sin compromiso.", 
    en: "We're in Panama and ready to help. Write to us, no commitment." 
  },
  "contact.cta": { es: "Escríbenos por WhatsApp", en: "Contact us on WhatsApp" },
  "contact.phone": { es: "+507 6233 4663", en: "+507 6233 4663" },
  "contact.location": { es: "Ciudad de Panamá, Panamá", en: "Panama City, Panama" },
  "contact.instagram": { es: "Síguenos en Instagram", en: "Follow us on Instagram" },

  // Footer
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
} as const;

export type TranslationKey = keyof typeof translations;
export type Language = 'es' | 'en';

export function getTranslation(key: TranslationKey, lang: Language): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation not found for key: ${key}`);
    return key;
  }
  return translation[lang] || translation['es'];
}
