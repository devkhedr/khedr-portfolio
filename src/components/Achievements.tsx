import { motion } from 'framer-motion';

function Achievements() {
  const achievements = [
    'Africa & Arab Collegiate Programming Championship (ACPC) 2022 Finalist',
    '2x Egyptian Collegiate Programming Contest (ECPC) finalist (2021, 2022)',
    'Ranked 3rd in ECPC Qualifications 2022, 12th in 2021',
    'Solved over 2500 problems on LeetCode, Codeforces, and other platforms.',
    'Led team to victory in a university hackathon.',
    'Achieved Specialist rank on Codeforces.',    
  ];

  const profiles = [
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/khedr7/',
      icon: 'https://leetcode.com/favicon.ico',
    },
    {
      name: 'Codeforces',
      link: 'https://codeforces.com/profile/Khedr',
      icon: 'https://sta.codeforces.com/s/42207/images/codeforces-telegram-square.png', // Updated to three-color bars logo
    },
    {
      name: 'CodeChef',
      link: 'https://www.codechef.com/users/muhammed_khedr',
      icon: 'https://www.codechef.com/favicon.ico',
    },
    {
      name: 'ICPC Profile',
      link: 'https://icpc.global/ICPCID/T274LMGTEIKL',
      icon: 'https://icpc.global/favicon.ico',
    },
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
          A glimpse into my milestones and competitive programming journey.
        </p>
      </motion.div>

      <ul className="list-disc list-inside text-gray-300 max-w-3xl mx-auto text-lg space-y-4 mb-8">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-[0_0_20px_rgba(245,245,245,0.5)] transition-all duration-300"
          >
            <img
              src={profile.icon}
              alt={profile.name}
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-200 font-bold text-sm">
              {profile.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Achievements;