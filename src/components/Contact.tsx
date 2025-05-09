import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SocialIcons from './SocialIcons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      await axios.post('https://formspree.io/f/movdldyd', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container min-h-screen relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let's Connect</h2>
        <p className="text-sm sm:text-base md:text-lg text-secondary mt-4 max-w-3xl mx-auto">
          Whether you have a question, an opportunity, or just want to say hi, feel free to reach out. I'm always open to discussing new ideas and collaborations.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-8 max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="glass-effect p-6 w-full rounded-lg shadow-lg bg-[#181A20] bg-opacity-95 border border-secondary/30">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`gradient-button px-6 py-3 text-sm sm:text-base ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status && (
            <p
              className={`text-sm mt-4 text-center ${
                status.includes('success') ? 'text-cyan' : 'text-red-400'
              }`}
            >
              {status}
            </p>
          )}
        </div>
        <SocialIcons />
      </motion.div>

      <footer className="w-full mt-8 pt-4 pb-4 text-center">
        <p className="copyright-text">
          © 2025 Mohamed Khedr. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;