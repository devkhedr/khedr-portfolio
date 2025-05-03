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
    <section id="contact" className="section-container py-24 px-6 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 shine-effect">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          Reach out to discuss code, challenges, or opportunities.
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-8">
        <motion.a
          href="mailto:your.email@example.com" // Replace with your email
          className="gradient-button flex items-center gap-2 text-lg px-8 py-4 rounded-[20px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaPaperPlane /> Send Me a Message
        </motion.a>

        <div className="flex gap-4 flex-wrap justify-center">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect w-10 h-10 rounded-full flex items-center justify-center text-gray-200 hover:shadow-[0_0_15px_rgba(245,245,245,0.5)] transition-all duration-300"
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

        <p className="royal-copyright">
          © 2025 Mohamed Khedr. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Contact;