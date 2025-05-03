import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Beni Suef University, Faculty of Computer and Artificial Intelligence',
      duration: '2019 – 2023',
      details: 'Excellent with honors',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="education" className="section-container py-16 px-6 relative bg-gradient-to-b from-[rgba(245,245,245,0.05)] to-transparent">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 shine-effect">
          Cosmic Academic Journey
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          A stellar foundation forged in the galaxies of knowledge.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card text-center relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sparkle effects */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="sparkle-effect"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1.5}s`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            ))}
            <h3 className="text-2xl font-bold text-gray-200 shine-effect mb-2">
              {edu.degree}
            </h3>
            <p className="text-lg text-gray-200 shine-effect mb-1">{edu.institution}</p>
            <div className="flex items-center justify-center gap-2 text-base text-yellow-400 mb-1">
              <FaStar />
              <span>{edu.duration}</span>
            </div>
            <p className="text-base text-yellow-400">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;