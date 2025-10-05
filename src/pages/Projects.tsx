import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Projects',
      subtitle: 'Success stories from our client partnerships',
    },
    es: {
      title: 'Nuestros Proyectos',
      subtitle: 'Historias de éxito de nuestras asociaciones con clientes',
    },
    no: {
      title: 'Våre Prosjekter',
      subtitle: 'Suksesshistorier fra våre klientpartnerskap',
    },
  };

  const t = content[language];

  const projects = [
    { id: 1, title: 'Digital Transformation', client: 'Tech Corp', year: '2024' },
    { id: 2, title: 'Market Expansion', client: 'Retail Inc', year: '2024' },
    { id: 3, title: 'Process Optimization', client: 'Manufacturing Ltd', year: '2023' },
    { id: 4, title: 'Strategic Planning', client: 'Finance Group', year: '2023' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-neutral-light p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-light"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-semibold text-secondary bg-blue-50 px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-medium mb-4">
                Client: <span className="font-semibold">{project.client}</span>
              </p>
              <p className="text-neutral-medium mb-6">
                A successful consulting engagement that delivered measurable results and exceeded expectations.
              </p>
              <button className="text-secondary font-semibold hover:text-secondary-dark transition-colors duration-200">
                View Case Study →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;