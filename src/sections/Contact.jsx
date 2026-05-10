import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader,
  Facebook,
} from "lucide-react";
import { PERSONAL } from "../data";

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: PERSONAL.socials.github,
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: PERSONAL.socials.linkedin,
    color: "hover:text-blue-400",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: PERSONAL.socials.facebook,
    color: "hover:text-sky-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${PERSONAL.email}`,
    color: "hover:text-electric-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mvzlvrrd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      // For demo purposes
      // setStatus("success");
      // setForm({ name: "", email: "", message: "" });
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/2 to-transparent pointer-events-none" />
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
            <span className="text-electric-400 font-mono text-sm font-medium">
              06.
            </span>
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              Contact
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <h2 className="section-title text-white">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Whether you have an opportunity, a project idea, or just want to
            talk code — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {/* Availability status */}
            <div className="gradient-border p-[1px] rounded-2xl">
              <div className="rounded-2xl bg-navy-900 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_2px_rgba(45,212,191,0.5)] animate-pulse" />
                  <span className="text-sm font-medium text-teal-300">
                    Currently available
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {PERSONAL.availability}
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="gradient-border p-[1px] rounded-2xl">
              <div className="rounded-2xl bg-navy-900 p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Mail size={16} className="text-electric-400" />
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="hover:text-electric-400 transition-colors"
                  >
                    {PERSONAL.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <MapPin size={16} className="text-electric-400" />
                  <span>{PERSONAL.location}</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="gradient-border p-[1px] rounded-2xl">
              <div className="rounded-2xl bg-navy-900 p-6">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-4">
                  Find me online
                </p>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={label}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-slate-500 ${color} bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 gradient-border p-[1px] rounded-2xl"
          >
            <div className="h-full rounded-2xl bg-navy-900 p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "name",
                      label: "Your Name",
                      placeholder: "Enter Your Name",
                      type: "text",
                    },
                    {
                      name: "email",
                      label: "Email Address",
                      placeholder: "Enter Your Email ",
                      type: "email",
                    },
                  ].map(({ name, label, placeholder, type }) => (
                    <div key={name}>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-electric-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:bg-electric-500/5"
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 focus:border-electric-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:bg-electric-500/5 resize-none"
                  />
                </div>

                {/* Status message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-xl px-4 py-3"
                  >
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Try emailing me directly.
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={
                    status !== "loading" ? { scale: 1.02, y: -1 } : {}
                  }
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-electric-500 to-violet-500 text-white font-semibold shadow-lg shadow-electric-500/20 hover:shadow-electric-500/35 transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
