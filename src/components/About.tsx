import { motion } from 'framer-motion';
import { FaRocket, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profileImage from '../assets/image.png';
import SocialIcons from './SocialIcons';

function About() {
  const tagline = 'Crafting impactful solutions through code and creativity.';
  const description = 'A dedicated Software Engineer with over a year of experience in full-stack development, focused on building secure, scalable, and high-performance web applications. Passionate about backend architecture, problem-solving, and delivering clean code.';
  const summary = {
    mobile: `I’m a Software Engineer specializing in full-stack development with a focus on backend technologies like Django, FastAPI, and Spring Boot. As an ACPC finalist, I’ve solved over 2500 algorithmic challenges, honing my problem-solving skills. My projects include a WhatsApp chatbot and a music platform backend, using tools like Docker and Redis. Let’s connect to build something amazing!`,
    desktop: `I’m a Software Engineer with a knack for building secure and scalable web applications. With over a year of experience in full-stack development, I specialize in backend technologies like Django, FastAPI, and Spring Boot, creating RESTful APIs and optimizing performance. As an ACPC finalist and competitive programmer, I’ve solved over 2500 algorithmic challenges on platforms like LeetCode and Codeforces, sharpening my problem-solving skills.

My professional journey includes innovative projects like a WhatsApp chatbot for automated messaging and a music platform backend. I’m proficient in Docker for containerization, Celery and Redis for task management, and rigorous testing for code quality. Driven by a passion for technology, I’m always exploring new tools to deliver clean, maintainable code and impactful solutions. Let’s connect to create something extraordinary!`
  };

  return (
    <section id="about" className="section-container">
      <motion.div
        className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 mb-16 lg:mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="profile-container"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="profile-frame"></div>
          <div className="profile-glass"></div>
          <img
            src={profileImage}
            alt="Mohamed Khedr"
            className="w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 profile-image"
          />
        </motion.div>
        <div className="text-center lg:text-left max-w-xl">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mohamed Khedr
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-secondary mb-4"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Software Engineer | Problem Solver
          </motion.p>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-secondary italic mb-4"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tagline}
          </motion.p>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-secondary mb-6"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              className="gradient-button flex items-center gap-2 px-6 py-3 text-sm sm:text-base"
            >
              <FaRocket /> Explore My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="secondary-button flex items-center gap-2 px-6 py-3 text-sm sm:text-base"
            >
              <FaEnvelope /> Get in Touch
            </Link>
          </motion.div>
          <SocialIcons />
        </div>
      </motion.div>

      <motion.div
        className="card max-w-4xl mx-auto p-6 sm:p-8"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-sm sm:text-base lg:text-lg text-secondary leading-relaxed hidden sm:block">
          {summary.desktop}
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-secondary leading-relaxed block sm:hidden">
          {summary.mobile}
        </p>
      </motion.div>
    </section>
  );
}

export default About;