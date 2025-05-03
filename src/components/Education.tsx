import { motion } from 'framer-motion';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Beni Suef University, Faculty of Computer and Artificial Intelligence',
      duration: '2019 – 2023',
      details: 'GPA: 3.92/4.0',
    },
  ];

  const archVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="education" className="section-container py-16 px-6 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 shine-effect">
          Academic Arches
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          The architectural pillars of my knowledge, crafted with excellence.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="arch text-center"
            variants={archVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-200 shine-effect mb-2">
              {edu.degree}
            </h3>
            <p className="text-lg text-gray-200 mb-1">{edu.institution}</p>
            <p className="text-base text-gray-300 mb-1">{edu.duration}</p>
            <p className="text-base text-gray-300">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;