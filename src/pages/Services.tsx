import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive consulting solutions for modern businesses',
    },
    es: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones de consultoría integrales para empresas modernas',
    },
    no: {
      title: 'Våre Tjenester',
      subtitle: 'Omfattende konsulentløsninger for moderne virksomheter',
    },
  };

  const t = content[language];

  const services = [
    { id: 1, icon: '💼', name: 'Strategy Consulting' },
    { id: 2, icon: '📊', name: 'Business Analysis' },
    { id: 3, icon: '🚀', name: 'Digital Transformation' },
    { id: 4, icon: '⚙️', name: 'Process Optimization' },
    { id: 5, icon: '📈', name: 'Growth Strategy' },
    { id: 6, icon: '🎯', name: 'Market Research' },
  ];

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
          <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-light hover:border-secondary cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-medium mb-4">
                Professional expertise to help your business grow and succeed in the modern market.
              </p>
              <button className="text-secondary font-semibold hover:text-secondary-dark transition-colors duration-200">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;