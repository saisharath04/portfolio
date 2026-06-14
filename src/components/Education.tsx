import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-950/40 relative">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 relative group overflow-hidden bg-gradient-to-br from-cyan-500/[0.02] to-emerald-500/[0.01]"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            {/* Degree and Institution Details */}
            <div className="flex items-start gap-5">
              <div className="p-4 bg-slate-950/70 rounded-2xl border border-white/5 shadow-inner text-cyan-400">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-2">
                  First Class with Distinction
                </span>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-slate-300 font-semibold text-lg">
                  Computer Science & Engineering
                </p>
                <p className="text-emerald-400 font-medium">
                  Sastra University, Thanjavur
                </p>
              </div>
            </div>

            {/* GPA and Graduation Timeline */}
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80 md:bg-transparent md:border-none md:p-0">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                <Calendar className="h-4.5 w-4.5 text-cyan-500" />
                <span>Class of 2022</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
                <Award className="h-4.5 w-4.5" />
                <span className="font-bold text-sm">CGPA: 8.56 / 10</span>
              </div>
            </div>
          </div>

          {/* Key Coursework or Modules */}
          <div className="mt-8 pt-6 border-t border-slate-800/60 relative z-10">
            <h4 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-cyan-400" />
              Relevant Coursework & Core Subjects
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Data Structures & Algorithms", 
                "Object-Oriented Programming", 
                "Database Management Systems", 
                "Web Technologies", 
                "Software Engineering", 
                "Computer Networks"
              ].map((course, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 text-xs bg-slate-900/60 text-slate-400 border border-slate-800/80 rounded-lg"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
