import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Landmark, ReceiptText, BarChart3, ShieldCheck } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const projects: Project[] = [
    {
      title: "Cash Reconciliation Tool",
      description: "A high-performance internal finance tool enabling accurate revenue reconciliation across multiple Business Units, with seamless data synchronization and real-time amount updates.",
      tech: ["Next.js", "TypeScript", "Redux", "REST APIs", "Jest"],
      githubUrl: "https://github.com/saisharath04",
      icon: <Landmark className="h-6 w-6 text-cyan-400" />
    },
    {
      title: "Billing Tool",
      description: "A robust billing and invoicing application designed with React Hook Forms and Zod schema validation to ensure absolute financial accuracy, error handling, and clean modular code.",
      tech: ["React", "TypeScript", "React Hook Forms", "Zod", "Tailwind CSS"],
      githubUrl: "https://github.com/saisharath04",
      icon: <ReceiptText className="h-6 w-6 text-emerald-400" />
    },
    {
      title: "Astuto Cost Centres & Dashboards",
      description: "An analytics panel for a multi-cloud cost analyser platform, featuring interactive data visualizations and customized charts built with React Highcharts to profile cloud spends.",
      tech: ["React", "TypeScript", "Zustand", "React Query", "Highcharts", "Tailwind CSS"],
      githubUrl: "https://github.com/saisharath04",
      icon: <BarChart3 className="h-6 w-6 text-cyan-400" />
    },
    {
      title: "Unicorn Panel (DMS)",
      description: "Distribution Management System panel built to manage deposits and reconciliation workflows, integrating direct feedback from product managers and reducing operation times.",
      tech: ["React", "TypeScript", "Context API", "CSS Modules"],
      githubUrl: "https://github.com/saisharath04",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: shouldReduceMotion ? 0 : -6 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col h-full hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/5 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5 shadow-inner">
                  {project.icon}
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white bg-slate-950/40 hover:bg-slate-950 rounded-lg border border-slate-800 transition-colors"
                    aria-label={`View code for ${project.title} on GitHub`}
                  >
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-950/40 hover:bg-slate-950 rounded-lg border border-slate-800 transition-colors"
                      aria-label={`Visit live demo for ${project.title}`}
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-100 mb-2.5 hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-350 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/60">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 text-[11px] font-semibold bg-slate-950/60 text-slate-400 border border-slate-800/80 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
