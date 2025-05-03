import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const toggleNav = () => setNavOpen(!navOpen);

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className="fixed top-0 w-full nav-glass z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="section-container flex items-center justify-between p-4">
        <motion.div
          className="flex items-center space-x-2 text-xl font-bold text-gray-200 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="relative inline-block shine-effect">
            Mohamed Khedr
          </span>
        </motion.div>
        <motion.div
          className="hidden md:flex items-center justify-center flex-grow"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="flex gap-6">
            {sections.map((section) => (
              <motion.div key={section.id} variants={linkVariants}>
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`text-gray-200 relative gradient-underline cursor-pointer transition-none ${
                    activeSection === section.id ? "active-underline" : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="hidden md:flex items-center"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          <a
            href="https://drive.google.com/file/d/1ZBpV773XtLfxQOb3X3JHB5N3vsaiVg9p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button flex items-center gap-2"
          >
            <FaFileDownload /> Resume
          </a>
        </motion.div>
        <div className="md:hidden" onClick={toggleNav}>
          {navOpen ? (
            <FaTimes
              size={24}
              className="text-gray-200 transition-transform duration-300 rotate-180"
            />
          ) : (
            <FaBars
              size={24}
              className="text-gray-200 transition-transform duration-300 hover:rotate-90"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <motion.div
          className="md:hidden mobile-menu flex flex-col items-center gap-4 py-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="glass-effect p-3 rounded-lg w-3/4 text-center hover:scale-105 hover:shadow-[0_0_15px_rgba(245,245,245,0.4)] transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                offset={-100}
                className={`text-gray-200 ${
                  activeSection === section.id ? "active-underline" : ""
                }`}
                onClick={() => {
                  setNavOpen(false);
                  setActiveSection(section.id);
                }}
              >
                {section.label}
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1ZBpV773XtLfxQOb3X3JHB5N3vsaiVg9p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button flex items-center gap-2 w-3/4 justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: sections.length * 0.1 }}
          >
            <FaFileDownload /> Resume
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;