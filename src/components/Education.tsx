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
        <h2 className="text-4xl font-bold text-[#F5F5F5] shine-effect">
          My Academic Journey
        </h2>
        <p className="text-[#C0C0C0] text-lg mt-2 max-w-2xl mx-auto">
          A cosmic voyage through the stars of knowledge.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="arch flex items-start gap-8 p-8 relative animate-pulse"
            initial={{ opacity: 0, rotateX: 30, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="sparkle-effect" style={{ top: '5%', left: '5%' }}></div>
            <div className="sparkle-effect" style={{ top: '20%', left: '90%' }}></div>
            <div className="sparkle-effect" style={{ top: '60%', left: '10%' }}></div>
            <div className="sparkle-effect" style={{ top: '80%', left: '85%' }}></div>
            <div className="flex-shrink-0 hexagon w-20 h-[92px] flex items-center justify-center">
              <FaGraduationCap className="text-3xl text-[#F5F5F5]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] shine-effect mb-3">{edu.degree}</h3>
              <p className="text-lg text-[#F5F5F5] mb-2">{edu.institution}</p>
              <p className="text-sm text-[#C0C0C0] mb-2">{edu.duration}</p>
              <p className="text-sm text-[#C0C0C0] mb-2">Overall Grade: {edu.overallGrade}</p>
              <p className="text-sm text-[#F5F5F5] shine-effect mb-2">Graduation Project: {edu.project}</p>
              <p className="text-sm text-[#C0C0C0]">Project Grade: {edu.projectGrade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;