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

  const getOffset = () => {
    if (window.innerWidth < 640) return -60;
    if (window.innerWidth < 768) return -70;
    return -80;
  };

  return (
    <motion.nav
      className="fixed top-0 w-full nav-glass z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-section-container flex items-center justify-between p-4">
        <motion.div
          className="text-xl sm:text-2xl font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.div>
        <motion.div
          className="hidden md:flex items-center justify-center flex-grow gap-6"
        >
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={getOffset()}
              className={`text-secondary cursor-pointer gradient-underline text-base sm:text-lg ${
                activeSection === section.id ? "active-underline" : ""
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </Link>
          ))}
        </motion.div>
        <motion.div className="hidden md:flex">
          <a
            href="https://drive.google.com/file/d/1ZBpV773XtLfxQOb3X3JHB5N3vsaiVg9p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button flex items-center gap-2 text-base"
          >
            <FaFileDownload /> Resume
          </a>
        </motion.div>
        <div className="md:hidden" onClick={toggleNav}>
          {navOpen ? (
            <FaTimes size={24} className="text-primary" />
          ) : (
            <FaBars size={24} className="text-primary" />
          )}
        </div>
      </div>

      {navOpen && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden flex items-start justify-center pt-20 bg-black/70 backdrop-blur-[10px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setNavOpen(false);
          }}
        >
          <motion.div
            className="bg-[#181A20] bg-opacity-95 flex flex-col items-center gap-6 py-8 w-[90%] max-w-md mx-4 rounded-2xl border border-secondary/20 shadow-xl"
            initial={{ scale: 0.8, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="w-full px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={getOffset()}
                  className={`block py-3 text-center text-lg font-semibold transition-all duration-300 ${
                    activeSection === section.id 
                      ? "text-primary gradient-button" 
                      : "text-secondary hover:text-primary"
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
              className="gradient-button flex items-center gap-2 w-full justify-center text-base"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: sections.length * 0.1 }}
            >
              <FaFileDownload /> Resume
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;