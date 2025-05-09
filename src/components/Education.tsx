import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Beni Suef University, Faculty of Computer and Artificial Intelligence',
      duration: 'Sep 2019 – Jul 2023',
      overallGrade: 'Very Good',
      project: 'Blind Guide Mobile Application',
      projectGrade: 'Excellent with honors',
      projectLink: 'https://github.com/devkhedr/blind-guide',
    },
  ];

  return (
    <section id="education" className="section-container py-16 md:py-20 px-4 md:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Academic Journey</h2>
        <p className="text-base md:text-lg text-secondary mt-2 max-w-2xl mx-auto">
          My foundation in computer science and innovation.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="card p-8 flex items-start gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap className="text-4xl text-cyan" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
              <p className="text-base md:text-lg text-secondary">{edu.institution}</p>
              <p className="text-sm text-secondary">{edu.duration}</p>
              <p className="text-sm text-secondary">Overall Grade: {edu.overallGrade}</p>
              <p className="text-sm text-secondary">
                Graduation Project:{' '}
                <a
                  href={edu.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  {edu.project}
                </a>
              </p>
              <p className="text-sm text-secondary">Project Grade: {edu.projectGrade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;