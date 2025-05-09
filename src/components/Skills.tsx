import { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Django", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/django.svg", label: "Backend" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/spring.svg", label: "Backend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg", label: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg", label: "Frontend" },
  { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg", label: "Frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nextdotjs.svg", label: "Frontend" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg", label: "Frontend" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg", label: "Database" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postgresql.svg", label: "Database" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/redis.svg", label: "Database" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg", label: "Database" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg", label: "Tools" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg", label: "Tools" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gitlab.svg", label: "Tools" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/jira.svg", label: "Tools" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg", label: "Tools" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postman.svg", label: "Tools" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/slack.svg", label: "Tools" },
  { name: "Trello", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/trello.svg", label: "Tools" },
  { name: "Problem Solving", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/leetcode.svg", label: "Soft Skills" },
  { name: "Team Collaboration", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/microsoftteams.svg", label: "Soft Skills" },
  { name: "Time Management", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/clockify.svg", label: "Soft Skills" },
  { name: "Adaptability", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/trello.svg", label: "Soft Skills" },
  { name: "Attention to Details", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/trello.svg", label: "Soft Skills" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg", label: "Backend" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg", label: "Backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg", label: "Backend" },
];

const labels = ["Backend", "Frontend", "Database", "Tools", "Soft Skills"];

function Skills() {
  const [selectedLabel, setSelectedLabel] = useState("Backend");

  const filteredSkills = skills.filter((skill) => skill.label === selectedLabel);

  return (
    <section id="skills" className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <p className="text-base md:text-lg text-secondary mt-2 max-w-2xl mx-auto">
          A showcase of my technical expertise, tools, and soft skills.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center gap-4 mb-8 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {labels.map((label) => (
          <button
            key={label}
            onClick={() => setSelectedLabel(label)}
            className={`gradient-button px-4 py-2 text-sm font-bold transition-all duration-300 ${
              selectedLabel === label ? 'opacity-100' : 'opacity-60'
            }`}
          >
            {label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="card flex flex-col items-center justify-center p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-2"
            />
            <span className="text-sm font-bold">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;