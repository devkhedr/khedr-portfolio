import { motion } from 'framer-motion';

function Achievements() {
  const achievements = [
    'ACPC Finalist: Recognized as a finalist in the Arab Collegiate Programming Contest.',
    'Solved over 2500 problems on LeetCode, Codeforces, and other platforms.',
    'Ranked among top performers in competitive programming contests.',
    'Led team to victory in a university hackathon.',
    'Achieved Specialist rank on Codeforces.',
    'Earned Knight badge on LeetCode for consistent problem-solving.',
    'Led my team to success in a regional programming contest.',
  ];

  return (
    <section id="achievements" className="section-container py-16 px-6 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-200 shine-effect">
          Achievements
        </h2>
        <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
          A showcase of my milestones and accomplishments.
        </p>
      </motion.div>

      <ul className="list-disc list-inside text-gray-300 max-w-3xl mx-auto text-lg space-y-4">
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            className="relative pl-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-gray-700 rounded-full shadow-lg"></span>
            {achievement}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;