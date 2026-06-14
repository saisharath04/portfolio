import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 overflow-x-hidden">
      {/* Scroll sentinel for Back to Top visibility */}
      <div id="scroll-sentinel" className="scroll-sentinel" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#070A10] border-t border-slate-900 text-center text-slate-500 text-xs font-semibold">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} J V N Sai Sharath. All rights reserved.</p>
          <p className="text-slate-600">
            Engineered with React + TS + Tailwind CSS v4 + Framer Motion
          </p>
        </div>
      </footer>

      {/* Scroll to Top element */}
      <ScrollToTop />
    </div>
  );
}

export default App;
