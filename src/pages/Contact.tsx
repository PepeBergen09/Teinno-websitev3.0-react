import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
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
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      send: 'Send Message',
      info: 'Contact Information',
    },
    es: {
      title: 'Contáctenos',
      subtitle: 'Póngase en contacto con nuestro equipo',
      name: 'Nombre',
      email: 'Correo Electrónico',
      company: 'Empresa',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      info: 'Información de Contacto',
    },
    no: {
      title: 'Kontakt Oss',
      subtitle: 'Kom i kontakt med teamet vårt',
      name: 'Navn',
      email: 'E-post',
      company: 'Selskap',
      message: 'Melding',
      send: 'Send Melding',
      info: 'Kontaktinformasjon',
    },
  };

  const t = content[language];

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-neutral-medium">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                  {t.name} *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                  type="text"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                  {t.email} *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                  {t.company}
                </label>
                <input
                  {...register('company')}
                  className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                  type="text"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                  {t.message} *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 min-h-[150px]"
                  rows={5}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary"
              >
                {t.send}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">{t.info}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-blue-100">contact@b2bconsulting.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-blue-100">123 Business Street<br />Oslo, Norway</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <p className="text-blue-100">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-blue-100">Weekend: Closed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;