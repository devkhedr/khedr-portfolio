import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExpand } from 'react-icons/fa';

const projects = [
  {
    title: 'Blind Guide App | Graduation Project',
    desc: 'Assistive app for visually impaired users with real-time object and currency recognition.',
    tech: 'Python, FastAPI, REST, Docker',
    link: 'https://github.com/devkhedr/blind-guide',
    details: 'An assistive mobile app that helps visually impaired users with real-time object and currency recognition. Developed the backend using FastAPI, integrating WebSockets for real-time image processing and audio feedback. Maintained and deployed a YOLOv8-based object detection API.',
  },
  {
    title: 'User Management System',
    desc: 'Auth, profiles, and RBAC built with Spring Boot & Spring Security.',
    tech: 'Spring Boot, Spring Security, MySQL',
    link: 'https://github.com/devkhedr/user-management-system',
    details: 'A robust system for user authentication, profile management, and role-based access control. Features include secure JWT authentication, user role management, and a scalable MySQL database.',
  },
  {
    title: 'Music Platform Web App',
    desc: 'RESTful backend for artists & albums with role-based access.',
    tech: 'Django, DRF, Pytest',
    link: 'https://github.com/devkhedr/music-platform-api',
    details: 'A music platform backend with RESTful APIs for managing artists, albums, and playlists. Includes role-based access control, comprehensive unit tests with Pytest, and a clean Django architecture.',
  },
  {
    title: 'Udemy Website Clone',
    desc: 'A clone of the Udemy website with course browsing and user authentication.',
    tech: 'ReactJS, Udemy API',
    link: 'https://github.com/devkhedr/udemy-website',
    details: 'Developed a full-stack clone of the Udemy website, featuring course browsing, user authentication, and payment integration. Utilized React and Redux for the frontend, and Node.js with MongoDB for the backend.',
  },
  {
    title: 'Cipher Algorithms',
    desc: 'Implementation of various cipher algorithms for encryption and decryption.',
    tech: 'Python, Cryptography, Web App',
    link: 'https://github.com/devkhedr/cipher-algorithms',
    details: 'Implemented a collection of cipher algorithms, including Caesar cipher, Vigenère cipher, and RSA encryption. Designed for educational purposes to demonstrate encryption and decryption techniques.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[number]>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <p className="text-base md:text-lg text-secondary mt-2 max-w-2xl mx-auto">
          A showcase of my work, blending creativity and technical expertise.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Tilt key={index}>
            <motion.div
              className="card p-4 min-h-[200px] flex flex-col justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary text-sm mb-3">{project.desc}</p>
                <p className="text-secondary text-xs mb-3 italic">{project.tech}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button flex items-center gap-2 text-sm px-3 py-1"
                >
                  <FaGithub /> View Code
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="gradient-button flex items-center gap-2 text-sm px-3 py-1"
                >
                  <FaExpand /> More Details
                </button>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="card p-6 max-w-lg w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-secondary text-base mb-4">
              {selectedProject.details}
              {selectedProject.title === 'Blind Guide App' && (
                <span className="block text-sm text-secondary mt-2">(Graduation Project)</span>
              )}
            </p>
            <p className="text-secondary text-sm mb-4 italic">{selectedProject.tech}</p>
            <div className="flex gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button flex items-center gap-2"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;