import { motion } from 'framer-motion';

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

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 to-gray-700 h-full"></div>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`relative mb-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className={`inline-block p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg relative z-10 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{edu.degree}</h3>
              <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-1">{edu.duration}</p>
              <p className="text-sm text-yellow-400">{edu.details}</p>
            </div>
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-gray-700 rounded-full shadow-lg ${
                index % 2 === 0 ? 'left-1/2 -ml-3' : 'right-1/2 -mr-3'
              }`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;