import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      company: 'bld.ai',
      role: 'Software Engineer',
      duration: 'Dec 2022 - Jan 2024',
      description: [
        'Designed and built core features using Django REST Framework, focusing on RESTful APIs, authentication, and security measures.',
        'Collaborated on building a WhatsApp chatbot for automated message handling, integrating webhooks from the UltraMsg API for real-time event processing.',
        'Utilized Celery and Redis to handle background tasks like notifications, data processing, and email automation.',
        'Utilized Docker to containerize Django applications and ReactJS, streamlining development and deployment workflows.',
        'Utilized GitLab CI/CD pipelines for automated testing and deployment.',
        'Improved performance and code quality through code reviews and unit tests for API robustness and reliability.',
      ],
    },
    {
      company: 'bld.ai',
      role: 'Full Stack Dveloper Intern',
      duration: 'Aug 2022 - Nov 2022',
      description: [
        'Gained hands-on experience in full-stack development workflows, clean code practices, and Git version control.',
        'Developed backend for a Music Platform Web App using Django and REST API.',
        'Developed a Udemy-like home page and courses page using ReactJS.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container py-16 px-6 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 shine-effect">
          Professional Journey
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          A timeline of my growth, crafting impactful solutions with code.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400/50 h-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 glass-effect p-6 md:p-8 rounded-lg max-w-md ${
              index % 2 === 0 ? 'ml-auto' : 'mr-auto'
            } hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <h3 className="text-2xl font-bold text-gray-200">{exp.company}</h3>
            <p className="text-lg text-gray-200 mt-1">{exp.role}</p>
            <p className="text-base text-gray-300 mt-1">{exp.duration}</p>
            <ul className="mt-4 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-300 text-base flex items-start">
                  <span className="text-gray-200 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;