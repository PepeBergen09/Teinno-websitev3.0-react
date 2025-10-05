import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';

const Services = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Three Pathways to Market Entry',
      subtitle: 'Choose the engagement level that matches your timeline, budget, and market entry objectives. All packages include direct access to our bilateral network and transparent, results-driven processes.',
      packages: [
        {
          badge: 'Most Popular for First-Timers',
          name: 'Market Entry Sprint',
          price: '€4,500',
          priceAlt: '$5,000 USD',
          timeline: '3 weeks from kickoff',
          subtitle: 'Perfect for companies exploring market opportunities and needing strategic clarity before committing resources.',
          features: [
            'Target market analysis (size, growth trends, opportunities)',
            'Competitive landscape mapping with key players',
            'Regulatory requirements & import/export barriers',
            'Cultural business considerations & entry risks',
            '3 market entry strategy options with pros/cons',
            'Investment requirements & realistic timeline',
            'Curated list of 10 potential partners/distributors',
            '20-page Market Entry Report (English/Spanish)',
            'Executive presentation deck',
            '1-hour Q&A strategy session',
            '30-day email support'
          ],
          ideal: [
            'First-time market explorers',
            'Companies validating market before major investment',
            'Teams needing internal buy-in with data',
            'Enterprises on tight timeline for go/no-go decision'
          ]
        },
        {
          badge: 'Best ROI - Most Clients Choose This',
          name: 'Partnership Bridge',
          price: '€12,000',
          priceAlt: '$13,000 USD',
          timeline: '6 weeks from kickoff',
          subtitle: 'For companies ready to connect with partners and execute market entry with hands-on facilitation and cultural bridging.',
          features: [
            'All Market Entry Sprint deliverables (condensed)',
            'Identification of 5 ideal partner candidates',
            'Comprehensive due diligence on each partner',
            'Warm personal introductions from our network',
            'Facilitation of up to 10 meetings',
            'Cultural bridge & real-time translation',
            'Negotiation strategy development',
            'Draft partnership terms framework',
            'Legal & regulatory resource list',
            '60-day post-introduction support',
            '75% have active negotiations within 90 days'
          ],
          ideal: [
            'Companies with validated market interest',
            'Teams ready to meet partners within 4-6 weeks',
            'Enterprises needing cultural bridge',
            'Firms wanting accelerated timeline',
            'Businesses valuing relationships over cold approaches'
          ]
        },
        {
          badge: 'Comprehensive Solution',
          name: 'Full Market Establishment',
          price: '€28,000',
          priceAlt: '$30,000 USD',
          pricingNote: 'Alternative: €15,000 + 2-5% equity in local subsidiary',
          timeline: '3 months intensive + ongoing advisory',
          subtitle: 'Complete market entry solution with funding access, strategic advisory, and ongoing support through critical setup phase.',
          features: [
            'All Partnership Bridge deliverables (accelerated)',
            'EU/Innovation Norway funding application prep',
            'Co-applicant support using our Norwegian entity',
            'Comprehensive financial model & business case',
            'Bi-weekly strategy calls (12 sessions)',
            'Board advisory seat (observer status)',
            'Unlimited introductions from bilateral network',
            'Legal & regulatory consultant introductions',
            'Corporate banking setup guidance',
            'Recruitment support for key local hires',
            'Quarterly market update reports',
            'Typical funding secured: €50k-€200k in grants'
          ],
          ideal: [
            'Companies committed to serious investment (€100k+)',
            'Enterprises requiring external funding',
            'Teams needing strategic partner through setup',
            'Firms planning physical presence',
            'Businesses wanting comprehensive support'
          ]
        }
      ],
      addons: {
        title: 'Optional Add-On Services',
        subtitle: 'Available for all packages to customize your engagement',
        items: [
          {
            name: 'Distribution Network Setup',
            price: '+€5,000',
            timeline: '4 weeks',
            desc: 'For physical products entering retail/B2B channels'
          },
          {
            name: 'Regulatory Compliance Deep Dive',
            price: '+€3,000',
            timeline: '2 weeks',
            desc: 'For highly regulated industries (food, medical, etc.)'
          },
          {
            name: 'Talent Acquisition Support',
            price: '+€2,500',
            timeline: 'Ongoing',
            desc: 'For companies planning local hires'
          }
        ]
      },
      cta: {
        title: 'Choose Your Starting Point',
        text: 'Not sure which package fits? Book a 30-minute discovery call to discuss your specific situation.',
        trust: 'Q4 2025: 2 engagement slots remaining'
      }
    },
    es: {
      title: 'Tres Caminos para la Entrada al Mercado',
      subtitle: 'Elija el nivel de compromiso que coincida con su cronograma, presupuesto y objetivos de entrada al mercado. Todos los paquetes incluyen acceso directo a nuestra red bilateral y procesos transparentes orientados a resultados.',
      packages: [
        {
          badge: 'Más Popular para Principiantes',
          name: 'Sprint de Entrada al Mercado',
          price: '€4,500',
          priceAlt: '$5,000 USD',
          timeline: '3 semanas desde el inicio',
          subtitle: 'Perfecto para empresas que exploran oportunidades de mercado y necesitan claridad estratégica antes de comprometer recursos.',
          features: [
            'Análisis del mercado objetivo (tamaño, tendencias, oportunidades)',
            'Mapeo del panorama competitivo con actores clave',
            'Requisitos regulatorios y barreras de importación/exportación',
            'Consideraciones culturales empresariales y riesgos',
            '3 opciones de estrategia de entrada con pros/contras',
            'Requisitos de inversión y cronograma realista',
            'Lista seleccionada de 10 socios/distribuidores potenciales',
            'Informe de Entrada al Mercado de 20 páginas',
            'Presentación ejecutiva',
            'Sesión de estrategia de 1 hora',
            'Soporte por correo de 30 días'
          ],
          ideal: [
            'Exploradores de mercado primerizos',
            'Empresas validando mercado antes de inversión mayor',
            'Equipos necesitando aprobación interna con datos',
            'Empresas con cronograma ajustado para decisión'
          ]
        },
        {
          badge: 'Mejor ROI - La Mayoría Elige Este',
          name: 'Puente de Asociación',
          price: '€12,000',
          priceAlt: '$13,000 USD',
          timeline: '6 semanas desde el inicio',
          subtitle: 'Para empresas listas para conectar con socios y ejecutar la entrada al mercado con facilitación práctica y puente cultural.',
          features: [
            'Todos los entregables del Sprint (condensado)',
            'Identificación de 5 candidatos de socios ideales',
            'Diligencia debida integral en cada socio',
            'Presentaciones personales de nuestra red',
            'Facilitación de hasta 10 reuniones',
            'Puente cultural y traducción en tiempo real',
            'Desarrollo de estrategia de negociación',
            'Marco de términos de asociación',
            'Lista de recursos legales y regulatorios',
            'Soporte de 60 días post-introducción',
            '75% tiene negociaciones activas en 90 días'
          ],
          ideal: [
            'Empresas con interés de mercado validado',
            'Equipos listos para conocer socios en 4-6 semanas',
            'Empresas necesitando puente cultural',
            'Firmas queriendo cronograma acelerado',
            'Negocios valorando relaciones sobre enfoques fríos'
          ]
        },
        {
          badge: 'Solución Integral',
          name: 'Establecimiento Completo',
          price: '€28,000',
          priceAlt: '$30,000 USD',
          pricingNote: 'Alternativa: €15,000 + 2-5% participación en subsidiaria local',
          timeline: '3 meses intensivo + asesoría continua',
          subtitle: 'Solución completa de entrada al mercado con acceso a financiamiento, asesoría estratégica y soporte continuo durante la fase crítica de configuración.',
          features: [
            'Todos los entregables del Puente (acelerado)',
            'Preparación de solicitud UE/Innovation Norway',
            'Soporte de co-solicitante usando nuestra entidad noruega',
            'Modelo financiero integral y caso de negocio',
            'Llamadas estratégicas quincenales (12 sesiones)',
            'Asiento de asesor en junta (estado de observador)',
            'Introducciones ilimitadas de red bilateral',
            'Introducciones a consultores legales y regulatorios',
            'Orientación para configuración bancaria corporativa',
            'Apoyo de reclutamiento para contrataciones locales clave',
            'Informes trimestrales de actualización de mercado',
            'Financiamiento típico asegurado: €50k-€200k en subvenciones'
          ],
          ideal: [
            'Empresas comprometidas con inversión seria (€100k+)',
            'Empresas requiriendo financiamiento externo',
            'Equipos necesitando socio estratégico durante configuración',
            'Firmas planeando presencia física',
            'Negocios queriendo soporte integral'
          ]
        }
      ],
      addons: {
        title: 'Servicios Adicionales Opcionales',
        subtitle: 'Disponibles para todos los paquetes para personalizar su compromiso',
        items: [
          {
            name: 'Configuración de Red de Distribución',
            price: '+€5,000',
            timeline: '4 semanas',
            desc: 'Para productos físicos entrando a canales minoristas/B2B'
          },
          {
            name: 'Análisis Profundo de Cumplimiento Regulatorio',
            price: '+€3,000',
            timeline: '2 semanas',
            desc: 'Para industrias altamente reguladas (alimentos, médico, etc.)'
          },
          {
            name: 'Soporte de Adquisición de Talento',
            price: '+€2,500',
            timeline: 'Continuo',
            desc: 'Para empresas planeando contrataciones locales'
          }
        ]
      },
      cta: {
        title: 'Elija Su Punto de Partida',
        text: '¿No está seguro de qué paquete se ajusta? Reserve una llamada de descubrimiento de 30 minutos para discutir su situación específica.',
        trust: 'Q4 2025: 2 lugares disponibles'
      }
    },
    no: {
      title: 'Tre Veier til Markedsinntreden',
      subtitle: 'Velg engasjementsnivået som passer din tidslinje, budsjett og markedsinntredensmål. Alle pakker inkluderer direkte tilgang til vårt bilaterale nettverk og transparente, resultatdrevne prosesser.',
      packages: [
        {
          badge: 'Mest Populær for Nybegynnere',
          name: 'Markedsinntredelsessprint',
          price: '€4,500',
          priceAlt: '$5,000 USD',
          timeline: '3 uker fra oppstart',
          subtitle: 'Perfekt for selskaper som utforsker markedsmuligheter og trenger strategisk klarhet før de forplikter ressurser.',
          features: [
            'Målmarkedsanalyse (størrelse, veksttrender, muligheter)',
            'Kartlegging av konkurranselandskap med nøkkelaktører',
            'Regulatoriske krav og import/eksportbarrierer',
            'Kulturelle forretningshensyn og inngangsrisiko',
            '3 markedsinntredelsesstrategier med fordeler/ulemper',
            'Investeringskrav og realistisk tidslinje',
            'Kuratert liste over 10 potensielle partnere/distributører',
            '20-siders markedsinntredelsesrapport',
            'Lederpresenasjon',
            '1-times Q&A strategisamtale',
            '30-dagers e-poststøtte'
          ],
          ideal: [
            'Førstegangsutviklere av marked',
            'Selskaper som validerer marked før større investering',
            'Team som trenger intern godkjenning med data',
            'Bedrifter med stram tidslinje for go/no-go beslutning'
          ]
        },
        {
          badge: 'Beste ROI - De Fleste Velger Denne',
          name: 'Partnerskapsbro',
          price: '€12,000',
          priceAlt: '$13,000 USD',
          timeline: '6 uker fra oppstart',
          subtitle: 'For selskaper klare til å koble seg til partnere og gjennomføre markedsinntreden med praktisk tilrettelegging og kulturell brobygging.',
          features: [
            'Alle Sprint-leveranser (komprimert)',
            'Identifisering av 5 ideelle partnerkandidater',
            'Omfattende due diligence på hver partner',
            'Varme personlige introduksjoner fra vårt nettverk',
            'Tilrettelegging av opptil 10 møter',
            'Kulturell bro og sanntidsoversettelse',
            'Utvikling av forhandlingsstrategi',
            'Utkast til partnerskapsvilkårsramme',
            'Legal og regulatorisk ressursliste',
            '60-dagers støtte etter introduksjon',
            '75% har aktive forhandlinger innen 90 dager'
          ],
          ideal: [
            'Selskaper med validert markedsinteresse',
            'Team klare til å møte partnere innen 4-6 uker',
            'Bedrifter som trenger kulturell bro',
            'Firmaer som ønsker akselerert tidslinje',
            'Virksomheter som verdsetter relasjoner fremfor kalde tilnærminger'
          ]
        },
        {
          badge: 'Omfattende Løsning',
          name: 'Full Markedsetablering',
          price: '€28,000',
          priceAlt: '$30,000 USD',
          pricingNote: 'Alternativ: €15,000 + 2-5% egenkapital i lokal datterselskap',
          timeline: '3 måneders intensiv + løpende rådgivning',
          subtitle: 'Komplett markedsinntredelsesløsning med finansieringstilgang, strategisk rådgivning og løpende støtte gjennom kritisk oppstartsfase.',
          features: [
            'Alle Partnerskapsbro-leveranser (akselerert)',
            'EU/Innovation Norway finansieringssøknadsforberedelse',
            'Medsolvent-støtte ved bruk av vår norske enhet',
            'Omfattende finansmodell og forretningscase',
            'Halvukentlige strategisamtaler (12 økter)',
            'Styrerådgivningssete (observatørstatus)',
            'Ubegrensede introduksjoner fra bilateralt nettverk',
            'Introduksjoner til juridiske og regulatoriske konsulenter',
            'Veiledning for oppsett av bedriftsbank',
            'Rekrutteringsstøtte for nøkkel lokale ansettelser',
            'Kvartalsvise markedsoppdateringsrapporter',
            'Typisk sikret finansiering: €50k-€200k i tilskudd'
          ],
          ideal: [
            'Selskaper forpliktet til seriøs investering (€100k+)',
            'Bedrifter som krever ekstern finansiering',
            'Team som trenger strategisk partner gjennom oppstart',
            'Firmaer som planlegger fysisk tilstedeværelse',
            'Virksomheter som ønsker omfattende støtte'
          ]
        }
      ],
      addons: {
        title: 'Valgfrie Tilleggstjenester',
        subtitle: 'Tilgjengelig for alle pakker for å tilpasse ditt engasjement',
        items: [
          {
            name: 'Distribusjonsnettverksoppsett',
            price: '+€5,000',
            timeline: '4 uker',
            desc: 'For fysiske produkter som går inn i detaljhandel/B2B-kanaler'
          },
          {
            name: 'Dybdedykk i Regulatorisk Etterlevelse',
            price: '+€3,000',
            timeline: '2 uker',
            desc: 'For høyt regulerte bransjer (mat, medisinsk, etc.)'
          },
          {
            name: 'Talentervervsstøtte',
            price: '+€2,500',
            timeline: 'Løpende',
            desc: 'For selskaper som planlegger lokale ansettelser'
          }
        ]
      },
      cta: {
        title: 'Velg Ditt Utgangspunkt',
        text: 'Ikke sikker på hvilken pakke som passer? Bestill en 30-minutters oppdagelsessamtale for å diskutere din spesifikke situasjon.',
        trust: 'Q4 2025: 2 engasjementsplasser igjen'
      }
    }
  };

  const c = content[language];

  return (
    <PageWrapper className="pt-8 pb-16">
      <div className="container-custom">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {c.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {c.subtitle}
          </p>
        </motion.div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {c.packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${
                index === 1 ? 'ring-2 ring-primary transform lg:scale-105' : ''
              }`}
            >
              {pkg.badge && (
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold py-2 px-4 text-center">
                  {pkg.badge}
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.priceAlt}</div>
                  {pkg.pricingNote && (
                    <div className="text-xs text-gray-500 mt-1 italic">{pkg.pricingNote}</div>
                  )}
                </div>
                <div className="text-sm text-gray-600 mb-4 font-medium">{pkg.timeline}</div>
                <p className="text-gray-700 mb-6">{pkg.subtitle}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Who This Is For:</h4>
                  <ul className="space-y-1">
                    {pkg.ideal.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gray-50">
                <a href="https://calendly.com/pepe-martinez-teinno" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      index === 1
                        ? 'bg-primary text-white hover:bg-primary-700'
                        : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    Book Discovery Call
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">{c.addons.title}</h2>
          <p className="text-center text-gray-600 mb-8">{c.addons.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.addons.items.map((addon, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{addon.name}</h3>
                <div className="text-primary font-bold mb-1">{addon.price}</div>
                <div className="text-sm text-gray-600 mb-3">{addon.timeline}</div>
                <p className="text-sm text-gray-700">{addon.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary to-primary-800 text-white rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">{c.cta.title}</h2>
          <p className="text-xl p-6 mb-6 text-blue-100 max-w-3xl mx-auto">{c.cta.text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://calendly.com/pepe-martinez-teinno" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                Book Discovery Call
              </motion.button>
            </a>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Send Message
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Services;
