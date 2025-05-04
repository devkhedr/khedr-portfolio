import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Beni Suef University, Faculty of Computer and Artificial Intelligence',
      duration: '2019 – 2023',
      details: 'Excellent with honors',
    },
  ];

  return (
    <section id="education" className="section-container py-16 px-6 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-200 shine-effect">
          My Academic Journey
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          A creative and dynamic path through education.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-6 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-2xl text-gray-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{edu.degree}</h3>
              <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-1">{edu.duration}</p>
              <p className="text-sm text-yellow-400">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;