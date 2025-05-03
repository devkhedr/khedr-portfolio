import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/khedr07',
      icon: <FaFacebook />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhamed-khedr/',
      icon: <FaLinkedin />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/muhamed_khedr7/',
      icon: <FaInstagram />,
    },
    {
      name: 'Telegram',
      url: 'https://t.me/mohameed07',
      icon: <FaTelegram />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/devkhedr',
      icon: <FaTwitter />,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+201113219719',
      icon: <FaWhatsapp />,
    },
  ];

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="section-container py-32 px-6 relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-200 shine-effect">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-xl mt-4 max-w-3xl mx-auto">
          Whether you have a question, an opportunity, or just want to say hi, feel free to reach out. I'm always open to discussing new ideas and collaborations.
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-12">
        <motion.a
          href="mailto:your.email@example.com" // Replace with your email
          className="gradient-button flex items-center gap-4 text-xl px-12 py-6 rounded-[30px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaPaperPlane className="text-2xl" /> Send Me a Message
        </motion.a>

        <div className="flex gap-6 flex-wrap justify-center">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect w-12 h-12 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 pt-8 border-t border-gray-700 text-center absolute bottom-4 w-full">
        <div className="flex gap-4 justify-center mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 Mohamed Khedr. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;