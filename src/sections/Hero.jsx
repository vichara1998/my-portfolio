import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Facebook,
  Sparkles,
  Download,
  Eye,
} from "lucide-react";
import { PERSONAL } from "../data";

const TYPED_WORDS = [
  "Java Developer",
  "Android App Builder",
  "Problem Solver",
  "Quick Learner",
  "BSE @ OUSL Sri Lanka",
];

function TypedText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[index];
    const speed = deleting ? 40 : 80;
    const pause = deleting ? 0 : 1800;

    if (!deleting && displayed === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % TYPED_WORDS.length);
      return;
    }

    const t = setTimeout(() => {
      setDisplayed(
        deleting ? displayed.slice(0, -1) : word.slice(0, displayed.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, index]);

  return (
    <span className="text-electric-400 font-mono text-lg md:text-xl">
      {displayed}
      <span className="cursor-blink text-electric-400">|</span>
    </span>
  );
}

function Avatar() {
  const initials = PERSONAL.initials;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative flex-shrink-0"
    >
      {/* Outer glow ring */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-electric-400/20 via-violet-500/10 to-teal-400/20 blur-2xl animate-pulse-slow" />

      {/* Rotating gradient border */}
      <div className="relative w-60 h-60 md:w-72 md:h-72 float-anim">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric-400 via-violet-500 to-teal-400 animate-spin-slow opacity-70 blur-[2px]" />
        <div className="absolute inset-[3px] rounded-3xl bg-navy-900 overflow-hidden">
          {PERSONAL.photo ? (
            <img
              src={PERSONAL.photo}
              alt={PERSONAL.name}
              className="w-full h-55 object-cover transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
              <span className="font-display text-7xl font-bold gradient-text">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-2 -right-2 glass bg-navy-800/90 border border-teal-500/30 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-xl"
      >
        <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_2px_rgba(45,212,191,0.6)] animate-pulse" />
        <span className="text-xs font-medium text-teal-300 whitespace-nowrap">
          Open to work
        </span>
      </motion.div>

      {/* Floating tech badges */}
      {[
        { label: "Java", pos: "top-0 -left-10", delay: 1.0 },
        { label: "Android", pos: "top-16 -right-12", delay: 1.15 },
        { label: "MySQL", pos: "bottom-16 -left-12", delay: 1.3 },
      ].map(({ label, pos, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, type: "spring", stiffness: 200 }}
          className={`absolute ${pos} glass bg-navy-800/90 border border-white/10 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-300 shadow-lg hidden md:flex items-center gap-1.5`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric-400" />
          {label}
        </motion.div>
      ))}
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container w-full py-32 md:py-40">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl"
          >
            {/* Pre-headline label */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              Available for internships
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-4"
            >
              {PERSONAL.tagline.split("\n").map((line, i) => (
                <span
                  key={i}
                  className={i === 1 ? "gradient-text block" : "block"}
                >
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Typed text */}
            <motion.div variants={itemVariants} className="mb-6 h-8">
              <TypedText />
            </motion.div>

            {/* Bio blurb */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              BSE (Hons) undergraduate at{" "}
              <span className="text-white font-medium">
                The Open University of Sri Lanka
              </span>{" "}
              — passionate about Java, Android development, and building
              real-world software solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-electric-500 to-violet-500 text-white font-semibold shadow-xl shadow-electric-500/25 hover:shadow-electric-500/40 transition-shadow duration-300"
              >
                <Eye size={18} />
                View Projects
              </motion.button>

              <motion.a
                href={PERSONAL.resumeUrl}
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/15 hover:border-white/30 text-white font-semibold glass bg-white/5 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-slate-500 font-medium">
                Find me on
              </span>
              <div className="flex items-center gap-3">
                {[
                  {
                    icon: Github,
                    href: PERSONAL.socials.github,
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: PERSONAL.socials.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: Facebook,
                    href: PERSONAL.socials.facebook,
                    label: "Facebook",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-electric-400 bg-white/5 hover:bg-electric-500/10 border border-white/10 hover:border-electric-500/30 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <Avatar />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
