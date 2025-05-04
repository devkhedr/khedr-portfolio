import { motion } from 'framer-motion';
import { FaRocket, FaPaperPlane, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profileImage from '../assets/image.png';

function About() {
  const description = (
    <>
      A dedicated Software Engineer with over a year of experience in full-stack development, focused on building secure
      and high-quality web applications. Strong problem-solving skills as an ACPC finalist, with a passion for backend
      architecture, performance optimization, and exploring new technologies.
      <span
        className="blinking-cursor"
        style={{
          borderRight: '1px solid #F5F5F5',
          animation: 'blink 0.75s step-end infinite',
          whiteSpace: 'nowrap',
          overflow: 'visible',
          width: 'auto',
        }}
      ></span>
    </>
  );

  const summary = "I am a passionate Software Engineer with over a year of experience in full-stack development, specializing in designing and building secure, scalable, and high-performance web applications. My expertise lies in backend development, where I excel in creating RESTful APIs, implementing authentication systems, and optimizing performance using technologies like Django, FastAPI, and Spring Boot. As an ACPC finalist and competitive programmer, I have honed my problem-solving skills by tackling over 2500 algorithmic challenges on platforms like LeetCode and Codeforces.\n\nIn my professional journey, I have collaborated on innovative projects, including developing a WhatsApp chatbot for automated message handling and building a music platform backend. I am proficient in containerizing applications with Docker, managing background tasks with Celery and Redis, and ensuring code quality through rigorous testing and reviews. My passion for technology drives me to explore new tools and frameworks, deliver clean and maintainable code, and create impactful solutions that address real-world challenges.\n\nBeyond coding, I am committed to fostering collaboration, mentoring peers, and contributing to a culture of continuous learning and innovation. Whether it's leading a team to victory in a hackathon or mentoring students in competitive programming, I thrive on pushing boundaries and achieving excellence in every endeavor.";

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
          {/* Removed the background gradient */}
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
              className="text-base md:text-lg text-gray-300 mb-8 max-w-full"
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
                className="gradient-button flex items-center gap-2 cursor-pointer hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
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
        <div className="glass-effect text-[#F5F5F5] p-6 relative animate-pulse">
          <div className="sparkle-effect" style={{ top: '10%', left: '5%' }}></div>
          <div className="sparkle-effect" style={{ top: '20%', left: '90%' }}></div>
          <div className="sparkle-effect" style={{ top: '70%', left: '10%' }}></div>
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <pre
            className="text-left text-sm md:text-base leading-relaxed whitespace-pre-wrap royal-copyright"
            style={{ fontSize: '1rem', fontFamily: 'Montserrat, sans-serif' }}
          >
            {summary}
          </pre>
        </div>
      </motion.div>
    </section>
  );
}

export default About;