import { motion } from 'framer-motion'
import { Heart, Github } from 'lucide-react'
import { PERSONAL } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-1.5">
            <span>Designed & built by</span>
            <span className="font-semibold text-slate-400">{PERSONAL.name}</span>
            
            <Heart size={13} className="text-red-500 fill-current animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span>Built with React + Tailwind CSS + Framer Motion</span>
          </div>

          <a
            href="https://github.com/alexchen/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-electric-400 transition-colors"
          >
            <Github size={14} />
            View source
          </a>
        </div>
      </div>
    </footer>
  )
}
