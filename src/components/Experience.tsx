import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const experiences: ExperienceItem[] = [
    {
      company: "Zenstatement",
      role: "Software Development Engineer (SDE)",
      duration: "May 2026 – Present",
      location: "Bangalore, India",
      bullets: [
        "Developed Cash Reconciliation and Billing Tools using React, TypeScript, React Hook Forms, and Zod schema for robust form validation and financial accuracy.",
        "Integrated MCP servers for Figma, GitHub, and Chrome Browser enabling seamless design-to-code workflows.",
        "Implemented LLM-friendly code with comprehensive Markdown documentation and clean architecture patterns."
      ],
      skills: ["React", "TypeScript", "React Hook Forms", "Zod", "MCP Servers", "Figma API", "Clean Architecture"]
    },
    {
      company: "Astuto.ai",
      role: "Software Development Engineer (SDE)",
      duration: "Oct 2024 – Apr 2026",
      location: "Bangalore, India (Remote)",
      bullets: [
        "Built and enhanced Workflows, Astuto Cost Centres, and Responsive Custom Dashboards for a Multi-cloud cost analyser platform.",
        "Designed and developed modular frontend components leveraging React, Next.js, TypeScript, and Tailwind CSS.",
        "Used React Context and Zustand for centralized frontend state management and predictable data flow.",
        "Integrated backend APIs using React Query, leveraging its caching, background refetching, and performance optimization capabilities.",
        "Designed and implemented interactive data visualizations and charts using React Highcharts.",
        "Optimized UI performance through efficient rendering, profiling, and debugging.",
        "Implemented complex form handling using Formik with robust validation logic and scalable form state management."
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "React Highcharts", "Formik"]
    },
    {
      company: "ShopUp",
      role: "Software Development Engineer (SDE)",
      duration: "Jul 2022 – Sep 2024",
      location: "Bangalore, India",
      bullets: [
        "Led the development of internal finance products, including CRT (Cash Reconciliation Tool), Budget, Crout, and Cashbook.",
        "Built a CRT using Next.js and TypeScript, enabling accurate revenue reconciliation across Business Units.",
        "Implemented seamless data synchronization between CRT and Cashbook for real-time amount updates.",
        "Utilized Redux for state management and integrated REST APIs for backend communication.",
        "Optimized and maintained the internal UI library for consistent and responsive UI across products.",
        "Wrote unit tests using Jest library, significantly reducing post-deployment defects."
      ],
      skills: ["Next.js", "TypeScript", "Redux", "REST APIs", "Jest", "UI Library Development"]
    },
    {
      company: "ShopUp",
      role: "Software Development Engineer Intern",
      duration: "Feb 2022 – Jun 2022",
      location: "Bangalore, India",
      bullets: [
        "Gained valuable experience working on the Unicorn Panel (DMS).",
        "Developed Unicorn panel using React and TypeScript, ensuring seamless integration of requirements from product managers.",
        "Contributed to the development of new reconciliation and deposit modules.",
        "Added unit test cases for already existing features and bug fixes."
      ],
      skills: ["React", "TypeScript", "Reconciliation Modules", "Unit Testing", "DMS"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <motion.div 
          className="relative border-l-2 border-slate-800/80 ml-4 md:ml-32 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Icon / Node */}
              <div className="absolute -left-[17px] top-1.5 bg-slate-900 border-2 border-slate-700/80 group-hover:border-cyan-400 p-2 rounded-full transition-colors duration-300 z-10">
                <Briefcase className="h-4.5 w-4.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/[0.02] rounded-xl transition-all duration-500 pointer-events-none -z-10" />

              {/* Time Label on Desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28 text-sm font-semibold text-slate-400">
                {exp.duration.split(' – ')[0]} <br />
                <span className="text-xs text-slate-500 font-normal">to {exp.duration.split(' – ')[1] || 'Present'}</span>
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg border border-slate-800 hover:border-slate-700/80">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-emerald-400">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1.5 md:hidden bg-slate-900/60 px-2.5 py-1 rounded-full border border-slate-800">
                      <Calendar className="h-3.5 w-3.5 text-cyan-500" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded-full border border-slate-800">
                      <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2.5 py-1 text-[11px] font-semibold bg-slate-950/60 text-slate-400 border border-slate-800/80 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
