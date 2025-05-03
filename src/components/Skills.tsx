import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Backend',
      skills: [
        'Spring Boot',
        'Spring Security',
        'Django',
        'Django REST Framework',
        'Node.js',
        'Flask',
        'Express.js',
      ],
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'REST APIs', 'GraphQL', 'Postman', 'Pytest', 'JUnit'],
    },
    {
      category: 'Concepts',
      skills: [
        'OOP',
        'Data Structures',
        'Algorithms',
        'Microservices',
        'Authentication (JWT, OAuth)',
        'Unit Testing',
      ],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-Solving', 'Team Collaboration', 'Time Management'],
    },
  ];

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="section-container py-16 px-6 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 shine-effect">
          Skills Constellation
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          A network of expertise, woven with precision and creativity.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: catIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-200 shine-effect mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center relative">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="relative">
                  <motion.div
                    className="hexagon"
                    variants={hexagonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {skill}
                  </motion.div>
                  {skillIndex < category.skills.length - 1 && (
                    <div
                      className="hexagon-connector"
                      style={{
                        width: '60px',
                        top: '46px',
                        left: '80px',
                        transform: 'rotate(30deg)',
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;