import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
  newsletter?: boolean;
}

const Contact = () => {
  const { language } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const content = {
    en: {
      title: 'Let\'s Discuss Your Market Entry',
      subtitle: 'Book a 30-minute discovery call or send a message. We typically respond within 24 hours (business days).',
      bookCall: 'Book a Discovery Call',
      callDesc: '30-Minute Consultation',
      expectations: [
        'Discuss your market entry objectives and timeline',
        'Assess fit for our services and network',
        'Answer your questions about process and pricing',
        'Recommend appropriate starting point (if any)',
        'No sales pressure—honest assessment of fit'
      ],
      bestFor: 'Best for: Companies seriously exploring Nordic-LATAM expansion with budget allocated or in planning stage.',
      sendMessage: 'Send a Message',
      formLabels: {
        name: 'Full Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'Phone Number (optional)',
        interest: 'I\'m interested in',
        message: 'Message',
        newsletter: 'I\'d like to receive occasional insights on Nordic-LATAM market opportunities (1-2 emails per month, unsubscribe anytime)',
        submit: 'Send Message'
      },
      interestOptions: [
        'Nordic → Latin America expansion',
        'Latin America → Nordic expansion',
        'Specific project collaboration',
        'Speaking/event opportunity',
        'Press/media inquiry',
        'Other'
      ],
      contactInfo: {
        title: 'Contact Information',
        norway: 'Norway Office',
        norwayCities: 'Bergen, Norway',
        mexico: 'Mexico Office',
        mexicoCities: 'Querétaro, Querétaro, Mexico',
        connect: 'Connect'
      },
      hours: {
        title: 'When We\'re Available',
        norwayHours: 'Norway (CET/CEST): Monday-Friday, 9:00-17:00',
        mexicoHours: 'Mexico (CST): Monday-Friday, 9:00-17:00',
        note: 'We accommodate calls across time zones. Discovery call calendar shows availability in your local time automatically.'
      }
    },
    es: {
      title: 'Hablemos Sobre Su Entrada al Mercado',
      subtitle: 'Reserve una llamada de descubrimiento de 30 minutos o envíe un mensaje. Típicamente respondemos dentro de 24 horas (días hábiles).',
      bookCall: 'Reservar una Llamada de Descubrimiento',
      callDesc: 'Consulta de 30 Minutos',
      expectations: [
        'Discutir sus objetivos de entrada al mercado y cronograma',
        'Evaluar el ajuste para nuestros servicios y red',
        'Responder sus preguntas sobre el proceso y precios',
        'Recomendar el punto de partida apropiado (si aplica)',
        'Sin presión de ventas—evaluación honesta del ajuste'
      ],
      bestFor: 'Mejor para: Empresas explorando seriamente la expansión Nórdico-LATAM con presupuesto asignado o en etapa de planificación.',
      sendMessage: 'Enviar un Mensaje',
      formLabels: {
        name: 'Nombre Completo',
        company: 'Nombre de la Empresa',
        email: 'Dirección de Correo Electrónico',
        phone: 'Número de Teléfono (opcional)',
        interest: 'Estoy interesado en',
        message: 'Mensaje',
        newsletter: 'Me gustaría recibir información ocasional sobre oportunidades de mercado Nórdico-LATAM (1-2 correos al mes, cancelar en cualquier momento)',
        submit: 'Enviar Mensaje'
      },
      interestOptions: [
        'Nórdico → Expansión a América Latina',
        'América Latina → Expansión Nórdica',
        'Colaboración en proyecto específico',
        'Oportunidad de charla/evento',
        'Consulta de prensa/medios',
        'Otro'
      ],
      contactInfo: {
        title: 'Información de Contacto',
        norway: 'Oficina Noruega',
        norwayCities: 'Bergen, Noruega',
        mexico: 'Oficina México',
        mexicoCities: 'Querétaro, Querétaro, México',
        connect: 'Conectar'
      },
      hours: {
        title: 'Cuándo Estamos Disponibles',
        norwayHours: 'Noruega (CET/CEST): Lunes-Viernes, 9:00-17:00',
        mexicoHours: 'México (CST): Lunes-Viernes, 9:00-17:00',
        note: 'Acomodamos llamadas a través de zonas horarias. El calendario de llamadas de descubrimiento muestra disponibilidad en su hora local automáticamente.'
      }
    },
    no: {
      title: 'La Oss Diskutere Din Markedsinntreden',
      subtitle: 'Bestill en 30-minutters oppdagelsessamtale eller send en melding. Vi svarer vanligvis innen 24 timer (virkedager).',
      bookCall: 'Bestill en Oppdagelsessamtale',
      callDesc: '30-Minutters Konsultasjon',
      expectations: [
        'Diskutere dine markedsinntredelsesmål og tidslinje',
        'Vurdere passform for våre tjenester og nettverk',
        'Svare på spørsmål om prosess og prising',
        'Anbefale passende utgangspunkt (hvis aktuelt)',
        'Ingen salgspress—ærlig vurdering av passform'
      ],
      bestFor: 'Best for: Selskaper som seriøst utforsker Nordisk-LATAM ekspansjon med tildelt budsjett eller i planleggingsfase.',
      sendMessage: 'Send en Melding',
      formLabels: {
        name: 'Fullt Navn',
        company: 'Selskapsnavn',
        email: 'E-postadresse',
        phone: 'Telefonnummer (valgfritt)',
        interest: 'Jeg er interessert i',
        message: 'Melding',
        newsletter: 'Jeg vil gjerne motta sporadisk innsikt om Nordisk-LATAM markedsmuligheter (1-2 e-poster per måned, avmeld når som helst)',
        submit: 'Send Melding'
      },
      interestOptions: [
        'Nordisk → Latin-Amerika ekspansjon',
        'Latin-Amerika → Nordisk ekspansjon',
        'Spesifikt prosjektsamarbeid',
        'Tale-/arrangementsmulighet',
        'Presse-/medieforespørsel',
        'Annet'
      ],
      contactInfo: {
        title: 'Kontaktinformasjon',
        norway: 'Norge Kontor',
        norwayCities: 'Bergen, Norge',
        mexico: 'Mexico Kontor',
        mexicoCities: 'Querétaro, Querétaro, Mexico',
        connect: 'Koble til'
      },
      hours: {
        title: 'Når Vi Er Tilgjengelige',
        norwayHours: 'Norge (CET/CEST): Mandag-Fredag, 9:00-17:00',
        mexicoHours: 'Mexico (CST): Mandag-Fredag, 9:00-17:00',
        note: 'Vi tilpasser samtaler på tvers av tidssoner. Oppdagelsessamtalekalender viser tilgjengelighet i din lokale tid automatisk.'
      }
    }
  };

  const c = content[language];

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you within 24 hours (business days).');
    reset();
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
          <p className="text-xl text-gray-600">
            {c.subtitle}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Calendly */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.bookCall}</h2>
            <p className="text-gray-600 mb-6">{c.callDesc}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What to expect:</h3>
              <ul className="space-y-2">
                {c.expectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-600 mb-6 italic">{c.bestFor}</p>

            {/* Calendly Button/Embed */}
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 text-center">
              <p className="mb-4">Click below to view available times and book your discovery call:</p>
              <a 
                href="https://calendly.com/pepe-martinez-teinno" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Open Calendly
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.sendMessage}</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {c.formLabels.name} *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  type="text"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {c.formLabels.company} *
                </label>
                <input
                  {...register('company', { required: 'Company name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  type="text"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {c.formLabels.email} *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {c.formLabels.phone}
                </label>
                <input
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  type="tel"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {c.formLabels.interest} *
                </label>
                <select
                  {...register('interest', { required: 'Please select an option' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                >
                  <option value="">Select an option...</option>
                  {c.interestOptions.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
                {errors.interest && (
                  <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {c.formLabels.message} *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 min-h-[120px]"
                  rows={4}
                  placeholder="Tell us about your objectives, timeline, and what you're looking to accomplish..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <input
                  {...register('newsletter')}
                  type="checkbox"
                  className="mt-1"
                  id="newsletter"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer">
                  {c.formLabels.newsletter}
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary"
              >
                {c.formLabels.submit}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Contact Info & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.contactInfo.title}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{c.contactInfo.norway}</h3>
                <p className="text-gray-700">Teinno AS</p>
                <p className="text-gray-700">{c.contactInfo.norwayCities}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{c.contactInfo.mexico}</h3>
                <p className="text-gray-700">Teinno AS</p>
                <p className="text-gray-700">{c.contactInfo.mexicoCities}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:pepe.martinez@teinno.no" className="text-primary hover:underline">
                  pepe.martinez@teinno.no
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+4794251857" className="text-primary hover:underline">
                  +47 94251857
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{c.contactInfo.connect}</h3>
                <a 
                  href="https://www.linkedin.com/company/teinno" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">{c.hours.title}</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Normal Business Hours:</p>
                <p className="text-blue-100">{c.hours.norwayHours}</p>
                <p className="text-blue-100">{c.hours.mexicoHours}</p>
              </div>

              <div className="pt-4 border-t border-white border-opacity-20">
                <p className="text-sm text-blue-100 italic">
                  {c.hours.note}
                </p>
              </div>

              <div className="pt-4 border-t border-white border-opacity-20">
                <p className="font-semibold mb-2">Response Times:</p>
                <ul className="text-sm space-y-1 text-blue-100">
                  <li>• Calendly bookings: Instant confirmation</li>
                  <li>• Contact form: Within 24 hours (business days)</li>
                  <li>• Email: Within 24-48 hours (business days)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
