export type Language = 'en' | 'es' | 'no';

export interface Translation {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  common: {
    learnMore: string;
    getInTouch: string;
    readMore: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    common: {
      learnMore: 'Learn More',
      getInTouch: 'Get in Touch',
      readMore: 'Read More',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      projects: 'Proyectos',
      about: 'Acerca de',
      contact: 'Contacto',
    },
    common: {
      learnMore: 'Saber Más',
      getInTouch: 'Contáctenos',
      readMore: 'Leer Más',
    },
  },
  no: {
    nav: {
      home: 'Hjem',
      services: 'Tjenester',
      projects: 'Prosjekter',
      about: 'Om Oss',
      contact: 'Kontakt',
    },
    common: {
      learnMore: 'Lær Mer',
      getInTouch: 'Ta Kontakt',
      readMore: 'Les Mer',
    },
  },
};