import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Connecting Two Regions Through Direct Access & Cultural Fluency',
      subtitle: 'Built on institutional positions, proven network, deep technical expertise, and genuine understanding of business culture in both Nordic and Latin American markets.',
      founder: {
        name: 'Pepe Martínez Guarduola',
        title: 'Founder & Principal Consultant, Teinno AS',
        bio: 'Pepe Martínez bridges Nordic and Latin American markets through unique positioning as VP of the Nordic-LATAM Chamber of Commerce and Founder of Red Global Nodo Querétaro. Born and raised in Mexico, Pepe identified early the massive opportunity gap: Nordic countries leading in innovation and sustainability, Latin America with enormous market potential and appetite for these solutions—but few credible bridges between them. He founded Teinno AS in 2018 to systematically address this gap.',
        bio2: 'Based primarily in Bergen, Norway, with operational presence in Querétaro, Mexico, Pepe leverages institutional relationships, technical expertise, and cultural fluency to accelerate market entry and partnership development for enterprises on both sides. What makes his approach unique is the combination of technical depth (engineering + machine learning background), business acumen (MBA + 6 years international BD), and institutional credibility (leadership positions in chambers of commerce and business networks on both sides).',
        positions: [
          'VP, Nordic-LATAM Chamber of Commerce',
          'Founder & VP, Red Global Nodo Querétaro',
          'Member, Bergen Chamber of Commerce',
          'Active participant, Bergen international business and innovation community'
        ],
        education: [
          'MSc Information Science (Machine Learning & HCI Specialization)',
          'MBA, Business Administration',
          'BSc Systems Engineering'
        ],
        expertise: [
          'Nordic-LATAM market entry strategy and execution',
          'International partnership development and deal facilitation',
          'EU/Norwegian funding access and application support',
          'Technology transfer and innovation program design',
          'Cultural bridge and business translation between regions',
          'Public-private partnership structuring',
          'R&D collaboration facilitation'
        ]
      },
      differentiators: [
        {
          title: 'Institutional Credibility',
          desc: 'Not freelance consultants or generic advisory firms. Leadership positions in chambers of commerce and business networks provide immediate credibility, trust, and access that cannot be purchased or faked. When we make an introduction, it carries weight of institutional backing.'
        },
        {
          title: 'Dual Operations & Presence',
          desc: 'Physical presence and deep relationships in both Norway and Mexico (not just occasional visits or hired local representatives). This enables fast local execution, real-time problem solving, and genuine cultural fluency. We\'re on the ground, in the meetings, navigating the local systems personally.'
        },
        {
          title: 'Norwegian Entity Advantage',
          desc: 'Teinno AS as Norwegian registered company provides significant advantages for funding applications. Norway\'s preferred status in EU innovation programs means our co-applicant support increases approval rates approximately 3x compared to Latin American-only applications.'
        },
        {
          title: 'Technical + Business + Cultural',
          desc: 'Rare combination of technical depth (engineering, ML, systems), business acumen (MBA, finance, strategy), and cultural/language fluency. Most consultants have one, maybe two of these. We bring all three. This matters enormously for technology transfer projects, R&D collaborations, and complex partnerships.'
        }
      ],
      principles: [
        {
          title: 'Speed Over Perfection',
          desc: 'Market entry windows close quickly. Opportunities have timing. We prioritize fast validation and partner introductions over lengthy research reports and analysis paralysis. You learn more in 3 meetings with potential partners than in 3 months of desk research.'
        },
        {
          title: 'Network Over Research',
          desc: 'Direct warm introductions from trusted institutional relationships beat cold outreach 100 times out of 100. Our value isn\'t just information (you can Google that)—it\'s access to the right people who will actually take your meeting, take you seriously, and engage substantively. Information is commodity. Access is scarce. Trust is priceless.'
        },
        {
          title: 'Results Over Activity',
          desc: 'We\'re measured on deals facilitated and partnerships formed, not hours billed or reports delivered. Success = your market entry, your partners identified, your funding secured. We don\'t artificially extend engagements or create busywork. Our reputation depends on client success.'
        }
      ],
      values: [
        {
          title: 'Integrity',
          desc: 'We only take projects where we believe we can deliver meaningful value. If we\'re not the right fit, we\'ll tell you honestly and potentially refer you to someone better suited. Our reputation in both regions depends on making good matches and delivering on promises.'
        },
        {
          title: 'Transparency',
          desc: 'Clear pricing, defined deliverables, realistic timelines. No vague "consulting" where you\'re not sure what you\'re paying for. If a project is going off track, we communicate early and directly. If opportunities emerge that weren\'t in original scope, we discuss them openly.'
        },
        {
          title: 'Impact',
          desc: 'We\'re drawn to projects that matter: sustainable development, innovation transfer, economic opportunity creation, capacity building. While we\'re a commercial entity, we preferentially work on projects that create positive impact beyond just our client\'s ROI.'
        }
      ],
      timeline: [
        { year: '2018', title: 'FOUNDING', desc: 'Teinno AS established in Norway. Identified the Nordic-LATAM opportunity gap and committed to building systematic bridge between regions.' },
        { year: '2019-2020', title: 'NETWORK BUILDING', desc: 'Established institutional positions: VP role at Nordic-LATAM Chamber of Commerce, Founded Red Global Nodo Querétaro, built relationships with universities, governments, chambers.' },
        { year: '2021-2022', title: 'FIRST PROJECTS', desc: 'Launched initial partnerships and market entry projects. Proved the model with successful client engagements. Refined processes and identified highest-value services.' },
        { year: '2023-2025', title: 'SCALING IMPACT', desc: 'Active portfolio of government, corporate, and innovation projects. Expanded network across multiple Nordic and LATAM countries. Structured service offerings based on proven demand.' }
      ]
    },
    es: {
      title: 'Conectando Dos Regiones a Través de Acceso Directo y Fluidez Cultural',
      subtitle: 'Construido sobre posiciones institucionales, red comprobada, experiencia técnica profunda y comprensión genuina de la cultura empresarial en mercados nórdicos y latinoamericanos.',
      founder: {
        name: 'Pepe Martínez Guarduola',
        title: 'Fundador y Consultor Principal, Teinno AS',
        bio: 'Pepe Martínez conecta los mercados nórdicos y latinoamericanos a través de su posicionamiento único como VP de la Cámara de Comercio Nórdico-LATAM y Fundador de Red Global Nodo Querétaro. Nacido y criado en México, Pepe identificó temprano la brecha de oportunidad masiva: países nórdicos liderando en innovación y sostenibilidad, América Latina con enorme potencial de mercado y apetito por estas soluciones, pero pocos puentes creíbles entre ellos. Fundó Teinno AS en 2018 para abordar sistemáticamente esta brecha.',
        bio2: 'Con base principalmente en Bergen, Noruega, con presencia operativa en Querétaro, México, Pepe aprovecha relaciones institucionales, experiencia técnica y fluidez cultural para acelerar la entrada al mercado y el desarrollo de asociaciones para empresas en ambos lados. Lo que hace único su enfoque es la combinación de profundidad técnica (antecedentes en ingeniería + aprendizaje automático), perspicacia empresarial (MBA + 6 años de BD internacional) y credibilidad institucional (posiciones de liderazgo en cámaras de comercio y redes empresariales en ambos lados).',
        positions: [
          'VP, Cámara de Comercio Nórdico-LATAM',
          'Fundador y VP, Red Global Nodo Querétaro',
          'Miembro, Cámara de Comercio de Bergen',
          'Participante activo, comunidad empresarial internacional de Bergen'
        ],
        education: [
          'MSc Ciencias de la Información (Especialización en Aprendizaje Automático e IHC)',
          'MBA, Administración de Empresas',
          'BSc Ingeniería de Sistemas'
        ],
        expertise: [
          'Estrategia y ejecución de entrada al mercado Nórdico-LATAM',
          'Desarrollo de asociaciones internacionales y facilitación de acuerdos',
          'Acceso a financiamiento UE/Noruega y soporte de solicitudes',
          'Transferencia tecnológica y diseño de programas de innovación',
          'Puente cultural y traducción empresarial entre regiones',
          'Estructuración de asociaciones público-privadas',
          'Facilitación de colaboración en I+D'
        ]
      },
      differentiators: [
        {
          title: 'Credibilidad Institucional',
          desc: 'No somos consultores independientes ni firmas de asesoría genéricas. Las posiciones de liderazgo en cámaras de comercio y redes empresariales proporcionan credibilidad, confianza y acceso inmediatos que no se pueden comprar ni falsificar. Cuando hacemos una introducción, lleva el peso del respaldo institucional.'
        },
        {
          title: 'Operaciones y Presencia Dual',
          desc: 'Presencia física y relaciones profundas tanto en Noruega como en México (no solo visitas ocasionales o representantes locales contratados). Esto permite ejecución local rápida, resolución de problemas en tiempo real y genuina fluidez cultural. Estamos en el terreno, en las reuniones, navegando los sistemas locales personalmente.'
        },
        {
          title: 'Ventaja de Entidad Noruega',
          desc: 'Teinno AS como empresa registrada en Noruega proporciona ventajas significativas para solicitudes de financiamiento. El estatus preferido de Noruega en programas de innovación de la UE significa que nuestro apoyo como co-solicitante aumenta las tasas de aprobación aproximadamente 3 veces en comparación con solicitudes solo latinoamericanas.'
        },
        {
          title: 'Técnico + Empresarial + Cultural',
          desc: 'Combinación rara de profundidad técnica (ingeniería, ML, sistemas), perspicacia empresarial (MBA, finanzas, estrategia) y fluidez cultural/lingüística. La mayoría de los consultores tienen una, tal vez dos de estas. Traemos las tres. Esto importa enormemente para proyectos de transferencia tecnológica, colaboraciones de I+D y asociaciones complejas.'
        }
      ],
      principles: [
        {
          title: 'Velocidad Sobre Perfección',
          desc: 'Las ventanas de entrada al mercado se cierran rápidamente. Las oportunidades tienen tiempo. Priorizamos la validación rápida y las introducciones de socios sobre informes de investigación largos y parálisis de análisis. Aprendes más en 3 reuniones con socios potenciales que en 3 meses de investigación de escritorio.'
        },
        {
          title: 'Red Sobre Investigación',
          desc: 'Las presentaciones personales directas de relaciones institucionales confiables superan el alcance frío 100 veces de 100. Nuestro valor no es solo información (puedes Googlearla), es acceso a las personas correctas que realmente tomarán tu reunión, te tomarán en serio y se comprometerán sustancialmente. La información es commodity. El acceso es escaso. La confianza no tiene precio.'
        },
        {
          title: 'Resultados Sobre Actividad',
          desc: 'Nos medimos por acuerdos facilitados y asociaciones formadas, no por horas facturadas o informes entregados. Éxito = tu entrada al mercado, tus socios identificados, tu financiamiento asegurado. No extendemos artificialmente los compromisos ni creamos trabajo innecesario. Nuestra reputación depende del éxito del cliente.'
        }
      ],
      values: [
        {
          title: 'Integridad',
          desc: 'Solo tomamos proyectos donde creemos que podemos entregar valor significativo. Si no somos la opción correcta, te lo diremos honestamente y potencialmente te referiremos a alguien más adecuado. Nuestra reputación en ambas regiones depende de hacer buenas coincidencias y cumplir promesas.'
        },
        {
          title: 'Transparencia',
          desc: 'Precios claros, entregables definidos, cronogramas realistas. No hay "consultoría" vaga donde no estás seguro de por qué estás pagando. Si un proyecto se desvía, nos comunicamos temprano y directamente. Si surgen oportunidades que no estaban en el alcance original, las discutimos abiertamente.'
        },
        {
          title: 'Impacto',
          desc: 'Nos atraen proyectos que importan: desarrollo sostenible, transferencia de innovación, creación de oportunidades económicas, construcción de capacidades. Si bien somos una entidad comercial, trabajamos preferentemente en proyectos que crean impacto positivo más allá del ROI de nuestro cliente.'
        }
      ],
      timeline: [
        { year: '2018', title: 'FUNDACIÓN', desc: 'Teinno AS establecida en Noruega. Identificó la brecha de oportunidad Nórdico-LATAM y se comprometió a construir un puente sistemático entre regiones.' },
        { year: '2019-2020', title: 'CONSTRUCCIÓN DE RED', desc: 'Estableció posiciones institucionales: Rol VP en Cámara de Comercio Nórdico-LATAM, Fundó Red Global Nodo Querétaro, construyó relaciones con universidades, gobiernos, cámaras.' },
        { year: '2021-2022', title: 'PRIMEROS PROYECTOS', desc: 'Lanzó asociaciones iniciales y proyectos de entrada al mercado. Probó el modelo con compromisos exitosos de clientes. Refinó procesos e identificó servicios de mayor valor.' },
        { year: '2023-2025', title: 'ESCALANDO IMPACTO', desc: 'Portafolio activo de proyectos gubernamentales, corporativos y de innovación. Red expandida a través de múltiples países nórdicos y LATAM. Ofertas de servicio estructuradas basadas en demanda probada.' }
      ]
    },
    no: {
      title: 'Kobler To Regioner Gjennom Direkte Tilgang og Kulturell Flyt',
      subtitle: 'Bygget på institusjonelle posisjoner, dokumentert nettverk, dyp teknisk ekspertise og genuin forståelse av forretningskultur i både nordiske og latinamerikanske markeder.',
      founder: {
        name: 'Pepe Martínez Guarduola',
        title: 'Grunnlegger og Hovedkonsulent, Teinno AS',
        bio: 'Pepe Martínez bygger broer mellom nordiske og latinamerikanske markeder gjennom unik posisjonering som VP i Nordisk-LATAM Handelskammer og Grunnlegger av Red Global Nodo Querétaro. Født og oppvokst i Mexico, identifiserte Pepe tidlig det massive mulighetsgapet: Nordiske land ledende innen innovasjon og bærekraft, Latin-Amerika med enormt markedspotensial og appetitt for disse løsningene—men få troverdige broer mellom dem. Han grunnla Teinno AS i 2018 for systematisk å adressere dette gapet.',
        bio2: 'Basert primært i Bergen, Norge, med operativ tilstedeværelse i Querétaro, Mexico, utnytter Pepe institusjonelle relasjoner, teknisk ekspertise og kulturell flyt for å akselerere markedsinntreden og partnerskapsutvikling for bedrifter på begge sider. Det som gjør hans tilnærming unik er kombinasjonen av teknisk dybde (ingeniør + maskinlæringsbakgrunn), forretningsforståelse (MBA + 6 års internasjonal BD) og institusjonell troverdighet (lederposisjoner i handelskamre og forretningsnettverk på begge sider).',
        positions: [
          'VP, Nordisk-LATAM Handelskammer',
          'Grunnlegger og VP, Red Global Nodo Querétaro',
          'Medlem, Bergen Handelskammer',
          'Aktiv deltaker, Bergen internasjonale forretnings- og innovasjonssamfunn'
        ],
        education: [
          'MSc Informasjonsvitenskap (Maskinlæring og HCI-spesialisering)',
          'MBA, Bedriftsadministrasjon',
          'BSc Systemteknikk'
        ],
        expertise: [
          'Nordisk-LATAM markedsinntredensstrategi og gjennomføring',
          'Internasjonal partnerskapsutvikling og avtalefasilitering',
          'EU/Norsk finansieringstilgang og søknadsstøtte',
          'Teknologioverføring og innovasjonsprogramdesign',
          'Kulturell bro og forretningsoversettelse mellom regioner',
          'Offentlig-privat partnerskapsstrukturering',
          'FoU-samarbeidsfasilitering'
        ]
      },
      differentiators: [
        {
          title: 'Institusjonell Troverdighet',
          desc: 'Ikke frilansekonsulenter eller generiske rådgivningsfirmaer. Lederposisjoner i handelskamre og forretningsnettverk gir umiddelbar troverdighet, tillit og tilgang som ikke kan kjøpes eller fakes. Når vi gjør en introduksjon, bærer den vekt av institusjonell backing.'
        },
        {
          title: 'Dobbel Drift og Tilstedeværelse',
          desc: 'Fysisk tilstedeværelse og dype relasjoner i både Norge og Mexico (ikke bare sporadiske besøk eller ansatte lokale representanter). Dette muliggjør rask lokal gjennomføring, sanntids problemløsning og genuin kulturell flyt. Vi er på bakken, i møtene, navigerer de lokale systemene personlig.'
        },
        {
          title: 'Norsk Enhetsfordel',
          desc: 'Teinno AS som norsk registrert selskap gir betydelige fordeler for finansieringssøknader. Norges foretrukne status i EU-innovasjonsprogrammer betyr at vår medsolvent-støtte øker godkjenningsraten omtrent 3 ganger sammenlignet med kun latinamerikanske søknader.'
        },
        {
          title: 'Teknisk + Forretning + Kulturell',
          desc: 'Sjelden kombinasjon av teknisk dybde (ingeniørfag, ML, systemer), forretningsforståelse (MBA, finans, strategi) og kulturell/språklig flyt. De fleste konsulenter har én, kanskje to av disse. Vi bringer alle tre. Dette betyr enormt mye for teknologioverføringsprosjekter, FoU-samarbeid og komplekse partnerskap.'
        }
      ],
      principles: [
        {
          title: 'Hastighet Over Perfeksjon',
          desc: 'Markedsinntredelsesvinduene lukkes raskt. Muligheter har timing. Vi prioriterer rask validering og partnerintroduksjoner over lange forskningsrapporter og analyseparalyse. Du lærer mer i 3 møter med potensielle partnere enn på 3 måneder med skrivebordsforskning.'
        },
        {
          title: 'Nettverk Over Forskning',
          desc: 'Direkte varme introduksjoner fra betrodde institusjonelle relasjoner slår kald kontakt 100 ganger av 100. Vår verdi er ikke bare informasjon (du kan Google det)—det er tilgang til de rette menneskene som faktisk vil ta møtet ditt, ta deg på alvor og engasjere seg substansielt. Informasjon er råvare. Tilgang er knapt. Tillit er uvurderlig.'
        },
        {
          title: 'Resultater Over Aktivitet',
          desc: 'Vi måles på avtalefasilitering og partnerskap dannet, ikke timer fakturert eller rapporter levert. Suksess = din markedsinntreden, dine partnere identifisert, din finansiering sikret. Vi forlenger ikke kunstig engasjementer eller skaper unødig arbeid. Vår omdømme avhenger av klientsuksess.'
        }
      ],
      values: [
        {
          title: 'Integritet',
          desc: 'Vi tar kun prosjekter hvor vi tror vi kan levere meningsfull verdi. Hvis vi ikke er rett fit, vil vi fortelle deg ærlig og potensielt henvise deg til noen bedre egnet. Vårt omdømme i begge regioner avhenger av å gjøre gode matcher og levere på løfter.'
        },
        {
          title: 'Åpenhet',
          desc: 'Tydelig prising, definerte leveranser, realistiske tidslinjer. Ingen vage "konsultering" hvor du ikke er sikker på hva du betaler for. Hvis et prosjekt går av sporet, kommuniserer vi tidlig og direkte. Hvis muligheter dukker opp som ikke var i opprinnelig omfang, diskuterer vi dem åpent.'
        },
        {
          title: 'Innvirkning',
          desc: 'Vi trekkes mot prosjekter som betyr noe: bærekraftig utvikling, innovasjonsoverføring, økonomisk mulighetsskaping, kapasitetsbygging. Selv om vi er en kommersiell enhet, jobber vi foretrekker prosjekter som skaper positiv innvirkning utover bare vår klients ROI.'
        }
      ],
      timeline: [
        { year: '2018', title: 'GRUNNLEGGELSE', desc: 'Teinno AS etablert i Norge. Identifiserte Nordisk-LATAM mulighetsgapet og forpliktet seg til å bygge systematisk bro mellom regioner.' },
        { year: '2019-2020', title: 'NETTVERKSBYGGING', desc: 'Etablerte institusjonelle posisjoner: VP-rolle i Nordisk-LATAM Handelskammer, Grunnla Red Global Nodo Querétaro, bygde relasjoner med universiteter, myndigheter, kamre.' },
        { year: '2021-2022', title: 'FØRSTE PROSJEKTER', desc: 'Lanserte første partnerskap og markedsinntredelsesprosjekter. Beviste modellen med vellykkede klientengasjementer. Raffinerte prosesser og identifiserte høyest verditjenester.' },
        { year: '2023-2025', title: 'SKALERING AV INNVIRKNING', desc: 'Aktiv portefølje av offentlige, bedrifts- og innovasjonsprosjekter. Utvidet nettverk på tvers av flere nordiske og LATAM-land. Strukturerte tjenestetilbud basert på dokumentert etterspørsel.' }
      ]
    }
  };

  const c = content[language];

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

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{c.founder.name}</h2>
            <p className="text-lg text-gray-600">{c.founder.title}</p>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">{c.founder.bio}</p>
          <p className="text-gray-700 mb-8 leading-relaxed">{c.founder.bio2}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Professional Positions</h3>
              <ul className="space-y-2">
                {c.founder.positions.map((pos, i) => (
                  <li key={i} className="text-sm text-gray-700">• {pos}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Education</h3>
              <ul className="space-y-2">
                {c.founder.education.map((edu, i) => (
                  <li key={i} className="text-sm text-gray-700">• {edu}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Expertise</h3>
              <ul className="space-y-2">
                {c.founder.expertise.slice(0, 4).map((exp, i) => (
                  <li key={i} className="text-sm text-gray-700">• {exp}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Contact:</strong> <a href="mailto:pepe.martinez@teinno.no" className="text-primary hover:underline">pepe.martinez@teinno.no</a> | 
              <a href="https://www.linkedin.com/company/teinno" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">LinkedIn</a>
            </p>
          </div>
        </motion.div>

        {/* Why Choose Teinno */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Companies Choose Teinno</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{diff.title}</h3>
                <p className="text-gray-700 leading-relaxed">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.timeline.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary to-primary-800 text-white rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Explore Fit</h2>
          <p className="text-lg mb-6 text-blue-100 max-w-3xl mx-auto">
            Not every company is a fit for our approach, and we're selective about engagements to ensure quality results. The best way to determine fit is a straightforward conversation about your objectives, timeline, and budget.
          </p>
          <p className="text-sm mb-8 text-blue-200">
            Based in Bergen, Norway & Querétaro, Mexico | Available for calls in European, American, or Mexican time zones
          </p>
          <a href="https://calendly.com/pepe-martinez-teinno" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              Book Discovery Call
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
