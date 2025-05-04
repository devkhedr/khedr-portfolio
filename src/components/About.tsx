import { motion } from 'framer-motion';
import { FaRocket, FaPaperPlane, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profileImage from '../assets/image.png';

function About() {
  const description = "Full Stack Developer passionate about backend engineering, problem-solving, and building clean, scalable systems. ACPC Finalist & Competitive Programmer with 2500+ problems solved across multiple platforms.";
  const summary = "I'm a dedicated Full Stack Developer with a strong foundation in backend engineering, crafting robust and scalable systems using technologies like Node.js, Django, and Spring Boot. My passion for problem-solving shines through in my competitive programming journey, where I've tackled over 2500 problems on platforms like LeetCode and Codeforces, earning a spot as an ACPC Finalist. I thrive on building clean, efficient code and delivering seamless user experiences through modern frontend frameworks like React. My work blends technical expertise with creativity, aiming to push boundaries and conquer challenges in every project.";

  return (
    <section id="about" className="section-container py-16 px-6 relative">
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-[rgba(245,245,245,0.05)] to-transparent animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="relative royal-frame"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src={profileImage}
              alt="Mohamed Khedr"
              className="w-56 h-56 md:w-64 md:h-64 profile-image"
            />
          </motion.div>

          <div className="text-center md:text-left max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 shine-effect"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Hi, I'm Mohamed Khedr
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-6 shine-effect"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Crafting Code, Conquering Challenges
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-300 typewriter mb-8"
              style={{ borderRight: '1px solid #F5F5F5', animation: 'typing 4s steps(80, end) forwards, blink 0.75s step-end infinite', maxWidth: '100%' }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:mohamed.khedr.dev@gmail.com"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a
                href="https://github.com/devkhedr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhamed-khedr/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://t.me/mohameed07"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a
                href="https://x.com/devkhedr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://wa.me/+201113219719"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="experience"
                smooth={true}
                duration={1000}
                offset={-70}
                className="gradient-button flex items-center gap-2 cursor-pointer hover:shadow-[0_0_8px_rgba(245,245,245,0.2)] transition-all duration-300"
              >
                <FaRocket /> Explore My Work
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Summary Section */}
      <motion.div
        className="py-16 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 shine-effect mb-8">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {summary}
        </p>
      </motion.div>
    </section>
  );
}

export default About;