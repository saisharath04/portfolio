import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const words = ["React Developer", "TypeScript Enthusiast", "UI Performance Expert"];

function Typewriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setTypingSpeed(150);
    }

    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="text-cyan-450 font-mono font-semibold relative after:content-['|'] after:text-cyan-450 after:animate-[pulse_1s_infinite] after:ml-0.5">
      {currentText}
    </span>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 bg-grid-pattern overflow-hidden"
    >
      {/* Background radial glowing effects tuned to photo's cool sky tones */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none glow-cyan animate-[pulse_6s_infinite_alternate]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none glow-emerald animate-[pulse_6s_infinite_alternate_3s]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3.5 py-1 text-xs font-bold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                Available for SDE Roles
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-slate-100">J V N </span>
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Sai Sharath
              </span>
            </motion.h1>

            <motion.h2 
              className="text-xl sm:text-3xl font-medium text-slate-400 mb-6 min-h-[2.5rem]"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frontend Developer — <Typewriter />
            </motion.h2>

            <motion.p 
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-350 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Over 4+ years of experience engineering high-performance user interfaces, 
              financial reconciliation modules, and multi-cloud analyser dashboards.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => handleScroll('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-[#0B0F19] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg hover:shadow-cyan-400/20 cursor-pointer transition-all hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-4.5 w-4.5" />
              </button>
              
              <button
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-slate-800 hover:border-cyan-400 text-sm font-bold rounded-xl text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900 transition-all cursor-pointer hover:scale-105"
              >
                Contact Me
                <MessageSquare className="ml-2 h-4.5 w-4.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="relative group"
            >
              {/* Glowing Background Rings matching photo's color profile */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-sky-400 to-emerald-500 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Floating Frame */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-900"
              >
                <img 
                  src={profileImg} 
                  alt="J V N Sai Sharath" 
                  className="w-full h-full object-cover object-center scale-102 group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-[1.02]"
                />
                
                {/* Subtle gradient overlay on bottom of image for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none opacity-40">
        <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
