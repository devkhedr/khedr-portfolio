import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/') {
      window.history.replaceState(null, '', '/portfolio');
    } else if (!currentPath.startsWith('/portfolio')) {
      window.history.replaceState(null, '', '/portfolio');
    }
  }, []);

  return (
    <div>
      <Portfolio />
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;