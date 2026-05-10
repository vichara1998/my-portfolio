import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { EXPERIENCE } from '../data'

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div
          className="relative w-4 h-4 rounded-full border-2 border-navy-900 mt-1 flex-shrink-0 shadow-lg"
          style={{ background: exp.color, boxShadow: `0 0 16px ${exp.color}60` }}
        />
        {/* Line */}
        {index < EXPERIENCE.length - 1 && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-white/15 to-transparent min-h-8" />
        )}
      </div>

      {/* Card */}
      <div className="gradient-border group p-[1px] rounded-2xl mb-8 flex-1">
        <div className="h-full rounded-2xl bg-navy-900 hover:bg-navy-800/80 p-6 transition-colors duration-300">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-electric-400 transition-colors">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold" style={{ color: exp.color }}>{exp.company}</span>
                <ExternalLink size={12} className="text-slate-600" />
              </div>
            </div>
            <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-slate-400 flex-shrink-0">
              {exp.type === 'internship' ? '🏢 Internship' : '🔬 Research'}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{exp.description}</p>

          {/* Highlights */}
          <ul className="space-y-2">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: exp.color }} />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/2 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-electric-400 font-mono text-sm font-medium">04.</span>
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">Experience</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <h2 className="section-title text-white">
            Where I've <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
