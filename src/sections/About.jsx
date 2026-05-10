import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Calendar,
  Coffee,
  Code2,
  Zap,
  Phone,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PERSONAL } from "../data";

const FUN_FACTS = [
  { icon: Coffee, label: "Cups of coffee/day", value: "3+" },
  { icon: Code2, label: "Projects completed", value: "3+" },
  { icon: Zap, label: "Technologies learned", value: "10+" },
  { icon: Calendar, label: "Years coding", value: "3+" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-500/2 to-transparent pointer-events-none" />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-electric-400 font-mono text-sm font-medium">
              01.
            </span>
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              About Me
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <h2 className="section-title text-white mb-12">
            The person behind the <span className="gradient-text">code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left- Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Hey! I'm{" "}
              <span className="text-white font-semibold">{PERSONAL.name}</span>,
              a Software Engineering undergraduate at The Open University of Sri
              Lanka. My journey into coding began with curiosity — and quickly
              turned into a passion for building things that actually work and
              help people.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I've built <span className="text-white">Android apps</span> with
              Java and SQLite, developed full-stack web platforms using PHP and
              MySQL, and even experimented with{" "}
              <span className="text-white">IoT systems</span> with Arduino. I've
              gained theoretical grounding in{" "}
              <span className="text-white">Spring Boot</span> and RESTful APIs
              through coursework and self-study.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm a fast learner who thrives in collaborative environments. I
              believe great software comes from understanding the problem
              deeply, writing clean code, and never stopping to learn. I'm
              actively looking for an{" "}
              <span className="text-electric-400 font-medium">
                internship opportunity
              </span>{" "}
              where I can contribute meaningfully from day one.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: MapPin, text: PERSONAL.location },
                { icon: Mail, text: PERSONAL.email },
                { icon: Phone, text: PERSONAL.phone },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 border border-white/10 rounded-xl px-4 py-2"
                >
                  <Icon size={14} className="text-electric-400" />
                  {text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right- Fun stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {FUN_FACTS.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="gradient-border group p-[1px] rounded-2xl"
              >
                <div className="h-full bg-navy-800/80 hover:bg-navy-800 rounded-2xl p-6 flex flex-col gap-3 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center group-hover:bg-electric-500/20 transition-colors">
                    <Icon size={20} className="text-electric-400" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-white">
                      {value}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
