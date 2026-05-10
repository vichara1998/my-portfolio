import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS, SOFT_SKILLS } from '../data'

const COLOR_MAP = {
  electric: {
    bg: 'bg-electric-500/10',
    border: 'border-electric-500/20',
    text: 'text-electric-400',
    fill: 'bg-gradient-to-r from-electric-400 to-electric-500',
    glow: 'shadow-electric-500/30',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
    fill: 'bg-gradient-to-r from-violet-400 to-violet-500',
    glow: 'shadow-violet-500/30',
  },
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    text: 'text-teal-400',
    fill: 'bg-gradient-to-r from-teal-400 to-teal-500',
    glow: 'shadow-teal-500/30',
  },
}

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const c = COLOR_MAP[color]

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {name}
        </span>

        <span
          className={`text-xs font-mono ${c.text} opacity-0 group-hover:opacity-100 transition-opacity`}
        >
          {level}%
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1,
            delay: delay + 0.1,
            ease: 'easeOut',
          }}
          className={`h-full rounded-full ${c.fill} shadow-sm`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [activeTab, setActiveTab] = useState(null)

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-electric-400 font-mono text-sm font-medium">
              02.
            </span>

            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              Tech Stack
            </span>

            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <h2 className="section-title text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl">
            A practical toolkit built through university coursework,
            personal projects, and a genuine love for learning new
            technologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((category, catIdx) => {
            const c = COLOR_MAP[category.color]
            const isActive = activeTab === catIdx

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.12,
                }}
                onClick={() =>
                  setActiveTab(isActive ? null : catIdx)
                }
                className="gradient-border relative p-[1px] rounded-2xl cursor-pointer"
              >
                <div
                  className={`h-full rounded-2xl p-6 transition-all duration-300 ${
                    isActive
                      ? 'bg-navy-800'
                      : 'bg-navy-900 hover:bg-navy-800/70'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-xl`}
                    >
                      {category.icon}
                    </div>

                    <div>
                      <h3
                        className={`font-display font-semibold ${c.text}`}
                      >
                        {category.category}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {category.items.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skill Bars */}
                  <div className="space-y-4">
                    {category.items.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={category.color}
                        delay={catIdx * 0.1 + i * 0.06}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-2 justify-center"
        >
          {[
            'Arduino',
            'REST APIs',
            'OOP',
            'Google Maps API',
            'SQLite',
            'Android SDK',
            'Bootstrap',
            'Postman',
            'IntelliJ IDEA',
            'VS Code',
            'GitHub',
            'Agile',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-white/5 border border-white/10 hover:border-electric-500/30 hover:text-electric-400 hover:bg-electric-500/5 transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8"
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-4 text-center">
            Soft Skills
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl text-sm font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 hover:bg-teal-500/20 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}