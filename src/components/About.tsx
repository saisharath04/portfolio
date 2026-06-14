import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const codeString = `{
  "name": "J V N Sai Sharath",
  "role": "Frontend Developer",
  "experience": "4+ Years",
  "location": "Bangalore, India",
  "specialties": [
    "Financial Tools",
    "Analytics Dashboards",
    "Component-Driven Architecture"
  ],
  "interests": [
    "Clean Code",
    "Performance Tuning",
    "Developer Experience (DX)"
  ]
}`;

  return (
    <section id="about" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Text Content */}
          <motion.div className="lg:col-span-7 space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-200 flex items-center gap-2">
              Engineering interfaces that deliver impact
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-lg">
              I am a Frontend Developer with over 4 years of experience building and optimizing web applications. 
              My core expertise lies in designing robust frontend architectures, crafting high-performance dashboards, 
              and automating sophisticated financial and billing workflows.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg">
              Throughout my career at high-growth companies like Zenstatement, Astuto.ai, and ShopUp, I have led 
              the development of internal finance platforms, cash reconciliation modules, and multi-cloud analyser dashboards. 
              I specialize in creating extensible React and Next.js applications that are maintainable, 
              type-safe, and highly responsive.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg flex items-center gap-2">
              Driven by clean code, developer experience, and a deep appreciation for UI details. 
              <Heart className="h-4.5 w-4.5 text-rose-500 fill-rose-500 animate-pulse" />
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              <div>
                <span className="block text-3xl font-extrabold text-cyan-400">4+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years Exp</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-emerald-400">10+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Products Built</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-cyan-400">100%</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Typed Code</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code Mock IDE */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <div className="w-full glass-panel rounded-xl overflow-hidden shadow-2xl relative">
              {/* IDE Header */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5" />
                  developer.json
                </span>
                <div className="w-8" /> {/* Spacer */}
              </div>

              {/* IDE Content */}
              <div className="p-6 font-mono text-sm bg-slate-950/80 overflow-x-auto text-slate-300 whitespace-pre">
                <span className="text-slate-500">// Professional Metadata</span>
                <pre className="mt-2 text-emerald-400 font-mono">
                  <code>{codeString}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
