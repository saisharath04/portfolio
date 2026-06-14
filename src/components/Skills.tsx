import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Library, Wrench } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const skillGroups: SkillGroup[] = [
    {
      category: "Languages",
      icon: <Code2 className="h-6 w-6 text-cyan-400" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
      color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 text-cyan-400"
    },
    {
      category: "Frameworks & Libraries",
      icon: <Library className="h-6 w-6 text-emerald-400" />,
      skills: [
        "React", "Next.js", "Redux", "Zustand", "React Query", 
        "Formik", "React Hook Forms", "Zod", "Tailwind CSS", 
        "React Highcharts", "Framer Motion"
      ],
      color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 text-emerald-400"
    },
    {
      category: "Tools & Ecosystem",
      icon: <Wrench className="h-6 w-6 text-cyan-400" />,
      skills: ["Git", "JIRA", "Figma", "MCP Servers"],
      color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 text-cyan-400"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/60 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={cardVariants}
              className={`glass-panel p-8 rounded-2xl flex flex-col h-full bg-gradient-to-br ${group.color} transition-all hover:scale-[1.02] hover:shadow-xl`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{group.category}</h3>
              </div>

              {/* Skills Badge Grid */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {group.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={badgeVariants}
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-slate-950/50 border border-slate-800 text-slate-300 rounded-full transition-all hover:border-cyan-400/50 hover:text-white cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
