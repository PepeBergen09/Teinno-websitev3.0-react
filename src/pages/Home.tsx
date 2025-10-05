import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t, language } = useLanguage();

  const content = {
    en: {
      trustBadge1: 'VP, Nordic-LATAM Chamber of Commerce',
      trustBadge2: 'Founder, Red Global Nodo Querétaro',
      trustBadge3: 'Active Bergen Business Community',
      solutionSteps: [
        {
          week: 'WEEK 1-2',
          title: 'Market Assessment',
          desc: 'Deep dive into target market, regulations, competitive landscape, and cultural considerations.'
        },
        {
          week: 'WEEK 3-4',
          title: 'Partner Matchmaking',
          desc: 'Identify and vet 3-5 ideal partners using our bilateral network and local expertise.'
        },
        {
          week: 'WEEK 5-6',
          title: 'Facilitated Introductions',
          desc: 'Warm introductions, cultural bridge, first meetings coordinated with translation support.'
        },
        {
          week: 'ONGOING',
          title: 'Strategic Support',
          desc: 'Deal facilitation, funding access, continuous advisory, and problem-solving.'
        }
      ],
      whyTeinno: {
        title: 'Unique Positioning, Proven Network',
        credentials: [
          'VP, Nordic-LATAM Chamber of Commerce',
          'Founder, Red Global Nodo Querétaro',
          'Active member Bergen Chamber of Commerce',
          'Dual operations: Norway & Mexico since 2018',
          'Direct access to government & university partners',
          '6+ years bridging Nordic-LATAM markets'
        ],
        advantages: [
          'Norwegian entity for EU funding applications (3x higher approval rates)',
          'Established relationships with regulatory bodies both regions',
          'Cultural fluency: Mexican heritage, Norwegian resident',
          'Fast timeline: weeks not years',
          'Transparent pricing, clear deliverables',
          'Technical expertise: Engineering + MBA + MSc Information Science'
        ]
      },
      finalCta: {
        title: 'Ready to Expand?',
        text: 'Limited availability: We accept 5 clients per quarter to ensure quality delivery and results.',
        badge: 'Q4 2025: 2 spots remaining'
      }
    },
    es: {
      trustBadge1: 'VP, Cámara de Comercio Nórdico-LATAM',
      trustBadge2: 'Fundador, Red Global Nodo Querétaro',
      trustBadge3: 'Comunidad Empresarial Activa en Bergen',
      solutionSteps: [
        {
          week: 'SEMANA 1-2',
          title: 'Evaluación de Mercado',
          desc: 'Análisis profundo del mercado objetivo, regulaciones, panorama competitivo y consideraciones culturales.'
        },
        {
          week: 'SEMANA 3-4',
          title: 'Búsqueda de Socios',
          desc: 'Identificar y evaluar 3-5 socios ideales usando nuestra red bilateral y experiencia local.'
        },
        {
          week: 'SEMANA 5-6',
          title: 'Introducciones Facilitadas',
          desc: 'Presentaciones personales, puente cultural, primeras reuniones coordinadas con apoyo de traducción.'
        },
        {
          week: 'CONTINUO',
          title: 'Apoyo Estratégico',
          desc: 'Facilitación de acuerdos, acceso a financiamiento, asesoría continua y resolución de problemas.'
        }
      ],
      whyTeinno: {
        title: 'Posicionamiento Único, Red Probada',
        credentials: [
          'VP, Cámara de Comercio Nórdico-LATAM',
          'Fundador, Red Global Nodo Querétaro',
          'Miembro activo de la Cámara de Comercio de Bergen',
          'Operaciones duales: Noruega y México desde 2018',
          'Acceso directo a socios gubernamentales y universitarios',
          '6+ años conectando mercados Nórdicos-LATAM'
        ],
        advantages: [
          'Entidad noruega para solicitudes de financiamiento UE (3x más aprobaciones)',
          'Relaciones establecidas con organismos reguladores en ambas regiones',
          'Fluidez cultural: herencia mexicana, residente noruego',
          'Cronograma rápido: semanas no años',
          'Precios transparentes, entregables claros',
          'Experiencia técnica: Ingeniería + MBA + MSc Ciencias de la Información'
        ]
      },
      finalCta: {
        title: '¿Listo para Expandirse?',
        text: 'Disponibilidad limitada: Aceptamos 5 clientes por trimestre para asegurar entrega y resultados de calidad.',
        badge: 'Q4 2025: 2 lugares restantes'
      }
    },
    no: {
      trustBadge1: 'VP, Nordisk-LATAM Handelskammer',
      trustBadge2: 'Grunnlegger, Red Global Nodo Querétaro',
      trustBadge3: 'Aktivt Bergen Forretningssamfunn',
      solutionSteps: [
        {
          week: 'UKE 1-2',
          title: 'Markedsvurdering',
          desc: 'Grundig analyse av målmarked, reguleringer, konkurranselandskap og kulturelle hensyn.'
        },
        {
          week: 'UKE 3-4',
          title: 'Partnermatching',
          desc: 'Identifisere og vurdere 3-5 ideelle partnere ved hjelp av vårt bilaterale nettverk og lokal ekspertise.'
        },
        {
          week: 'UKE 5-6',
          title: 'Tilrettelegging av Introduksjoner',
          desc: 'Varme introduksjoner, kulturell bro, første møter koordinert med oversettingsstøtte.'
        },
        {
          week: 'LØPENDE',
          title: 'Strategisk Støtte',
          desc: 'Avtalefasilitering, finansieringstilgang, kontinuerlig rådgivning og problemløsning.'
        }
      ],
      whyTeinno: {
        title: 'Unik Posisjonering, Dokumentert Nettverk',
        credentials: [
          'VP, Nordisk-LATAM Handelskammer',
          'Grunnlegger, Red Global Nodo Querétaro',
          'Aktivt medlem Bergen Handelskammer',
          'Dobbel drift: Norge og Mexico siden 2018',
          'Direkte tilgang til myndigheter og universitetspartnere',
          '6+ år med å bygge broer mellom Norden og LATAM'
        ],
        advantages: [
          'Norsk enhet for EU-finansieringssøknader (3x høyere godkjenningsrate)',
          'Etablerte relasjoner med reguleringsmyndigheter i begge regioner',
          'Kulturell flyt: meksikansk arv, norsk bosatt',
          'Rask tidslinje: uker ikke år',
          'Transparent prising, klare leveranser',
          'Teknisk ekspertise: Ingeniør + MBA + MSc Informasjonsvitenskap'
        ]
      },
      finalCta: {
        title: 'Klar for Ekspansjon?',
        text: 'Begrenset tilgjengelighet: Vi tar 5 klienter per kvartal for å sikre kvalitetsleveranse og resultater.',
        badge: 'Q4 2025: 2 plasser igjen'
      }
    }
  };

  const c = content[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t.home.hero.subtitle}
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[c.trustBadge1, c.trustBadge2, c.trustBadge3].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm bg-white bg-opacity-10 backdrop-blur rounded-lg p-3"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>{badge}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/pepe-martinez-teinno" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  {t.home.hero.cta1}
                </motion.button>
              </a>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
                >
                  {t.home.hero.cta2} ↓
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            {t.home.problem.title}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t.home.problem.point1Title}</h3>
              <p className="text-gray-600">{t.home.problem.point1Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t.home.problem.point2Title}</h3>
              <p className="text-gray-600">{t.home.problem.point2Desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t.home.problem.point3Title}</h3>
              <p className="text-gray-600">{t.home.problem.point3Desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.home.solution.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.solution.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.solutionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg h-full">
                  <div className="text-xs font-bold text-primary mb-2">{step.week}</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-700">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn-primary"
              >
                {t.common.learnMore}
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Teinno Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {c.whyTeinno.title}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Credentials</h3>
              <ul className="space-y-3">
                {c.whyTeinno.credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Advantages</h3>
              <ul className="space-y-3">
                {c.whyTeinno.advantages.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.finalCta.title}</h2>
            <p className="text-xl mb-6 text-blue-100">{c.finalCta.text}</p>
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-8">
              {c.finalCta.badge}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/pepe-martinez-teinno" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  {t.common.bookCall}
                </motion.button>
              </a>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
