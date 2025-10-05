import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Active Projects & Partnerships',
      subtitle: 'Current engagements spanning Mexico, Norway, Bolivia, and Latin America—demonstrating our bilateral network in action and the diversity of opportunities we facilitate.',
      projects: [
        {
          title: 'Mahahual Agricultural Cooperative',
          location: 'Quintana Roo, Mexico → Nordic Markets',
          status: 'IN PROGRESS',
          statusColor: 'green',
          description: 'Sustainable lime production cooperative in Mexico\'s Caribbean coast targeting Nordic organic food markets. Combines agricultural development, export facilitation, and sustainable practices to create market access for small-scale farmers.',
          partners: [
            'Local producers cooperative (60+ smallholder farmers)',
            'Norwegian organic food importers',
            'Swedish food service distributors',
            'EU organic certification consultants',
            'Mexican export development agency'
          ],
          role: [
            'Market entry strategy for Norwegian and Swedish organic markets',
            'EU organic certification roadmap and compliance support',
            'Introduction to Nordic distribution channels',
            'Export logistics and supply chain optimization',
            'Funding application for sustainable agriculture grants'
          ],
          scale: '€150,000-€300,000 annual export potential',
          stage: 'EU certification process underway, first Nordic distributor negotiations in progress'
        },
        {
          title: 'Cochabamba Waste Treatment Facility',
          location: 'Cochabamba, Bolivia → Norwegian Technology',
          status: 'INVESTMENT PHASE',
          statusColor: 'blue',
          description: 'Municipal waste treatment modernization project requiring Nordic environmental technology and investment capital. Connecting Bolivian government entity with Norwegian waste-to-energy and circular economy solutions providers.',
          partners: [
            'Municipal Government of Cochabamba',
            'Norwegian environmental technology firms',
            'Regional development finance institutions',
            'Norwegian development cooperation agencies',
            'Environmental impact consultants'
          ],
          role: [
            'Technology provider identification and technical vetting',
            'Investment structure design and financial modeling (PPP framework)',
            'Government relations facilitation at municipal and national level',
            'EU/Norwegian development funding application coordination',
            'Technical due diligence coordination between parties'
          ],
          scale: '€2M-€5M total project',
          stage: 'Technology assessment complete, partner introductions made, financing structure in development'
        },
        {
          title: 'Querétaro Innovation & Internationalization Center',
          location: 'Querétaro, Mexico (with Nordic Partnerships)',
          status: 'PROGRAM DEVELOPMENT',
          statusColor: 'orange',
          description: 'Innovation hub connecting Mexican enterprises with Nordic technology, funding, and market access. Partnership with local universities to facilitate technology transfer, joint R&D initiatives, and innovation capacity building.',
          partners: [
            'Universidad Autónoma de Querétaro (UAQ)',
            'Querétaro Chamber of Commerce (COPARMEX)',
            'Nordic technology companies (aerospace, automotive, IT)',
            'Innovation Norway programs',
            'Mexican federal innovation agency (CONACYT)',
            'Local state government (economic development)'
          ],
          role: [
            'Overall program design and innovation curriculum development',
            'Nordic partner recruitment (technology providers, research institutions)',
            'Funding strategy (EU-Mexico innovation programs, bilateral funds)',
            'Ongoing facilitation and program management',
            'Technology transfer methodology and IP framework'
          ],
          scale: '50+ companies to participate in first 18 months',
          stage: 'Partnership agreements with university signed, pilot program design 60% complete, Nordic partner recruitment ongoing'
        },
        {
          title: 'Tabasco Fishing Industry Modernization',
          location: 'Tabasco, Mexico → Norwegian Expertise',
          status: 'FUNDING APPLICATION',
          statusColor: 'purple',
          description: 'Government-backed initiative to modernize Gulf of Mexico fishing industry with Norwegian sustainable fishing technology, aquaculture expertise, and marine research collaboration. Aims to increase productivity while improving environmental sustainability.',
          partners: [
            'Mexican Federal Government (CONAPESCA)',
            'Tabasco State Government',
            'Norwegian fishing technology providers',
            'Norwegian marine research institutions',
            'Mexican fisheries cooperatives',
            'International development banks (IDB, World Bank)'
          ],
          role: [
            'Comprehensive technology needs assessment',
            'Norwegian partner identification (fishing tech, sustainable practices)',
            'Multilateral funding strategy (development banks, bilateral funds)',
            'Public-private partnership (PPP) structuring',
            'Government relations at federal and state level',
            'Environmental impact and sustainability framework'
          ],
          scale: '€5M-€15M total program',
          stage: 'Needs assessment complete, Norwegian partner identification in progress, funding applications in preparation'
        }
      ],
      network: {
        title: 'Our Institutional Network',
        subtitle: 'Established relationships that enable fast, credible introductions and bypass typical barriers to market entry.',
        nordic: [
          'Nordic-LATAM Chamber of Commerce (VP - Leadership Position)',
          'Bergen Chamber of Commerce (Active Member)',
          'Innovation Norway (Program Access & Partnerships)',
          'Norwegian University of Science and Technology',
          'Norwegian environmental tech cluster',
          'Nordic startup ecosystems (Oslo, Bergen, Stockholm)'
        ],
        latam: [
          'Red Global Nodo Querétaro (Founder & VP)',
          'Universidad Autónoma de Querétaro (Strategic Partnership)',
          'COPARMEX Querétaro (Chamber of Commerce Partnership)',
          'Mexican export development agencies',
          'Government innovation programs (CONACYT)',
          'Regional chambers of commerce across Mexico',
          'Latin American startup and innovation networks'
        ]
      },
      cta: {
        title: 'Have a Project in Mind?',
        text: 'Whether you\'re a Nordic company exploring Latin American markets, a Latin American enterprise seeking Nordic partnerships, or a complex multi-stakeholder project requiring bilateral facilitation—let\'s discuss how our network and expertise can accelerate your objectives.',
        note: 'Current focus: Mexico-Norway corridor with expansion to broader Nordic and LATAM regions based on network strength.'
      }
    },
    es: {
      title: 'Proyectos y Asociaciones Activos',
      subtitle: 'Compromisos actuales que abarcan México, Noruega, Bolivia y América Latina, demostrando nuestra red bilateral en acción y la diversidad de oportunidades que facilitamos.',
      projects: [
        {
          title: 'Cooperativa Agrícola Mahahual',
          location: 'Quintana Roo, México → Mercados Nórdicos',
          status: 'EN PROGRESO',
          statusColor: 'green',
          description: 'Cooperativa de producción sostenible de lima en la costa caribeña de México dirigida a mercados de alimentos orgánicos nórdicos. Combina desarrollo agrícola, facilitación de exportaciones y prácticas sostenibles para crear acceso al mercado para pequeños agricultores.',
          partners: [
            'Cooperativa de productores locales (60+ pequeños agricultores)',
            'Importadores de alimentos orgánicos noruegos',
            'Distribuidores de servicios de alimentos suecos',
            'Consultores de certificación orgánica de la UE',
            'Agencia mexicana de desarrollo de exportaciones'
          ],
          role: [
            'Estrategia de entrada al mercado para mercados orgánicos noruegos y suecos',
            'Hoja de ruta de certificación orgánica UE y soporte de cumplimiento',
            'Introducción a canales de distribución nórdicos',
            'Logística de exportación y optimización de cadena de suministro',
            'Solicitud de financiamiento para subvenciones de agricultura sostenible'
          ],
          scale: '€150,000-€300,000 potencial de exportación anual',
          stage: 'Proceso de certificación UE en curso, primeras negociaciones con distribuidor nórdico en progreso'
        },
        {
          title: 'Planta de Tratamiento de Residuos Cochabamba',
          location: 'Cochabamba, Bolivia → Tecnología Noruega',
          status: 'FASE DE INVERSIÓN',
          statusColor: 'blue',
          description: 'Proyecto de modernización de tratamiento de residuos municipales que requiere tecnología ambiental nórdica y capital de inversión. Conectando entidad gubernamental boliviana con proveedores noruegos de soluciones de residuos a energía y economía circular.',
          partners: [
            'Gobierno Municipal de Cochabamba',
            'Empresas noruegas de tecnología ambiental',
            'Instituciones regionales de financiamiento para el desarrollo',
            'Agencias noruegas de cooperación para el desarrollo',
            'Consultores de impacto ambiental'
          ],
          role: [
            'Identificación de proveedores de tecnología y evaluación técnica',
            'Diseño de estructura de inversión y modelado financiero (marco PPP)',
            'Facilitación de relaciones gubernamentales a nivel municipal y nacional',
            'Coordinación de solicitudes de financiamiento de desarrollo UE/Noruega',
            'Coordinación de diligencia debida técnica entre partes'
          ],
          scale: '€2M-€5M proyecto total',
          stage: 'Evaluación tecnológica completa, introducciones de socios realizadas, estructura de financiamiento en desarrollo'
        },
        {
          title: 'Centro de Innovación e Internacionalización Querétaro',
          location: 'Querétaro, México (con Asociaciones Nórdicas)',
          status: 'DESARROLLO DE PROGRAMA',
          statusColor: 'orange',
          description: 'Hub de innovación que conecta empresas mexicanas con tecnología, financiamiento y acceso a mercados nórdicos. Asociación con universidades locales para facilitar transferencia tecnológica, iniciativas conjuntas de I+D y desarrollo de capacidad de innovación.',
          partners: [
            'Universidad Autónoma de Querétaro (UAQ)',
            'Cámara de Comercio de Querétaro (COPARMEX)',
            'Empresas tecnológicas nórdicas (aeroespacial, automotriz, IT)',
            'Programas de Innovation Norway',
            'Agencia federal mexicana de innovación (CONACYT)',
            'Gobierno estatal local (desarrollo económico)'
          ],
          role: [
            'Diseño general del programa y desarrollo de currículo de innovación',
            'Reclutamiento de socios nórdicos (proveedores de tecnología, instituciones de investigación)',
            'Estrategia de financiamiento (programas de innovación UE-México, fondos bilaterales)',
            'Facilitación continua y gestión del programa',
            'Metodología de transferencia tecnológica y marco de PI'
          ],
          scale: '50+ empresas participando en los primeros 18 meses',
          stage: 'Acuerdos de asociación con universidad firmados, diseño del programa piloto 60% completo, reclutamiento de socios nórdicos en curso'
        },
        {
          title: 'Modernización de la Industria Pesquera de Tabasco',
          location: 'Tabasco, México → Experiencia Noruega',
          status: 'SOLICITUD DE FINANCIAMIENTO',
          statusColor: 'purple',
          description: 'Iniciativa respaldada por el gobierno para modernizar la industria pesquera del Golfo de México con tecnología pesquera sostenible noruega, experiencia en acuicultura y colaboración en investigación marina. Busca aumentar la productividad mejorando la sostenibilidad ambiental.',
          partners: [
            'Gobierno Federal Mexicano (CONAPESCA)',
            'Gobierno del Estado de Tabasco',
            'Proveedores de tecnología pesquera noruegos',
            'Instituciones noruegas de investigación marina',
            'Cooperativas pesqueras mexicanas',
            'Bancos de desarrollo internacional (BID, Banco Mundial)'
          ],
          role: [
            'Evaluación integral de necesidades tecnológicas',
            'Identificación de socios noruegos (tecnología pesquera, prácticas sostenibles)',
            'Estrategia de financiamiento multilateral (bancos de desarrollo, fondos bilaterales)',
            'Estructuración de asociación público-privada (PPP)',
            'Relaciones gubernamentales a nivel federal y estatal',
            'Marco de impacto ambiental y sostenibilidad'
          ],
          scale: '€5M-€15M programa total',
          stage: 'Evaluación de necesidades completa, identificación de socios noruegos en progreso, solicitudes de financiamiento en preparación'
        }
      ],
      network: {
        title: 'Nuestra Red Institucional',
        subtitle: 'Relaciones establecidas que permiten introducciones rápidas y creíbles y evitan barreras típicas para la entrada al mercado.',
        nordic: [
          'Cámara de Comercio Nórdico-LATAM (VP - Posición de Liderazgo)',
          'Cámara de Comercio de Bergen (Miembro Activo)',
          'Innovation Norway (Acceso a Programas y Asociaciones)',
          'Universidad Noruega de Ciencia y Tecnología',
          'Clúster de tecnología ambiental noruega',
          'Ecosistemas de startups nórdicas (Oslo, Bergen, Estocolmo)'
        ],
        latam: [
          'Red Global Nodo Querétaro (Fundador y VP)',
          'Universidad Autónoma de Querétaro (Asociación Estratégica)',
          'COPARMEX Querétaro (Asociación de Cámara de Comercio)',
          'Agencias mexicanas de desarrollo de exportaciones',
          'Programas gubernamentales de innovación (CONACYT)',
          'Cámaras de comercio regionales en todo México',
          'Redes de startups e innovación latinoamericanas'
        ]
      },
      cta: {
        title: '¿Tienes un Proyecto en Mente?',
        text: 'Ya sea que seas una empresa nórdica explorando mercados latinoamericanos, una empresa latinoamericana buscando asociaciones nórdicas, o un proyecto complejo de múltiples partes interesadas que requiere facilitación bilateral, discutamos cómo nuestra red y experiencia pueden acelerar tus objetivos.',
        note: 'Enfoque actual: corredor México-Noruega con expansión a regiones nórdicas y LATAM más amplias basado en fortaleza de red.'
      }
    },
    no: {
      title: 'Aktive Prosjekter og Partnerskap',
      subtitle: 'Nåværende engasjementer som spenner over Mexico, Norge, Bolivia og Latin-Amerika—demonstrerer vårt bilaterale nettverk i aksjon og mangfoldet av muligheter vi tilrettelegger for.',
      projects: [
        {
          title: 'Mahahual Landbrukskooperativ',
          location: 'Quintana Roo, Mexico → Nordiske Markeder',
          status: 'PÅGÅR',
          statusColor: 'green',
          description: 'Bærekraftig limeproduksjonskooperativ på Mexicos karibiske kyst rettet mot nordiske økologiske matmarkeder. Kombinerer landbruksutvikling, eksportfasilitering og bærekraftige praksiser for å skape markedstilgang for småskalaprodusenter.',
          partners: [
            'Lokalt produsentkooperativ (60+ småbrukere)',
            'Norske økologiske matimportører',
            'Svenske matservicedistributører',
            'EU økologisk sertifiseringskonsulenter',
            'Meksikansk eksportutviklingsbyrå'
          ],
          role: [
            'Markedsinntredensstrategi for norske og svenske økologiske markeder',
            'EU økologisk sertifiserings-veikart og etterlevelsesstøtte',
            'Introduksjon til nordiske distribusjonskanaler',
            'Eksportlogistikk og optimalisering av forsyningskjede',
            'Finansieringssøknad for bærekraftige landbrukstilskudd'
          ],
          scale: '€150,000-€300,000 årlig eksportpotensial',
          stage: 'EU-sertifiseringsprosess pågår, første nordiske distributørforhandlinger i gang'
        },
        {
          title: 'Cochabamba Avfallsbehandlingsanlegg',
          location: 'Cochabamba, Bolivia → Norsk Teknologi',
          status: 'INVESTERINGSFASE',
          statusColor: 'blue',
          description: 'Kommunalt avfallsbehandlingsmoderniseringsprosjekt som krever nordisk miljøteknologi og investeringskapital. Kobler boliviansk myndighetsenhet med norske leverandører av avfall-til-energi og sirkulærøkonomiløsninger.',
          partners: [
            'Cochabamba Kommunestyre',
            'Norske miljøteknologiselskaper',
            'Regionale utviklingsfinansinstitusjoner',
            'Norske utviklingssamarbeidsbyråer',
            'Miljøpåvirkningskonsulenter'
          ],
          role: [
            'Teknologileverandøridentifikasjon og teknisk vurdering',
            'Investeringsstrukturdesign og finansiell modellering (PPP-rammeverk)',
            'Myndighetrelasjoner på kommunalt og nasjonalt nivå',
            'EU/Norsk utviklingsfinansieringssøknadskoordinering',
            'Teknisk due diligence-koordinering mellom parter'
          ],
          scale: '€2M-€5M totalt prosjekt',
          stage: 'Teknologivurdering fullført, partnerintroduksjoner gjort, finansieringsstruktur under utvikling'
        },
        {
          title: 'Querétaro Innovasjons- og Internasjonaliseringssenter',
          location: 'Querétaro, Mexico (med Nordiske Partnerskap)',
          status: 'PROGRAMUTVIKLING',
          statusColor: 'orange',
          description: 'Innovasjonshub som kobler meksikanske bedrifter med nordisk teknologi, finansiering og markedstilgang. Partnerskap med lokale universiteter for å tilrettelegge teknologioverføring, felles FoU-initiativer og innovasjonskapasitetsbygging.',
          partners: [
            'Universidad Autónoma de Querétaro (UAQ)',
            'Querétaro Handelskammer (COPARMEX)',
            'Nordiske teknologiselskaper (romfart, bil, IT)',
            'Innovation Norway-programmer',
            'Meksikansk føderalt innovasjonsbyrå (CONACYT)',
            'Lokal delstatregjering (økonomisk utvikling)'
          ],
          role: [
            'Overordnet programdesign og innovasjonslæreplansutvikling',
            'Nordisk partnerrekruttering (teknologileverandører, forskningsinstitusjoner)',
            'Finansieringsstrategi (EU-Mexico innovasjonsprogrammer, bilaterale fond)',
            'Løpende tilrettelegging og programledelse',
            'Teknologioverføringsmetodikk og IP-rammeverk'
          ],
          scale: '50+ selskaper deltar i de første 18 månedene',
          stage: 'Partnerskapsavtaler med universitet signert, pilotprogramdesign 60% fullført, nordisk partnerrekruttering pågår'
        },
        {
          title: 'Tabasco Fiskeriindustri Modernisering',
          location: 'Tabasco, Mexico → Norsk Ekspertise',
          status: 'FINANSIERINGSSØKNAD',
          statusColor: 'purple',
          description: 'Regjeringsstøttet initiativ for å modernisere Gulf of Mexico fiskeriindustri med norsk bærekraftig fisketeknologi, akvakulturekspertise og marin forskningssamarbeid. Sikter på å øke produktiviteten samtidig som man forbedrer miljømessig bærekraft.',
          partners: [
            'Meksikansk Føderalregjering (CONAPESCA)',
            'Tabasco Delstatregjering',
            'Norske fisketeknologileverandører',
            'Norske marinforskningsinstitusjoner',
            'Meksikanske fiskerikooperativer',
            'Internasjonale utviklingsbanker (IDB, Verdensbanken)'
          ],
          role: [
            'Omfattende teknologibehovsvurdering',
            'Norsk partneridentifikasjon (fisketeknologi, bærekraftige praksiser)',
            'Multilateral finansieringsstrategi (utviklingsbanker, bilaterale fond)',
            'Offentlig-privat partnerskap (PPP) strukturering',
            'Myndighetrelasjoner på føderalt og delstatsnivå',
            'Miljøpåvirkning og bærekraftrammeverk'
          ],
          scale: '€5M-€15M totalt program',
          stage: 'Behovsvurdering fullført, norsk partneridentifikasjon pågår, finansieringssøknader under forberedelse'
        }
      ],
      network: {
        title: 'Vårt Institusjonelle Nettverk',
        subtitle: 'Etablerte relasjoner som muliggjør raske, troverdige introduksjoner og omgår typiske barrierer for markedsinntreden.',
        nordic: [
          'Nordisk-LATAM Handelskammer (VP - Lederstilling)',
          'Bergen Handelskammer (Aktivt Medlem)',
          'Innovation Norway (Programtilgang og Partnerskap)',
          'Norges Teknisk-Naturvitenskapelige Universitet',
          'Norsk miljøteknologiklynge',
          'Nordiske oppstartsøkosystemer (Oslo, Bergen, Stockholm)'
        ],
        latam: [
          'Red Global Nodo Querétaro (Grunnlegger og VP)',
          'Universidad Autónoma de Querétaro (Strategisk Partnerskap)',
          'COPARMEX Querétaro (Handelskammerpartnerskap)',
          'Meksikanske eksportutviklingsbyråer',
          'Offentlige innovasjonsprogrammer (CONACYT)',
          'Regionale handelskamre over hele Mexico',
          'Latinamerikanske oppstarts- og innovasjonsnettverk'
        ]
      },
      cta: {
        title: 'Har Du et Prosjekt i Tankene?',
        text: 'Enten du er et nordisk selskap som utforsker latinamerikanske markeder, en latinamerikansk bedrift som søker nordiske partnerskap, eller et komplekst multistakeholder-prosjekt som krever bilateral tilrettelegging—la oss diskutere hvordan vårt nettverk og ekspertise kan akselerere dine mål.',
        note: 'Nåværende fokus: Mexico-Norge-korridoren med utvidelse til bredere nordiske og LATAM-regioner basert på nettverksstyrke.'
      }
    }
  };

  const c = content[language];

  const statusColors = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500'
  };

  return (
    <div className="py-16">
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

        {/* Projects */}
        <div className="space-y-12 mb-16">
          {c.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <div className="text-gray-600 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                  <span className={`${statusColors[project.statusColor as keyof typeof statusColors]} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-700 mb-6">{project.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Partners Involved:</h3>
                    <ul className="space-y-2">
                      {project.partners.map((partner, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {partner}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Our Role:</h3>
                    <ul className="space-y-2">
                      {project.role.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900">Project Scale:</span>
                    <span className="text-gray-700">{project.scale}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900">Current Stage:</span>
                    <span className="text-gray-700">{project.stage}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{c.network.title}</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">{c.network.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🇳🇴</span> Nordic Network
              </h3>
              <ul className="space-y-2">
                {c.network.nordic.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🇲🇽</span> Latin American Network
              </h3>
              <ul className="space-y-2">
                {c.network.latam.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary to-primary-800 text-white rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">{c.cta.title}</h2>
          <p className="text-lg mb-6 text-blue-100 max-w-3xl mx-auto">{c.cta.text}</p>
          <p className="text-sm mb-8 text-blue-200 italic">{c.cta.note}</p>
          <a href="https://calendly.com/pepe-martinez-teinno" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              Discuss Your Project
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
