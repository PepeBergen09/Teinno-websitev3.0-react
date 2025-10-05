import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: 'Professional B2B Consulting',
      subtitle: 'Transforming businesses through strategic expertise and innovative solutions',
      cta: 'Get Started',
      services: 'Our Services',
    },
    es: {
      hero: 'Consultoría B2B Profesional',
      subtitle: 'Transformando negocios a través de experiencia estratégica y soluciones innovadoras',
      cta: 'Comenzar',
      services: 'Nuestros Servicios',
    },
    no: {
      hero: 'Profesjonell B2B-rådgivning',
      subtitle: 'Transformerer virksomheter gjennom strategisk ekspertise og innovative løsninger',
      cta: 'Kom i gang',
      services: 'Våre Tjenester',
    },
  };

  const t = content[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.hero}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  {t.cta}
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
                >
                  {t.services}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{item}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-dark">
                  Feature {item}
                </h3>
                <p className="text-neutral-medium">
                  Professional consulting services tailored to your business needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;