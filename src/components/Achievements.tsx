import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/Ecpc-21-team.jpg'; // Placeholder image, replace with your actual image
// Placeholder images (replace with your actual images)
const images = [
  { src: profileImage, caption: 'ACPC Finalist', description: 'Recognized as a finalist in the Arab Collegiate Programming Contest.' },
  { src: profileImage, caption: '2500+ Problems Solved', description: 'Solved over 2500 problems on LeetCode, Codeforces, and other platforms.' },
  { src: profileImage, caption: 'Top Performer', description: 'Ranked among top performers in competitive programming contests.' },
  { src: profileImage, caption: 'Hackathon Winner', description: 'Led team to victory in a university hackathon.' },
  { src: profileImage, caption: 'Codeforces Specialist', description: 'Achieved Specialist rank on Codeforces.' },
  { src: profileImage, caption: 'LeetCode Knight', description: 'Earned Knight badge on LeetCode for consistent problem-solving.' },
  { src: profileImage, caption: 'Team Lead in Contest', description: 'Led my team to success in a regional programming contest.' },
];

function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="achievements" className="section-container py-16 px-6 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 shine-effect">
          Achievements Gallery
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          A showcase of my milestones, captured in moments of triumph.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          key={currentIndex}
          className="glass-effect p-4 rounded-lg"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-gray-200 shine-effect">
              {images[currentIndex].caption}
            </h3>
            <p className="text-gray-300 text-base">{images[currentIndex].description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;