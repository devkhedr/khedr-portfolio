import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Achievements() {
  const achievements = [
    {
      title: "ACPC 2022 Finalist",
      desc: "Competed as a finalist in the Africa & Arab Collegiate Programming Championship.",
    },
    {
      title: "ECPC Finalist",
      desc: "Qualified for the Egyptian Collegiate Programming Contest in 2021 and 2022.",
    },
    {
      title: "ECPC Rankings",
      desc: "Ranked 3rd in ECPC Qualifications 2022, 12th in 2021.",
    },
    {
      title: "Problem Solving",
      desc: "Solved over 2500 problems on LeetCode, Codeforces, and other platforms.",
    },
    {
      title: "Hackathon Victory",
      desc: "Led team to victory in a university hackathon.",
    },
    {
      title: "Codeforces Specialist",
      desc: "Achieved Specialist rank on Codeforces.",
    },
  ];

  const profiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/khedr7/",
      icon: "https://leetcode.com/favicon.ico",
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/Khedr",
      icon: "https://sta.codeforces.com/s/42207/images/codeforces-telegram-square.png",
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/muhammed_khedr",
      icon: "https://www.codechef.com/favicon.ico",
    },
    {
      name: "ICPC Profile",
      link: "https://icpc.global/ICPCID/T274LMGTEIKL",
      icon: "https://icpc.global/favicon.ico",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="achievements" className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        <p className="text-base md:text-lg text-secondary mt-2 max-w-2xl mx-auto">
          Milestones from my competitive programming and professional journey.
        </p>
      </motion.div>

      <Slider {...sliderSettings} className="slider max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <>
            <motion.div
              key={index}
              className="ach-card p-6 mx-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">{achievement.title}</h3>
              <p className="text-secondary">{achievement.desc}</p>
            </motion.div>
            <></>
          </>
        ))}
      </Slider>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center p-4"
          >
            <img
              src={profile.icon}
              alt={profile.name}
              className="w-12 h-12 mb-2"
            />
            <span className="text-sm font-bold">{profile.name}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}

export default Achievements;
