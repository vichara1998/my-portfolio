import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";
import { EDUCATION } from "../data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-electric-400 font-mono text-sm font-medium">
              05.
            </span>
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              Education
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <h2 className="section-title text-white">
            Academic <span className="gradient-text">foundation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Main edu card — wider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 gradient-border p-[1px] rounded-2xl"
          >
            <div className="h-full rounded-2xl bg-navy-900 p-8">
              {/* Logo area */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 border border-yellow-500/20 flex items-center justify-center text-3xl flex-shrink-0">
                  IMG
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {EDUCATION.school}
                  </h3>
                  <p className="text-slate-400">{EDUCATION.degree}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                    <span>Graduating {EDUCATION.graduation}</span>
                    <span>·</span>
                    <span className="text-yellow-400 font-medium">
                      GPA: {EDUCATION.gpa}
                    </span>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-slate-400">
                  <BookOpen size={15} className="text-electric-400" />
                  Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.relevant.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-electric-500/30 hover:text-electric-400 transition-all duration-200 cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activities / honors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {/* Activities */}
            <div className="gradient-border p-[1px] rounded-2xl flex-1">
              <div className="h-full rounded-2xl bg-navy-900 p-6">
                <div className="flex items-center gap-2 mb-5 text-sm font-medium text-slate-400">
                  <Users size={15} className="text-violet-400" />
                  Activities & Clubs
                </div>
                <ul className="space-y-3">
                  {EDUCATION.activities.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-violet-400 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Honors */}
            <div className="gradient-border p-[1px] rounded-2xl">
              <div className="rounded-2xl bg-navy-900 p-6">
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-slate-400">
                  <Award size={15} className="text-yellow-400" />
                  Honors & Awards
                </div>
                <ul className="space-y-3">
                  {[
                    // All semesters",
                  ].map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-yellow-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
