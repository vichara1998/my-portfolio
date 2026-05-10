import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import { PROJECTS } from '../data'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group gradient-border relative p-[1px] rounded-2xl card-hover"
    >
      <div className="h-full rounded-2xl bg-navy-900 hover:bg-navy-800/80 overflow-hidden transition-colors duration-300">
        {/* Project visual header */}
        <div
          className="relative h-44 overflow-hidden flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
        >
          {/* Abstract background pattern */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Glowing orb */}
          <div
            className="absolute w-32 h-32 rounded-full blur-3xl opacity-30"
            style={{ background: project.color }}
          />

          {/* Emoji icon */}
          <div className="relative text-6xl filter drop-shadow-lg">{project.emoji}</div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-all"
            >
              <Github size={15} />
              Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{ background: project.color + '30', borderColor: project.color + '60', border: '1px solid', color: project.color }}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
              <Star size={11} fill="currentColor" />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400 bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="px-6 pb-5 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-electric-400 transition-colors"
          >
            <Github size={13} />
            View Source
          </a>
          {project.demo && (
            <>
              <span className="text-slate-700">·</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-teal-400 transition-colors"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
            <span className="text-electric-400 font-mono text-sm font-medium">03.</span>
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">Projects</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <h2 className="section-title text-white">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            A selection of projects ranging from production systems to weekend experiments. Each one taught me something new.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/alexchen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-electric-400 text-sm font-medium transition-colors group"
          >
            <Github size={16} />
            See more on GitHub
            <ExternalLink size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
