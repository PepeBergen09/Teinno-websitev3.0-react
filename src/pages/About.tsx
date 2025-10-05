import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      subtitle: 'Your trusted partner in business transformation',
      mission: 'Our Mission',
      missionText: 'To empower businesses with strategic insights and innovative solutions that drive sustainable growth.',
      values: 'Our Values',
    },
    es: {
      title: 'Acerca de Nosotros',
      subtitle: 'Su socio de confianza en transformación empresarial',
      mission: 'Nuestra Misión',
      missionText: 'Empoderar a las empresas con conocimientos estratégicos y soluciones innovadoras que impulsen un crecimiento sostenible.',
      values: 'Nuestros Valores',
    },
    no: {
      title: 'Om Oss',
      subtitle: 'Din pålitelige partner i forretningstransformasjon',
      mission: 'Vårt Oppdrag',
      missionText: 'Å styrke virksomheter med strategisk innsikt og innovative løsninger som driver bærekraftig vekst.',
      values: 'Våre Verdier',
    },
  };

  const t = content[language];

  const values = [
    { id: 1, icon: '🎯', title: 'Excellence', desc: 'Commitment to delivering exceptional results' },
    { id: 2, icon: '🤝', title: 'Integrity', desc: 'Honest and transparent in all we do' },
    { id: 3, icon: '💡', title: 'Innovation', desc: 'Creative solutions for complex challenges' },
    { id: 4, icon: '🌍', title: 'Sustainability', desc: 'Building lasting value for stakeholders' },
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

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{t.mission}</h2>
          <p className="text-xl leading-relaxed">
            {t.missionText}
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
            {t.values}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-medium text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center bg-neutral-light rounded-lg p-12">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Our Team
          </h2>
          <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
            A diverse group of experienced professionals dedicated to helping your business succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;