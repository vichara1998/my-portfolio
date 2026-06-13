import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, ImageOff, Calendar, CheckCircle2 } from 'lucide-react'


export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-navy-900 border border-white/10 shadow-2xl"
        >
          {/* Header / hero band */}
          <div
            className="relative h-48 md:h-56 flex items-center justify-center overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${project.color}25, ${project.color}05)` }}
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div
              className="absolute w-48 h-48 rounded-full blur-3xl opacity-30"
              style={{ background: project.color }}
            />
            <div className="relative text-7xl filter drop-shadow-lg">{project.emoji}</div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center bg-navy-950/60 hover:bg-navy-950/90 border border-white/10 text-slate-300 hover:text-white transition-all"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Year badge */}
            {project.year && (
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-950/60 border border-white/10 text-xs font-mono text-slate-300">
                <Calendar size={12} />
                {project.year}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              {project.title}
            </h3>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono border"
                  style={{
                    color: project.color,
                    borderColor: project.color + '40',
                    background: project.color + '10',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Full description */}
            <p className="text-slate-400 leading-relaxed mb-6">
              {project.longDescription || project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Key Highlights</h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: project.color }} />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Screenshots */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Screenshots</h4>
              {project.images && project.images.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.images.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-navy-800">
                      <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-white/10 bg-white/5 p-8 flex flex-col items-center justify-center text-center gap-2">
                  <ImageOff size={28} className="text-slate-600" />
                  <p className="text-sm text-slate-500">Screenshots coming soon</p>
                  <p className="text-xs text-slate-600">Check the GitHub repo for live previews and demo media</p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all"
              >
                <Github size={16} />
                View Source Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{ background: project.color + '20', borderColor: project.color + '50', border: '1px solid', color: project.color }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}