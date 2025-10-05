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
    bookCall: string;
    viewMore: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    problem: {
      title: string;
      point1Title: string;
      point1Desc: string;
      point2Title: string;
      point2Desc: string;
      point3Title: string;
      point3Desc: string;
    };
    solution: {
      title: string;
      subtitle: string;
    };
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
      bookCall: 'Book Strategy Call',
      viewMore: 'View More',
    },
    home: {
      hero: {
        title: 'Building Bridges Between Nordic Innovation & Latin American Markets',
        subtitle: 'Strategic market entry, partnership development & funding access for enterprises expanding across regions',
        cta1: 'Book Strategy Call',
        cta2: 'View Services',
      },
      problem: {
        title: 'Expanding Between Nordic & Latin American Markets Is Complex',
        point1Title: '12-24 Months Typical Timeline',
        point1Desc: 'Traditional market entry takes years of trial and error, costing opportunities and momentum.',
        point2Title: '$200k+ Annual Investment',
        point2Desc: 'Hiring local teams, consultants, and navigating regulations creates unpredictable costs.',
        point3Title: 'Finding Trustworthy Partners',
        point3Desc: 'Without established networks, identifying reliable distributors, suppliers, or collaborators is hit-or-miss.',
      },
      solution: {
        title: 'We Accelerate Your Market Entry in 3-6 Weeks',
        subtitle: 'Leveraging direct access to decision-makers, government backing, and proven processes on both sides.',
      },
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
      bookCall: 'Agendar Llamada',
      viewMore: 'Ver Más',
    },
    home: {
      hero: {
        title: 'Construyendo Puentes Entre la Innovación Nórdica y los Mercados Latinoamericanos',
        subtitle: 'Entrada estratégica al mercado, desarrollo de asociaciones y acceso a financiamiento para empresas que se expanden entre regiones',
        cta1: 'Agendar Llamada Estratégica',
        cta2: 'Ver Servicios',
      },
      problem: {
        title: 'Expandirse Entre Mercados Nórdicos y Latinoamericanos Es Complejo',
        point1Title: '12-24 Meses de Tiempo Típico',
        point1Desc: 'La entrada tradicional al mercado toma años de prueba y error, costando oportunidades e impulso.',
        point2Title: 'Inversión Anual de +$200k',
        point2Desc: 'Contratar equipos locales, consultores y navegar regulaciones crea costos impredecibles.',
        point3Title: 'Encontrar Socios Confiables',
        point3Desc: 'Sin redes establecidas, identificar distribuidores, proveedores o colaboradores confiables es incierto.',
      },
      solution: {
        title: 'Aceleramos Su Entrada al Mercado en 3-6 Semanas',
        subtitle: 'Aprovechando el acceso directo a tomadores de decisiones, respaldo gubernamental y procesos probados en ambos lados.',
      },
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
      bookCall: 'Bestill Samtale',
      viewMore: 'Se Mer',
    },
    home: {
      hero: {
        title: 'Bygger Broer Mellom Nordisk Innovasjon og Latinamerikanske Markeder',
        subtitle: 'Strategisk markedsinntreden, partnerskapsutvikling og tilgang til finansiering for bedrifter som ekspanderer på tvers av regioner',
        cta1: 'Bestill Strategisamtale',
        cta2: 'Se Tjenester',
      },
      problem: {
        title: 'Ekspansjon Mellom Nordiske og Latinamerikanske Markeder Er Komplekst',
        point1Title: '12-24 Måneders Typisk Tidslinje',
        point1Desc: 'Tradisjonell markedsinntreden tar år med prøving og feiling, og koster muligheter og momentum.',
        point2Title: '+$200k Årlig Investering',
        point2Desc: 'Å ansette lokale team, konsulenter og navigere reguleringer skaper uforutsigbare kostnader.',
        point3Title: 'Finne Pålitelige Partnere',
        point3Desc: 'Uten etablerte nettverk er det vanskelig å identifisere pålitelige distributører, leverandører eller samarbeidspartnere.',
      },
      solution: {
        title: 'Vi Akselererer Din Markedsinntreden på 3-6 Uker',
        subtitle: 'Ved å utnytte direkte tilgang til beslutningstakere, statlig støtte og dokumenterte prosesser på begge sider.',
      },
    },
  },
};
