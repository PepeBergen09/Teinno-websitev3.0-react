import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations } from '../types';

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Strategic Business Consulting',
        subtitle: 'Transform your business with data-driven insights and innovative solutions',
        cta: 'Get Started',
      },
      features: {
        title: 'Why Choose Us',
        items: [
          {
            title: 'Expert Analysis',
            description: 'Deep industry expertise and proven methodologies',
          },
          {
            title: 'Custom Solutions',
            description: 'Tailored strategies that fit your unique business needs',
          },
          {
            title: 'Proven Results',
            description: 'Track record of delivering measurable business outcomes',
          },
        ],
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive business solutions tailored to your needs',
      items: [
        {
          title: 'Strategic Planning',
          description: 'Develop comprehensive business strategies for sustainable growth',
        },
        {
          title: 'Process Optimization',
          description: 'Streamline operations and improve efficiency across your organization',
        },
        {
          title: 'Digital Transformation',
          description: 'Modernize your business with cutting-edge technology solutions',
        },
        {
          title: 'Market Analysis',
          description: 'Gain insights into market trends and competitive positioning',
        },
      ],
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Success stories from our consulting engagements',
      items: [
        {
          title: 'Manufacturing Optimization',
          description: 'Increased efficiency by 40% through process redesign',
          category: 'Operations',
        },
        {
          title: 'Digital Platform Launch',
          description: 'Successfully launched new digital platform for retail client',
          category: 'Technology',
        },
        {
          title: 'Market Expansion',
          description: 'Entered 3 new markets with 200% revenue growth',
          category: 'Strategy',
        },
      ],
    },
    about: {
      title: 'About Us',
      subtitle: 'Your trusted partner in business transformation',
      content: 'We are a team of experienced consultants dedicated to helping businesses achieve their goals through strategic thinking, innovative solutions, and proven methodologies. With over 10 years of experience across various industries, we bring deep expertise and fresh perspectives to every engagement.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to transform your business? Let\'s discuss your needs',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        message: 'Message',
        submit: 'Send Message',
      },
    },
    footer: {
      copyright: '© 2024 B2B Consulting. All rights reserved.',
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
    home: {
      hero: {
        title: 'Consultoría Empresarial Estratégica',
        subtitle: 'Transforma tu negocio con insights basados en datos y soluciones innovadoras',
        cta: 'Comenzar',
      },
      features: {
        title: 'Por Qué Elegirnos',
        items: [
          {
            title: 'Análisis Experto',
            description: 'Experiencia profunda en la industria y metodologías probadas',
          },
          {
            title: 'Soluciones Personalizadas',
            description: 'Estrategias adaptadas a las necesidades únicas de tu negocio',
          },
          {
            title: 'Resultados Comprobados',
            description: 'Historial de entrega de resultados empresariales medibles',
          },
        ],
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones empresariales integrales adaptadas a tus necesidades',
      items: [
        {
          title: 'Planificación Estratégica',
          description: 'Desarrolla estrategias empresariales integrales para un crecimiento sostenible',
        },
        {
          title: 'Optimización de Procesos',
          description: 'Optimiza operaciones y mejora la eficiencia en toda tu organización',
        },
        {
          title: 'Transformación Digital',
          description: 'Moderniza tu negocio con soluciones tecnológicas de vanguardia',
        },
        {
          title: 'Análisis de Mercado',
          description: 'Obtén insights sobre tendencias del mercado y posicionamiento competitivo',
        },
      ],
    },
    projects: {
      title: 'Nuestros Proyectos',
      subtitle: 'Historias de éxito de nuestros compromisos de consultoría',
      items: [
        {
          title: 'Optimización Manufacturera',
          description: 'Aumentó la eficiencia en 40% mediante rediseño de procesos',
          category: 'Operaciones',
        },
        {
          title: 'Lanzamiento de Plataforma Digital',
          description: 'Lanzó exitosamente nueva plataforma digital para cliente minorista',
          category: 'Tecnología',
        },
        {
          title: 'Expansión de Mercado',
          description: 'Entró en 3 nuevos mercados con crecimiento de ingresos del 200%',
          category: 'Estrategia',
        },
      ],
    },
    about: {
      title: 'Acerca de Nosotros',
      subtitle: 'Tu socio de confianza en la transformación empresarial',
      content: 'Somos un equipo de consultores experimentados dedicados a ayudar a las empresas a alcanzar sus objetivos a través del pensamiento estratégico, soluciones innovadoras y metodologías probadas. Con más de 10 años de experiencia en varias industrias, aportamos experiencia profunda y perspectivas frescas a cada compromiso.',
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: '¿Listo para transformar tu negocio? Hablemos de tus necesidades',
      form: {
        name: 'Nombre Completo',
        email: 'Dirección de Email',
        company: 'Empresa',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
      },
    },
    footer: {
      copyright: '© 2024 B2B Consulting. Todos los derechos reservados.',
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
    home: {
      hero: {
        title: 'Strategisk Bedriftsrådgivning',
        subtitle: 'Transformer bedriften din med datadrevne innsikter og innovative løsninger',
        cta: 'Kom i Gang',
      },
      features: {
        title: 'Hvorfor Velge Oss',
        items: [
          {
            title: 'Ekspertanalyse',
            description: 'Dyp bransjeerfaring og beviste metodikker',
          },
          {
            title: 'Tilpassede Løsninger',
            description: 'Skreddersydde strategier som passer din unike bedriftsbehov',
          },
          {
            title: 'Beviste Resultater',
            description: 'Track record for å levere målbare forretningsresultater',
          },
        ],
      },
    },
    services: {
      title: 'Våre Tjenester',
      subtitle: 'Omfattende forretningsløsninger tilpasset dine behov',
      items: [
        {
          title: 'Strategisk Planlegging',
          description: 'Utvikle omfattende forretningsstrategier for bærekraftig vekst',
        },
        {
          title: 'Prosessoptimalisering',
          description: 'Strømlinjeform operasjoner og forbedre effektivitet på tvers av organisasjonen',
        },
        {
          title: 'Digital Transformasjon',
          description: 'Moderne bedriften din med banebrytende teknologiløsninger',
        },
        {
          title: 'Markedsanalyse',
          description: 'Få innsikt i markedstrender og konkurranseposisjonering',
        },
      ],
    },
    projects: {
      title: 'Våre Prosjekter',
      subtitle: 'Suksesshistorier fra våre rådgivningsengasjementer',
      items: [
        {
          title: 'Produksjonsoptimalisering',
          description: 'Økt effektivitet med 40% gjennom prosessredesign',
          category: 'Operasjoner',
        },
        {
          title: 'Digital Plattformlansering',
          description: 'Lanserte vellykket ny digital plattform for detaljhandelskunde',
          category: 'Teknologi',
        },
        {
          title: 'Markedsekspansjon',
          description: 'Gikk inn i 3 nye markeder med 200% inntektsvekst',
          category: 'Strategi',
        },
      ],
    },
    about: {
      title: 'Om Oss',
      subtitle: 'Din pålitelige partner i bedriftstransformasjon',
      content: 'Vi er et team av erfarne konsulenter dedikert til å hjelpe bedrifter med å oppnå sine mål gjennom strategisk tenkning, innovative løsninger og beviste metodikker. Med over 10 års erfaring på tvers av ulike bransjer, bringer vi dyp ekspertise og friske perspektiver til hver oppdrag.',
    },
    contact: {
      title: 'Ta Kontakt',
      subtitle: 'Klar til å transformere bedriften din? La oss diskutere dine behov',
      form: {
        name: 'Fullt Navn',
        email: 'E-postadresse',
        company: 'Bedrift',
        message: 'Melding',
        submit: 'Send Melding',
      },
    },
    footer: {
      copyright: '© 2024 B2B Consulting. Alle rettigheter forbeholdt.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es', 'no'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};