import { useCallback, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import CaseStudyContent from './components/CaseStudyContent.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Documentation from './sections/Documentation.jsx';
import Process from './sections/Process.jsx';
import ProfessionalProfile from './sections/ProfessionalProfile.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [caseStudy, setCaseStudy] = useState(null);

  const openCaseStudy = useCallback((project) => setCaseStudy(project), []);
  const closeCaseStudy = useCallback(() => setCaseStudy(null), []);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onOpenCaseStudy={openCaseStudy}
        />
        <Documentation />
        <Process />
        <ProfessionalProfile />
        <Contact />
      </main>

      <Footer />

      <Modal
        open={Boolean(caseStudy)}
        onClose={closeCaseStudy}
        labelledBy="case-study-title"
        wide
      >
        {caseStudy && <CaseStudyContent project={caseStudy} onClose={closeCaseStudy} />}
      </Modal>
    </>
  );
}
