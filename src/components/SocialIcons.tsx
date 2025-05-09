import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function SocialIcons() {
  const socialLinks = [
    { icon: <FaEnvelope />, url: 'mailto:mohamed.khedr.dev@gmail.com' },
    { icon: <FaGithub />, url: 'https://github.com/devkhedr' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/muhamed-khedr/' },
    { icon: <FaTelegram />, url: 'https://t.me/mohameed07' },
    { icon: <FaTwitter />, url: 'https://x.com/devkhedr' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/+201113219719' },
  ];

  return (
    <motion.div
      className="flex gap-4 mt-6 justify-center md:justify-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-gradient-to-r hover:from-cyan hover:to-magenta transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
  );
}

export default SocialIcons;